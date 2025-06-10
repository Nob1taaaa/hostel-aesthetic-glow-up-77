
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Environment, Text3D, MeshDistortMaterial, Html, Sphere } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { Crown, Star, Users, Wifi, Zap, Shield } from "lucide-react";

// 3D Room Model
function Room3D({ position, roomData, isActive }: {
  position: [number, number, number];
  roomData: any;
  isActive: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      if (isActive || hovered) {
        groupRef.current.scale.setScalar(1.2 + Math.sin(state.clock.elapsedTime * 3) * 0.05);
      } else {
        groupRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group
        ref={groupRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Room Base */}
        <mesh>
          <boxGeometry args={[2, 1.5, 2]} />
          <meshStandardMaterial 
            color={isActive ? "#00ffff" : "#1a1a2e"}
            metalness={0.8}
            roughness={0.2}
            emissive={isActive ? "#003344" : "#000011"}
          />
        </mesh>
        
        {/* Room Details */}
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[2.1, 0.1, 2.1]} />
          <meshStandardMaterial 
            color={roomData.color}
            emissive={roomData.color}
            emissiveIntensity={0.3}
          />
        </mesh>
        
        {/* Floating Info Card */}
        <Html center position={[0, 2, 0]}>
          <motion.div
            className="w-48 bg-black/80 backdrop-blur-xl border border-cyan-500/50 rounded-2xl p-4 text-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: hovered || isActive ? 1 : 0,
              scale: hovered || isActive ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-3xl mb-2">{roomData.emoji}</div>
            <h3 className="text-white font-bold text-lg mb-2">{roomData.title}</h3>
            <div className="text-2xl text-cyan-400 font-black mb-3">₹{roomData.price}</div>
            <div className="flex justify-center space-x-2">
              {roomData.features.map((feature: string, index: number) => (
                <div key={index} className="text-xs bg-cyan-500/20 rounded-full px-2 py-1 text-cyan-300">
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>
        </Html>
        
        {/* Energy Field Effect */}
        <Sphere args={[1.5, 32, 32]}>
          <MeshDistortMaterial
            color={roomData.color}
            transparent
            opacity={hovered ? 0.3 : 0.1}
            distort={0.4}
            speed={3}
          />
        </Sphere>
      </group>
    </Float>
  );
}

// Room Selector with Visual Cards
function RoomSelector({ rooms, activeRoom, setActiveRoom }: {
  rooms: any[];
  activeRoom: number;
  setActiveRoom: (index: number) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {rooms.map((room, index) => (
        <motion.div
          key={index}
          className={`group cursor-pointer ${activeRoom === index ? 'scale-110' : ''}`}
          whileHover={{ scale: 1.05, y: -5 }}
          onClick={() => setActiveRoom(index)}
        >
          <div className={`relative w-64 h-80 rounded-3xl overflow-hidden transition-all duration-300 ${
            activeRoom === index 
              ? 'border-2 border-cyan-400 shadow-2xl shadow-cyan-400/50' 
              : 'border border-cyan-500/30'
          }`}>
            <img 
              src={room.image} 
              alt={room.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            <div className="absolute top-4 right-4">
              <div className={`text-4xl ${activeRoom === index ? 'animate-bounce' : ''}`}>
                {room.emoji}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center mb-2">
                <room.icon className="w-6 h-6 text-cyan-400 mr-2" />
                <h3 className="text-xl font-bold">{room.title}</h3>
              </div>
              
              <div className="text-3xl font-black text-cyan-400 mb-3">
                ₹{room.price}<span className="text-sm font-normal">/month</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {room.features.map((feature: string, idx: number) => (
                  <span key={idx} className="text-xs bg-cyan-500/20 rounded-full px-3 py-1 text-cyan-300">
                    {feature}
                  </span>
                ))}
              </div>
              
              {activeRoom === index && (
                <motion.button
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 rounded-full font-bold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now 🚀
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const Visual3DRooms = () => {
  const [activeRoom, setActiveRoom] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const rooms = [
    {
      title: "Executive Single",
      price: "15000",
      emoji: "👑",
      icon: Crown,
      color: "#FFD700",
      image: "/lovable-uploads/30b955b7-2351-41bb-8ff0-bfec4bd773a3.png",
      features: ["AC", "WiFi", "Study Table", "Premium"]
    },
    {
      title: "Deluxe Sharing",
      price: "12000", 
      emoji: "⭐",
      icon: Users,
      color: "#00FFFF",
      image: "/lovable-uploads/92b80640-a417-464d-b653-d82c9d773183.png",
      features: ["AC", "WiFi", "2 Beds", "Comfort"]
    },
    {
      title: "Economy Triple",
      price: "8000",
      emoji: "🏠",
      icon: Star,
      color: "#FF6B6B",
      image: "/lovable-uploads/0280c22c-7236-4ab4-a268-9008bf8fb916.png",
      features: ["Fan", "WiFi", "3 Beds", "Budget"]
    }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    gsap.fromTo(".rooms-title", {
      rotationX: 90,
      opacity: 0
    }, {
      rotationX: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".rooms-title",
        start: "top 80%"
      }
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative py-20 bg-gradient-to-br from-black via-purple-900 to-cyan-900 overflow-hidden"
    >
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <Environment preset="night" />
          
          {rooms.map((room, index) => (
            <Room3D
              key={index}
              position={[
                (index - 1) * 4,
                Math.sin(index * 2) * 2,
                -2
              ] as [number, number, number]}
              roomData={room}
              isActive={activeRoom === index}
            />
          ))}
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
          
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#00ffff" />
          <pointLight position={[-10, -10, -10]} intensity={1.5} color="#ff00ff" />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Visual Title */}
        <motion.div 
          className="rooms-title text-center mb-16"
          style={{ y }}
        >
          <div className="text-8xl mb-6">🏠✨🎯</div>
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-8">
            ROOMS
          </h2>
          <div className="text-4xl md:text-6xl text-cyan-300 font-light mb-4">
            Choose Your Space
          </div>
          <div className="text-2xl text-purple-300">
            👆 Click • 👀 See • ❤️ Love
          </div>
        </motion.div>

        {/* Room Selector */}
        <RoomSelector 
          rooms={rooms}
          activeRoom={activeRoom}
          setActiveRoom={setActiveRoom}
        />

        {/* Room Features Visualization */}
        <motion.div 
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {[
            { emoji: "❄️", text: "AC Rooms", desc: "Cool Comfort" },
            { emoji: "📶", text: "Ultra WiFi", desc: "High Speed" },
            { emoji: "🛡️", text: "Secure", desc: "24/7 Safety" },
            { emoji: "🧹", text: "Clean", desc: "Daily Service" }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="group text-center"
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-6xl mb-4 group-hover:animate-pulse">{feature.emoji}</div>
              <div className="text-2xl font-bold text-white mb-2">{feature.text}</div>
              <div className="text-cyan-300">{feature.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Visual3DRooms;
