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

      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Enhanced Badge with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/30 backdrop-blur-md border border-primary/50 mb-6 shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)]"
          >
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
            <Shield className="w-5 h-5 text-primary relative z-10 drop-shadow-[0_0_8px_hsl(var(--primary))]" />
            <span className="text-sm font-semibold text-white relative z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">Premium Student Accommodation</span>
          </motion.div>

          {/* Enhanced Main Heading with Sharp Glow */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="block mb-2 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Welcome to</span>
            <span className="block bg-gradient-to-r from-primary via-primary-foreground to-primary bg-clip-text text-transparent drop-shadow-[0_0_40px_hsl(var(--primary))] animate-pulse" style={{
              filter: 'drop-shadow(0 0 20px hsl(var(--primary))) drop-shadow(0 0 40px hsl(var(--primary)))',
            }}>
              RAKSHA HOSTEL
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 font-light"
          >
            Your Home Away From Home
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Experience premium living in Greater Noida's most trusted student hostel with 24x7 security, modern facilities, and a vibrant community
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            {[
              { icon: Shield, text: "24x7 Security" },
              { icon: Wifi, text: "High-Speed WiFi" },
              { icon: UtensilsCrossed, text: "Mess Facility" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-white font-medium">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons with Glow Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={scrollToRooms}
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-[0_0_30px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.8)]"
            >
              <div className="absolute inset-0 rounded-full bg-primary blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <span className="relative z-10">Explore Rooms</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 blur-xl transition-all" />
              <Phone className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Contact Us</span>
            </button>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex items-center justify-center gap-2 text-white/70"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Knowledge Park 3, Greater Noida</span>
          </motion.div>
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
