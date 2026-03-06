import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Roots and Wings School Saharanpur</title>
        <meta name="description" content="Contact Roots and Wings kids learning school located at Qazi Street, Mohalla Qazi, Saharanpur. Call us at 7409541444 for admissions and inquiries." />
        <meta property="og:title" content="Contact Us | Roots and Wings School Saharanpur" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-primary/5 py-24 border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We would love to hear from you. Visit us or reach out for admission inquiries.
          </motion.p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="mt-2 text-gray-600">
                      Roots and Wings School<br/>
                      Qazi Street, Mohalla Qazi<br/>
                      Saharanpur, Uttar Pradesh
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="mt-2 text-gray-600">7409541444</p>
                    <p className="text-gray-600">9997164404</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="mt-2 text-gray-600">info@rootsandwings.edu.in</p>
                    <p className="text-gray-600">admissions@rootsandwings.edu.in</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">School Hours</h3>
                    <p className="mt-2 text-gray-600">Monday - Saturday: 8:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Admission Alert */}
              <div className="mt-12 bg-secondary/10 border border-secondary/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Admissions Open (2024-2025)</h3>
                <p className="text-gray-600 mb-4">We are currently accepting admission applications for Playgroup to Class 5. Seats are limited.</p>
                <button className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-full font-semibold hover:bg-secondary/90 transition-colors w-full sm:w-auto">
                  Download Parent Guide
                </button>
              </div>
            </motion.div>

            {/* Map & Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-[300px] w-full relative">
                <iframe 
                  src="https://maps.google.com/maps?q=29.9701579,77.540585&t=&z=17&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                  className="absolute inset-0"
                ></iframe>
              </div>

              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Parent's Name</label>
                      <input type="text" id="name" className="mt-2 block w-full rounded-xl border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                      <input type="tel" id="phone" className="mt-2 block w-full rounded-xl border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="childAge" className="block text-sm font-medium text-gray-700">Child's Age / Class Interested</label>
                    <input type="text" id="childAge" className="mt-2 block w-full rounded-xl border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" rows={4} className="mt-2 block w-full rounded-xl border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary text-white rounded-xl py-3 font-semibold hover:bg-primary/90 transition-colors">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}
