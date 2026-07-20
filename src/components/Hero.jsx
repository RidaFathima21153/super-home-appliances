import { motion } from 'framer-motion';
import LucideIcon from './LucideIcon';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    animateReverse: {
      y: [-10, 0, -10],
      transition: {
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleDirectionsClick = () => {
    // Open in directions mode to calculate route from user's location to the exact Google Plus Code
    window.open("https://www.google.com/maps/dir/?api=1&destination=Super+Home+Appliances,+9F27%2B8PQ,+Balehonnur+-+Chikkamagaluru+Rd,+Balehonnur,+B.Kanbur,+Chikkamagaluru,+Karnataka+577112,+India", "_blank");
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6 text-center lg:text-left"
          >
            {/* Trust badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm self-center lg:self-start text-xs font-semibold text-primary"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Trusted Local Showroom in Balehonnur</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              variants={itemVariants}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-secondary leading-tight"
            >
              Everything You Need For Your Home <span className="text-primary bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Under One Roof</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-slate-650 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              From high-end smart televisions and washing machines to kitchen chimneys, water purifiers, books, stationery, and everyday household essentials. <strong>SUPER HOME APPLIANCES</strong> is your neighborhood's premier shopping destination.
            </motion.p>

            {/* Feature Badges */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 max-w-xl"
            >
              {[
                "Trusted Local Business",
                "Quality Products",
                "Best Customer Service",
                "Everything For Your Home Under One Roof"
              ].map((badgeText, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                  <span className="text-amber-500 text-base">⭐</span>
                  <span>{badgeText}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="tel:9480316968"
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-secondary text-white font-sans text-base font-bold shadow-md hover:shadow-lg transition-all duration-300"
              >
                <LucideIcon name="Phone" size={18} />
                <span>Call Showroom</span>
              </a>

              <a
                href="https://wa.me/919480316968"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-sans text-base font-bold shadow-md hover:shadow-lg transition-all duration-300"
              >
                <LucideIcon name="MessageSquare" size={18} />
                <span>WhatsApp Us</span>
              </a>

              <button
                onClick={handleDirectionsClick}
                className="flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-gray-700 border border-gray-200 font-sans text-base font-bold shadow-sm hover:shadow-md transition-all duration-300"
              >
                <LucideIcon name="MapPin" size={18} className="text-accent" />
                <span>Get Directions</span>
              </button>
            </motion.div>

            {/* Simple Trust Metrics */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 max-w-md mx-auto lg:mx-0"
            >
              <div>
                <span className="block font-display font-extrabold text-2xl text-secondary">100%</span>
                <span className="text-xs text-slate-500 font-medium">Genuine Brands</span>
              </div>
              <div className="border-x border-slate-200">
                <span className="block font-display font-extrabold text-2xl text-secondary">15+</span>
                <span className="text-xs text-slate-500 font-medium">Product Lines</span>
              </div>
              <div>
                <span className="block font-display font-extrabold text-2xl text-secondary">Local</span>
                <span className="text-xs text-slate-500 font-medium">Home Delivery</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Column */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-200/50 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              
              {/* Showroom mockup picture */}
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop" 
                alt="Super Home Appliances Showroom Mockup" 
                className="w-full h-full object-cover"
              />

              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-1 text-accent mb-1.5">
                  <LucideIcon name="Star" size={16} fill="currentColor" />
                  <LucideIcon name="Star" size={16} fill="currentColor" />
                  <LucideIcon name="Star" size={16} fill="currentColor" />
                  <LucideIcon name="Star" size={16} fill="currentColor" />
                  <LucideIcon name="Star" size={16} fill="currentColor" />
                  <span className="text-xs text-white/90 ml-1">(4.9/5 Star Rated)</span>
                </div>
                <h4 className="font-display font-bold text-lg">Sudha Krishna Complex</h4>
                <p className="text-xs text-white/80">Opposite Bus Stand, Balehonnur, Karnataka</p>
              </div>
            </div>

            {/* Floating Card 1: Electronics */}
            <motion.div 
              variants={floatingVariants}
              animate="animate"
              className="absolute -top-6 left-2 hidden md:flex items-center gap-3 p-3.5 rounded-2xl glass shadow-lg border border-white/60"
            >
              <div className="p-2.5 rounded-xl bg-blue-500 text-white shadow-md">
                <LucideIcon name="Tv" size={20} />
              </div>
              <div>
                <span className="block font-display font-extrabold text-xs text-secondary leading-none">Smart TVs</span>
                <span className="text-[10px] text-slate-500 font-medium">Ultra HD & OLED</span>
              </div>
            </motion.div>

            {/* Floating Card 2: Kitchenware */}
            <motion.div 
              variants={floatingVariants}
              animate="animateReverse"
              className="absolute bottom-16 left-2 hidden md:flex items-center gap-3 p-3.5 rounded-2xl glass shadow-lg border border-white/60"
            >
              <div className="p-2.5 rounded-xl bg-orange-500 text-white shadow-md">
                <LucideIcon name="ChefHat" size={20} />
              </div>
              <div>
                <span className="block font-display font-extrabold text-xs text-secondary leading-none">Kitchen Tech</span>
                <span className="text-[10px] text-slate-500 font-medium">Mixers & Chimneys</span>
              </div>
            </motion.div>

            {/* Floating Card 3: Books */}
            <motion.div 
              variants={floatingVariants}
              animate="animate"
              className="absolute -bottom-6 right-2 hidden md:flex items-center gap-3 p-3.5 rounded-2xl glass shadow-lg border border-white/60"
            >
              <div className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-md">
                <LucideIcon name="BookOpen" size={20} />
              </div>
              <div>
                <span className="block font-display font-extrabold text-xs text-secondary leading-none">Education</span>
                <span className="text-[10px] text-slate-500 font-medium">Textbooks & Stationary</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}
