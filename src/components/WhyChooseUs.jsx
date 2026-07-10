import { motion } from 'framer-motion';
import { whyChooseUs } from '../data/siteData';
import LucideIcon from './LucideIcon';

export default function WhyChooseUs() {
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
      transition: { type: "spring", stiffness: 90, damping: 15 }
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white relative overflow-hidden">
      
      {/* Decorative side shapes */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
            Why Choose Super Home Appliances?
          </h2>
          <div className="w-16 h-1.5 bg-accent mx-auto my-4 rounded-full"></div>
          <p className="font-sans text-slate-650 text-base">
            For years, we've been helping families in Balehonnur upgrade their homes with official products, competitive pricing, and friendly service.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 rounded-2xl border border-gray-100 hover:border-blue-100 shadow-2xs hover:shadow-md transition-all duration-300 bg-slate-50/50 hover:bg-white flex flex-col items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-blue-50 text-primary border border-blue-100/55 flex-shrink-0">
                <LucideIcon name={item.iconName} size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-secondary mb-1.5">
                  {item.title}
                </h3>
                <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight trust board */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-800 text-white shadow-lg text-center md:text-left md:flex md:items-center md:justify-between md:gap-8">
          <div className="mb-6 md:mb-0">
            <h3 className="font-display font-bold text-xl sm:text-2xl mb-2">
              Ready to experience trusted service?
            </h3>
            <p className="font-sans text-sm text-blue-100 max-w-xl">
              Get product advice, check product stock levels, or arrange delivery. We are happy to serve you anytime via call or chat!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 justify-center">
            <a
              href="tel:9480316968"
              className="px-6 py-3 rounded-full bg-white text-secondary font-sans text-sm font-bold shadow-sm hover:shadow-md hover:bg-blue-55 transition-all text-center"
            >
              Call 9480316968
            </a>
            <a
              href="https://wa.me/919480316968"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-500 text-white font-sans text-sm font-bold shadow-sm hover:shadow-md hover:bg-emerald-600 transition-all text-center flex items-center justify-center gap-2"
            >
              <LucideIcon name="MessageSquare" size={16} />
              <span>Chat with Owner</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
