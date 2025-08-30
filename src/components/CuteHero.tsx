import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Heart, Star, Sparkles, Home, Users, ShieldCheck } from 'lucide-react';

const CuteHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    { icon: Heart, text: "Cozy Living", color: "text-brand-orange" },
    { icon: Star, text: "Premium Quality", color: "text-brand-green" },
    { icon: ShieldCheck, text: "Safe & Secure", color: "text-brand-grey" }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToRooms = () => {
    document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      ref={containerRef}
      style={{ y, opacity }}
      className="relative min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 flex items-center justify-center overflow-hidden"
    >
      {/* Cute floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        {/* Cute logo with gentle animations */}
        <motion.div 
          className="mb-12"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20,
            delay: 0.2 
          }}
        >
          <div className="relative w-48 h-48 mx-auto">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.img
              src="/lovable-uploads/82aba63a-f897-4470-87eb-5eda225868c3.png"
              alt="Raksha Hostel"
              className="relative z-10 w-full h-full object-contain rounded-full shadow-lg border-4 border-white/80"
              whileHover={{ 
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            />
          </div>
        </motion.div>

        {/* Sweet and simple title */}
        <motion.div 
          className="mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-pulse">
              RAKSHA
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground/80 mb-6">
            Your Home Away From Home
          </h2>
        </motion.div>

        {/* Rotating feature showcase */}
        <motion.div 
          className="mb-12 h-16 flex items-center justify-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentFeature}
              className="flex items-center gap-4"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {(() => {
                const IconComponent = features[currentFeature].icon;
                return (
                  <IconComponent 
                    className={`w-10 h-10 ${features[currentFeature].color}`}
                  />
                );
              })()}
              <span className="text-2xl font-medium text-foreground">
                {features[currentFeature].text}
              </span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Cute feature cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {[
            { icon: Home, title: "Comfortable", desc: "Cozy rooms", gradient: "from-primary/20 to-primary/10" },
            { icon: Users, title: "Community", desc: "Make friends", gradient: "from-secondary/20 to-secondary/10" },
            { icon: Sparkles, title: "Premium", desc: "Best facilities", gradient: "from-accent/20 to-accent/10" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group`}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className="mb-4"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                <item.icon className="w-12 h-12 mx-auto text-primary group-hover:text-secondary transition-colors duration-300" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Adorable CTA button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={scrollToRooms}
          >
            <span className="flex items-center gap-3">
              Explore Our Rooms
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-6 h-6 group-hover:fill-current transition-all duration-300" />
              </motion.span>
            </span>
          </Button>
        </motion.div>
      </div>

      {/* Gentle scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0.3, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default CuteHero;