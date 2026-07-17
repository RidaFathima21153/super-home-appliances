import LucideIcon from './LucideIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 font-sans border-t border-slate-800">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Col */}
          <div className="flex flex-col space-y-4">
            <div>
              <span className="font-display font-extrabold text-2xl text-white tracking-tight">SUPER</span>
              <span className="block font-display font-medium text-sm text-accent tracking-widest mt-0.5">HOME APPLIANCES</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Your trusted partner in Balehonnur. Offering premium home electronics, kitchenware, books, stationery, and daily essentials under one roof.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-primary transition-all duration-300">
                <LucideIcon name="Facebook" size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-pink-600 transition-all duration-300">
                <LucideIcon name="Instagram" size={16} />
              </a>
              <a href="https://wa.me/919480316968" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-emerald-500 transition-all duration-300">
                <LucideIcon name="MessageSquare" size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display font-bold text-white text-base tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-white hover:underline transition-all">Home Overview</a>
              </li>
              <li>
                <a href="#categories" onClick={(e) => handleLinkClick(e, '#categories')} className="hover:text-white hover:underline transition-all">Product Categories</a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => handleLinkClick(e, '#why-choose-us')} className="hover:text-white hover:underline transition-all">Why Choose Us</a>
              </li>
              <li>
                <a href="#brands" onClick={(e) => handleLinkClick(e, '#brands')} className="hover:text-white hover:underline transition-all">Supported Brands</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="hover:text-white hover:underline transition-all">Services & Help</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display font-bold text-white text-base tracking-wider uppercase">Showroom Hours</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex justify-between items-center border-b border-slate-800 pb-1.5">
                <span>Monday - Saturday:</span>
                <span className="text-white font-medium">9:30 AM - 8:30 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-1.5">
                <span>Sunday:</span>
                <span className="text-white font-medium">10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex items-start gap-2 pt-1 text-xs text-accent">
                <LucideIcon name="Clock" size={14} className="mt-0.5 flex-shrink-0" />
                <span>Perfect for early morning shopping and late evening retail checks.</span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-display font-bold text-white text-base tracking-wider uppercase">Location & Contact</h3>
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <LucideIcon name="MapPin" size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs font-bold uppercase text-slate-500 mb-0.5">Location</span>
                  <span>9F27+8PQ, Balehonnur - Chikkamagaluru Road,<br />Balehonnur, B.Kanbur, Chikkamagaluru District,<br />Karnataka 577112, India</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <LucideIcon name="Phone" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs font-bold uppercase text-slate-500 mb-0.5">Call Now</span>
                  <a href="tel:9480316968" className="text-slate-300 hover:text-white transition-colors font-semibold">+91 94803 16968</a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <LucideIcon name="MessageSquare" size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs font-bold uppercase text-slate-500 mb-0.5">WhatsApp</span>
                  <a href="https://wa.me/919480316968" target="_blank" rel="noopener noreferrer" className="text-emerald-450 hover:text-white transition-colors font-semibold">Message Store</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-slate-950 py-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>Copyright © SUPER HOME APPLIANCES. All Rights Reserved. Balehonnur, Karnataka.</p>
          <div className="flex space-x-6">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="hover:text-slate-300 transition-colors">Back to Top</a>
            <span>•</span>
            <span>Made for authentic showroom business operations</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
