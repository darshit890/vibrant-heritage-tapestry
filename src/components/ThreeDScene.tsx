
import { Suspense } from 'react';

const ThreeDScene = ({ scrollY = 0 }: { scrollY?: number }) => {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-india-saffron"></div>
        </div>
      }>
        <div className="sketchfab-embed-wrapper w-full h-full">
          <iframe 
            title="Taj Mahal" 
            frameBorder="0" 
            allowFullScreen={true}
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            src="https://sketchfab.com/models/1c7e6ccc93d74681ae74c3d71c252789/embed?autostart=1&ui_infos=0&ui_controls=0&ui_inspector=0"
            className="w-full h-full rounded-xl shadow-xl"
            style={{
              transform: `perspective(1000px) rotateY(${scrollY * 0.01}deg)`,
              border: 'none'
            }}
          />
        </div>
      </Suspense>
    </div>
  );
};

export default ThreeDScene;
