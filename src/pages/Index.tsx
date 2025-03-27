
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CulturalShowcase from '../components/CulturalShowcase';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for scroll animations
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
      window.removeEventListener('scroll', handleScroll);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <HeroSection scrollY={scrollY} />
        <CulturalShowcase />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
