import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, Wifi, UtensilsCrossed, MapPin, Phone } from "lucide-react";
import { useRef } from "react";
import hostelImage from "@/assets/hostel-building.jpg";

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
        
        {/* Enhanced Image with filters */}
        <img
          src={hostelImage}
          alt="Raksha Hostel Building - Premium Student Accommodation"
          className="w-full h-full object-cover"
          style={{
            filter: 'brightness(1.15) contrast(1.2) saturate(1.1)',
          }}
        />
        
        {/* Ambient light effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-primary/20 to-transparent z-[8] blur-3xl" />
      </motion.div>

      {/* Content Overlay - Minimalist */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full h-full"
        />
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
