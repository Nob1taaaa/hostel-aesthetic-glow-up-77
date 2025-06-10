
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const StunningHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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
  const y = useTransform(smoothProgress, [0, 1], [0, -100]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(".hero-logo", { scale: 0, opacity: 0, rotationY: 180 });
      gsap.set(".hero-title", { y: 200, opacity: 0, scale: 0.5 });
      gsap.set(".hero-subtitle", { y: 100, opacity: 0 });
      gsap.set(".hero-features", { y: 150, opacity: 0, scale: 0.8 });
      gsap.set(".hero-cta", { y: 100, opacity: 0, scale: 0.9 });
      
      const tl = gsap.timeline();
      
      // Logo entrance
      tl.to(".hero-logo", {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        duration: 1.8,
        ease: "back.out(1.7)",
      })
      // Title entrance with dramatic effect
      .to(".hero-title", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
      }, "-=1.2")
      // Subtitle with smooth entrance
      .to(".hero-subtitle", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }, "-=0.8")
      // Features with stagger
      .to(".hero-features", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }, "-=0.6")
      // CTA button
      .to(".hero-cta", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
      }, "-=0.4");

      // Continuous animations
      gsap.to(".floating-logo", {
        y: -30,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".glow-effect", {
        scale: 1.3,
        opacity: 0.8,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToRooms = () => {
    document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      ref={containerRef}
      style={{ scale, y, opacity }}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900 flex items-center justify-center"
    >
      {/* Dynamic animated background */}
      <div className="absolute inset-0">
        {/* Gradient overlay with mouse parallax */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(0,255,255,0.4) 0%, rgba(147,51,234,0.3) 30%, rgba(255,20,147,0.2) 70%, transparent 100%)`
          }}
        />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-cyan-500/30"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.6, 0],
                  borderColor: [
                    "rgba(6, 182, 212, 0.3)",
                    "rgba(147, 51, 234, 0.5)",
                    "rgba(255, 20, 147, 0.4)",
                    "rgba(6, 182, 212, 0.3)"
                  ]
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.03,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating geometric shapes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-600/20 backdrop-blur-sm"
            style={{
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        
        {/* Premium logo with 3D effects */}
        <motion.div 
          className="hero-logo floating-logo mb-16 relative"
          style={{
            rotateY: mousePosition.x * 0.3,
            rotateX: mousePosition.y * 0.2,
          }}
        >
          <div className="relative w-56 h-56 mx-auto">
            {/* Multiple glow layers for depth */}
            <motion.div 
              className="glow-effect absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.8, 0.4],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-600 rounded-full blur-2xl opacity-50"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.img
              src="/lovable-uploads/82aba63a-f897-4470-87eb-5eda225868c3.png"
              alt="Raksha Hostel"
              className="relative z-10 w-full h-full object-contain rounded-3xl shadow-2xl border-2 border-cyan-400/50"
              whileHover={{ 
                scale: 1.1,
                rotateY: 15,
                transition: { duration: 0.6, ease: "easeOut" }
              }}
            />
          </div>
        </motion.div>

        {/* Spectacular main heading */}
        <div className="hero-title mb-12">
          <motion.h1 
            className="text-8xl md:text-9xl lg:text-[12rem] font-black leading-none mb-6"
            style={{ 
              background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ff00, #ff0080, #8000ff, #00ffff)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
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
            className="text-6xl md:text-8xl font-bold text-white/95 mb-8"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ 
              rotateX: 0, 
              opacity: 1,
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(0,255,255,0.8)",
                "0 0 60px rgba(255,0,255,0.6)",
                "0 0 20px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ 
              delay: 0.5, 
              duration: 1, 
              ease: "power3.out",
              textShadow: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            HOSTEL
          </motion.h2>
          
          <motion.p 
            className="hero-subtitle text-3xl text-cyan-300 italic mb-16 font-light"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "back.out(1.7)" }}
          >
            "itself reflects security"
          </motion.p>
        </div>

        {/* Premium feature showcase */}
        <div className="hero-features grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { 
              icon: "🏰", 
              title: "ROYAL LIVING", 
              desc: "Palace-level luxury",
              gradient: "from-yellow-400 via-orange-500 to-red-500"
            },
            { 
              icon: "⚡", 
              title: "SMART TECH", 
              desc: "AI-powered experience",
              gradient: "from-cyan-400 via-blue-500 to-purple-600"
            },
            { 
              icon: "🛡️", 
              title: "FORTRESS SECURITY", 
              desc: "Military-grade protection",
              gradient: "from-green-400 via-teal-500 to-cyan-600"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group relative perspective-1000"
              whileHover={{ 
                y: -30, 
                scale: 1.08,
                rotateY: 10,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              style={{
                transform: `translateY(${Math.sin(Date.now() * 0.001 + index) * 15}px)`
              }}
            >
              {/* Multiple glow layers */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-20 rounded-3xl blur-2xl group-hover:opacity-50 group-hover:blur-3xl transition-all duration-500 scale-110`} />
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-10 rounded-3xl blur-xl group-hover:opacity-30 transition-all duration-500 scale-125`} />
              
              <div className="relative bg-black/20 backdrop-blur-xl border border-white/30 rounded-3xl p-10 group-hover:border-cyan-400/70 transition-all duration-500 group-hover:bg-black/30">
                <motion.div 
                  className="text-8xl mb-6"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotateY: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3 className={`text-3xl font-black mb-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {item.title}
                </h3>
                <p className="text-xl text-cyan-300 group-hover:text-white transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Epic CTA button */}
        <motion.div
          className="hero-cta"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <Button
            className="relative group bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-400 text-white px-16 py-8 text-2xl font-bold rounded-full overflow-hidden transform transition-all duration-500 hover:scale-110 shadow-2xl"
            onClick={scrollToRooms}
          >
            {/* Animated shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
            />
            
            {/* Pulsing background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 via-purple-600/50 to-pink-500/50"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <span className="relative flex items-center gap-4 z-10">
              <span>EXPERIENCE THE FUTURE</span>
              <motion.span
                animate={{ 
                  x: [0, 10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-3xl"
              >
                🚀
              </motion.span>
            </span>
          </Button>
        </motion.div>

        {/* Floating particles for extra magic */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -200, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                x: [0, Math.random() * 100 - 50, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 6,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-75"></div>
          <div className="relative w-10 h-16 border-3 border-cyan-400 rounded-full flex justify-center backdrop-blur-sm bg-black/30">
            <motion.div
              className="w-2 h-8 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full mt-3"
              animate={{ 
                y: [0, 24, 0],
                opacity: [1, 0.3, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2, 
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

export default StunningHero;
