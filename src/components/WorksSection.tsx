"use client";

import React, { useState, useRef, useEffect } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// --- Video Imports ---
import mehaboobVideo from "@/assets/works/Mehaboob X ThumsUp.mp4";
import amarTejuVideo from "@/assets/works/Amar Teju X VaraMahaLakshmi Silks.mp4";
import sreemukhiVideo from "@/assets/works/Sreemukhi X Taj Mahal.mp4";
import telusaVideo from "@/assets/works/Telusa Manasa X Vaarahi Silks.mp4";
import anjaliVideo from "@/assets/works/Anjali Pavan X AIG Hospitals.mp4";
import govindVideo from "@/assets/works/Govind Gopika X Haier.mp4";
import pranaviVideo from "@/assets/works/Pranavi X Oppo.mp4";

// --- Thumbnail Imports ---
import mehaboobThumb from "@/assets/thumbnails/Mehboob X Thumbsup.png";
import amarTejuThumb from "@/assets/thumbnails/Amar Teju X VaraMahaLakshmi Silks.png";
import sreemukhiThumb from "@/assets/thumbnails/Sreemukhi X Taj Mahal.png";
import telusaThumb from "@/assets/thumbnails/Telusa Manasa X Vaarahi Silks.png";
import anjaliThumb from "@/assets/thumbnails/Anjali Pavan X AIG Hospitals.png";
import govindThumb from "@/assets/thumbnails/Govind Gopika X Haier.png";
import pranaviThumb from "@/assets/thumbnails/Pranavi X Oppo.png";


export default function WorksSection() {
  const [playingCardIndex, setPlayingCardIndex] = useState(0);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false); // Default to muted
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Track if the section is in view (threshold 0.4 means 40% needs to be visible)
  const isInView = useInView(sectionRef, { amount: 0.4 });

  // Reset mute state when user scrolls away from the section
  useEffect(() => {
    if (!isInView) {
      setIsAudioEnabled(false);
    }
  }, [isInView]);

  const handleVideoEnd = () => {
    // Determine next index
    const nextIndex = (playingCardIndex + 1) % data.length;
    // Only auto-advance if the user is currently watching (in view)
    if (isInView) {
      setPlayingCardIndex(nextIndex);
    }
  };

  const handleCardClick = (index: number) => {
    setPlayingCardIndex(index);
    // User interaction enables audio
    setIsAudioEnabled(true); 
  };

  const cards = data.map((card, index) => (
    <Card 
      key={card.title} 
      card={card} 
      index={index} 
      isPlaying={index === playingCardIndex && isInView} 
      isMuted={!isAudioEnabled} 
      onToggleMute={() => setIsAudioEnabled(!isAudioEnabled)}
      onVideoEnd={handleVideoEnd}
      onClick={() => handleCardClick(index)} 
    />
  ));

  return (
    <section 
      ref={sectionRef}
      id="works" 
      className="w-full h-full py-20 bg-background text-foreground"
    >
      {/* Updated Header Layout for Mobile Consistency */}
      <div className="max-w-7xl mx-auto px-4 flex items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-tight">
            Our Works
          </h2>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-muted-foreground">
            Featured campaigns and collaborations.
          </p>
        </div>
        
        {/* Link to the full Works page with responsive button sizing */}
        <Link to="/all-works" className="shrink-0">
          <Button 
            variant="outline" 
            className="flex group items-center gap-2 h-8 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm"
          >
            See All Works 
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
      
      <Carousel 
        items={cards} 
        activeIndex={playingCardIndex}
        onIndexChange={setPlayingCardIndex}
      />
    </section>
  );
}

const DummyContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          Campaign Highlights.
        </span>{" "}
        We create movements, not just ads. From conceptualization to execution, every frame tells a story that connects brands with their audience.
      </p>
    </div>
  );
};

const data = [
  {
    category: "Beverage Campaign",
    title: "Mehaboob X ThumsUp",
    src: mehaboobThumb,
    videoSrc: mehaboobVideo,
    content: <DummyContent />,
  },
  {
    category: "Fashion & Lifestyle",
    title: "Amar Teju X VaraMahaLakshmi Silks",
    src: amarTejuThumb,
    videoSrc: amarTejuVideo,
    content: <DummyContent />,
  },
  {
    category: "Travel & Hospitality",
    title: "Sreemukhi X Taj Mahal",
    src: sreemukhiThumb,
    videoSrc: sreemukhiVideo,
    content: <DummyContent />,
  },
  {
    category: "Saree Campaign",
    title: "Telusa Manasa X Vaarahi Silks",
    src: telusaThumb,
    videoSrc: telusaVideo,
    content: <DummyContent />,
  },
  {
    category: "Healthcare Awareness",
    title: "Anjali Pavan X AIG Hospitals",
    src: anjaliThumb,
    videoSrc: anjaliVideo,
    content: <DummyContent />,
  },
  {
    category: "Home Appliances",
    title: "Govind Gopika X Haier",
    src: govindThumb,
    videoSrc: govindVideo,
    content: <DummyContent />,
  },
  {
    category: "Tech Collaboration",
    title: "Pranavi X Oppo",
    src: pranaviThumb,
    videoSrc: pranaviVideo,
    content: <DummyContent />,
  },
];