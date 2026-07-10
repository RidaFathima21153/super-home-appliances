import { motion } from 'framer-motion';

export default function Gallery() {
  const galleryItems = [
    {
      title: "Shop Exterior",
      description: "Conveniently located at Sudha Krishna Complex opposite the main Bus Stand.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Shop Interior",
      description: "Clean, spacious showroom environment for a relaxed browsing experience.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Product Display",
      description: "A wide catalog of home essentials, books, and household utilities.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Electronics Section",
      description: "Premium TV, refrigerators, washing machines, and water purifiers display.",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 90, damping: 15 }
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      
      {/* Decorative Blur elements */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
            Take a Tour of Our Showroom
          </h2>
          <div className="w-16 h-1.5 bg-accent mx-auto my-4 rounded-full"></div>
          <p className="font-sans text-slate-650 text-base">
            Take a virtual look inside Super Home Appliances. We feature a premium space showcasing top brands and household utilities.
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative h-96 rounded-3xl overflow-hidden border border-gray-150 shadow-2xs hover:shadow-lg transition-all duration-300 bg-slate-50 flex flex-col justify-end"
            >
              {/* Background Image Placeholder */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-85 transition-opacity duration-300"></div>

              {/* Text info and Labels */}
              <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
                
                {/* Photo tag label */}
                <div className="self-end">
                  <span className="text-[9px] uppercase font-extrabold tracking-widest bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    Placeholder
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-extrabold text-lg tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                    {item.description}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Callout */}
        <div className="mt-12 text-center text-xs text-slate-500">
          * Real photographs of our showroom interior, displays, and exterior fronts will be updated here shortly.
        </div>

      </div>
    </section>
  );
}
