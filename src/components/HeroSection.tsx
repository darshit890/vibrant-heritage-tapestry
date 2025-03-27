
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import ThreeDModel from './ThreeDModel';

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HeroSection = ({ scrollY }: { scrollY: number }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const modelContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initial animations for epic hero section
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
    }, "-=0.3")
    .from(modelContainerRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      ease: "back.out(1.7)"
    }, "-=0.5");

    // Scroll-based animations
    // Create scroll-triggered animations for heading
    gsap.to(headingRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "center top",
        scrub: true
      },
      scale: 0.9,
      letterSpacing: "2px",
      opacity: 0.8,
      filter: "blur(2px)"
    });
    
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

    // 3D model container animation
    gsap.to(modelContainerRef.current, {
      scrollTrigger: {
        trigger: modelContainerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
      },
      rotation: 360,
      duration: 2,
      ease: "none"
    });

    // Interactive scroll-triggered content sections
    const contentSections = sectionRefs.current;
    contentSections.forEach((section, index) => {
      if (!section) return;
      
      // Create a staggered reveal effect for each content section
      gsap.from(section.querySelectorAll('.content-item'), {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
      
      // Add a special effect to the icon
      gsap.to(section.querySelector('.section-icon'), {
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "center 50%",
          scrub: true
        },
        rotation: 360,
        scale: 1.2,
        duration: 1,
        ease: "power1.inOut"
      });
    });

    // Scroll indicator interaction
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', () => {
        gsap.to(window, {
          duration: 1, 
          scrollTo: { y: window.innerHeight, autoKill: false },
          ease: "power2.inOut"
        });
      });
    }

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (scrollIndicator) {
        scrollIndicator.removeEventListener('click', () => {});
      }
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      
      // Enhanced interactive parallax effect
      const elements = hero.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0.05');
        const xOffset = (x - 0.5) * speed * 100;
        const yOffset = (y - 0.5) * speed * 100;
        (el as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
      
      // Add subtle rotation to decorative elements
      const decorElements = hero.querySelectorAll('.floating-decor');
      decorElements.forEach((el) => {
        const rotateX = (y - 0.5) * 10;
        const rotateY = (x - 0.5) * 10;
        (el as HTMLElement).style.transform += ` rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20"
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
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl hero-bg-element parallax" data-speed="0.06"></div>
        <div className="absolute bottom-1/3 left-2/3 w-56 h-56 bg-pink-500/10 rounded-full blur-2xl hero-bg-element parallax" data-speed="0.07"></div>
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
        <div className="absolute top-1/3 right-1/5 w-12 h-12 border-2 border-india-blue opacity-20 rounded-full parallax floating-decor" data-speed="0.05"></div>
        <div className="absolute bottom-1/4 left-1/4 w-10 h-10 bg-india-green/20 rounded-full parallax floating-decor" data-speed="0.08"></div>
        
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
        <div className="absolute top-[30%] left-[15%] w-14 h-14 opacity-20 rotating parallax" data-speed="0.04">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/011/571/348/original/mandala-circle-round-ornament-traditional-free-png.png" 
            alt="Mandala" 
            className="w-full h-full object-contain" 
          />
        </div>
        <div className="absolute bottom-[35%] right-[25%] w-10 h-10 opacity-20 rotating parallax" data-speed="0.06">
          <img 
            src="https://www.iconpacks.net/icons/2/free-lotus-icon-1809-thumb.png" 
            alt="Lotus" 
            className="w-full h-full object-contain" 
          />
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-10 items-center">
          <div className="text-center mb-16">
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
          
          <div 
            className="relative h-[600px] w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
            ref={modelContainerRef}
          >
            <div className="absolute inset-0 w-full h-full">
              <ThreeDModel scrollY={scrollY} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Interactive content sections that reveal on scroll */}
      <div className="w-full mt-24 mb-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Content Section 1 */}
          <div 
            ref={(el) => (sectionRefs.current[0] = el)}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg"
          >
            <div className="section-icon bg-india-saffron/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3127/3127166.png" 
                alt="Heritage Icon" 
                className="w-10 h-10 content-item" 
              />
            </div>
            <h3 className="text-xl font-bold text-center mb-3 content-item">Rich Heritage</h3>
            <p className="text-gray-700 text-center content-item">
              Discover centuries of history through magnificent monuments, ancient temples, and royal palaces.
            </p>
          </div>
          
          {/* Content Section 2 */}
          <div 
            ref={(el) => (sectionRefs.current[1] = el)}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg"
          >
            <div className="section-icon bg-india-green/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3588/3588200.png" 
                alt="Culture Icon" 
                className="w-10 h-10 content-item" 
              />
            </div>
            <h3 className="text-xl font-bold text-center mb-3 content-item">Vibrant Culture</h3>
            <p className="text-gray-700 text-center content-item">
              Experience the kaleidoscope of traditions, festivals, music, and dance that define India's soul.
            </p>
          </div>
          
          {/* Content Section 3 */}
          <div 
            ref={(el) => (sectionRefs.current[2] = el)}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg"
          >
            <div className="section-icon bg-india-blue/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/2413/2413392.png" 
                alt="Cuisine Icon" 
                className="w-10 h-10 content-item" 
              />
            </div>
            <h3 className="text-xl font-bold text-center mb-3 content-item">Divine Cuisine</h3>
            <p className="text-gray-700 text-center content-item">
              Savor the diverse flavors and aromas of authentic Indian dishes that tantalize your taste buds.
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - now interactive */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce scroll-indicator cursor-pointer">
        <div className="w-8 h-12 rounded-full border-2 border-gray-400 flex justify-center p-1">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
