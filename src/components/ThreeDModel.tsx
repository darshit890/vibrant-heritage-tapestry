
import { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Html, useTexture } from '@react-three/drei';
import { Group, BoxGeometry, CylinderGeometry, SphereGeometry, MeshStandardMaterial, Color } from 'three';
import gsap from 'gsap';

// Custom Taj Mahal Model component
function TajMahalModel({ scrollY }: { scrollY: number }) {
  const group = useRef<Group>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Animation on scroll
  useEffect(() => {
    if (!group.current) return;
    
    gsap.to(group.current.rotation, {
      y: scrollY * 0.01,
      duration: 1,
      ease: "power2.out"
    });
    
    gsap.to(group.current.position, {
      y: Math.sin(scrollY * 0.01) * 0.3 - 1,
      duration: 1,
      ease: "sine.inOut"
    });
  }, [scrollY]);
  
  // Continuous gentle rotation
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.001;
    }
  });
  
  return (
    <group ref={group} position={[0, -1, 0]} scale={0.5}>
      {/* Main Central Dome */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[1.5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#f1f1f1" metalness={0.2} roughness={0.3} />
      </mesh>
      
      {/* Main Building Base */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[5, 2, 5]} />
        <meshStandardMaterial color="#f5f5f5" metalness={0.1} roughness={0.2} />
      </mesh>
      
      {/* Platform */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <boxGeometry args={[10, 1, 10]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      
      {/* Four corner minarets */}
      {[[-3.5, 0, -3.5], [3.5, 0, -3.5], [-3.5, 0, 3.5], [3.5, 0, 3.5]].map((pos, i) => (
        <group key={i} position={[pos[0], pos[1], pos[2]]}>
          <mesh position={[0, 2.5, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 5, 16]} />
            <meshStandardMaterial color="#f0f0f0" />
          </mesh>
          <mesh position={[0, 5.5, 0]}>
            <sphereGeometry args={[0.5, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#f0f0f0" />
          </mesh>
        </group>
      ))}
      
      {/* Front Entrance Arch */}
      <mesh position={[0, 1, 2.51]}>
        <boxGeometry args={[2, 3, 0.2]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>
      
      {/* Arch cutout */}
      <mesh position={[0, 1.2, 2.6]}>
        <cylinderGeometry args={[0.8, 0.8, 0.3, 32, 1, false, 0, Math.PI]} />
        <meshStandardMaterial color="#d0d0d0" side={2} />
      </mesh>
      
      {/* Decorative elements */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0, 3.2 + i * 0.2, 0]} rotation={[0, Math.PI * i / 8, 0]}>
          <torusGeometry args={[1.6 - i * 0.2, 0.05, 16, 32, Math.PI * 2]} />
          <meshStandardMaterial color="#e0e0e0" />
        </mesh>
      ))}
      
      {/* Reflection pool */}
      <mesh position={[0, -0.95, 6]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#77adcf" metalness={0.8} roughness={0.1} />
      </mesh>
    </group>
  );
}

// Loading fallback component
function LoadingFallback() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-india-gold border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-india-saffron text-lg font-medium">Loading Taj Mahal...</p>
      </div>
    </Html>
  );
}

// Main component that wraps the 3D scene
const ThreeDModel = ({ scrollY }: { scrollY: number }) => {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 3, 8], fov: 45 }}
        style={{ background: 'transparent' }}
        shadows
      >
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} castShadow />
        <Suspense fallback={<LoadingFallback />}>
          <TajMahalModel scrollY={scrollY} />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={false}
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 4} 
        />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
