
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Send, MapPin, Phone, Mail, Clock, Check } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<null | 'sending' | 'success' | 'error'>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      console.log('Form submitted:', formData);
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    }, 1500);
  };

  const faqItems = [
    {
      question: "What are the visiting hours for heritage sites?",
      answer: "Most heritage sites in India are open from 9:00 AM to 5:00 PM, though this can vary by location. During peak tourist seasons, some popular sites may extend their hours. It's always best to check the official website of the specific site before planning your visit."
    },
    {
      question: "Is photography allowed at cultural events?",
      answer: "Photography policies vary by event. While many public cultural festivals welcome photography, some sacred ceremonies or performances may restrict it. Always look for signage or ask organizers about photography rules before taking pictures."
    },
    {
      question: "How can I experience authentic Indian cultural activities?",
      answer: "To experience authentic cultural activities, consider attending local festivals, visiting traditional craft villages, taking classes in classical arts, joining cooking workshops, or staying at heritage homestays. Our organization also offers curated cultural experiences led by local experts."
    },
    {
      question: "Are there guided tours available for heritage sites?",
      answer: "Yes, most major heritage sites offer official guides who can provide historical context and cultural insights. We can also recommend certified tour guides who specialize in cultural heritage and can offer more in-depth experiences tailored to your interests."
    }
  ];

  return (
    <div className="relative">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-india-blue/10 to-white overflow-hidden">
          <div className="absolute inset-0 bg-pattern-light opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                Get in <span className="text-gradient-primary">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in-up animate-delay-200">
                Have questions about India's cultural heritage or interested in our initiatives? We'd love to hear from you!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="animate-on-scroll">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Connect with our team to learn more about our cultural heritage initiatives, upcoming events, or partnership opportunities.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-india-gold/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-india-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                      <p className="text-gray-600">
                        Cultural Heritage Center, <br />
                        New Delhi, India - 110001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-india-blue/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-india-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p className="text-gray-600">
                        General Inquiries: <a href="mailto:info@vibrantheritage.org" className="text-india-blue hover:underline">info@vibrantheritage.org</a> <br />
                        Partnership: <a href="mailto:partner@vibrantheritage.org" className="text-india-blue hover:underline">partner@vibrantheritage.org</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-india-green/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-india-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <p className="text-gray-600">
                        Tel: <a href="tel:+911234567890" className="hover:underline">+91 123 456 7890</a> <br />
                        WhatsApp: <a href="tel:+911234567891" className="hover:underline">+91 123 456 7891</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-india-saffron/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-india-saffron" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM <br />
                        Saturday: 10:00 AM - 4:00 PM <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="rounded-xl overflow-hidden shadow-lg h-80 mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7005.469188428547!2d77.20651247711088!3d28.613939037844426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="animate-on-scroll animate-delay-200">
                <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-blue/50"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-blue/50"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-blue/50"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-india-blue/50"
                        placeholder="Tell us about your inquiry..."
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={formStatus === 'sending'}
                        className={`w-full md:w-auto px-8 py-3 rounded-lg ${
                          formStatus === 'success' 
                            ? 'bg-india-green text-white' 
                            : 'bg-india-blue text-white hover:bg-india-blue/90'
                        } font-medium transition-all flex items-center justify-center gap-2`}
                      >
                        {formStatus === 'sending' && (
                          <>
                            <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                            <span>Sending...</span>
                          </>
                        )}
                        {formStatus === 'success' && (
                          <>
                            <Check size={18} />
                            <span>Message Sent!</span>
                          </>
                        )}
                        {(formStatus === null || formStatus === 'error') && (
                          <>
                            <Send size={18} />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-b from-white to-india-cream/30 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll">
              <span className="inline-block px-4 py-1 rounded-full bg-india-gold/10 text-india-gold text-sm font-medium mb-4">Support</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Frequently Asked <span className="text-india-gold">Questions</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Find answers to common questions about Indian cultural heritage and our services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto animate-on-scroll">
              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-india-gold">
                    <h3 className="text-xl font-bold mb-3">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">Can't find the answer you're looking for?</p>
                <a 
                  href="#contact-form" 
                  className="inline-block px-6 py-3 rounded-full bg-india-blue text-white font-medium transition-all hover:shadow-lg hover:shadow-india-blue/20 hover:-translate-y-1"
                >
                  Ask Your Question
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-india-blue relative">
          <div className="absolute inset-0 bg-[url('https://www.transparentpng.com/thumb/india/incredible-india-tourism-logo-png-7.png')] bg-repeat bg-center opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-xl border border-white/20 animate-on-scroll">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Stay Updated with Cultural News & Events
                </h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter for the latest updates on cultural events, heritage conservation efforts, and exclusive content about India's traditions.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-india-gold text-white font-medium hover:bg-india-gold/90 transition-colors whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </form>
                
                <p className="text-white/60 text-sm mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
