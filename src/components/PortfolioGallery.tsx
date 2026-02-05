import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PortfolioGalleryProps {
  title?: string;
  archiveButton?: {
    text: string;
    href: string;
  };
  images?: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  className?: string;
  maxHeight?: number;
  spacing?: string;
  onImageClick?: (index: number) => void;
  pauseOnHover?: boolean;
  marqueeRepeat?: number;
}

export function PortfolioGallery({
  title = "Browse my library",
  archiveButton,

  images: customImages,
  className = "",
  maxHeight = 200, 
  spacing = "-space-x-16 md:-space-x-20 lg:-space-x-24",
  onImageClick,
  pauseOnHover = true,
  marqueeRepeat = 4
}: PortfolioGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const images = customImages || [];

  return (
    <section
      aria-label={title}
      className={`relative py-10 px-0 sm:px-4 ${className}`}
      id="archives"
    >
      <div className="max-w-[95vw] md:max-w-7xl mx-auto bg-background/30 backdrop-blur-sm rounded-3xl border border-white/10">
        
        {/* Header Section */}
        <div className="relative z-20 text-center pt-16 pb-6 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance font-display">{title}</h2>

          {archiveButton && (
            <Link
              to={archiveButton.href}
              className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors group mb-6"
            >
              <span>{archiveButton.text}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
        <div className="hidden md:block relative h-[600px] w-full -mt-10">
          <div className={`flex ${spacing} pt-32 pb-32 items-center justify-center w-full px-4`}>
            {images.map((image, index) => {
              const totalImages = images.length;
              const middle = Math.floor(totalImages / 2);
              const distanceFromMiddle = Math.abs(index - middle);
              
              const staggerOffset = maxHeight - distanceFromMiddle * 20; 
              const zIndex = totalImages - Math.abs(index - middle);

              const isHovered = hoveredIndex === index;
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

              const yOffset = isHovered ? -120 : isOtherHovered ? 80 : -staggerOffset + 120;
              const rotateVal = (index - middle) * 2;

              return (
                <motion.div
                  key={index}
                  className="group cursor-pointer relative"
                  style={{ zIndex: isHovered ? 100 : zIndex }}
                  initial={{
                    transform: `perspective(1000px) rotateY(-45deg) translateY(300px)`,
                    opacity: 0,
                  }}
                  whileInView={{
                    transform: `perspective(1000px) rotateY(${rotateVal}deg) translateY(${yOffset}px)`,
                    opacity: 1,
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => onImageClick?.(index)}
                >
                  <div
                    className="relative aspect-[2/3] w-32 md:w-44 lg:w-52 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-110 shadow-2xl"
                    style={{
                      boxShadow: isHovered 
                        ? '0 30px 60px -12px rgba(0, 0, 0, 0.5)' 
                        : '0 10px 20px -5px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="block md:hidden relative pb-12 pt-4 px-2">
           <div
            className={cn(
              "group flex overflow-hidden p-2 [--duration:40s] [--gap:0.5rem] [gap:var(--gap)]",
              "flex-row"
            )}
          >
            {Array(marqueeRepeat)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex shrink-0 justify-around [gap:var(--gap)]",
                    "animate-marquee flex-row",
                    {
                      "group-hover:[animation-play-state:paused]": pauseOnHover,
                    }
                  )}
                >
                  {/* UPDATED: Duplicated images array for seamless infinite scrolling */}
                  {[...images, ...images].map((image, index) => (
                    <div
                      key={`${i}-${index}`}
                      className="group cursor-pointer flex-shrink-0"
                      onClick={() => onImageClick?.(index % images.length)}
                    >
                      <motion.div
                        className="relative aspect-[2/3] w-36 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105"
                        style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                        // Optional: Removed initial animation on mobile for stability
                      >
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}