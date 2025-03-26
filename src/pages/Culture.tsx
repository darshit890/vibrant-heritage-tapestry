
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Music, Utensils, MapPin, Calendar, Sparkles } from 'lucide-react';

const Culture = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
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
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-pattern-light">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-india-saffron/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-india-green/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 py-32">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                Vibrant <span className="text-gradient-primary">Cultural Tapestry</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in-up animate-delay-200">
                Immerse yourself in India's colorful festivals, diverse cuisines, classical and folk arts, music, dance, and traditional practices.
              </p>
            </div>
          </div>
        </section>

        {/* Festivals Section */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <span className="inline-block px-4 py-1 rounded-full bg-india-saffron/10 text-india-saffron text-sm font-medium mb-4">
                <Calendar className="inline-block mr-1 h-4 w-4" />
                Celebrations
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Colorful <span className="text-india-saffron">Festivals</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                India celebrates thousands of festivals each year, from grand national celebrations to intimate local traditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Diwali",
                  description: "The Festival of Lights celebrates the triumph of light over darkness with lamps, fireworks, and sweets.",
                  image: "https://images.unsplash.com/photo-1599661046289-e31897846e38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                  time: "October-November"
                },
                {
                  name: "Holi",
                  description: "Known as the Festival of Colors, it welcomes spring with vibrant colored powders and water.",
                  image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                  time: "March"
                },
                {
                  name: "Durga Puja",
                  description: "A celebration of goddess Durga with elaborate pandals, cultural performances, and community feasts.",
                  image: "https://images.unsplash.com/photo-1599661046289-e31897846e38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                  time: "September-October"
                },
              ].map((festival, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                    <img 
                      src={festival.image} 
                      alt={festival.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{festival.name}</h3>
                    <p className="text-gray-600 mb-4">{festival.description}</p>
                    <div className="flex items-center text-india-gold text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{festival.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Food and Cuisine */}
        <section className="py-20 bg-gradient-to-b from-white to-india-cream/30 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <span className="inline-block px-4 py-1 rounded-full bg-india-green/10 text-india-green text-sm font-medium mb-4">
                <Utensils className="inline-block mr-1 h-4 w-4" />
                Gastronomy
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Flavorful <span className="text-india-green">Cuisines</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                India's diverse culinary landscape offers a treasure trove of flavors, techniques, and traditional recipes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div>
                <div className="space-y-8">
                  {[
                    {
                      region: "North Indian",
                      description: "Known for rich, creamy curries, tandoori dishes, and bread varieties like naan and roti.",
                      specialties: ["Butter Chicken", "Rogan Josh", "Chole Bhature", "Biryani"]
                    },
                    {
                      region: "South Indian",
                      description: "Features rice-based dishes, coconut, tamarind, and curry leaves with distinctive dosas and idlis.",
                      specialties: ["Masala Dosa", "Idli Sambar", "Hyderabadi Biryani", "Appam"]
                    },
                    {
                      region: "East Indian",
                      description: "Emphasizes seafood, mustard oil, and panch phoron (five-spice blend) with subtle flavors.",
                      specialties: ["Macher Jhol", "Rasgulla", "Luchi", "Mishti Doi"]
                    },
                    {
                      region: "West Indian",
                      description: "Features coconut, peanuts, and varied spice combinations with both sweet and spicy elements.",
                      specialties: ["Dhokla", "Pav Bhaji", "Vada Pav", "Puran Poli"]
                    }
                  ].map((cuisine, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-india-gold">
                      <h3 className="text-xl font-bold mb-2">{cuisine.region} Cuisine</h3>
                      <p className="text-gray-600 mb-3">{cuisine.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cuisine.specialties.map((dish, i) => (
                          <span key={i} className="px-3 py-1 bg-india-cream/50 rounded-full text-sm">{dish}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Indian Cuisine"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Indian Cuisine"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Indian Cuisine"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt="Indian Cuisine"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Classical Arts Section */}
        <section className="py-20 bg-india-cream/30 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <span className="inline-block px-4 py-1 rounded-full bg-india-blue/10 text-india-blue text-sm font-medium mb-4">
                <Music className="inline-block mr-1 h-4 w-4" />
                Performing Arts
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Classical <span className="text-india-blue">Dance & Music</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                India's performing arts tradition spans millennia with sophisticated classical forms preserved through guru-shishya (teacher-student) lineages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-on-scroll">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-10 h-1 bg-india-gold inline-block"></span>
                  Classical Dance Forms
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "Bharatanatyam",
                      region: "Tamil Nadu",
                      description: "Characterized by bent legs, precise hand gestures, and expressive storytelling through facial expressions.",
                      features: ["Adavu movements", "Abhinaya expressions", "Nritta pure dance", "Nritya expressive dance"]
                    },
                    {
                      name: "Kathak",
                      region: "North India",
                      description: "Noted for its rapid pirouettes, intricate footwork, and subtle storytelling blend of Hindu and Islamic influences.",
                      features: ["Chakkar spins", "Tatkar footwork", "Hastak hand gestures", "Toda-Tukra compositions"]
                    },
                    {
                      name: "Odissi",
                      region: "Odisha",
                      description: "Recognized by the tribhangi posture (three body bends) and fluid, lyrical movements depicting temple sculptures.",
                      features: ["Tribhangi pose", "Chowk position", "Bhumi pranam", "Mangalacharan invocation"]
                    }
                  ].map((dance, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xl font-bold text-india-blue">{dance.name}</h4>
                          <p className="text-gray-500 text-sm">{dance.region}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-india-blue/10 text-india-blue text-xs">Classical</span>
                      </div>
                      <p className="text-gray-600 my-3">{dance.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {dance.features.map((feature, i) => (
                          <span key={i} className="px-2 py-1 bg-india-cream/50 rounded-full text-xs">{feature}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-10 h-1 bg-india-gold inline-block"></span>
                  Classical Music Traditions
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      name: "Hindustani Classical",
                      region: "North India",
                      description: "Emphasizes improvisation and exploring the raga in depth, with Persian and Islamic influences.",
                      features: ["Khayal", "Dhrupad", "Thumri", "Tarana"]
                    },
                    {
                      name: "Carnatic Music",
                      region: "South India",
                      description: "Focuses on structured compositions with elaborate rhythmic patterns and devotional themes.",
                      features: ["Kriti", "Varnam", "Tillana", "Ragam-Tanam-Pallavi"]
                    },
                    {
                      name: "Instrumental Music",
                      region: "Pan-Indian",
                      description: "Rich tradition of solo and accompanying instruments with distinctive playing techniques.",
                      features: ["Sitar", "Tabla", "Veena", "Sarod", "Flute", "Mridangam"]
                    }
                  ].map((music, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xl font-bold text-india-blue">{music.name}</h4>
                          <p className="text-gray-500 text-sm">{music.region}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-india-gold/10 text-india-gold text-xs">Classical</span>
                      </div>
                      <p className="text-gray-600 my-3">{music.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {music.features.map((feature, i) => (
                          <span key={i} className="px-2 py-1 bg-india-cream/50 rounded-full text-xs">{feature}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Traditional Crafts */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <span className="inline-block px-4 py-1 rounded-full bg-india-saffron/10 text-india-saffron text-sm font-medium mb-4">
                <Sparkles className="inline-block mr-1 h-4 w-4" />
                Artisanal Heritage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Traditional <span className="text-india-saffron">Handicrafts</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                India's handcrafted traditions showcase exquisite artistry passed down through generations of skilled craftspeople.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll">
              {[
                {
                  craft: "Madhubani Painting",
                  region: "Bihar",
                  description: "Distinctive geometric patterns and nature motifs with vibrant colors and intricate detailing.",
                  image: "https://images.unsplash.com/photo-1544123642-fa7c017d38f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                },
                {
                  craft: "Pashmina Shawls",
                  region: "Kashmir",
                  description: "Ultra-soft wool from Changthangi goats, hand-spun and woven into luxurious shawls with intricate embroidery.",
                  image: "https://images.unsplash.com/photo-1558652062-f5eb75d89a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                },
                {
                  craft: "Brass and Copper Work",
                  region: "Uttar Pradesh",
                  description: "Intricate metalwork crafted into decorative items, utensils, and religious artifacts using traditional techniques.",
                  image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                },
                {
                  craft: "Bidri Work",
                  region: "Karnataka",
                  description: "Silver inlay on blackened alloy creating striking contrast in decorative items and jewelry.",
                  image: "https://images.unsplash.com/photo-1558652062-f5eb75d89a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                },
                {
                  craft: "Blue Pottery",
                  region: "Jaipur, Rajasthan",
                  description: "Distinctive Persian-influenced ceramics with blue glaze and white background featuring nature motifs.",
                  image: "https://images.unsplash.com/photo-1558652062-f5eb75d89a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                },
                {
                  craft: "Pattachitra",
                  region: "Odisha",
                  description: "Cloth-based scroll paintings with mythological narratives using natural dyes and fine detailed brushwork.",
                  image: "https://images.unsplash.com/photo-1558652062-f5eb75d89a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                }
              ].map((craft, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img 
                      src={craft.image} 
                      alt={craft.craft} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{craft.craft}</h3>
                      <span className="flex items-center text-xs">
                        <MapPin className="h-3 w-3 mr-1" />
                        {craft.region}
                      </span>
                    </div>
                    <p className="text-gray-600">{craft.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Culture;
