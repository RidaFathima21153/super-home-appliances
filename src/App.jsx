import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductCategories from './components/ProductCategories';
import WhyChooseUs from './components/WhyChooseUs';
import BrandShowcase from './components/BrandShowcase';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LucideIcon from './components/LucideIcon';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFloats, setShowFloats] = useState(false);

  // Monitor scroll height to toggle floating buttons
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloats(true);
      } else {
        setShowFloats(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleWhatsAppQuickChat = () => {
    const message = encodeURIComponent("Hi Super Home Appliances! I am visiting your website and have a quick inquiry.");
    window.open(`https://wa.me/919480316968?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans">
      
      {/* Navbar with lifted search query state */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Featured Categories (Category Grid) - hide if searching to focus on filtered results */}
        {!searchQuery && <CategoryGrid />}

        {/* Product Categories (Complete Catalog) */}
        <ProductCategories searchQuery={searchQuery} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Authorized Brands */}
        <BrandShowcase />

        {/* Services Showcase */}
        <Services />

        {/* Customer Testimonials */}
        <Testimonials />

        {/* Interactive FAQ Accordion */}
        <FAQ />

        {/* Contact Info and Contact Form */}
        <ContactSection />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Persistent Floating Utility Buttons */}
      <div className={`fixed bottom-6 right-6 z-45 flex flex-col gap-3 transition-all duration-350 transform ${
        showFloats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
      }`}>
        
        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white hover:bg-slate-50 text-secondary hover:text-primary shadow-lg border border-gray-200 transition-all duration-200 hover:-translate-y-0.5"
          title="Scroll to Top"
        >
          <LucideIcon name="ChevronUp" size={20} />
        </button>

        {/* WhatsApp Quick Chat */}
        <button
          onClick={handleWhatsAppQuickChat}
          className="p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center animate-bounce"
          title="Chat on WhatsApp"
        >
          <LucideIcon name="MessageSquare" size={22} />
        </button>

      </div>

    </div>
  );
}

export default App;
