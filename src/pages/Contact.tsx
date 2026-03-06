import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact & Admissions | Roots & Wings School Saharanpur</title>
        <meta name="description" content="Contact Roots & Wings School in Saharanpur for admissions, school visit, or queries. Address: Qazi Street, Saharanpur. Phone: +91-74095-41444. Admissions open 2025-26." />
        <meta property="og:title" content="Contact Admissions | Roots & Wings School Saharanpur" />
      </Helmet>

      {/* DAY Theme Hero */}
      <section className="theme-day relative overflow-hidden py-20 sm:py-24">
        {/* 3D SVG: Map Pin */}
        <motion.div
          className="absolute right-[8%] top-12 hidden lg:block"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <svg width="80" height="100" viewBox="0 0 80 100">
            <defs>
              <radialGradient id="pinGrad" cx="35%" cy="30%">
                <stop offset="0%" stopColor="#f472b6" />
                <stop offset="100%" stopColor="#ec4899" />
              </radialGradient>
            </defs>
            <path d="M40,8 C22,8 8,22 8,40 C8,62 40,92 40,92 C40,92 72,62 72,40 C72,22 58,8 40,8 Z" fill="url(#pinGrad)" />
            <circle cx="40" cy="40" r="14" fill="white" />
            <circle cx="40" cy="40" r="8" fill="#ec4899" />
            <ellipse cx="34" cy="34" rx="5" ry="3" fill="rgba(255,255,255,0.5)" />
          </svg>
        </motion.div>

        <div className="container-pad relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              📍 Find Us
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-5">
              Contact &{' '}
              <span className="text-gradient-day">Admissions</span>
            </h1>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              We'd love to hear from you! Reach out for admissions, school visits, or any questions about our programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-4 mb-8">
                {[
                  { icon: MapPin, label: 'School Address', value: 'Qazi Street, Mohalla Qazi, Saharanpur, Uttar Pradesh — 247001', color: 'bg-pink-100 text-pink-600', href: 'https://maps.google.com/?q=Saharanpur+UP' },
                  { icon: Phone, label: 'Phone Numbers', value: '+91 74095 41444  |  +91 99971 64404', color: 'bg-emerald-100 text-emerald-600', href: 'tel:+917409541444' },
                  { icon: Mail, label: 'Email Address', value: 'info@rootsandwings.edu.in', color: 'bg-sky-100 text-sky-600', href: 'mailto:info@rootsandwings.edu.in' },
                  { icon: Clock, label: 'School Hours', value: 'Monday – Saturday: 8:00 AM – 3:00 PM', color: 'bg-amber-100 text-amber-600', href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-sky-200 transition-colors">
                    <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-800 text-sm font-semibold hover:text-sky-600 transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-gray-800 text-sm font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Admission Info Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-violet-50 border border-sky-200">
                <h3 className="font-heading font-bold text-gray-900 mb-3 flex items-center gap-2">
                  🎒 Admission Requirements
                </h3>
                <ul className="space-y-1.5">
                  {['Birth Certificate (original + photocopy)', 'Aadhar Card / Parent\'s ID Proof', 'Address Proof', '4 Recent Passport Size Photos', 'Previous School TC (if applicable)'].map((req) => (
                    <li key={req} className="text-sm text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Map + Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg h-64">
                <iframe
                  title="Roots and Wings School Location Saharanpur"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55813.44!2d77.5459!3d29.9647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ef5a4be7a1a7f%3A0xd3c3ddf1be2cebc2!2sSaharanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-sky-50 to-violet-50 rounded-2xl border border-sky-100 p-5 sm:p-6">
                <h3 className="font-heading font-bold text-gray-900 mb-5">Send an Admission Inquiry</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-gray-600 block mb-1">Parent's Name *</label>
                      <input type="text" placeholder="Your name" className="w-full px-3 py-2.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all" required />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-600 block mb-1">Child's Name *</label>
                      <input type="text" placeholder="Child's name" className="w-full px-3 py-2.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-600 block mb-1">Phone Number *</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-3 py-2.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all" required />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-600 block mb-1">Class Applying For</label>
                    <select className="w-full px-3 py-2.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all text-gray-700">
                      <option value="">Select class</option>
                      {['Playgroup', 'Nursery', 'LKG', 'UKG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-600 block mb-1">Message</label>
                    <textarea rows={3} placeholder="Any special queries or requests..." className="w-full px-3 py-2.5 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all resize-none" />
                  </div>
                  <button type="submit" className="w-full btn-primary justify-center">
                    🚀 Submit Admission Request
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
