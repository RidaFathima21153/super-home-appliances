import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/siteData';
import LucideIcon from './LucideIcon';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faqs" className="py-20 bg-white relative overflow-hidden">
      
      {/* Decorative gradient elements */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1.5 bg-accent mx-auto my-4 rounded-full"></div>
          <p className="font-sans text-slate-650 text-base">
            Have questions about delivery, installation, or warranties? Read our answers to the most common inquiries below.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div
                key={index}
                className="border border-gray-150 rounded-2xl overflow-hidden transition-all duration-300 bg-slate-50/30 hover:bg-slate-50"
              >
                
                {/* Header Toggle */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-display font-bold text-base md:text-lg text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <span>{faq.question}</span>
                  <div className={`p-1.5 rounded-full bg-white border border-gray-200 text-slate-550 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <LucideIcon name="ChevronDown" size={16} />
                  </div>
                </button>

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="p-5 pt-0 border-t border-gray-100 font-sans text-sm md:text-base text-slate-600 leading-relaxed bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-gray-150 max-w-xl mx-auto">
          <p className="font-sans text-sm text-slate-550">
            Still have a question? Contact us directly. We are always ready to assist!
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="tel:9480316968"
              className="flex items-center gap-2 text-primary font-sans text-sm font-semibold hover:underline"
            >
              <LucideIcon name="Phone" size={16} />
              <span>Call 9480316968</span>
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="https://wa.me/919480316968"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-emerald-500 font-sans text-sm font-semibold hover:underline"
            >
              <LucideIcon name="MessageSquare" size={16} />
              <span>WhatsApp Store</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
