
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const RevolutionaryHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Advanced entrance animations
      gsap.set(".hero-logo", { scale: 0, opacity: 0, rotationY: 180 });
      gsap.set(".hero-title", { y: 200, opacity: 0, scale: 0.5 });
      gsap.set(".hero-subtitle", { y: 100, opacity: 0 });
      gsap.set(".hero-features", { y: 150, opacity: 0, scale: 0.8 });
      gsap.set(".hero-cta", { y: 100, opacity: 0, scale: 0.9 });
      
      const tl = gsap.timeline();
      
      tl.to(".hero-logo", {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        duration: 2,
        ease: "power4.out",
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
        duration: 1.2,
        ease: "power3.out",
      }, "-=1")
      .to(".hero-features", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out",
      }, "-=0.8")
      .to(".hero-cta", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
      }, "-=0.5");

      // Continuous floating animations
      gsap.to(".floating-element", {
        y: -30,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    document.querySelector('.premium-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      ref={containerRef}
      style={{ scale, y, opacity }}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-purple-900 to-blue-900 flex items-center justify-center"
    >
      {/* Revolutionary background with particle system */}
      <div className="absolute inset-0">
        {/* Dynamic gradient overlay */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(0,255,255,0.4) 0%, rgba(147,51,234,0.3) 30%, rgba(255,20,147,0.2) 70%, transparent 100%)`
          }}
        />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
              key={`mesh-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-600/20"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        
        {/* Premium logo with holographic effect */}
        <motion.div 
          className="hero-logo floating-element mb-20 relative"
          style={{
            rotateY: mousePosition.x * 0.5,
            rotateX: mousePosition.y * 0.3,
          }}
        >
          <div className="relative w-72 h-72 mx-auto">
            {/* Multiple holographic layers */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-500 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 rounded-full blur-2xl opacity-60"
              animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.2, 0.7, 0.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div className="relative z-10 w-full h-full rounded-3xl overflow-hidden backdrop-blur-xl bg-black/20 border border-cyan-400/50 shadow-2xl">
              <motion.img
                src="/lovable-uploads/82aba63a-f897-4470-87eb-5eda225868c3.png"
                alt="Raksha Hostel"
                className="w-full h-full object-cover"
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Revolutionary main heading */}
        <div className="hero-title mb-16">
          <motion.h1 
            className="text-8xl md:text-9xl lg:text-[14rem] font-black leading-none mb-8"
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
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            RAKSHA
          </motion.h1>
          
          <motion.h2 
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white/95 mb-6"
            animate={{ 
              textShadow: [
                "0 0 30px rgba(0,255,255,0.8)",
                "0 0 60px rgba(255,0,255,0.8)",
                "0 0 30px rgba(0,255,255,0.8)"
              ]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            HOSTEL
          </motion.h2>
          
          <motion.p 
            className="hero-subtitle text-4xl text-cyan-300 font-light mb-20"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🏰 Royal Living Experience
          </motion.p>
        </div>

        {/* Premium visual features */}
        <div className="hero-features grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {[
            { 
              emoji: "🏰", 
              title: "LUXURY", 
              desc: "Palace-level living",
              gradient: "from-yellow-400 via-orange-500 to-red-500",
              image: "/lovable-uploads/30b955b7-2351-41bb-8ff0-bfec4bd773a3.png"
            },
            { 
              emoji: "⚡", 
              title: "SMART", 
              desc: "AI-powered comfort",
              gradient: "from-cyan-400 via-blue-500 to-purple-600",
              image: "/lovable-uploads/bc23d8eb-dbb9-4294-9147-c12bff26f456.png"
            },
            { 
              emoji: "🛡️", 
              title: "SECURE", 
              desc: "Military-grade safety",
              gradient: "from-green-400 via-teal-500 to-cyan-600",
              image: "/lovable-uploads/319d623b-4de6-4a4f-a319-5a5d4e70e2c4.png"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="hero-features group relative floating-element"
              whileHover={{ 
                y: -40, 
                scale: 1.1,
                rotateY: 15,
                transition: { type: "spring", stiffness: 400 }
              }}
              style={{
                transform: `translateY(${Math.sin(Date.now() * 0.001 + index) * 20}px)`
              }}
            >
              {/* Glassmorphism card */}
              <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden group-hover:border-cyan-400/50 transition-all duration-500">
                
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                
                {/* Image section */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Floating emoji */}
                  <motion.div
                    className="absolute top-4 right-4 text-6xl"
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
                    {item.emoji}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <h3 className={`text-4xl font-black mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.title}
                  </h3>
                  <p className="text-2xl text-cyan-200 group-hover:text-white transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Epic CTA with morphing button */}
        <motion.div
          className="hero-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className="relative group bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 hover:from-cyan-400 hover:via-purple-500 hover:to-pink-400 text-white px-20 py-10 text-3xl font-bold rounded-full overflow-hidden transform transition-all duration-500 shadow-2xl border-2 border-cyan-400/50"
            onClick={scrollToNext}
          >
            {/* Morphing background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/50 via-purple-600/50 to-pink-500/50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.9, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
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
                🚀
              </motion.span>
            </span>
          </Button>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-75"></div>
          <div className="relative w-12 h-20 border-4 border-cyan-400 rounded-full flex justify-center backdrop-blur-md bg-black/30">
            <motion.div
              className="w-3 h-10 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full mt-4"
              animate={{ 
                y: [0, 30, 0],
                opacity: [1, 0.3, 1],
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

export default RevolutionaryHero;
