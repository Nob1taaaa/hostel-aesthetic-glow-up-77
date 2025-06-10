
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const AppleStyleHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
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
  const blur = useTransform(smoothProgress, [0, 1], [0, 10]);

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
      // Apple-style text reveal animation
      gsap.set(".hero-text", { y: 100, opacity: 0 });
      gsap.set(".hero-logo", { scale: 0.5, opacity: 0, rotationY: 180 });
      
      const tl = gsap.timeline();
      
      tl.to(".hero-logo", {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        duration: 1.5,
        ease: "power4.out",
      })
      .to(".hero-text", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
      }, "-=0.8")
      .to(".floating-element", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "elastic.out(1, 0.8)",
      }, "-=0.5");

      // Continuous floating animation
      gsap.to(".floating-logo", {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".glow-effect", {
        scale: 1.2,
        opacity: 0.8,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={containerRef}
      style={{ scale, y, opacity }}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900 flex items-center justify-center"
    >
      {/* Dynamic background with mouse parallax */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(0,255,255,0.3) 0%, rgba(147,51,234,0.2) 50%, transparent 100%)`
        }}
      />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-cyan-500/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{
                duration: 3,
                delay: i * 0.02,
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        
        {/* Logo with premium animations */}
        <motion.div 
          ref={logoRef}
          className="hero-logo floating-logo mb-12 relative"
          style={{
            rotateY: mousePosition.x * 0.5,
            rotateX: mousePosition.y * 0.3,
          }}
        >
          <div className="relative w-48 h-48 mx-auto">
            <motion.div 
              className="glow-effect absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src="/lovable-uploads/82aba63a-f897-4470-87eb-5eda225868c3.png"
              alt="Raksha Hostel"
              className="relative z-10 w-full h-full object-contain rounded-3xl shadow-2xl"
              whileHover={{ 
                scale: 1.1,
                rotateY: 360,
                transition: { duration: 0.8, ease: "easeOut" }
              }}
            />
          </div>
        </motion.div>

        {/* Main heading with morphing text */}
        <div className="hero-text mb-8">
          <motion.h1 
            className="text-8xl md:text-9xl lg:text-[12rem] font-black leading-none mb-4"
            style={{ 
              filter: `blur(${blur}px)`,
              background: 'linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            RAKSHA
          </motion.h1>
          
          <motion.h2 
            className="hero-text text-5xl md:text-7xl font-bold text-white/90 mb-6"
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "power3.out" }}
          >
            HOSTEL
          </motion.h2>
          
          <motion.p 
            className="hero-text text-2xl text-cyan-300 italic mb-12"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "back.out(1.7)" }}
          >
            "itself reflects security"
          </motion.p>
        </div>

        {/* Floating feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: "🏠", title: "Premium Living", desc: "Luxury redefined" },
            { icon: "⚡", title: "Smart Tech", desc: "AI-powered experience" },
            { icon: "🛡️", title: "Ultra Security", desc: "24/7 protection" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="floating-element relative group"
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              whileHover={{ 
                y: -20, 
                scale: 1.05,
                rotateY: 10,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{
                transform: `translateY(${Math.sin(Date.now() * 0.001 + index) * 10}px)`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-black/30 backdrop-blur-xl border border-white/20 rounded-3xl p-8 group-hover:border-cyan-400/50 transition-all duration-500">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-cyan-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Apple-style CTA button */}
        <motion.div
          className="hero-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <Button
            className="relative group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-12 py-6 text-xl font-semibold rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              animate={{
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
            <span className="relative flex items-center gap-3">
              <span>Experience the Future</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </Button>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2"
            animate={{ y: [0, 20, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AppleStyleHero;
