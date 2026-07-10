import { motion } from 'framer-motion';
import { services } from '../data/siteData';
import LucideIcon from './LucideIcon';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
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

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background radial accent */}
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
            Premium After-Sales & Services
          </h2>
          <div className="w-16 h-1.5 bg-accent mx-auto my-4 rounded-full"></div>
          <p className="font-sans text-slate-650 text-base">
            Buying an appliance is just the first step. Our team supports you with professional delivery, precise installation, and comprehensive warranty guidance.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group p-8 rounded-3xl border border-gray-150 hover:border-blue-100 shadow-2xs hover:shadow-lg transition-all duration-300 bg-white flex flex-col items-start gap-5 hover:-translate-y-1"
            >
              
              {/* Icon Container */}
              <div className="p-4 rounded-2xl bg-blue-50 group-hover:bg-primary text-primary group-hover:text-white border border-blue-100/50 transition-all duration-300">
                <LucideIcon name={service.iconName} size={24} />
              </div>

              {/* Text info */}
              <div>
                <h3 className="font-display font-bold text-xl text-secondary group-hover:text-primary transition-colors duration-200 mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Call-to-action text inside card */}
              <div className="mt-2 text-xs font-semibold text-primary/80 group-hover:text-primary flex items-center gap-1.5">
                <span>Learn more details</span>
                <LucideIcon name="ArrowRight" size={12} className="transform group-hover:translate-x-1 transition-transform" />
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
