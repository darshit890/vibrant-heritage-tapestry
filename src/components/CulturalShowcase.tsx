
import { useEffect } from 'react';
import { Landmark, BookOpen, Scroll, Palette, Music, Utensils } from 'lucide-react';

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
      title: "Architectural Marvels",
      description: "From the majestic Taj Mahal to the intricate temples of Khajuraho, India's architectural heritage spans millennia.",
      iconClass: "bg-india-saffron/10",
      color: "text-india-saffron",
      border: "border-india-saffron/30",
      icon: <Landmark className="text-india-saffron" />,
      detail: "India's architectural journey reflects its historical diversity, from the ancient Indus Valley Civilization structures to the ornate Indo-Islamic monuments and colonial buildings."
    },
    {
      title: "Classical Dance Forms",
      description: "Bharatanatyam, Kathak, Odissi, and other classical dance forms tell stories through graceful movements and expressions.",
      iconClass: "bg-india-green/10",
      color: "text-india-green",
      border: "border-india-green/30",
      icon: <Palette className="text-india-green" />,
      detail: "Each of India's eight classical dance forms represents a particular region and tradition, with distinctive costumes, music, and storytelling techniques passed down through generations."
    },
    {
      title: "Textile Traditions",
      description: "Handloom weaving, block printing, embroidery, and other textile crafts reflect India's rich artistic heritage.",
      iconClass: "bg-india-blue/10",
      color: "text-india-blue",
      border: "border-india-blue/30",
      icon: <Scroll className="text-india-blue" />,
      detail: "From the intricate Pashmina shawls of Kashmir to the vibrant silk sarees of Kanchipuram, each region has developed unique textile traditions representing local cultural motifs and techniques."
    },
    {
      title: "Ancient Scriptures",
      description: "The Vedas, Upanishads, and epics like Ramayana and Mahabharata form the foundation of Indian philosophical thought.",
      iconClass: "bg-india-gold/10",
      color: "text-india-gold",
      border: "border-india-gold/30",
      icon: <BookOpen className="text-india-gold" />,
      detail: "Dating back over 3,000 years, these Sanskrit texts explore profound philosophical concepts, ethical principles, and cultural narratives that continue to influence Indian society."
    }
  ];

  const culturalQuotes = [
    {
      quote: "Unity in diversity is India's strength. There is simplicity in every Indian. There is unity in every corner of India. This is our strength.",
      author: "Narendra Modi"
    },
    {
      quote: "India is the cradle of the human race, the birthplace of human speech, the mother of history, the grandmother of legend, and the great-grandmother of tradition.",
      author: "Mark Twain"
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
          
          {/* Cultural Quote */}
          <div className="mt-10 mb-16 bg-white/50 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto border border-india-gold/20 shadow-lg animate-on-scroll">
            <p className="text-xl italic text-gray-700 mb-4">"{culturalQuotes[0].quote}"</p>
            <p className="text-india-saffron font-medium">— {culturalQuotes[0].author}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {heritageItems.map((item, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-6 border ${item.border} bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 animate-on-scroll`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 ${item.iconClass} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                {item.icon}
              </div>
              <h3 className={`text-xl font-bold mb-3 ${item.color}`}>{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 italic">{item.detail}</p>
              </div>
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
              
              {/* Additional cultural detail */}
              <div className="mt-8 p-4 bg-india-cream/50 rounded-lg border border-india-gold/20">
                <p className="text-gray-700 text-sm">
                  <strong>Did you know?</strong> India celebrates over 1,000 festivals throughout the year across its diverse regions, religions, and cultural traditions. From the colorful Holi to the luminous Diwali, these celebrations showcase India's rich tapestry of rituals and customs.
                </p>
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
        
        {/* New Cultural Timeline Section */}
        <div className="mt-24 animate-on-scroll">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Cultural Timeline</h3>
          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute h-full w-1 bg-gradient-to-b from-india-saffron via-india-green to-india-blue left-1/2 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12 relative">
              {[
                {
                  period: "3300-1300 BCE",
                  title: "Indus Valley Civilization",
                  content: "One of the world's earliest urban civilizations with sophisticated city planning and drainage systems."
                },
                {
                  period: "1500-500 BCE",
                  title: "Vedic Period",
                  content: "Composition of the Vedas and development of early Hindu philosophical concepts and practices."
                },
                {
                  period: "321-185 BCE",
                  title: "Mauryan Empire",
                  content: "First empire to unify most of the Indian subcontinent, with Emperor Ashoka spreading Buddhist values."
                },
                {
                  period: "320-550 CE",
                  title: "Gupta Empire",
                  content: "Golden Age of India marked by advancements in science, art, literature, and mathematics."
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${index % 2 === 0 ? 'bg-india-blue/10 text-india-blue' : 'bg-india-saffron/10 text-india-saffron'} mb-2`}>
                      {item.period}
                    </span>
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.content}</p>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-5 h-5 rounded-full bg-white border-4 border-india-gold z-10"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-india-saffron/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-60 h-60 bg-india-green/5 rounded-full blur-3xl"></div>
      
      {/* Cultural motif decoration */}
      <div className="absolute top-60 left-5 md:left-20 w-32 h-32 opacity-10 bg-[url('https://www.transparentpng.com/thumb/india/clipart-culture-india-png-33.png')] bg-contain bg-no-repeat"></div>
      <div className="absolute bottom-20 right-5 md:right-20 w-32 h-32 opacity-10 bg-[url('https://www.transparentpng.com/thumb/india/king-india-png-35.png')] bg-contain bg-no-repeat"></div>
    </section>
  );
};

export default CulturalShowcase;
