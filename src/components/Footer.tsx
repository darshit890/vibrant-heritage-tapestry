
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone, Heart, Youtube, Linkedin, BookOpen, Calendar, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

// Create custom icon components for the missing icons
const Utensils = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

const Music = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="relative overflow-hidden pt-20">
      {/* Decorative Patterns */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparentpng.com/thumb/india/incredible-india-tourism-logo-png-7.png')] bg-repeat bg-center pointer-events-none"></div>
      
      {/* Colorful Top Border */}
      <div className="h-2 w-full bg-gradient-to-r from-india-saffron via-white to-india-green"></div>
      
      {/* Main Footer Content */}
      <div className="bg-gradient-to-b from-india-blue/95 to-india-blue/99 text-white py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          {/* Heritage-inspired decorative element */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 rounded-full bg-india-gold flex items-center justify-center border-4 border-white">
              <span className="font-yatra text-2xl text-india-blue">भारत</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pt-4">
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-2xl font-yatra text-india-gold flex items-center gap-2">
                <span className="w-8 h-1 bg-india-gold inline-block"></span>
                Vibrant Heritage
              </h3>
              <p className="text-white/80 max-w-xs">
                Celebrating the rich cultural tapestry and timeless traditions of India's diverse heritage.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-white/70 text-sm mb-4">Connect with us on social media</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-india-gold hover:text-white transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-india-gold hover:text-white transition-colors">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-india-gold hover:text-white transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-india-gold hover:text-white transition-colors">
                    <Youtube size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-india-gold hover:text-white transition-colors">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="text-india-gold font-semibold mb-6 flex items-center gap-2">
                <span className="w-4 h-1 bg-india-gold inline-block"></span>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Heritage', path: '/heritage' },
                  { name: 'Culture', path: '/culture' },
                  { name: 'Gallery', path: '/gallery' },
                  { name: 'Contact', path: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/80 hover:text-india-gold transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-india-gold transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-2">
              <h4 className="text-india-gold font-semibold mb-6 flex items-center gap-2">
                <span className="w-4 h-1 bg-india-gold inline-block"></span>
                Explore
              </h4>
              <ul className="space-y-3">
                {[
                  { name: 'Architecture', icon: <Landmark size={14} /> },
                  { name: 'Art Forms', icon: <BookOpen size={14} /> },
                  { name: 'Festivals', icon: <Calendar size={14} /> },
                  { name: 'Cuisine', icon: <Utensils size={14} /> },
                  { name: 'Music', icon: <Music size={14} /> }
                ].map((item) => (
                  <li key={item.name}>
                    <a 
                      href="#" 
                      className="text-white/80 hover:text-india-gold transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-india-gold transition-all"></span>
                      <span className="flex items-center gap-1.5">
                        {item.icon}
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-4">
              <h4 className="text-india-gold font-semibold mb-6 flex items-center gap-2">
                <span className="w-4 h-1 bg-india-gold inline-block"></span>
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-india-gold shrink-0 mt-1" size={18} />
                  <span className="text-white/80">
                    Cultural Heritage Center, <br />
                    New Delhi, India - 110001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-india-gold shrink-0" size={18} />
                  <a href="mailto:info@vibrantheritage.org" className="text-white/80 hover:text-india-gold transition-colors">
                    info@vibrantheritage.org
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-india-gold shrink-0" size={18} />
                  <a href="tel:+911234567890" className="text-white/80 hover:text-india-gold transition-colors">
                    +91 123 456 7890
                  </a>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-white/80 text-sm">Subscribe to our newsletter for updates on cultural events and heritage conservation initiatives.</p>
                <form className="mt-4 flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1 py-2 px-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-india-gold/50 text-sm"
                  />
                  <button 
                    type="submit" 
                    className="py-2 px-4 rounded-lg bg-india-gold text-white text-sm font-medium hover:bg-india-gold/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/60">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="text-india-gold text-sm font-medium mb-2">Heritage Sites</h5>
                <p className="text-white/70 text-xs">Explore India's UNESCO World Heritage sites and historical monuments</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="text-india-gold text-sm font-medium mb-2">Cultural Events</h5>
                <p className="text-white/70 text-xs">Discover festivals, performances, and exhibitions across the country</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="text-india-gold text-sm font-medium mb-2">Preservation Efforts</h5>
                <p className="text-white/70 text-xs">Learn about initiatives to protect and preserve India's cultural legacy</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm">
              <p>© {currentYear} Vibrant Heritage. All rights reserved.</p>
              <span className="hidden md:inline">•</span>
              <p className="flex items-center gap-1">
                Made with <Heart size={14} className="text-india-saffron" /> for India's cultural legacy
              </p>
            </div>
            
            {/* Traditional Pattern Border */}
            <div className="mt-8 h-4 bg-[url('https://www.transparentpng.com/thumb/india/king-india-png-35.png')] bg-repeat-x opacity-20"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
