import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, Wifi, UtensilsCrossed, MapPin, Phone } from "lucide-react";
import { useRef } from "react";
import hostelImage from "@/assets/hostel-front-view.jpg";

const HostelHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);

  const scrollToRooms = () => {
    document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918743836836', '_blank');
  };

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
      style={{ opacity }}
    >
      {/* Enhanced Parallax Background Image with Glow Effects */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y }}
      >
        {/* Multiple layered glows for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background/50 z-[5] mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent z-[6] animate-pulse" />
        
        {/* Sharp edge glow */}
        <div className="absolute inset-0 z-[7]" style={{
          boxShadow: 'inset 0 0 100px 20px hsl(var(--primary) / 0.3)',
        }} />
        
        {/* Dark elegant overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-background z-10" />
        
        {/* Enhanced Image - No zoom, crisp quality */}
        <img
          src={hostelImage}
          alt="Raksha Hostel Building - Premium Student Accommodation"
          className="w-full h-full object-cover object-center"
          style={{
            filter: 'brightness(1.1) contrast(1.1)',
            imageRendering: 'crisp-edges',
          }}
        />
        
        {/* Ambient light effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-primary/20 to-transparent z-[8] blur-3xl" />
      </motion.div>

      {/* Content Overlay - Beautiful Text Card */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full"
        >
          {/* Elegant Card with Content */}
          <div className="relative bg-white/95 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-white/20">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-[100px] rounded-tr-3xl" />
            
            {/* Icon and Heading */}
            <div className="flex items-start gap-4 sm:gap-6 mb-6">
              {/* House Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-2xl flex items-center justify-center"
              >
                <span className="text-4xl sm:text-5xl">🏠</span>
              </motion.div>
              
              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
              >
                Your Home Away From Home
              </motion.h1>
            </div>
            
            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              Premium <span className="font-semibold text-primary">student living</span> in Greater Noida with modern amenities, 24/7 security, and a vibrant community atmosphere.
            </motion.p>
            
            {/* Subtle bottom decoration */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-tr-[100px] rounded-bl-3xl" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HostelHero;
