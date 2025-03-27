
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, PresentationControls } from '@react-three/drei';
import TajMahalModel from './TajMahalModel';

const ThreeDScene = ({ scrollY = 0 }: { scrollY?: number }) => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-india-saffron"></div>
        </div>
      }>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 2, 10], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={1} 
            castShadow 
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 200 }}
          >
            <TajMahalModel scrollY={scrollY} />
          </PresentationControls>
          
          <OrbitControls 
            enablePan={false} 
            enableZoom={true} 
            minPolarAngle={Math.PI / 6} 
            maxPolarAngle={Math.PI / 2} 
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default ThreeDScene;
