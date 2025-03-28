
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls, Environment, ContactShadows } from '@react-three/drei';
import TajMahalModel from './TajMahalModel';

const ThreeDScene = ({ scrollY = 0 }: { scrollY?: number }) => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-india-saffron"></div>
        </div>
      }>
        <Canvas 
          shadows 
          dpr={[1, 2]} 
          camera={{ position: [5, 5, 10], fov: 40 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          {/* Enhanced lighting for more realism */}
          <ambientLight intensity={0.4} />
          <spotLight 
            position={[10, 15, 10]} 
            angle={0.3} 
            penumbra={1} 
            intensity={1.5} 
            castShadow 
            shadow-mapSize={[2048, 2048]}
          />
          <spotLight 
            position={[-10, 10, -10]} 
            angle={0.3} 
            penumbra={1} 
            intensity={0.8} 
            castShadow 
          />
          <pointLight position={[0, 10, 0]} intensity={0.5} />
          
          {/* Environment creates realistic reflections */}
          <Environment preset="sunset" />
          
          <PresentationControls
            global
            rotation={[0, -Math.PI / 6, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 200 }}
          >
            <TajMahalModel scrollY={scrollY} />
            
            {/* Contact shadows for a more grounded look */}
            <ContactShadows 
              position={[0, -1.2, 0]} 
              opacity={0.6} 
              scale={10} 
              blur={2} 
              far={10} 
            />
          </PresentationControls>
          
          <OrbitControls 
            enablePan={false} 
            enableZoom={true} 
            minPolarAngle={Math.PI / 6} 
            maxPolarAngle={Math.PI / 2} 
            autoRotate={false}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ThreeDScene;
