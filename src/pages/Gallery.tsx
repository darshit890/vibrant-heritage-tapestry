import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Filter, Camera, Heart, Share2, Download, Landmark, Paintbrush, User, Map, MapPin, ChevronDown, X } from 'lucide-react';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  
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

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'festivals', label: 'Festivals' },
    { id: 'art', label: 'Art & Craft' },
    { id: 'people', label: 'People' },
    { id: 'nature', label: 'Nature & Wildlife' }
  ];

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Taj Mahal',
      category: 'architecture',
      location: 'Agra, Uttar Pradesh',
      description: 'The iconic marble mausoleum built by Emperor Shah Jahan for his beloved wife Mumtaz Mahal.',
      photographer: 'Amit Kumar'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Holi Festival',
      category: 'festivals',
      location: 'Mathura, Uttar Pradesh',
      description: 'The vibrant festival of colors celebrating the arrival of spring and the triumph of good over evil.',
      photographer: 'Priya Singh'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1544123642-fa7c017d38f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Madhubani Painting',
      category: 'art',
      location: 'Mithila, Bihar',
      description: 'Traditional folk art characterized by geometric patterns, mythological motifs, and nature symbols.',
      photographer: 'Raj Patel'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1624461042503-c920da8a850d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Golden Temple',
      category: 'architecture',
      location: 'Amritsar, Punjab',
      description: 'The holiest Sikh gurdwara and a symbol of human brotherhood and equality.',
      photographer: 'Gurpreet Singh'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Diwali Celebration',
      category: 'festivals',
      location: 'All across India',
      description: 'The festival of lights celebrated with oil lamps, fireworks, and family gatherings.',
      photographer: 'Neha Sharma'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1558652062-f5eb75d89a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Rajasthani Puppets',
      category: 'art',
      location: 'Jaipur, Rajasthan',
      description: 'Traditional string puppets featuring vibrant costumes and intricate detailing.',
      photographer: 'Vikram Mehra'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Himalayan Ranges',
      category: 'nature',
      location: 'Himachal Pradesh',
      description: 'The majestic mountain ranges offering breathtaking views and serene landscapes.',
      photographer: 'Arjun Nair'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Rural Life',
      category: 'people',
      location: 'Karnataka',
      description: 'A glimpse into the simple and harmonious rural lifestyle in southern India.',
      photographer: 'Maya Desai'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Kerala Backwaters',
      category: 'nature',
      location: 'Kerala',
      description: 'The tranquil network of lakes, canals, and lagoons parallel to the Arabian Sea coast.',
      photographer: 'Thomas John'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Kathakali Performer',
      category: 'people',
      location: 'Kerala',
      description: 'A classical dancer in elaborate costume and makeup representing characters from Hindu epics.',
      photographer: 'Anjali Menon'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Hampi Ruins',
      category: 'architecture',
      location: 'Karnataka',
      description: 'The ancient ruins of the Vijayanagara Empire featuring spectacular temples and monuments.',
      photographer: 'Karthik Ram'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Warli Art',
      category: 'art',
      location: 'Maharashtra',
      description: 'Tribal art tradition featuring simple geometric shapes and stick-like human figures.',
      photographer: 'Sarika Patil'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openImageModal = (image: any) => {
    setSelectedImage(image);
    setShowImageModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setShowImageModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="relative">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-india-blue/10 to-white overflow-hidden">
          <div className="absolute inset-0 bg-pattern-light opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                Visual <span className="text-gradient-primary">Gallery</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in-up animate-delay-200">
                Explore the rich tapestry of India through captivating images showcasing its diverse architecture, vibrant festivals, traditional art forms, and natural landscapes.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-india-blue text-white'
                      : 'bg-white border border-india-blue/30 text-india-blue hover:bg-india-blue/5'
                  }`}
                >
                  {category.id === 'all' && <Filter size={16} />}
                  {category.id === 'architecture' && <Landmark size={16} />}
                  {category.id === 'festivals' && <Sparkles size={16} />}
                  {category.id === 'art' && <Paintbrush size={16} />}
                  {category.id === 'people' && <User size={16} />}
                  {category.id === 'nature' && <Map size={16} />}
                  {category.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-on-scroll">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => openImageModal(item)}
                >
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs inline-block w-fit mb-2">{item.category}</span>
                    <h3 className="text-white text-lg font-bold">{item.title}</h3>
                    <p className="text-white/80 text-sm flex items-center gap-1">
                      <MapPin size={12} />
                      {item.location}
                    </p>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                      <Camera size={16} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16 animate-on-scroll">
              <a 
                href="#" 
                className="inline-block px-8 py-3 rounded-full bg-india-blue text-white font-medium transition-all hover:shadow-lg hover:shadow-india-blue/20 hover:-translate-y-1 flex items-center gap-2"
              >
                <span>View More</span>
                <ChevronDown size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Featured Collection */}
        <section className="py-20 bg-gradient-to-b from-white to-india-cream/30 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <span className="inline-block px-4 py-1 rounded-full bg-india-gold/10 text-india-gold text-sm font-medium mb-4">
                Featured Collection
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                India Through <span className="text-india-gold">The Lens</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                A special collection showcasing the diverse beauty and cultural richness of India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                      alt="Featured Gallery" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                      alt="Featured Gallery" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1624461042503-c920da8a850d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                      alt="Featured Gallery" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-india-gold font-medium mb-2">Special Feature</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Spectacular India: Moments in Time</h3>
                <p className="text-gray-700 mb-6">
                  This curated collection captures the essence of India's diverse landscapes, architectural marvels, and cultural traditions. Each photograph tells a story of the country's rich heritage and vibrant spirit.
                </p>
                <p className="text-gray-600 mb-8">
                  From the majestic Taj Mahal to the colorful Holi celebrations, these images invite you to explore the beauty and depth of Indian culture through visual storytelling.
                </p>
                <div className="flex items-center gap-4">
                  <a 
                    href="#" 
                    className="px-6 py-3 rounded-full bg-india-gold text-white font-medium transition-all hover:shadow-lg hover:bg-india-gold/90 flex items-center gap-2"
                  >
                    <Camera size={18} />
                    <span>Explore Collection</span>
                  </a>
                  <a 
                    href="#" 
                    className="px-6 py-3 rounded-full border border-india-gold/30 text-india-gold font-medium transition-all hover:bg-india-gold/5"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {showImageModal && selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8" onClick={closeImageModal}>
          <div className="relative max-w-5xl w-full bg-white rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center z-10"
              onClick={closeImageModal}
            >
              <X size={18} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-w-16 aspect-h-16 md:aspect-auto md:h-full">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
                  <span className="px-3 py-1 rounded-full bg-india-blue/10 text-india-blue text-xs">
                    {selectedImage.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{selectedImage.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={16} />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Camera size={16} />
                    <span>Photo by {selectedImage.photographer}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 flex justify-between">
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                      <Heart size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                  <button className="px-4 py-2 rounded-full bg-india-blue text-white flex items-center gap-2 hover:bg-india-blue/90 transition-colors">
                    <Download size={16} />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
