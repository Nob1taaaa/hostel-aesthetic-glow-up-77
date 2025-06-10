import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Text3D, Float, Environment, Stars, Sparkles, Html } from '@react-three/drei';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { Button } from "@/components/ui/button";
import { Star, Shield, Wifi, Heart, Sparkles as SparklesIcon, Zap, Rocket, Crown } from "lucide-react";

// Animated 3D Sphere Component
function AnimatedSphere({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1 * scale, 100, 200]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

// Floating Particles Component
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00ffff" transparent opacity={0.6} />
    </points>
  );
}

// 3D Scene Component
function Scene3D() {
  return (
    <>
      <Environment preset="night" />
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
      <Sparkles count={100} scale={10} size={2} speed={0.4} />
      
      <AnimatedSphere position={[-4, 2, -5]} color="#ff6b6b" scale={0.8} />
      <AnimatedSphere position={[4, -1, -3]} color="#4ecdc4" scale={1.2} />
      <AnimatedSphere position={[0, 3, -8]} color="#45b7d1" scale={0.6} />
      <AnimatedSphere position={[-2, -2, -6]} color="#f9ca24" scale={0.9} />
      <AnimatedSphere position={[3, 1, -4]} color="#6c5ce7" scale={0.7} />
      
      <FloatingParticles />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
    </>
  );
}

// Holographic Text Component
function HolographicText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent blur-sm">
        {children}
      </div>
      <div className="relative bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        {children}
      </div>
    </motion.div>
  );
}

// Floating Action Button Component
function FloatingActionButton({ icon: Icon, label, delay = 0, onClick }: { 
  icon: any, 
  label: string, 
  delay?: number,
  onClick?: () => void 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: 180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 200,
        damping: 10
      }}
      whileHover={{ 
        scale: 1.1, 
        rotate: 5,
        boxShadow: "0 20px 40px rgba(0,255,255,0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative bg-black/20 backdrop-blur-md border border-cyan-500/30 rounded-full p-4 flex flex-col items-center space-y-2 min-w-[120px]">
          <Icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors duration-300" />
          <span className="text-cyan-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
            {label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Main Hero Component
const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const y = useTransform(scrollY, [0, 1000], [0, -500]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // GSAP animations for enhanced effects
    const tl = gsap.timeline();
    
    tl.from(".hero-title", {
      duration: 2,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.2
    })
    .from(".hero-subtitle", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    }, "-=1")
    .from(".hero-buttons", {
      duration: 1,
      y: 30,
      opacity: 0,
      ease: "power2.out"
    }, "-=0.5");

  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      style={{ y, opacity }}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene3D />
        </Canvas>
      </div>

      {/* Animated Background Overlay */}
      <div className="absolute inset-0 z-10">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_70%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        
        {/* Logo with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            duration: 2, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
          className="mb-8 relative"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
            <motion.div 
              className="relative w-32 h-32 md:w-40 md:h-40"
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <img 
                src="/lovable-uploads/82aba63a-f897-4470-87eb-5eda225868c3.png" 
                alt="Raksha Hostel Logo"
                className="w-full h-full object-contain rounded-3xl shadow-2xl border-2 border-cyan-500/50"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Title with Holographic Effect */}
        <div className="hero-title mb-6">
          <HolographicText className="text-6xl md:text-8xl lg:text-9xl font-black mb-4">
            RAKSHA
          </HolographicText>
          <HolographicText className="text-4xl md:text-6xl lg:text-7xl font-bold">
            HOSTEL
          </HolographicText>
          <motion.p 
            className="text-cyan-300 text-lg md:text-xl italic mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            itself reflects security
          </motion.p>
        </div>

        {/* Subtitle with Typewriter Effect */}
        <motion.div 
          className="hero-subtitle mb-12 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed">
            Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold">FUTURE</span> of student living
          </p>
          <p className="text-lg md:text-xl text-cyan-300/80 mt-2">
            Where luxury meets technology in Greater Noida
          </p>
        </motion.div>

        {/* Floating Action Buttons */}
        <div className="hero-buttons flex flex-wrap justify-center gap-6 mb-12">
          <FloatingActionButton 
            icon={Rocket} 
            label="Book Now" 
            delay={2.5}
            onClick={() => scrollToSection('contact')}
          />
          <FloatingActionButton 
            icon={Crown} 
            label="Premium Rooms" 
            delay={2.7}
            onClick={() => scrollToSection('rooms')}
          />
          <FloatingActionButton 
            icon={Zap} 
            label="Facilities" 
            delay={2.9}
            onClick={() => scrollToSection('facilities')}
          />
        </div>

        {/* Feature Badges with 3D Effect */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          {[
            { icon: Star, text: "4.9★ Rated", color: "from-yellow-400 to-orange-500" },
            { icon: Shield, text: "24/7 Security", color: "from-green-400 to-cyan-500" },
            { icon: Wifi, text: "Ultra-Fast WiFi", color: "from-blue-400 to-purple-500" },
            { icon: Heart, text: "Luxury Living", color: "from-pink-400 to-red-500" }
          ].map((badge, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0, rotate: 180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                delay: 3.2 + index * 0.1,
                duration: 0.8,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                y: -10
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${badge.color} rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative bg-black/30 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center space-x-3">
                <badge.icon className="w-5 h-5 text-white" />
                <span className="text-white font-medium">{badge.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats with Holographic Effect */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          {[
            { number: "500+", label: "Happy Students", icon: "🎓" },
            { number: "5", label: "Years Experience", icon: "🏆" },
            { number: "24/7", label: "Support", icon: "💎" },
            { number: "100%", label: "Satisfaction", icon: "❤️" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 3.7 + index * 0.1,
                duration: 0.6,
                type: "spring"
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
              <div className="relative bg-black/20 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-cyan-300 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator with Animation */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-75"></div>
            <div className="relative w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center backdrop-blur-sm bg-black/20">
              <motion.div 
                className="w-1.5 h-4 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2"
                animate={{ 
                  y: [0, 16, 0],
                  opacity: [1, 0.3, 1]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
          <p className="text-cyan-300 text-sm mt-3 font-medium">
            Scroll to explore
          </p>
        </motion.div>
      </div>

      {/* Particle Effects Overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
      </div>
    </motion.section>
  );
};

export default Hero3D;