
import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Float, Environment, Stars, Sparkles, Text3D, MeshDistortMaterial, Html } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { Button } from "@/components/ui/button";
import { Play, Rocket, Crown, Zap, ArrowDown } from "lucide-react";

// Advanced 3D Logo with morphing effect
function MorphingLogo() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      
      if (hovered) {
        groupRef.current.scale.setScalar(1.2 + Math.sin(state.clock.elapsedTime * 5) * 0.1);
      } else {
        groupRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={3}>
      <group
        ref={groupRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Sphere args={[2, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#00ffff"
            metalness={1}
            roughness={0}
            distort={hovered ? 0.6 : 0.3}
            speed={5}
            emissive="#001122"
          />
        </Sphere>
        
        <Html center>
          <motion.div 
            className="w-20 h-20 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl"
            animate={{ scale: hovered ? 1.1 : 1 }}
          >
            <img
              src="/lovable-uploads/82aba63a-f897-4470-87eb-5eda225868c3.png"
              alt="Raksha Logo"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </Html>
      </group>
    </Float>
  );
}

// Floating Building Model
function BuildingComplex() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={1}>
      <group ref={groupRef} position={[6, -1, -4]} scale={0.8}>
        {/* Main Building */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 3, 1.5]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Building Details */}
        <mesh position={[0, 1.8, 0]}>
          <boxGeometry args={[1.7, 0.3, 1.7]} />
          <meshStandardMaterial color="#00ffff" emissive="#002244" />
        </mesh>
        
        {/* Windows Effect */}
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh key={i} position={[
            (i % 3 - 1) * 0.4,
            (Math.floor(i / 3) - 1.5) * 0.5,
            0.76
          ]}>
            <planeGeometry args={[0.15, 0.2]} />
            <meshStandardMaterial color="#ffff00" emissive="#444400" />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Particle System
function AdvancedParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  const particles = 5000;
  const positions = new Float32Array(particles * 3);
  
  for (let i = 0; i < particles; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#00ffff"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Interactive Action Cards
function ActionCard3D({ position, icon: Icon, title, image, onClick }: {
  position: [number, number, number];
  icon: any;
  title: string;
  image: string;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>
        <Html center>
          <motion.div
            className="w-32 h-40 cursor-pointer group"
            whileHover={{ scale: 1.1, rotateY: 10 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            onClick={onClick}
          >
            <div className="relative h-full bg-black/30 backdrop-blur-xl border border-cyan-500/50 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 p-4 h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 mb-3 rounded-xl overflow-hidden">
                  <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
                
                <Icon className="w-6 h-6 text-cyan-400 mb-2 group-hover:text-white transition-colors" />
                
                <h3 className="text-white font-bold text-sm group-hover:text-cyan-300 transition-colors">
                  {title}
                </h3>
              </div>
            </div>
          </motion.div>
        </Html>
      </group>
    </Float>
  );
}

// Main 3D Scene
function Scene3D() {
  return (
    <>
      <Environment preset="night" />
      <Stars radius={300} depth={80} count={50000} factor={15} />
      <Sparkles count={300} scale={20} size={4} speed={0.8} color="#00ffff" />
      
      <MorphingLogo />
      <BuildingComplex />
      <AdvancedParticles />
      
      {/* Interactive Action Cards */}
      <ActionCard3D
        position={[-4, 2, 2]}
        icon={Crown}
        title="Premium Rooms"
        image="/lovable-uploads/30b955b7-2351-41bb-8ff0-bfec4bd773a3.png"
      />
      
      <ActionCard3D
        position={[4, -2, 1]}
        icon={Zap}
        title="Modern Facilities"
        image="/lovable-uploads/2cfae154-534d-4f4c-b685-c21810f0e69f.png"
      />
      
      <ActionCard3D
        position={[-6, -1, -2]}
        icon={Rocket}
        title="Book Now"
        image="/lovable-uploads/319d623b-4de6-4a4f-a319-5a5d4e70e2c4.png"
      />
      
      {/* Dynamic Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#ff00ff" />
      <spotLight
        position={[0, 20, 10]}
        angle={0.3}
        penumbra={1}
        intensity={3}
        color="#ffffff"
        castShadow
      />
    </>
  );
}

// Visual Stats Component
function VisualStats() {
  const stats = [
    { number: "500+", icon: "🎓", image: "/lovable-uploads/ddbc9905-e1c3-4fd3-8e0b-9d9c26953481.png" },
    { number: "4.9★", icon: "⭐", image: "/lovable-uploads/2cfae154-534d-4f4c-b685-c21810f0e69f.png" },
    { number: "24/7", icon: "🛡️", image: "/lovable-uploads/319d623b-4de6-4a4f-a319-5a5d4e70e2c4.png" },
    { number: "100%", icon: "❤️", image: "/lovable-uploads/30b955b7-2351-41bb-8ff0-bfec4bd773a3.png" }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="group relative"
          initial={{ opacity: 0, scale: 0, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 3 + index * 0.2, duration: 1, type: "spring" }}
          whileHover={{ scale: 1.1, y: -10, rotateY: 10 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative bg-black/20 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <img src={stat.image} alt="" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10">
              <div className="text-5xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                {stat.number}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const VisualHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(".hero-title", {
      duration: 2,
      scale: 0,
      rotation: 360,
      ease: "elastic.out(1, 0.5)"
    })
    .from(".hero-subtitle", {
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: "power3.out"
    }, "-=1")
    .from(".visual-stats", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power2.out"
    }, "-=0.5");
  }, []);

  return (
    <motion.section
      ref={containerRef}
      style={{ y, opacity }}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene3D />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Minimal Text Header */}
        <div className="hero-title text-center mb-8">
          <motion.h1
            className="text-8xl md:text-[12rem] lg:text-[16rem] font-black mb-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              RAKSHA
            </span>
          </motion.h1>
        </div>

        {/* Visual Tagline */}
        <motion.div 
          className="hero-subtitle mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="text-6xl md:text-8xl mb-4">🏠✨🚀</div>
          <p className="text-2xl md:text-3xl text-cyan-300 font-light">
            The Future Lives Here
          </p>
        </motion.div>

        {/* Interactive CTA */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 1, type: "spring" }}
        >
          <Button 
            size="lg"
            className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-xl px-12 py-6 rounded-full transform hover:scale-110 transition-all duration-300"
          >
            <Play className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            Experience Now
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </motion.div>

        {/* Visual Stats */}
        <div className="visual-stats">
          <VisualStats />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <ArrowDown className="w-8 h-8 text-cyan-400 animate-bounce" />
            <div className="text-cyan-300 text-sm mt-2">Explore</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VisualHero;
