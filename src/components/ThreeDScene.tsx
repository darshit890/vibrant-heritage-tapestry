
import { Suspense } from 'react';

const ThreeDScene = ({ scrollY = 0 }: { scrollY?: number }) => {
  // The scrollY prop is received but will be handled differently with an iframe embed
  
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
            allowFullScreen 
            mozallowfullscreen="true" 
            webkitallowfullscreen="true" 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            xr-spatial-tracking="true"
            execution-while-out-of-viewport="true"
            execution-while-not-rendered="true"
            web-share="true"
            src="https://sketchfab.com/models/1c7e6ccc93d74681ae74c3d71c252789/embed"
            className="w-full h-full"
            style={{
              // Apply subtle rotation based on scroll position
              transform: `perspective(1000px) rotateY(${scrollY * 0.01}deg)`
            }}
          />
        </div>
      </Suspense>
    </div>
  );
};

export default ThreeDScene;
