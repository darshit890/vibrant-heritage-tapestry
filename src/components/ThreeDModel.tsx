
import { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Html } from '@react-three/drei';
import { Group } from 'three';
import gsap from 'gsap';

// Sketchfab 3D Model component
function TajMahalModel({ scrollY }: { scrollY: number }) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF('https://sketchfab.com/models/1c7e6ccc93d74681ae74c3d71c252789/download');
  const [isLoading, setIsLoading] = useState(true);
  
  // Set model to proper scale and position
  useEffect(() => {
    if (scene) {
      scene.scale.set(0.01, 0.01, 0.01); // Adjust scale as needed
      scene.position.set(0, -1, 0); // Adjust position as needed
      scene.rotation.set(0, 0, 0); // Adjust rotation as needed
      setIsLoading(false);
    }
  }, [scene]);
  
  // Animation on scroll
  useEffect(() => {
    if (!group.current) return;
    
    gsap.to(group.current.rotation, {
      y: scrollY * 0.01,
      duration: 1,
      ease: "power2.out"
    });
    
    gsap.to(group.current.position, {
      y: Math.sin(scrollY * 0.01) * 0.3 - 1, // Adjusted to keep model centered
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
      <primitive object={scene} />
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
