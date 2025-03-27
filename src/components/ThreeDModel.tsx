
import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { Group } from 'three';
import gsap from 'gsap';

// Model component that loads and animates the 3D object
function Model({ scrollY }: { scrollY: number }) {
  const group = useRef<Group>(null);
  // Using Taj Mahal model from Sketchfab
  const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/taj-mahal/model.gltf');
  
  // Animation on scroll
  useEffect(() => {
    if (!group.current) return;
    
    gsap.to(group.current.rotation, {
      y: scrollY * 0.1,
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
      group.current.rotation.y += 0.001;
    }
  });
  
  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} scale={0.02} />
    </group>
  );
}

// Main component that wraps the 3D scene
const ThreeDModel = ({ scrollY }: { scrollY: number }) => {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Model scrollY={scrollY} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
