
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // GSAP animations for epic hero section
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.from(".hero-bg-element", { 
      opacity: 0, 
      scale: 0.8, 
      duration: 1.5, 
      stagger: 0.2,
      ease: "elastic.out(1, 0.75)" 
    })
    .from(headingRef.current, { 
      y: 100, 
      opacity: 0, 
      duration: 1.2,
      skewY: 5 
    }, "-=1")
    .from(subheadingRef.current, { 
      y: 50, 
      opacity: 0, 
      duration: 1 
    }, "-=0.8")
    .from(ctaRef.current?.children, { 
      y: 30, 
      opacity: 0, 
      duration: 0.8, 
      stagger: 0.2 
    }, "-=0.6")
    .from(".scroll-indicator", { 
      y: -20, 
      opacity: 0, 
      duration: 0.5 
    }, "-=0.3");

    // Parallax effect for background elements
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach((el) => {
      const speed = parseFloat((el as HTMLElement).dataset.speed || '0.05');
      
      gsap.to(el, {
        y: `${speed * 100}%`,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Decorative elements animation
    gsap.to(".floating-decor", {
      y: "20px",
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3
    });

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Epic Background with multiple layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" 
            alt="India Heritage Background" 
            className="absolute w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-india-saffron/20 rounded-full blur-3xl hero-bg-element parallax" data-speed="0.02"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-india-green/20 rounded-full blur-3xl hero-bg-element parallax" data-speed="0.03"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-india-blue/10 rounded-full blur-2xl hero-bg-element parallax" data-speed="0.05"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-india-gold/15 rounded-full blur-3xl hero-bg-element parallax" data-speed="0.04"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute w-full h-full pointer-events-none" ref={decorRef}>
        {/* Traditional patterns */}
        <div className="absolute top-0 left-0 w-24 h-64 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1557857560-53e9728d5757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
            alt="Decorative pattern" 
            className="w-full h-full object-cover parallax" 
            data-speed="0.04"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-64 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1584963307457-85a05be84ce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
            alt="Decorative pattern" 
            className="w-full h-full object-cover parallax" 
            data-speed="0.03"
          />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 border-2 border-india-gold opacity-20 rounded-full parallax floating-decor" data-speed="0.04"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border border-india-saffron opacity-30 rounded-full parallax floating-decor" style={{ animationDirection: 'reverse' }} data-speed="0.06"></div>
        <div className="absolute top-1/2 left-1/5 w-8 h-8 bg-india-gold/30 rounded-full parallax floating-decor" data-speed="0.07"></div>
        
        {/* Traditional symbols */}
        <div className="absolute top-20 right-[20%] w-12 h-12 opacity-20 rotating parallax" data-speed="0.05">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Om_symbol.svg/640px-Om_symbol.svg.png" 
            alt="Om symbol" 
            className="w-full h-full object-contain" 
          />
        </div>
        <div className="absolute bottom-20 left-[20%] w-12 h-12 opacity-20 rotating parallax" data-speed="0.03">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/010/160/767/original/chakra-wheel-icon-sign-symbol-design-free-png.png" 
            alt="Chakra wheel" 
            className="w-full h-full object-contain" 
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="inline-block px-4 py-1 rounded-full bg-india-saffron/10 text-india-saffron text-sm font-medium animate-fade-in">Discover India's Legacy</span>
          </div>
          
          <h1 
            ref={headingRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance"
          >
            <span className="block">Experience India's</span>
            <span className="block text-gradient-primary">Timeless Wonder</span>
          </h1>
          
          <p 
            ref={subheadingRef}
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto"
          >
            Embark on a mesmerizing journey through India's rich cultural tapestry, ancient traditions, and architectural marvels that have stood the test of time.
          </p>
          
          <div ref={ctaRef} className="space-x-4">
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
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce scroll-indicator">
        <div className="w-8 h-12 rounded-full border-2 border-gray-400 flex justify-center p-1">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
