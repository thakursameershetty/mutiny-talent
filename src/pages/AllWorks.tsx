import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";
import SphereImageGrid, { ImageData } from "@/components/ui/img-sphere";
import { OTTSection } from "@/components/OTTSection";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useInView, motion } from "framer-motion";
import SEO from "@/components/SEO";

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

// --- Top Creators Imports ---
import alekhyaharika from "@/assets/top-creators/alekhyaharika.png";
import anchorravi from "@/assets/top-creators/anchorravi.png";
import anjaliattota from "@/assets/top-creators/anjaliattota.png";
import anushureddy from "@/assets/top-creators/anushureddy.png";
import lasyamanjunath from "@/assets/top-creators/lasyamanjunath.png";
import mehaboobdilse from "@/assets/top-creators/mehaboobdilse.png";
import myvillageshow from "@/assets/top-creators/myvillageshow.anil.png";
import nayani from "@/assets/top-creators/nayani-pavani.png";
import padmasoorya from "@/assets/top-creators/padmasoorya.png";
import pranavi from "@/assets/top-creators/pranavi-manukonda.png";
import sirihanmanth from "@/assets/top-creators/sirihanmanth.png";
import sreemukhi from "@/assets/top-creators/sreemukhi.png";
import tejaswini from "@/assets/top-creators/tejaswini-gowda.png";
import telusamanasaa from "@/assets/top-creators/telusamanasaa.png";

// Placeholder Top Creators Data
const CREATORS_DATA: ImageData[] = [
  { id: "alekhya", src: alekhyaharika, alt: "Alekhya Harika", title: "Alekhya Harika" },
  { id: "anchorravi", src: anchorravi, alt: "Anchor Ravi", title: "Anchor Ravi" },
  { id: "anjali", src: anjaliattota, alt: "Anjali Attota", title: "Anjali Attota" },
  { id: "anushu", src: anushureddy, alt: "Anushu Reddy", title: "Anushu Reddy" },
  { id: "lasya", src: lasyamanjunath, alt: "Lasya Manjunath", title: "Lasya Manjunath" },
  { id: "mehaboob", src: mehaboobdilse, alt: "Mehaboob Dilse", title: "Mehaboob Dilse" },
  { id: "villageshow", src: myvillageshow, alt: "My Village Show Anil", title: "My Village Show Anil" },
  { id: "nayani", src: nayani, alt: "Nayani Pavani", title: "Nayani Pavani" },
  { id: "padma", src: padmasoorya, alt: "Padma Soorya", title: "Padma Soorya" },
  { id: "pranavi", src: pranavi, alt: "Pranavi Manukonda", title: "Pranavi Manukonda" },
  { id: "sirihanmanth", src: sirihanmanth, alt: "Sirihan Manth", title: "Sirihan Manth" },
  { id: "sreemukhi", src: sreemukhi, alt: "Sreemukhi", title: "Sreemukhi" },
  { id: "tejaswini", src: tejaswini, alt: "Tejaswini Gowda", title: "Tejaswini Gowda" },
  { id: "telusa", src: telusamanasaa, alt: "Telusa Manasaa", title: "Telusa Manasaa" },
];

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

export default function AllWorks() {
  const navigate = useNavigate();
  const [playingCardIndex, setPlayingCardIndex] = useState(0);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const isInView = useInView(sectionRef, { amount: 0.4 });

  useEffect(() => {
    if (!isInView) {
      setIsAudioEnabled(false);
    }
  }, [isInView]);

  const handleVideoEnd = () => {
    const nextIndex = (playingCardIndex + 1) % data.length;
    if (isInView) {
      setPlayingCardIndex(nextIndex);
    }
  };

  const handleCardClick = (index: number) => {
    setPlayingCardIndex(index);
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
    <div className="min-h-screen bg-background text-foreground font-body">
      <SEO 
        title="Our Work | Mutiny Talent"
        description="Explore the latest campaigns, brand collaborations, and influencer marketing projects by Mutiny Talent."
      />
      
      <Navbar />

      {/* Back Button */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 md:px-8 pt-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Go Back</span>
        </button>
      </motion.div>

      {/* All Works Section with Carousel */}
      <motion.section 
        ref={sectionRef}
        className="pb-20 px-4 md:px-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center">
          Our Work Portfolio
        </h1>
        
        <Carousel 
          items={cards} 
          activeIndex={playingCardIndex}
          onIndexChange={setPlayingCardIndex}
        />
      </motion.section>

      {/* Top Creators Section (Sphere) */}
      <motion.section 
        className="py-20 bg-secondary/30 overflow-hidden relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Top Creators</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powering the next generation of influence.
          </p>
        </div>
        
        <div className="h-[700px] w-full flex items-center justify-center">
          <SphereImageGrid 
            images={CREATORS_DATA}
            containerSize={800}    // Increased for better spacing
            sphereRadius={220}     // Increased for better spacing
            baseImageScale={0.18}  // Increased for larger images
            aspectRatio={3}
            autoRotate={true}
            autoRotateSpeed={1}
            dragSensitivity={0.8}
          />
        </div>
      </motion.section>

      {/* OTT Platforms */}
      <OTTSection />

      <ContactSection />
    </div>
  );
}