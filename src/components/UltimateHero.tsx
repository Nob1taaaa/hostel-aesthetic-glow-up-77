
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, Zap, Crown, Star, Atom } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const UltimateHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const words = ['SECURITY', 'LUXURY', 'COMFORT', 'INNOVATION', 'EXCELLENCE'];
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scale = useTransform(smoothProgress, [0, 1], [1, 0.8]);
  const y = useTransform(smoothProgress, [0, 1], [0, -200]);
  const opacity = useTransform(smoothProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimer);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const ctx = gsap.context(() => {
        // Ultimate entrance animation
        const tl = gsap.timeline();
        
        gsap.set(".hero-logo", { scale: 0, rotation: 360, opacity: 0 });
        gsap.set(".hero-title", { y: 200, opacity: 0, scale: 0.3 });
        gsap.set(".hero-subtitle", { y: 100, opacity: 0, rotationX: -90 });
        gsap.set(".hero-features", { y: 150, opacity: 0, scale: 0.5 });
        gsap.set(".hero-cta", { y: 100, opacity: 0, scale: 0.8 });
        
        tl.to(".hero-logo", {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 2,
          ease: "elastic.out(1, 0.5)",
        })
        .to(".hero-title", {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: "power4.out",
        }, "-=1.5")
        .to(".hero-subtitle", {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out",
        }, "-=1.2")
        .to(".hero-features", {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.3,
          ease: "back.out(1.7)",
        }, "-=1")
        .to(".hero-cta", {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        }, "-=0.8");

        // Continuous floating animations
        gsap.to(".float-element", {
          y: -40,
          duration: 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.5,
        });

        // Rotating orbit animation
        gsap.to(".orbit-element", {
          rotation: 360,
          duration: 20,
          ease: "none",
          repeat: -1,
        });

        // Pulsing glow effects
        gsap.to(".glow-pulse", {
          scale: 1.2,
          opacity: 0.3,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.8,
        });

      }, containerRef);

      return () => ctx.revert();
    }
  }, [isLoading]);

  const scrollToRooms = () => {
    document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <motion.div
          className="text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          RAKSHA
        </motion.div>
      </div>
    );
  }

  return (
    <motion.section
      ref={containerRef}
      style={{ scale, y, opacity }}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black flex items-center justify-center"
    >
      {/* Revolutionary animated background */}
      <div className="absolute inset-0">
        {/* Dynamic gradient that follows mouse */}
        <motion.div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, 
              rgba(0,255,255,0.4) 0%, 
              rgba(147,51,234,0.3) 25%, 
              rgba(255,20,147,0.2) 50%, 
              rgba(0,255,0,0.1) 75%, 
              transparent 100%)`
          }}
        />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`mesh-${i}`}
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${200 + Math.random() * 300}px`,
                height: `${200 + Math.random() * 300}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(${Math.random() * 360}deg, 
                  rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 255, 0.3), 
                  rgba(255, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.2))`
              }}
              animate={{
                x: [0, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, 0],
                scale: [1, 1.5, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Orbiting elements */}
        <div className="orbit-element absolute inset-0">
          {[Sparkles, Shield, Zap, Crown, Star, Atom].map((Icon, index) => (
            <motion.div
              key={`orbit-${index}`}
              className="absolute"
              style={{
                left: `${50 + Math.cos((index * 60) * Math.PI / 180) * 40}%`,
                top: `${50 + Math.sin((index * 60) * Math.PI / 180) * 40}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Icon 
                className="w-8 h-8 text-cyan-400 opacity-60" 
                style={{
                  filter: 'drop-shadow(0 0 10px currentColor)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating particles */}
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        
        {/* Spectacular logo with 3D effects */}
        <motion.div 
          className="hero-logo float-element mb-20 relative"
          style={{
            rotateY: mousePosition.x * 10,
            rotateX: mousePosition.y * 5,
          }}
        >
          <div className="relative w-72 h-72 mx-auto">
            {/* Multiple layered glows */}
            <div className="glow-pulse absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 rounded-full blur-3xl opacity-50" />
            <div className="glow-pulse absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 rounded-full blur-2xl opacity-40" />
            <div className="glow-pulse absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full blur-xl opacity-30" />
            
            <motion.img
              src="/lovable-uploads/82aba63a-f897-4470-87eb-5eda225868c3.png"
              alt="Raksha Hostel"
              className="relative z-10 w-full h-full object-contain rounded-3xl shadow-2xl border-2 border-cyan-400/70"
              whileHover={{ 
                scale: 1.1,
                rotateY: 20,
                rotateX: 10,
                transition: { duration: 0.8, ease: "easeOut" }
              }}
              style={{
                filter: 'drop-shadow(0 0 30px rgba(0,255,255,0.5))'
              }}
            />
          </div>
        </motion.div>

        {/* Mind-blowing title with morphing text */}
        <div className="hero-title mb-16">
          <motion.h1 
            className="text-9xl md:text-[14rem] lg:text-[18rem] font-black leading-none mb-8"
            style={{ 
              background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ff00, #ff0080, #8000ff, #00ffff)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(0,255,255,0.3))'
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            RAKSHA
          </motion.h1>
          
          <motion.h2 
            className="text-7xl md:text-9xl font-bold text-white mb-12"
            style={{
              textShadow: '0 0 40px rgba(255,255,255,0.5), 0 0 80px rgba(0,255,255,0.3)'
            }}
          >
            HOSTEL
          </motion.h2>
          
          {/* Dynamic changing subtitle */}
          <div className="hero-subtitle h-20 flex items-center justify-center mb-16">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentWord}
                className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -50, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                style={{
                  textShadow: '0 0 30px rgba(255,255,0,0.5)'
                }}
              >
                {words[currentWord]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Epic feature showcase */}
        <div className="hero-features grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {[
            { 
              icon: Crown, 
              title: "ROYAL EXPERIENCE", 
              desc: "Live like royalty",
              gradient: "from-yellow-400 via-orange-500 to-red-500",
              color: "text-yellow-400"
            },
            { 
              icon: Zap, 
              title: "LIGHTNING FAST", 
              desc: "Super-speed everything",
              gradient: "from-cyan-400 via-blue-500 to-purple-600",
              color: "text-cyan-400"
            },
            { 
              icon: Shield, 
              title: "FORTRESS MODE", 
              desc: "Unbreakable security",
              gradient: "from-green-400 via-teal-500 to-cyan-600",
              color: "text-green-400"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group float-element relative"
              style={{ animationDelay: `${index * 0.5}s` }}
              whileHover={{ 
                y: -40, 
                scale: 1.1,
                rotateY: 15,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {/* Layered background effects */}
              <div className={`glow-pulse absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-20 rounded-3xl blur-2xl scale-110`} />
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-10 rounded-3xl blur-xl scale-125`} />
              
              <div className="relative bg-black/30 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 group-hover:border-cyan-400/80 transition-all duration-500 group-hover:bg-black/50">
                <motion.div 
                  className="mb-8"
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.7
                  }}
                >
                  <item.icon className={`w-20 h-20 ${item.color} mx-auto`} style={{
                    filter: 'drop-shadow(0 0 20px currentColor)'
                  }} />
                </motion.div>
                <h3 className={`text-4xl font-black mb-6 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {item.title}
                </h3>
                <p className="text-2xl text-cyan-300 group-hover:text-white transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ultimate CTA button */}
        <motion.div
          className="hero-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="relative group bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white px-20 py-10 text-3xl font-bold rounded-full overflow-hidden shadow-2xl border-2 border-cyan-400/50 hover:border-pink-400/80 transition-all duration-500"
            onClick={scrollToRooms}
          >
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
            
            {/* Pulsing background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/60 via-purple-600/60 to-pink-500/60"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <span className="relative flex items-center gap-6 z-10">
              <span>ENTER THE FUTURE</span>
              <motion.span
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.3, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-4xl"
              >
                ⚡
              </motion.span>
            </span>
          </Button>
        </motion.div>
      </div>

      {/* Epic scroll indicator */}
      <motion.div
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 20, 0],
          opacity: [1, 0.5, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="relative">
          <div className="glow-pulse absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-2xl opacity-60 scale-150"></div>
          <div className="relative w-12 h-20 border-4 border-cyan-400 rounded-full flex justify-center backdrop-blur-sm bg-black/20">
            <motion.div
              className="w-3 h-10 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full mt-4"
              animate={{ 
                y: [0, 32, 0],
                opacity: [1, 0.2, 1],
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default UltimateHero;
