
import { useEffect } from 'react';

const CulturalShowcase = () => {
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

  const heritageItems = [
    {
      title: 'Architectural Marvels',
      description: "From the majestic Taj Mahal to the intricate temples of Khajuraho, India's architectural heritage spans millennia.",
      iconClass: 'bg-india-saffron/10',
      color: 'text-india-saffron',
      border: 'border-india-saffron/30'
    },
    {
      title: 'Classical Dance Forms',
      description: 'Bharatanatyam, Kathak, Odissi, and other classical dance forms tell stories through graceful movements and expressions.',
      iconClass: 'bg-india-green/10',
      color: 'text-india-green',
      border: 'border-india-green/30'
    },
    {
      title: 'Textile Traditions',
      description: "Handloom weaving, block printing, embroidery, and other textile crafts reflect India's rich artistic heritage.",
      iconClass: 'bg-india-blue/10',
      color: 'text-india-blue',
      border: 'border-india-blue/30'
    },
    {
      title: 'Ancient Scriptures',
      description: 'The Vedas, Upanishads, and epics like Ramayana and Mahabharata form the foundation of Indian philosophical thought.',
      iconClass: 'bg-india-gold/10',
      color: 'text-india-gold',
      border: 'border-india-gold/30'
    }
  ];

  return (
    <section id="heritage" className="section-padding bg-gradient-to-b from-white to-india-cream relative">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-india-green/10 text-india-green text-sm font-medium mb-4 animate-on-scroll">Cultural Essence</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-on-scroll">
            Exploring India's <span className="text-gradient-primary">Rich Heritage</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll">
            India's cultural heritage is a vibrant tapestry woven with traditions, art forms, and philosophies that have evolved over thousands of years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {heritageItems.map((item, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-6 border ${item.border} bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 animate-on-scroll`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${item.iconClass} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <span className={`text-2xl font-yatra ${item.color}`}>{index + 1}</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${item.color}`}>{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-2xl p-8 shadow-xl animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block px-4 py-1 rounded-full bg-india-saffron/10 text-india-saffron text-sm font-medium mb-4">Cultural Diversity</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Unity in Diversity</h3>
              <p className="text-gray-700 mb-6">
                India's cultural mosaic is characterized by its diversity - over 22 major languages, hundreds of dialects, various religions, and distinct regional traditions all coexist harmoniously, united by shared values and historical experiences.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-india-saffron/10 text-india-saffron text-sm">Languages</span>
                <span className="px-3 py-1 rounded-full bg-india-green/10 text-india-green text-sm">Festivals</span>
                <span className="px-3 py-1 rounded-full bg-india-blue/10 text-india-blue text-sm">Cuisines</span>
                <span className="px-3 py-1 rounded-full bg-india-gold/10 text-india-gold text-sm">Art Forms</span>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transform md:rotate-3 hover:rotate-0 transition-all">
                <img 
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Indian cultural celebration" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute w-full h-full top-6 -right-6 border-4 border-india-saffron rounded-xl z-0 md:block hidden"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-india-saffron/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-60 h-60 bg-india-green/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CulturalShowcase;
