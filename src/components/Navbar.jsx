import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LucideIcon from './LucideIcon';

export default function Navbar({ searchQuery, setSearchQuery }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll height to make navbar opaque
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Categories', href: '#categories' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Brands', href: '#brands' },
    { name: 'Services', href: '#services' },
    { name: 'Showroom', href: '#gallery' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' }
  ];

  // Helper to handle smooth scrolling
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // Offset for sticky navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-panel shadow-md py-3' 
        : 'bg-white/90 md:bg-transparent py-5 border-b border-gray-100 md:border-none'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')} 
            className="flex-shrink-0 flex flex-col"
          >
            <span className="font-display font-extrabold text-lg md:text-xl tracking-tight text-secondary leading-tight">
              SUPER
            </span>
            <span className="font-display font-medium text-xs tracking-wider text-accent leading-none">
              HOME APPLIANCES
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans font-medium text-sm text-gray-700 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Interactive Search Bar */}
          <div className="flex-1 max-w-md hidden md:block relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LucideIcon name="Search" className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search appliances, books, stationery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 focus:bg-white focus:shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                <LucideIcon name="X" className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Phone Call CTA and Menu Button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:9480316968"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-secondary text-white font-sans text-xs md:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <LucideIcon name="Phone" size={14} />
              <span>Call 9480316968</span>
            </a>

            {/* Mobile burger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-label="Toggle menu"
            >
              <LucideIcon name={isOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search - Visible only on mobile screen widths */}
      <div className="px-4 py-2 md:hidden border-t border-gray-100 bg-white">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LucideIcon name="Search" className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search categories & essentials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-8 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              <LucideIcon name="X" className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="px-3 py-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href="tel:9480316968"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-primary text-white font-sans text-sm font-semibold shadow-sm"
                >
                  <LucideIcon name="Phone" size={16} />
                  <span>Call 9480316968</span>
                </a>
                <a
                  href="https://wa.me/919480316968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-emerald-500 text-white font-sans text-sm font-semibold shadow-sm"
                >
                  <LucideIcon name="MessageSquare" size={16} />
                  <span>WhatsApp Store</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
