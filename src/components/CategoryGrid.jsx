import { motion } from 'framer-motion';
import LucideIcon from './LucideIcon';
import { featuredCategories } from '../data/siteData';

export default function CategoryGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  const handleCategoryClick = (id) => {
    // Smooth scroll to the corresponding category block inside categories
    const categoriesSection = document.querySelector('#categories');
    if (categoriesSection) {
      const offset = 80;
      const elementPosition = categoriesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="featured" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
            Featured Showroom Departments
          </h2>
          <div className="w-16 h-1.5 bg-accent mx-auto my-4 rounded-full"></div>
          <p className="font-sans text-slate-650 text-base">
            Explore our curated collections of top-grade home technology, everyday essentials, and academic supplies. Handpicked quality for every family.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredCategories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={cardVariants}
              onClick={() => handleCategoryClick(cat.id)}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-md cursor-pointer border border-gray-150 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-85 group-hover:opacity-90 transition-opacity duration-300`} />

              {/* Card Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                    <LucideIcon name={cat.iconName} size={22} className="text-white" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                    Shop Now
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold text-accent/90 uppercase tracking-wider block mb-1">
                    {cat.tagline}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl tracking-tight leading-tight">
                    {cat.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-white/85 mt-3 group-hover:text-white transition-colors">
                    <span>Browse department catalog</span>
                    <LucideIcon name="ArrowRight" size={14} className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
