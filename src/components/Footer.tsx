
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-india-blue/95 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern-dark opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-yatra text-india-gold">Vibrant Heritage</h3>
            <p className="text-white/80 max-w-xs">
              Celebrating the rich cultural tapestry and timeless traditions of India's diverse heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-india-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-india-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-india-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-india-gold font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Heritage', 'Culture', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/80 hover:text-india-gold transition-colors hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-india-gold font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {['Architecture', 'Art Forms', 'Festivals', 'Cuisine', 'Music'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-india-gold transition-colors hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-india-gold font-semibold mb-4">Subscribe</h4>
            <p className="text-white/80 mb-4">Stay updated with our latest articles and news.</p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full py-3 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-india-gold/50"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 rounded-lg bg-india-gold text-white font-medium hover:bg-india-gold/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60">
          <p>© {new Date().getFullYear()} Vibrant Heritage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
