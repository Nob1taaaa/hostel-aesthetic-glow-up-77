import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Text3D, Environment, Sparkles } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Users, Shield, Heart, Award, Star, Zap, Crown, Gem } from "lucide-react";
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// 3D Floating Elements with proper error handling
function FloatingElement({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && meshRef.current.rotation && meshRef.current.position) {
      try {
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
        meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
      } catch (error) {
        console.log('3D animation error:', error);
      }
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[0.5 * scale, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

// Simplified Scene3D component
function Scene3D() {
  return (
    <>
      <Environment preset="night" />
      <Sparkles count={50} scale={5} size={1} speed={0.3} />
      
      <FloatingElement position={[-2, 1, -2]} color="#ff6b6b" scale={0.8} />
      <FloatingElement position={[2, -1, -1]} color="#4ecdc4" scale={1.2} />
      <FloatingElement position={[0, 2, -3]} color="#45b7d1" scale={0.6} />
      <FloatingElement position={[-1, -1, -2]} color="#f9ca24" scale={0.9} />
      
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#4ecdc4" />
    </>
  );
}

// Error boundary for 3D Canvas
function Safe3DCanvas() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900"></div>;
  }

  try {
    return (
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} onError={() => setHasError(true)}>
        <Scene3D />
      </Canvas>
    );
  } catch (error) {
    console.log('Canvas error:', error);
    setHasError(true);
    return <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900"></div>;
  }
}

// Holographic Card Component
function HolographicCard({ feature, index, delay = 0 }: { feature: any, index: number, delay?: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, rotateX: 45 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 1, 
        delay: delay + index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        z: 50
      }}
      className="group relative perspective-1000"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-lg transition-all duration-500 transform group-hover:scale-110"></div>
      
      <div className="relative bg-black/30 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 transform-gpu transition-all duration-500 group-hover:border-cyan-400/50">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 rounded-3xl"></div>
        
        <motion.div 
          className="relative z-10 text-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
            <feature.icon className="w-10 h-10 text-cyan-400 group-hover:text-white transition-colors duration-300" />
          </div>
          
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4 group-hover:from-white group-hover:to-cyan-300 transition-all duration-300">
            {feature.title}
          </h3>
          
          <p className="text-cyan-300/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
            {feature.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Stats Counter Component
function StatsCounter({ number, label, icon, delay = 0 }: { number: string, label: string, icon: string, delay?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const target = parseInt(number.replace(/\D/g, ''));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0, rotateY: 180 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{ 
        duration: 1, 
        delay,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.1,
        rotateY: 10,
        z: 30
      }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-300"></div>
      
      <div className="relative bg-black/20 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 text-center group-hover:border-cyan-400/50 transition-all duration-300">
        <div className="text-4xl mb-3">{icon}</div>
        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
          {number.includes('+') ? `${count}+` : number.includes('%') ? `${count}%` : count}
        </div>
        <div className="text-cyan-300 font-medium group-hover:text-white transition-colors duration-300">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

const About3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: Users,
      title: "Vibrant Community",
      description: "Connect with like-minded students and professionals in our beautifully designed common spaces with cutting-edge technology."
    },
    {
      icon: Shield,
      title: "Premium Security",
      description: "Advanced 24/7 security systems with biometric access, AI surveillance, and smart monitoring for complete peace of mind."
    },
    {
      icon: Heart,
      title: "Luxury Comfort",
      description: "Experience hotel-grade amenities and services designed to exceed your expectations with futuristic living standards."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        },
        y: 100,
        opacity: 0,
        duration: 1
      });

      gsap.from(".about-description", {
        scrollTrigger: {
          trigger: ".about-description",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <motion.section 
      ref={containerRef}
      style={{ opacity }}
      className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-purple-900 overflow-hidden"
    >
      {/* 3D Background with error handling */}
      <div className="absolute inset-0 z-0">
        <Safe3DCanvas />
      </div>

      {/* Animated Background Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div 
            className="about-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-6 backdrop-blur-md border border-cyan-500/30">
              <Award className="w-6 h-6 text-cyan-400" />
              <span className="text-cyan-300 font-semibold">Award-Winning Experience</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-6">
              ABOUT US
            </h2>
            
            <div className="w-32 h-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          </motion.div>
          
          <motion.p 
            className="about-description text-2xl text-cyan-300/90 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Come, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 font-bold">"Experience the new way of living."</span>
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div 
            className="space-y-8"
            style={{ y }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-black/20 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8">
                <p className="text-lg text-cyan-300/90 leading-relaxed mb-6">
                  Raksha Hostels stands as one of Delhi's most <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold">luxurious yet affordable</span> accommodations, strategically located in the heart of Greater Noida. We take immense pride in our proximity to prestigious institutions like Heritage College and Red Square.
                </p>
                
                <p className="text-lg text-cyan-300/90 leading-relaxed">
                  We deliver exceptional smart amenities that every modern youth desires, combining <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-bold">comfort, technology, and style</span> in ways that redefine student living standards.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3D Visual Element */}
          <motion.div 
            className="relative h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative h-full rounded-3xl overflow-hidden border border-cyan-500/30 backdrop-blur-md">
              <img 
                src="/lovable-uploads/ddbc9905-e1c3-4fd3-8e0b-9d9c26953481.png" 
                alt="Raksha Hostel Building" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute top-6 left-6">
                <StatsCounter number="4.9" label="Rating" icon="⭐" delay={0.5} />
              </div>
              
              <div className="absolute bottom-6 right-6">
                <StatsCounter number="500+" label="Happy Residents" icon="🏠" delay={1} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <HolographicCard 
              key={index} 
              feature={feature} 
              index={index} 
              delay={0.5}
            />
          ))}
        </div>

        {/* Interior Showcase */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
              Modern Reception & Common Areas
            </h3>
            <p className="text-xl text-cyan-300/80">Experience luxury from the moment you step in</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "/lovable-uploads/2cfae154-534d-4f4c-b685-c21810f0e69f.png",
                title: "Reception Lounge",
                description: "24/7 friendly staff assistance"
              },
              {
                image: "/lovable-uploads/319d623b-4de6-4a4f-a319-5a5d4e70e2c4.png",
                title: "Study Areas",
                description: "Comfortable spaces for focused learning"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="group relative"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-lg transition-all duration-500"></div>
                
                <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
                      {item.title}
                    </h4>
                    <p className="text-cyan-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <StatsCounter number="500+" label="Happy Students" icon="🎓" delay={0.2} />
          <StatsCounter number="5" label="Years Experience" icon="🏆" delay={0.4} />
          <StatsCounter number="24" label="Hour Support" icon="💎" delay={0.6} />
          <StatsCounter number="100%" label="Satisfaction" icon="❤️" delay={0.8} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About3D;
