import React, { forwardRef, useMemo, useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './VariableProximity.css';

interface VariableProximityProps {
  label: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  containerRef?: React.RefObject<HTMLElement>;
  radius?: number;
  falloff?: 'linear' | 'exponential' | 'gaussian';
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  /**
   * mode: 'font' - applies fontVariationSettings (requires variable font)
   * 'transform' - applies transform/letterSpacing for non-variable fonts (e.g., Bebas Neue)
   */
  mode?: 'font' | 'transform';
  /** multiplier to increase/decrease visual intensity in transform mode (1 = default) */
  transformIntensity?: number;
}

function useAnimationFrame(callback: () => void) {
  useEffect(() => {
    let frameId: number;
    const loop = () => {
      callback();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [callback]);
}

function useMousePositionRef(containerRef?: React.RefObject<HTMLElement>) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = (ev: MouseEvent) => updatePosition(ev.clientX, ev.clientY);
    const handleTouchMove = (ev: TouchEvent) => {
      const touch = ev.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 50,
    falloff = 'linear',
    className = '',
    onClick,
    style,
    mode = 'font',
    transformIntensity = 1,
    ...restProps
  } = props;

  // 1. Initialize State Hook
  const [isTouchOrSmall, setIsTouchOrSmall] = useState(false);

  // 2. Initialize Effect Hook
  useEffect(() => {
    const update = () => {
      const coarse = typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(pointer:coarse)').matches : false;
      const small = typeof window !== 'undefined' && window.innerWidth < 768;
      setIsTouchOrSmall(coarse || small);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // 3. Initialize Ref Hooks (ALWAYS call these, do not return early before them)
  const letterRefs = useRef<Array<HTMLElement | null>>([]);
  const interpolatedSettingsRef = useRef<string[]>([]);
  const lastPositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  // 4. Initialize Custom Hooks
  const mousePositionRef = useMousePositionRef(containerRef);

  // 5. Initialize Memo Hook
  const parsedSettings = useMemo(() => {
    const parseSettings = (settingsStr: string) =>
      new Map(
        settingsStr
          .split(',')
          .map((s) => s.trim())
          .map((s) => {
            const [name, value] = s.split(' ');
            return [name.replace(/['"]/g, ''), parseFloat(value)];
          })
      );

    const fromSettings = parseSettings(fromFontVariationSettings);
    const toSettings = parseSettings(toFontVariationSettings);

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue,
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  // Determine modes (variables used inside the animation loop)
  const effectiveMode = isTouchOrSmall ? 'transform' : mode;
  const effectiveTransformIntensity = isTouchOrSmall ? transformIntensity * 0.6 : transformIntensity;

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) =>
    Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  const calculateFalloff = (distance: number) => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
    switch (falloff) {
      case 'exponential':
        return norm ** 2;
      case 'gaussian':
        return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
      case 'linear':
      default:
        return norm;
    }
  };

  // 6. Initialize Animation Hook
  useAnimationFrame(() => {
    // Optimization: Skip all animation math if we are on mobile/touch
    if (isTouchOrSmall) return;
    
    if (!containerRef?.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const { x, y } = mousePositionRef.current;
    if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) {
      return;
    }
    lastPositionRef.current = { x, y };

    letterRefs.current.forEach((letterRef, index) => {
      if (!letterRef) return;

      const rect = letterRef.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
      const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

      const distance = calculateDistance(
        mousePositionRef.current.x,
        mousePositionRef.current.y,
        letterCenterX,
        letterCenterY
      );

      const falloffValue = calculateFalloff(distance);

      if (effectiveMode === 'font') {
        if (distance >= radius) {
          (letterRef as HTMLElement).style.fontVariationSettings = fromFontVariationSettings;
        } else {
          const newSettings = parsedSettings
            .map(({ axis, fromValue, toValue }) => {
              const interpolatedValue = fromValue + (toValue - fromValue) * falloffValue;
              return `'${axis}' ${interpolatedValue}`;
            })
            .join(', ');

          interpolatedSettingsRef.current[index] = newSettings;
          (letterRef as HTMLElement).style.fontVariationSettings = newSettings;
        }
      } else {
        // transform mode
        const baseMaxScale = 1.14; 
        const maxScale = 1 + (baseMaxScale - 1) * effectiveTransformIntensity;
        const scale = 1 + (maxScale - 1) * falloffValue;
        const translateY = -6 * falloffValue * effectiveTransformIntensity; 
        const letterSpacing = `${0.04 * falloffValue * effectiveTransformIntensity}em`;
        const transform = `translateY(${translateY}px) scale(${scale})`;
        (letterRef as HTMLElement).style.transform = transform;
        (letterRef as HTMLElement).style.letterSpacing = letterSpacing;
        (letterRef as HTMLElement).style.textShadow = falloffValue ? `0px ${1 + falloffValue * 4 * effectiveTransformIntensity}px ${2 + falloffValue * 6 * effectiveTransformIntensity}px rgba(0,0,0,${0.08 * falloffValue * effectiveTransformIntensity})` : '';
        (letterRef as HTMLElement).style.transition = 'transform 0.06s linear, letter-spacing 0.06s linear, text-shadow 0.06s linear';
      }
    });
  });

  const words = label.split(' ');
  let letterIndex = 0;

  // 7. Conditional Return: NOW it is safe to return different JSX because all hooks are passed
  if (isTouchOrSmall) {
    return (
      <span
        ref={ref}
        className={`${className} variable-proximity`}
        onClick={onClick}
        style={{ display: 'inline', ...style }}
        {...restProps}
      >
        {label}
      </span>
    );
  }

  // Desktop Render
  return (
    <span
      ref={ref}
      className={`${className} variable-proximity`}
      onClick={onClick}
      style={{ display: 'inline', ...style }}
      {...restProps}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((letter) => {
            const currentLetterIndex = letterIndex++;
            return (
              <motion.span
                key={currentLetterIndex}
                ref={(el) => {
                  letterRefs.current[currentLetterIndex] = el as HTMLElement | null;
                }}
                style={{
                  display: 'inline-block',
                  fontVariationSettings: interpolatedSettingsRef.current[currentLetterIndex],
                }}
                aria-hidden="true"
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && <span style={{ display: 'inline-block' }}>&nbsp;</span>}
        </span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
});

VariableProximity.displayName = 'VariableProximity';
export default VariableProximity;