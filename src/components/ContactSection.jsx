import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LucideIcon from './LucideIcon';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryOptions = [
    'General Inquiry',
    'Televisions & Electronics',
    'Refrigerators & ACs',
    'Washing Machines',
    'Water Purifiers',
    'Kitchen Chimneys & Cooking Stoves',
    'Mixers, Grinders & Small Appliances',
    'School Books & Stationery',
    'Home Essentials & Retail'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (10+ digits).';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Clear form
      setFormData({
        name: '',
        phone: '',
        email: '',
        inquiryType: 'General Inquiry',
        message: ''
      });
    }, 1500);
  };

  const handleOpenMap = () => {
    window.open("https://maps.google.com/?q=Super+Home+Appliances+Sudha+Krishna+Complex+Balehonnur", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background visual shapes */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
            Visit Our Showroom or Write to Us
          </h2>
          <div className="w-16 h-1.5 bg-accent mx-auto my-4 rounded-full"></div>
          <p className="font-sans text-slate-650 text-base">
            We are centrally located opposite the Balehonnur Bus Stand. Have a question about models, pricing, or stock? Contact us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Details Column - 5 cols */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            
            {/* Showroom Details Block */}
            <div className="p-8 rounded-3xl bg-white border border-gray-150 shadow-2xs">
              <h3 className="font-display font-extrabold text-xl text-secondary mb-6 flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-50 text-primary">
                  <LucideIcon name="Store" size={18} />
                </span>
                <span>SUPER HOME APPLIANCES</span>
              </h3>

              <div className="space-y-5 text-sm md:text-base text-slate-600 font-sans">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <LucideIcon name="MapPin" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <span className="block font-bold text-secondary text-sm uppercase tracking-wider mb-1">Our Address</span>
                    <span className="leading-relaxed">
                      Ground Floor, Sudha Krishna Complex,<br />
                      Opposite Bus Stand, Balehonnur,<br />
                      Chikkamagaluru District, Karnataka - 577112
                    </span>
                  </div>
                </div>

                {/* Call */}
                <div className="flex items-start gap-4">
                  <LucideIcon name="Phone" className="text-primary mt-1 flex-shrink-0" size={16} />
                  <div>
                    <span className="block font-bold text-secondary text-sm uppercase tracking-wider mb-1">Call Store</span>
                    <a href="tel:9480316968" className="text-primary font-bold hover:underline">
                      +91 94803 16968
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <LucideIcon name="Clock" className="text-primary mt-1 flex-shrink-0" size={18} />
                  <div>
                    <span className="block font-bold text-secondary text-sm uppercase tracking-wider mb-1">Working Hours</span>
                    <span className="block text-sm">Mon - Sat: 9:30 AM - 8:30 PM</span>
                    <span className="block text-sm text-slate-500">Sunday: 10:00 AM - 2:00 PM (Half Day)</span>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="https://wa.me/919480316968"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-sans text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <LucideIcon name="MessageSquare" size={18} />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Google Map Embedded Location */}
            <div className="flex flex-col gap-4">
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-2xs aspect-video bg-slate-100 relative">
                <iframe
                  title="Super Home Appliances Showroom Location"
                  src="https://maps.google.com/maps?q=D59F27%2B8PQ%2C+Balehonnur+-+Chikkamagaluru+Rd%2C+Balehonnur%2C+B.Kanbur%2C+Karnataka+577112&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=D59F27%2B8PQ%2C+Balehonnur+-+Chikkamagaluru+Rd%2C+Balehonnur%2C+B.Kanbur%2C+Karnataka+577112"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-50 text-secondary hover:text-primary border border-gray-250 font-sans text-sm font-bold shadow-2xs hover:shadow-xs transition-all duration-300"
              >
                <LucideIcon name="MapPin" size={16} className="text-accent" />
                <span>Get Directions from Your Location</span>
              </a>
            </div>

          </div>

          {/* Form Column - 7 cols */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-gray-150 shadow-sm relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="font-display font-extrabold text-2xl text-secondary mb-1">
                        Send An Inquiry
                      </h3>
                      <p className="font-sans text-sm text-slate-500">
                        Leave a message and we'll check our showroom inventory and contact you shortly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="font-sans text-xs font-bold text-slate-600 uppercase tracking-wider">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                            errors.name ? 'border-rose-400 focus:ring-rose-200' : 'border-gray-200 focus:ring-primary/20'
                          }`}
                          placeholder="Your name"
                        />
                        {errors.name && <span className="text-rose-500 text-xs font-medium">{errors.name}</span>}
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="font-sans text-xs font-bold text-slate-600 uppercase tracking-wider">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                            errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-gray-200 focus:ring-primary/20'
                          }`}
                          placeholder="Mobile number"
                        />
                        {errors.phone && <span className="text-rose-500 text-xs font-medium">{errors.phone}</span>}
                      </div>

                    </div>

                    {/* Inquiry Type */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="inquiryType" className="font-sans text-xs font-bold text-slate-600 uppercase tracking-wider">
                        What are you looking for?
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-slate-700 cursor-pointer"
                      >
                        {inquiryOptions.map((option, idx) => (
                          <option key={idx} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>


                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="font-sans text-xs font-bold text-slate-600 uppercase tracking-wider">
                        Your Message <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                          errors.message ? 'border-rose-400 focus:ring-rose-200' : 'border-gray-200 focus:ring-primary/20'
                        }`}
                        placeholder="Detail the brand, model, size, or stationery requirements..."
                      ></textarea>
                      {errors.message && <span className="text-rose-500 text-xs font-medium">{errors.message}</span>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-primary hover:bg-secondary text-white font-sans text-sm font-bold shadow-md hover:shadow-lg disabled:bg-slate-400 disabled:shadow-none transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <LucideIcon name="Send" size={16} />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center shadow-inner mb-6">
                      <LucideIcon name="ShieldCheck" size={32} />
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-secondary mb-2">
                      Inquiry Sent Successfully!
                    </h3>
                    <p className="font-sans text-slate-500 text-sm max-w-sm mx-auto mb-6">
                      Thank you for contacting Super Home Appliances. The store team has received your details and will call or message you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-gray-250 text-slate-600 hover:text-primary hover:border-primary transition-all font-sans text-xs font-semibold"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
