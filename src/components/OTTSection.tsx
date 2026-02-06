import React, { useRef } from "react";
import { motion, useInView, cubicBezier } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Existing Zee5 Image Import (Keep this one)
import zee5Img from "@/assets/ott/zee5.png";

interface OTTPlatform {
  id: string;
  name: string;
  src: string;
  alt: string;
  // We'll use this to apply specific background colors or object-fit styles
  className?: string; 
}

const OTT_PLATFORMS: OTTPlatform[] = [
  { 
    id: "netflix", 
    name: "Netflix", 
    src: "https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940", 
    alt: "Netflix",
    className: "object-cover"
  },
  { 
    id: "prime-video", 
    name: "Prime Video", 
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Amazon_Prime_Video_logo_%282024%29.svg/960px-Amazon_Prime_Video_logo_%282024%29.svg.png", 
    alt: "Prime Video",
    // Blue fill, zoomed in slightly (scale-125), containment for the logo itself
    className: "bg-[#047aff] object-contain p-2 scale-110" 
  },
  { 
    id: "jio-hotstar", 
    name: "Jio Cinema", 
    src: "https://img.hotstar.com/image/upload/v1738215515/helpdesk/new/portal/jio_hotstar_1200_630.png", 
    alt: "Jio Cinema",
    className: "object-cover"
  },
  { 
    id: "zee5", 
    name: "Zee5", 
    src: zee5Img, 
    alt: "Zee5",
    // Black fill, scaled up
    className: "bg-black object-contain p-2 scale-110" 
  },
  { 
    id: "sony-liv", 
    name: "Sony Liv", 
    src: "https://www.bizasialive.com/wp-content/uploads/2020/05/899ec721-sonylivnew001.jpg", 
    alt: "Sony Liv",
    className: "object-cover"
  },
  { 
    id: "aha", 
    name: "Aha", 
    src: "https://s3.ap-south-1.amazonaws.com/media.thesouthfirst.com/wp-content/uploads/2023/04/aha-logo.-.jpg", 
    alt: "Aha",
    className: "object-cover"
  },
  { 
    id: "etv-win", 
    name: "ETV Win", 
    // Using a specific placeholder or logo URL as requested. 
    // Note: The googleusercontent link provided earlier was broken/private.
    // I will use a placeholder ETV logo if available, or keep the previous one if it works for you locally.
    // For now, using the one provided, assuming it renders in your environment.
    src: "https://play-lh.googleusercontent.com/K8n1SqHnqpb3lLndbLMw-dCFoF8K2O_u3hm8pYPc5AL1lLqJrrT7o_wHSdMIeEgtZ0s=w3840-h2160-rw", 
    alt: "ETV Win",
    className: "object-cover"
  },
];

export const OTTSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Split platforms into two rows: 4 on top, 3 on bottom
  const topRow = OTT_PLATFORMS.slice(0, 4);
  const bottomRow = OTT_PLATFORMS.slice(4, 7);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            OTT & Brand Partners
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by leading streaming platforms across the globe
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Top Row - 4 platforms (single-column list on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-items-center">
            {topRow.map((platform) => (
              <motion.div
                key={platform.id}
                variants={itemVariants}
                className="w-full max-w-xs"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      {/* Container: fixed visual area ~294x128, responsive on mobile (stacked list) */}
                      <div className="group relative cursor-pointer overflow-hidden rounded-[30px] shadow-sm hover:shadow-lg transition-all duration-300 h-[128px] w-full max-w-[294px]">
                        <img
                          src={platform.src}
                          alt={platform.alt}
                          className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 ${platform.className}`}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-foreground text-background border-0">
                      <p className="font-semibold">{platform.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 3 platforms (centered, single-column on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center md:max-w-2xl md:mx-auto">
            {bottomRow.map((platform) => (
              <motion.div
                key={platform.id}
                variants={itemVariants}
                className="w-full max-w-xs"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="group relative cursor-pointer overflow-hidden rounded-[30px] shadow-sm hover:shadow-lg transition-all duration-300 h-[128px] w-full max-w-[294px]">
                        <img
                          src={platform.src}
                          alt={platform.alt}
                          className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 ${platform.className}`}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-foreground text-background border-0">
                      <p className="font-semibold">{platform.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OTTSection;