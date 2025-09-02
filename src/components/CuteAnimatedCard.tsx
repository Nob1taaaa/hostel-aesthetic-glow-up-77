import { motion } from "framer-motion";
import { useRef } from "react";

const CuteAnimatedCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex justify-center items-center min-h-[500px] p-8 -mt-12 md:-mt-20 lg:-mt-24">
      <div className="relative w-[360px] h-[260px] sm:w-[480px] sm:h-[340px] md:w-[560px] md:h-[400px] lg:w-[680px] lg:h-[460px] rounded-2xl">
        {/* SVG Filters */}
        <svg style={{ position: "absolute", width: 0, height: 0 }}>
          <filter id="unopaq" y="-100%" height="300%" x="-100%" width="300%">
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 0" />
          </filter>
          <filter id="unopaq2" y="-100%" height="300%" x="-100%" width="300%">
            <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 0" />
          </filter>
          <filter id="unopaq3" y="-100%" height="300%" x="-100%" width="300%">
            <feColorMatrix values="1 0 0 1 0 0 1 0 1 0 0 0 1 1 0 0 0 0 2 0" />
          </filter>
        </svg>

        {/* Animated spinning borders */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
          <motion.div
            className="absolute inset-[-30%] opacity-80"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              background: `conic-gradient(from 0deg, hsl(var(--primary)), transparent 46%, transparent 54%, hsl(var(--accent)))`,
              filter: "blur(3em) url(#unopaq)",
            }}
          />
          <motion.div
            className="absolute inset-[-0.125rem] rounded-xl opacity-90"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              background: `conic-gradient(from 0deg, hsl(var(--primary)), transparent 35%, transparent 65%, hsl(var(--secondary)))`,
              filter: "blur(0.5em) url(#unopaq2)",
            }}
          />
        </div>

        {/* Card border */}
        <div className="absolute inset-0 bg-muted/20 rounded-2xl backdrop-blur-sm">
          <motion.div
            className="absolute inset-[-2px] rounded-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              background: `conic-gradient(from 0deg, hsl(var(--primary)), transparent 35%, transparent 65%, hsl(var(--accent)))`,
              filter: "blur(2px) url(#unopaq3)",
            }}
          />
        </div>

        {/* Main card with hostel image */}
        <motion.div 
          ref={cardRef}
          className="relative inset-[0.125rem] rounded-xl overflow-hidden h-full shadow-xl border border-primary/20"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Hostel Image Background */}
          <div className="absolute inset-0">
            <img 
              src="/lovable-uploads/ddbc9905-e1c3-4fd3-8e0b-9d9c26953481.png" 
              alt="Raksha Hostel Building" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative h-full flex flex-col justify-end p-6 text-white">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground to-secondary-foreground">
                  🏠 Raksha Hostel
                </h3>
                <p className="text-primary-foreground/90 text-sm leading-relaxed">
                  Experience luxury living in the heart of Greater Noida ✨
                </p>
              </motion.div>

              <div className="flex items-center gap-4">
                <motion.div 
                  className="bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg px-4 py-2 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-xl font-bold">4.9⭐</div>
                  <div className="text-xs">Rating</div>
                </motion.div>
                
                <motion.div 
                  className="bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-lg px-4 py-2 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-xl font-bold">500+🏠</div>
                  <div className="text-xs">Happy Residents</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Cute floating sparkles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-primary/40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                ✨
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backdrop blur effect */}
        <div className="absolute inset-[-200%] bg-gradient-radial from-transparent via-background/50 to-background opacity-30 pointer-events-none" />
      </div>
    </div>
  );
};

export default CuteAnimatedCard;
