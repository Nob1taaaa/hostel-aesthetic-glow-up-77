
import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function FloatingGeometry({ position, color, shape = 'sphere' }: { 
  position: [number, number, number];
  color: string;
  shape?: 'sphere' | 'box' | 'torus';
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'torus':
        return <torusGeometry args={[0.6, 0.2, 16, 100]} />;
      default:
        return <sphereGeometry args={[0.5, 32, 32]} />;
    }
  }, [shape]);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function InteractiveParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();
  
  const particleCount = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      
      // Mouse interaction
      const mouseInfluence = new THREE.Vector3(
        mouse.x * viewport.width,
        mouse.y * viewport.height,
        0
      );
      
      pointsRef.current.position.x = mouseInfluence.x * 0.1;
      pointsRef.current.position.y = mouseInfluence.y * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

const Interactive3DBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={['#000000', 15, 25]} />
        
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#ffffff"
        />
        
        <InteractiveParticles />
        
        <FloatingGeometry position={[-8, 3, -5]} color="#ff6b6b" shape="sphere" />
        <FloatingGeometry position={[8, -2, -3]} color="#4ecdc4" shape="box" />
        <FloatingGeometry position={[0, 5, -8]} color="#45b7d1" shape="torus" />
        <FloatingGeometry position={[-5, -3, -6]} color="#f9ca24" shape="sphere" />
        <FloatingGeometry position={[6, 2, -4]} color="#6c5ce7" shape="box" />
        <FloatingGeometry position={[3, -5, -7]} color="#fd79a8" shape="torus" />
      </Canvas>
    </div>
  );
};

export default Interactive3DBackground;
