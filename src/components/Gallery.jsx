import { motion } from 'framer-motion';

export default function Gallery() {
  const galleryItems = [
    {
      title: "Refrigerators Showroom",
      description: "Double-door, single-door, and smart side-by-side refrigerators from India's top brands.",
      image: "/showroom_refrigerators.png",
      tag: "Refrigerators"
    },
    {
      title: "Premium Washing Machines",
      description: "A wide selection of top-load washing machines and home utility inventory.",
      image: "/showroom_top_load.png",
      tag: "Washing Machines"
    },
    {
      title: "Front Loaders & Microwaves",
      description: "Premium front load washing machines and smart convection microwave ovens.",
      image: "/showroom_front_load.png",
      tag: "Home Electronics"
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
    <section id="gallery" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Blur elements */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold text-primary tracking-widest uppercase bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
            Our Showroom
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary mt-4">
            Take a Look Inside Our Store
          </h2>
          <div className="w-16 h-1.5 bg-accent mx-auto my-4 rounded-full"></div>
          <p className="font-sans text-slate-650 text-base">
            Take a virtual tour of Super Home Appliances. Visit our showroom in Balehonnur to browse all models in person!
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative h-96 rounded-3xl overflow-hidden border border-gray-150 shadow-2xs hover:shadow-lg transition-all duration-300 bg-slate-50 flex flex-col justify-end"
            >
              {/* Background Image */}
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
                <div className="self-start">
                  <span className="text-[9px] uppercase font-extrabold tracking-widest bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    {item.tag}
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

      </div>
    </section>
  );
}
