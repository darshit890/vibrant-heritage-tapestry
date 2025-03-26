
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      // Parallax effect
      const elements = hero.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0.05');
        const xOffset = (x - 0.5) * speed * 100;
        const yOffset = (y - 0.5) * speed * 100;
        (el as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pattern-light"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-india-saffron/20 rounded-full blur-3xl parallax" data-speed="0.02"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-india-green/20 rounded-full blur-3xl parallax" data-speed="0.03"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-india-blue/10 rounded-full blur-2xl parallax" data-speed="0.05"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-24 h-24 border-2 border-india-gold opacity-20 rounded-full parallax animate-rotate-slow" data-speed="0.04"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border border-india-saffron opacity-30 rounded-full parallax animate-rotate-slow" style={{ animationDirection: 'reverse' }} data-speed="0.06"></div>
        <div className="absolute top-1/2 left-1/5 w-8 h-8 bg-india-gold/30 rounded-full parallax animate-floating" data-speed="0.07"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="inline-block px-4 py-1 rounded-full bg-india-saffron/10 text-india-saffron text-sm font-medium animate-fade-in">Discover India's Legacy</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animate-delay-200 text-balance">
            <span className="block">Vibrant Heritage</span>
            <span className="block text-gradient-primary">Timeless Culture</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-300">
            Embark on a mesmerizing journey through India's rich cultural tapestry, ancient traditions, and architectural marvels that have stood the test of time.
          </p>
          
          <div className="space-x-4 animate-fade-in-up animate-delay-400">
            <a 
              href="#heritage" 
              className="inline-block px-6 py-3 rounded-full bg-india-saffron text-white font-medium transition-all hover:shadow-lg hover:shadow-india-saffron/20 hover:-translate-y-1"
            >
              Explore Heritage
            </a>
            <a 
              href="#gallery" 
              className="inline-block px-6 py-3 rounded-full bg-white border border-india-saffron text-india-saffron font-medium transition-all hover:shadow-lg hover:bg-india-saffron/5"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-gray-400 flex justify-center p-1">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-fade-in animate-delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
