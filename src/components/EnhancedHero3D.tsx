
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Float, Environment, Stars, Sparkles, Html, Center } from '@react-three/drei';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { Button } from "@/components/ui/button";
import { Star, Shield, Wifi, Heart, Sparkles as SparklesIcon, Zap, Rocket, Crown, Building, Users, Award } from "lucide-react";
import Interactive3DBackground from './Interactive3DBackground';

// Simplified 3D Logo Component
function Logo3D() {
  const logoRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (logoRef.current) {
      logoRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      logoRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={logoRef}>
        <Center>
          <mesh>
            <boxGeometry args={[2, 0.5, 0.2]} />
            <meshStandardMaterial
              color="#00ffff"
              metalness={0.8}
              roughness={0.2}
              emissive="#004444"
            />
          </mesh>
        </Center>
      </group>
    </Float>
  );
}

// Simplified Building Model
function BuildingModel() {
  const buildingRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (buildingRef.current) {
      buildingRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={buildingRef} position={[5, -2, -3]}>
        <mesh>
          <boxGeometry args={[2, 4, 2]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.9}
            roughness={0.1}
            emissive="#0f0f1a"
          />
        </mesh>
        <mesh position={[0, 2.5, 0]}>
          <boxGeometry args={[2.2, 0.5, 2.2]} />
          <meshStandardMaterial
            color="#00ffff"
            metalness={1}
            roughness={0}
            emissive="#004444"
          />
        </mesh>
      </group>
    </Float>
  );
}

// Minimal Enhanced Scene
function EnhancedScene() {
  return (
    <>
      <Environment preset="night" />
      <Stars radius={300} depth={60} count={30000} factor={10} saturation={0} fade />
      <Sparkles count={200} scale={15} size={3} speed={0.6} color="#00ffff" />
      
      <Logo3D />
      <BuildingModel />
      
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
      <spotLight
        position={[0, 20, 10]}
        angle={0.5}
        penumbra={1}
        intensity={2}
        color="#ffffff"
        castShadow
      />
    </>
  );
}

// Safe Canvas wrapper
function Safe3DCanvas() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900"></div>;
  }

  try {
    return (
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ antialias: false, alpha: true }}
        dpr={1}
        onError={() => setHasError(true)}
      >
        <EnhancedScene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    );
  } catch (error) {
    console.log('Hero Canvas error:', error);
    setHasError(true);
    return <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900"></div>;
  }
}

// Floating Card Component
function FloatingCard({ title, subtitle, icon: Icon, delay = 0, gradient }: {
  title: string;
  subtitle: string;
  icon: any;
  delay?: number;
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: 45, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      transition={{
        duration: 1.2,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        y: -10,
        boxShadow: "0 30px 60px rgba(0,255,255,0.3)"
      }}
      className="group relative perspective-1000"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500 scale-110`}></div>
      
      <div className="relative bg-black/20 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 group-hover:border-cyan-400/60 transition-all duration-500">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl">
            <Icon className="w-12 h-12 text-cyan-400 group-hover:text-white transition-colors duration-300" />
          </div>
          
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:from-white group-hover:to-cyan-300">
            {title}
          </h3>
          
          <p className="text-cyan-300/80 group-hover:text-white/90 transition-colors duration-300">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

const EnhancedHero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const y = useTransform(scrollY, [0, 1000], [0, -300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

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
    const tl = gsap.timeline();
    
    tl.from(".hero-content", {
      duration: 2,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      stagger: 0.2
    })
    .from(".floating-cards", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      stagger: 0.1
    }, "-=1");
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
      {/* Interactive 3D Background */}
      <Interactive3DBackground />

      {/* Main 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Safe3DCanvas />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Logo Section */}
        <motion.div
          className="hero-content mb-8"
          initial={{ opacity: 0, scale: 0, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 2, type: "spring", stiffness: 100 }}
        >
          <div className="relative group cursor-pointer" onClick={() => scrollToSection('about')}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 scale-150 animate-pulse"></div>
            <motion.div
              className="relative w-40 h-40 md:w-48 md:h-48"
              whileHover={{ scale: 1.1, rotateY: 360 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/lovable-uploads/82aba63a-f897-4470-87eb-5eda225868c3.png"
                alt="Raksha Hostel Logo"
                className="w-full h-full object-contain rounded-3xl shadow-2xl border-2 border-cyan-500/50"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Title with Advanced Typography */}
        <div className="hero-content text-center mb-12">
          <motion.h1
            className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-neon-pulse">
              RAKSHA
            </span>
          </motion.h1>
          
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
              HOSTEL
            </span>
          </motion.h2>
          
          <motion.p
            className="text-cyan-300 text-xl md:text-2xl italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            "itself reflects security"
          </motion.p>
        </div>

        {/* Enhanced Description */}
        <motion.div
          className="hero-content text-center mb-16 max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-white/90 leading-relaxed mb-6">
            Experience the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold animate-cyber-glitch">
              FUTURE
            </span>{" "}
            of student living
          </h3>
          <p className="text-xl md:text-2xl text-cyan-300/80">
            Where luxury meets technology in Greater Noida's most advanced hostel
          </p>
        </motion.div>

        {/* Floating Action Cards */}
        <div className="floating-cards grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl w-full">
          <FloatingCard
            title="Book Now"
            subtitle="Secure your premium room"
            icon={Rocket}
            delay={2}
            gradient="from-cyan-500/30 to-blue-600/30"
          />
          <FloatingCard
            title="Virtual Tour"
            subtitle="Experience in 3D"
            icon={Crown}
            delay={2.2}
            gradient="from-purple-500/30 to-pink-600/30"
          />
          <FloatingCard
            title="Premium Living"
            subtitle="Luxury redefined"
            icon={Zap}
            delay={2.4}
            gradient="from-yellow-500/30 to-orange-600/30"
          />
        </div>

        {/* Stats with Holographic Effect */}
        <motion.div
          className="hero-content grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1 }}
        >
          {[
            { number: "500+", label: "Happy Students", icon: "🎓", color: "from-cyan-400 to-blue-500" },
            { number: "5+", label: "Years Experience", icon: "🏆", color: "from-yellow-400 to-orange-500" },
            { number: "24/7", label: "Support", icon: "💎", color: "from-purple-400 to-pink-500" },
            { number: "100%", label: "Satisfaction", icon: "❤️", color: "from-green-400 to-cyan-500" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 3 + index * 0.1, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.1, y: -10, rotateY: 5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-all duration-300`}></div>
              
              <div className="relative bg-black/20 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 text-center group-hover:border-cyan-400/60 transition-all duration-300">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-cyan-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Particle Overlay Effects */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default EnhancedHero3D;
