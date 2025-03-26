
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Crown, BookOpen, Landmark, Paintbrush, Music } from 'lucide-react';

const Heritage = () => {
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
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-india-cream to-white overflow-hidden">
          <div className="absolute inset-0 bg-pattern-light opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                India's Timeless <span className="text-gradient-primary">Heritage</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in-up animate-delay-200">
                Discover the magnificent monuments, ancient traditions, and historical wonders that have shaped India's cultural legacy for millennia.
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-60 h-60 bg-india-saffron/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-india-green/10 rounded-full blur-3xl"></div>
        </section>

        {/* Monuments Section */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <span className="inline-block px-4 py-1 rounded-full bg-india-blue/10 text-india-blue text-sm font-medium mb-4">Architectural Marvels</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Iconic <span className="text-india-blue">Monuments</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                India's architectural heritage spans centuries, featuring magnificent structures that showcase the brilliance of ancient craftsmen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Taj Mahal",
                  location: "Agra, Uttar Pradesh",
                  image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                  description: "An ivory-white marble mausoleum built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, completed in 1643."
                },
                {
                  title: "Hawa Mahal",
                  location: "Jaipur, Rajasthan",
                  image: "https://images.unsplash.com/photo-1599661046289-e31897846e38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                  description: "Built in 1799, this five-story 'Palace of Winds' features 953 small windows for royal women to observe street festivities while remaining unseen."
                },
                {
                  title: "Golden Temple",
                  location: "Amritsar, Punjab",
                  image: "https://images.unsplash.com/photo-1624461042503-c920da8a850d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                  description: "The holiest gurdwara of Sikhism, built in the 16th century, with its upper floors covered in gold."
                },
              ].map((monument, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img 
                      src={monument.image} 
                      alt={monument.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity">
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-white text-2xl font-bold mb-1">{monument.title}</h3>
                      <p className="text-white/80 text-sm mb-3">{monument.location}</p>
                      <p className="text-white/90 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{monument.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage Timeline */}
        <section className="py-20 bg-gradient-to-b from-white to-india-cream/30 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <span className="inline-block px-4 py-1 rounded-full bg-india-gold/10 text-india-gold text-sm font-medium mb-4">Through the Ages</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Historical <span className="text-india-gold">Timeline</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Journey through India's rich historical periods that have shaped its cultural heritage.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline center line */}
              <div className="absolute h-full w-1 bg-gradient-to-b from-india-saffron via-india-blue to-india-green left-1/2 transform -translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-20 relative">
                {[
                  {
                    icon: <Crown className="text-india-gold" />,
                    period: "3300-1300 BCE",
                    title: "Indus Valley Civilization",
                    content: "One of the world's earliest urban civilizations with sophisticated city planning, drainage systems, and script that remains undeciphered.",
                    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  },
                  {
                    icon: <BookOpen className="text-india-saffron" />,
                    period: "1500-500 BCE",
                    title: "Vedic Period",
                    content: "Composition of the Vedas and development of early Hindu philosophical concepts and religious practices that continue to influence contemporary society.",
                    image: "https://images.unsplash.com/photo-1544123642-fa7c017d38f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  },
                  {
                    icon: <Landmark className="text-india-blue" />,
                    period: "321-185 BCE",
                    title: "Mauryan Empire",
                    content: "First empire to unify most of the Indian subcontinent, with Emperor Ashoka spreading Buddhist values and establishing the famous lion capital (now India's national emblem).",
                    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  },
                  {
                    icon: <Paintbrush className="text-india-green" />,
                    period: "320-550 CE",
                    title: "Gupta Empire",
                    content: "Golden Age of India marked by advancements in science, mathematics, astronomy, art, literature, and philosophy with scholars like Aryabhata and Kalidasa.",
                    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  }
                ].map((item, index) => (
                  <div key={index} className={`flex items-center animate-on-scroll ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${index % 2 === 0 ? 'bg-india-blue/10 text-india-blue' : 'bg-india-saffron/10 text-india-saffron'} mb-2`}>
                        {item.period}
                      </span>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-600 mb-4">{item.content}</p>
                      <div className="rounded-lg overflow-hidden shadow-md">
                        <img src={item.image} alt={item.title} className="w-full h-auto" />
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-12 h-12 bg-white rounded-full border-4 border-india-gold flex items-center justify-center z-10">
                        {item.icon}
                      </div>
                    </div>
                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* UNESCO Sites */}
        <section className="py-20 bg-india-cream/30 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <span className="inline-block px-4 py-1 rounded-full bg-india-saffron/10 text-india-saffron text-sm font-medium mb-4">World Heritage</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                UNESCO <span className="text-india-saffron">Protected Sites</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                India boasts 40 UNESCO World Heritage Sites, representing the country's exceptional cultural and natural treasures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl animate-on-scroll">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-india-saffron inline-block"></span>
                    Notable Sites
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Taj Mahal, Agra",
                      "Khajuraho Group of Monuments",
                      "Ajanta & Ellora Caves",
                      "Hampi Monument Complex",
                      "Red Fort Complex, Delhi",
                      "Qutub Minar, Delhi",
                      "Great Living Chola Temples",
                      "Sun Temple, Konark",
                      "Kaziranga National Park",
                      "Sundarbans National Park"
                    ].map((site, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-india-gold inline-block"></span>
                        <span>{site}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                      alt="UNESCO World Heritage Site" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4 bg-india-cream/30 p-4 rounded-lg border border-india-gold/20">
                    <p className="text-gray-700">
                      <strong>Did you know?</strong> India ranks 6th in the world for having the highest number of UNESCO World Heritage Sites. These sites are selected for their outstanding universal value and include ancient monuments, historic cities, natural wonders, and cultural landscapes that represent the best of Indian heritage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Heritage;
