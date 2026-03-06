import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileText, Download, ShieldCheck, HeartHandshake } from 'lucide-react';
import FaqSection from '../components/FaqSection';

export default function ParentGuide() {
  return (
    <>
      <Helmet>
        <title>Parent Guide & Resources | Roots and Wings School Saharanpur</title>
        <meta name="description" content="Information for parents regarding admissions, uniform guidelines, school timings, and rules at the best English medium school in Saharanpur." />
      </Helmet>

      {/* Page Header */}
      <div className="bg-primary/5 py-24 border-b border-primary/10 relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute -right-20 -top-20 text-9xl opacity-10"
        >
          👨‍👩‍👧‍👦
        </motion.div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            Parent Guide
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to know about partnering with us in your child's educational journey.
          </motion.p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-3xl border border-blue-100"
            >
              <FileText className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Admission Process</h3>
              <p className="text-gray-600 mb-6">Complete guide to enrolling your child, from form submission to documentation.</p>
              <button className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors">
                <Download className="w-4 h-4" /> Download Form
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-green-50 p-8 rounded-3xl border border-green-100"
            >
              <ShieldCheck className="w-10 h-10 text-green-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">School Rules</h3>
              <p className="text-gray-600 mb-6">Important guidelines on uniform, attendance, leave policy, and discipline.</p>
              <button className="flex items-center gap-2 text-green-600 font-bold hover:text-green-800 transition-colors">
                <Download className="w-4 h-4" /> Download Rulebook
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-pink-50 p-8 rounded-3xl border border-pink-100"
            >
              <HeartHandshake className="w-10 h-10 text-pink-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Parent Involvement</h3>
              <p className="text-gray-600 mb-6">Learn how you can participate in PTMs, events, and your child's daily progress.</p>
              <button className="flex items-center gap-2 text-pink-600 font-bold hover:text-pink-800 transition-colors">
                <Download className="w-4 h-4" /> View Calendar
              </button>
            </motion.div>
          </div>

        </div>
      </div>
      
      <FaqSection />
    </>
  );
}
