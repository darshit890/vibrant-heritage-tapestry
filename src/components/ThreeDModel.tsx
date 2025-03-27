
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Group } from 'three';
import gsap from 'gsap';

// Model component that renders and animates a 3D object
function Model({ scrollY }: { scrollY: number }) {
  const group = useRef<Group>(null);
  
  // Animation on scroll
  useEffect(() => {
    if (!group.current) return;
    
    gsap.to(group.current.rotation, {
      y: scrollY * 0.01,
      duration: 1,
      ease: "power2.out"
    });
    
    gsap.to(group.current.position, {
      y: Math.sin(scrollY * 0.01) * 0.5,
      duration: 1,
      ease: "sine.inOut"
    });
  }, [scrollY]);
  
  // Continuous gentle rotation
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.003;
    }
  });
  
  return (
    <group ref={group} dispose={null} scale={1.2}>
      {/* Taj Mahal-inspired structure using basic geometries */}
      <group>
        {/* Main dome */}
        <mesh position={[0, 2, 0]}>
          <sphereGeometry args={[1.2, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#f5f5f5" metalness={0.2} roughness={0.3} />
        </mesh>
        
        {/* Base structure */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[4, 2, 4]} />
          <meshStandardMaterial color="#f0f0f0" metalness={0.1} roughness={0.2} />
        </mesh>
        
        {/* Four minarets */}
        <mesh position={[-1.8, 1.5, -1.8]}>
          <cylinderGeometry args={[0.3, 0.4, 3, 16]} />
          <meshStandardMaterial color="#e0e0e0" metalness={0.1} roughness={0.3} />
        </mesh>
        <mesh position={[1.8, 1.5, -1.8]}>
          <cylinderGeometry args={[0.3, 0.4, 3, 16]} />
          <meshStandardMaterial color="#e0e0e0" metalness={0.1} roughness={0.3} />
        </mesh>
        <mesh position={[-1.8, 1.5, 1.8]}>
          <cylinderGeometry args={[0.3, 0.4, 3, 16]} />
          <meshStandardMaterial color="#e0e0e0" metalness={0.1} roughness={0.3} />
        </mesh>
        <mesh position={[1.8, 1.5, 1.8]}>
          <cylinderGeometry args={[0.3, 0.4, 3, 16]} />
          <meshStandardMaterial color="#e0e0e0" metalness={0.1} roughness={0.3} />
        </mesh>
        
        {/* Small decorative domes on minarets */}
        <mesh position={[-1.8, 3.2, -1.8]}>
          <sphereGeometry args={[0.4, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#f5f5f5" metalness={0.2} roughness={0.3} />
        </mesh>
        <mesh position={[1.8, 3.2, -1.8]}>
          <sphereGeometry args={[0.4, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#f5f5f5" metalness={0.2} roughness={0.3} />
        </mesh>
        <mesh position={[-1.8, 3.2, 1.8]}>
          <sphereGeometry args={[0.4, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#f5f5f5" metalness={0.2} roughness={0.3} />
        </mesh>
        <mesh position={[1.8, 3.2, 1.8]}>
          <sphereGeometry args={[0.4, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#f5f5f5" metalness={0.2} roughness={0.3} />
        </mesh>
        
        {/* Add decorative elements */}
        <mesh position={[0, 3.2, 0]}>
          <sphereGeometry args={[0.4, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#ffd700" metalness={0.6} roughness={0.2} />
        </mesh>
        
        {/* Add reflection pool */}
        <mesh position={[0, -1.2, 0]} rotation={[Math.PI/2, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#8eb8e5" metalness={0.8} roughness={0.1} />
        </mesh>
      </group>
    </group>
  );
}

// Main component that wraps the 3D scene
const ThreeDModel = ({ scrollY }: { scrollY: number }) => {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 3, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#ffd700" />
        <Model scrollY={scrollY} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} autoRotateSpeed={0.5} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
