import { motion } from 'framer-motion';
import { brands } from '../data/siteData';

export default function BrandShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="brands" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
            Authorized Brands We Sell
          </h2>
          <div className="w-16 h-1.5 bg-accent mx-auto my-4 rounded-full"></div>
          <p className="font-sans text-slate-650 text-base">
            We partner with the world's most trusted manufacturers to bring genuine products, warranty coverage, and high-performance electronics to your home.
          </p>
        </div>

        {/* Brands Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 rounded-2xl bg-white border border-gray-150 hover:border-blue-200 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center h-36 cursor-pointer"
            >
              
              {/* Stylized Brand Logo Placeholder */}
              <div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-blue-50 text-slate-500 group-hover:text-primary font-display font-black text-lg flex items-center justify-center transition-colors duration-300 border border-slate-100 group-hover:border-blue-150 shadow-inner mb-3">
                {brand.name[0]}
              </div>

              {/* Brand Info */}
              <h3 className="font-display font-extrabold text-lg text-slate-800 group-hover:text-primary transition-colors duration-200">
                {brand.name}
              </h3>
              
              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1 group-hover:text-slate-500 transition-colors">
                {brand.category}
              </span>

            </motion.div>
          ))}
        </motion.div>

        {/* Brand Banner Warning/Info */}
        <div className="mt-12 text-center max-w-lg mx-auto p-4 rounded-2xl bg-blue-50/50 border border-blue-100/50">
          <p className="font-sans text-xs text-slate-500 leading-relaxed">
            💡 <strong>Authorized Warranty:</strong> All items purchased from Super Home Appliances include official brand warranty cards and qualify for authorized brand service networks.
          </p>
        </div>

      </div>
    </section>
  );
}
