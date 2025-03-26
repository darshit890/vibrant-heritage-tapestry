
import { useState, useEffect } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
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

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'festivals', label: 'Festivals' },
    { id: 'art', label: 'Art & Craft' }
  ];

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Taj Mahal',
      category: 'architecture',
      location: 'Agra, Uttar Pradesh'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Holi Festival',
      category: 'festivals',
      location: 'Mathura, Uttar Pradesh'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1544123642-fa7c017d38f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Madhubani Painting',
      category: 'art',
      location: 'Mithila, Bihar'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1624461042503-c920da8a850d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Golden Temple',
      category: 'architecture',
      location: 'Amritsar, Punjab'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1599661046289-e31897846e38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Diwali Celebration',
      category: 'festivals',
      location: 'All across India'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1558652062-f5eb75d89a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      title: 'Rajasthani Puppets',
      category: 'art',
      location: 'Jaipur, Rajasthan'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-india-cream to-white relative">
      <div className="absolute inset-0 bg-pattern-light opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-india-blue/10 text-india-blue text-sm font-medium mb-4 animate-on-scroll">Visual Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-on-scroll">
            Captivating <span className="text-gradient-secondary">Visual Stories</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll">
            Immerse yourself in the vibrant colors, intricate details, and breathtaking beauty of India's cultural heritage.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-india-blue text-white'
                  : 'bg-white border border-india-blue/30 text-india-blue hover:bg-india-blue/5'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs inline-block w-fit mb-2">{item.category}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-on-scroll">
          <a 
            href="#gallery" 
            className="inline-block px-8 py-3 rounded-full bg-india-blue text-white font-medium transition-all hover:shadow-lg hover:shadow-india-blue/20 hover:-translate-y-1"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
