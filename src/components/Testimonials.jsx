import { motion } from 'framer-motion';
import { testimonials } from '../data/siteData';
import LucideIcon from './LucideIcon';

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative floating blur circles */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1.5 bg-accent mx-auto my-4 rounded-full"></div>
          <p className="font-sans text-slate-650 text-base">
            Read real feedback from our shoppers across Balehonnur and surrounding areas. We pride ourselves on delivery, genuine quality, and after-sales support.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-white border border-gray-150 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-accent mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <LucideIcon key={i} name="Star" size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-slate-600 text-sm leading-relaxed italic mb-6">
                  "{t.text}"
                </p>

              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-700 text-white font-display font-bold text-sm flex items-center justify-center shadow-xs">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-sm text-secondary">
                    {t.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-slate-455 text-[11px] font-medium mt-0.5">
                    <span>{t.role}</span>
                    <span>•</span>
                    <span className="text-primary font-semibold">{t.location}</span>
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
