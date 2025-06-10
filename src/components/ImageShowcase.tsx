
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// 3D Image Frame Component
function ImageFrame3D({ position, rotation, image, title }: {
  position: [number, number, number];
  rotation: [number, number, number];
  image: string;
  title: string;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      if (hovered) {
        meshRef.current.scale.setScalar(1.1 + Math.sin(state.clock.elapsedTime * 5) * 0.05);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group
        ref={meshRef}
        position={position}
        rotation={rotation}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Frame */}
        <mesh>
          <boxGeometry args={[3.2, 2.2, 0.1]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Screen */}
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[3, 2]} />
          <meshStandardMaterial>
            <primitive 
              attach="map" 
              object={new THREE.TextureLoader().load(image)} 
            />
          </meshStandardMaterial>
        </mesh>
        
        {/* Glow Effect */}
        <Sphere args={[2, 32, 32]} position={[0, 0, -0.5]}>
          <MeshDistortMaterial
            color="#00ffff"
            transparent
            opacity={hovered ? 0.3 : 0.1}
            distort={0.2}
            speed={2}
          />
        </Sphere>
      </group>
    </Float>
  );
}

// 3D Scene for Image Gallery
function GalleryScene3D() {
  const images = [
    { 
      src: "/lovable-uploads/ddbc9905-e1c3-4fd3-8e0b-9d9c26953481.png",
      title: "Building Exterior",
      position: [-4, 2, -2] as [number, number, number],
      rotation: [0, 0.3, 0] as [number, number, number]
    },
    {
      src: "/lovable-uploads/2cfae154-534d-4f4c-b685-c21810f0e69f.png",
      title: "Reception Area",
      position: [4, 1, -1] as [number, number, number],
      rotation: [0, -0.3, 0] as [number, number, number]
    },
    {
      src: "/lovable-uploads/319d623b-4de6-4a4f-a319-5a5d4e70e2c4.png",
      title: "Study Lounge",
      position: [0, -1, -3] as [number, number, number],
      rotation: [0, 0, 0] as [number, number, number]
    },
    {
      src: "/lovable-uploads/30b955b7-2351-41bb-8ff0-bfec4bd773a3.png",
      title: "Premium Room",
      position: [-2, -2, 0] as [number, number, number],
      rotation: [0, 0.5, 0] as [number, number, number]
    }
  ];

  return (
    <>
      <Environment preset="warehouse" />
      
      {images.map((img, index) => (
        <ImageFrame3D
          key={index}
          position={img.position}
          rotation={img.rotation}
          image={img.src}
          title={img.title}
        />
      ))}
      
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
    </>
  );
}

// Image Grid with Advanced Animations
function ImageGrid() {
  const images = [
    { src: "/lovable-uploads/ddbc9905-e1c3-4fd3-8e0b-9d9c26953481.png", title: "🏢 Modern Architecture" },
    { src: "/lovable-uploads/2cfae154-534d-4f4c-b685-c21810f0e69f.png", title: "🎯 Reception Excellence" },
    { src: "/lovable-uploads/319d623b-4de6-4a4f-a319-5a5d4e70e2c4.png", title: "📚 Study Spaces" },
    { src: "/lovable-uploads/30b955b7-2351-41bb-8ff0-bfec4bd773a3.png", title: "👑 Premium Rooms" },
    { src: "/lovable-uploads/4962d889-e7ac-40b9-a27e-444405a109e8.png", title: "🍽️ Dining Area" },
    { src: "/lovable-uploads/5e3d6542-3440-421e-8dd0-51e86507f418.png", title: "🎮 Recreation Zone" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((img, index) => (
        <motion.div
          key={index}
          className="group relative"
          initial={{ opacity: 0, y: 100, rotateX: 45 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ 
            duration: 1, 
            delay: index * 0.2,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.05,
            rotateY: 10,
            z: 50
          }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="relative bg-black/20 backdrop-blur-xl border border-cyan-500/30 rounded-3xl overflow-hidden group-hover:border-cyan-400/60 transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white">
                {img.title}
              </h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

const ImageShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    gsap.fromTo(".showcase-title", {
      scale: 0,
      rotation: 180
    }, {
      scale: 1,
      rotation: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.5)",
      scrollTrigger: {
        trigger: ".showcase-title",
        start: "top 80%"
      }
    });
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative py-20 bg-gradient-to-br from-purple-900 via-black to-cyan-900 overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <GalleryScene3D />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Visual Title */}
        <div className="text-center mb-16">
          <motion.div 
            className="showcase-title"
            style={{ y }}
          >
            <div className="text-8xl mb-6">🏨✨🌟</div>
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-8">
              EXPERIENCE
            </h2>
            <div className="text-4xl md:text-6xl text-cyan-300 font-light">
              Don't Read • Just See
            </div>
          </motion.div>
        </div>

        {/* Image Grid */}
        <ImageGrid />

        {/* Visual Features */}
        <motion.div 
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {[
            { emoji: "🏠", number: "500+", label: "Happy Residents" },
            { emoji: "⭐", number: "4.9", label: "Google Rating" },
            { emoji: "🛡️", number: "24/7", label: "Security" },
            { emoji: "❤️", number: "100%", label: "Satisfaction" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="group text-center"
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-6xl mb-4 group-hover:animate-bounce">{item.emoji}</div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                {item.number}
              </div>
              <div className="text-cyan-300 text-sm font-medium">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImageShowcase;
