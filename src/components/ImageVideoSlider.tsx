
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Array of authentic India images
const images = [
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200", // Taj Mahal
  "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200", // Hawa Mahal
  "https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=1200", // Varanasi ghats
  "https://images.unsplash.com/photo-1587295656906-b5ab0e32410a?q=80&w=1200", // Kerala backwaters
  "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200", // Golden Temple
];

const videos = [
  "https://v3.cdnpk.net/videvo_files/video/free/2019-11/large_watermarked/190301_1_25_11_preview.mp", // Indian dancers
];

const ImageVideoSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    
    // Initial animation
    gsap.fromTo(slider.children, 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        stagger: 0.2,
        ease: "power3.out"
      }
    );
    
    // Create scroll-triggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: slider,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
      }
    });
    
    tl.to(slider, {
      x: "-10%",
      rotate: 5,
      duration: 2
    }).to(slider, {
      x: "10%",
      rotate: -5,
      duration: 2
    }).to(slider, {
      x: "0%",
      rotate: 0,
      duration: 2
    });
    
    // Auto slideshow
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveIndex(prev => (prev + 1) % (images.length + videos.length));
      }
    }, 5000);
    
    return () => {
      clearInterval(interval);
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, [isHovering]);
  
  // Interactive hover effects
  const handleMouseEnter = () => {
    setIsHovering(true);
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        scale: 1.05,
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
        duration: 0.5
      });
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        scale: 1,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        duration: 0.5
      });
    }
  };
  
  const handleClick = () => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        rotate: "+=360",
        duration: 1,
        ease: "power2.out"
      });
      
      setActiveIndex(prev => (prev + 1) % (images.length + videos.length));
    }
  };
  
  const isVideo = activeIndex >= images.length;
  const videoIndex = activeIndex - images.length;
  const imageIndex = isVideo ? 0 : activeIndex;
  
  return (
    <div 
      ref={sliderRef}
      className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-transform"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {isVideo ? (
        <div className="absolute inset-0 bg-black">
          <video 
            src={videos[videoIndex]} 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="absolute inset-0">
          <img 
            src={images[imageIndex]} 
            alt={`India Heritage ${imageIndex}`} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
        <div className="flex justify-center space-x-2">
          {[...Array(images.length + videos.length)].map((_, i) => (
            <button 
              key={i} 
              className={`w-3 h-3 rounded-full ${i === activeIndex ? 'bg-white' : 'bg-white/30'}`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(i);
              }}
            />
          ))}
        </div>
        <div className="text-white text-center mt-2 font-medium">
          {isVideo ? "Traditional Indian Dance" : 
            activeIndex === 0 ? "Taj Mahal - A Symbol of Eternal Love" :
            activeIndex === 1 ? "Hawa Mahal - The Palace of Winds" :
            activeIndex === 2 ? "Varanasi - The Spiritual Capital of India" :
            activeIndex === 3 ? "Kerala Backwaters - God's Own Country" :
            "Golden Temple - The Spiritual Center of Sikhism"}
        </div>
      </div>
    </div>
  );
};

export default ImageVideoSlider;
