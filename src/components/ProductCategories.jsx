import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { categories, filterCategories } from '../data/siteData';
import LucideIcon from './LucideIcon';

export default function ProductCategories({ searchQuery }) {
  // Filter categories based on search input & rich keywords
  const filteredCategories = filterCategories(searchQuery);

  // Auto scroll to categories when user types a search query from top of page
  useEffect(() => {
    if (searchQuery && searchQuery.trim().length > 0) {
      const el = document.querySelector('#categories');
      if (el && window.scrollY < 300) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  }, [searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const handleWhatsAppInquiry = (categoryTitle) => {
    const message = encodeURIComponent(
      `Hi, I saw your website and I'm interested in knowing more about the range of "${categoryTitle}" available at your Balehonnur showroom. Could you please share some details or catalog images?`
    );
    window.open(`https://wa.me/919480316968?text=${message}`, '_blank');
  };

  return (
    <section id="categories" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
            Our Extensive Product Catalog
          </h2>
          <div className="w-16 h-1.5 bg-accent mx-auto my-4 rounded-full"></div>
          <p className="font-sans text-slate-650 text-base">
            From world-class home appliances to educational notebooks, browse the products we have waiting for you. If you don't see what you need, contact us—we can order it for you!
          </p>
        </div>

        {/* Search Results Summary */}
        {searchQuery && (
          <div className="mb-8 text-center text-sm font-sans font-medium text-slate-500">
            Showing {filteredCategories.length} results for "{searchQuery}"
          </div>
        )}

        {/* Categories Cards Grid */}
        {filteredCategories.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.id}
                variants={cardVariants}
                className={`glass-card p-6 rounded-2xl flex flex-col justify-between h-64 bg-gradient-to-br ${cat.gradient}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3.5 rounded-xl bg-white shadow-sm border border-gray-100 ${cat.iconColor}`}>
                      <LucideIcon name={cat.iconName} size={24} />
                    </div>
                    <span className="text-xs font-semibold text-slate-500 bg-white/70 px-2.5 py-1 rounded-full border border-gray-150 shadow-2xs">
                      {cat.count}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-secondary mb-2">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-3 border-t border-gray-150/40 pt-4">
                  <button
                    onClick={() => handleWhatsAppInquiry(cat.title)}
                    className="flex items-center justify-center gap-2 flex-1 py-2 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-sans text-xs font-bold shadow-xs hover:shadow-md transition-all duration-200"
                  >
                    <LucideIcon name="MessageSquare" size={14} />
                    <span>Inquire on WhatsApp</span>
                  </button>
                  <a
                    href="tel:9480316968"
                    className="p-2 rounded-xl bg-white hover:bg-slate-50 border border-gray-200 text-secondary hover:text-primary transition-all duration-200"
                    title="Call Store"
                  >
                    <LucideIcon name="Phone" size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16 bg-white border border-gray-200 rounded-3xl shadow-xs max-w-lg mx-auto">
            <div className="p-4 rounded-full bg-slate-50 text-slate-400 inline-block mb-4">
              <LucideIcon name="Search" size={32} />
            </div>
            <h3 className="font-display font-bold text-lg text-secondary mb-2">No matching categories found</h3>
            <p className="font-sans text-sm text-slate-500 max-w-sm mx-auto px-4">
              We sell many more items in our Balehonnur showroom than listed here! Please call or WhatsApp us directly to verify if we have it in stock.
            </p>
            <div className="flex justify-center gap-3 mt-6 px-4">
              <a
                href="tel:9480316968"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-sans text-sm font-semibold hover:bg-secondary transition-all"
              >
                <LucideIcon name="Phone" size={16} />
                <span>Call Us</span>
              </a>
              <a
                href="https://wa.me/919480316968"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 text-white font-sans text-sm font-semibold hover:bg-emerald-600 transition-all"
              >
                <LucideIcon name="MessageSquare" size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <p className="font-sans text-slate-500 text-sm font-medium">
            ✨ Looking for something else? We stock a wider catalog of appliances and stationeries in our physical showroom.
          </p>
        </div>

      </div>
    </section>
  );
}
