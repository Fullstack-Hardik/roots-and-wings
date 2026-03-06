import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'What are the admission requirements for kindergarten?',
    a: 'Children aged 3–6 years are eligible for Nursery to UKG. Required documents: Birth Certificate, 4 passport photos, parent\'s ID proof, and address proof. No entrance test for nursery-level admissions.',
  },
  {
    q: 'What age groups does Roots & Wings School cater to?',
    a: 'We offer programs for children from age 2 (Playgroup) to 11 years (Class 5) — covering Playgroup, Nursery, LKG, UKG, and Class 1 to 5.',
  },
  {
    q: 'Is the school affiliated with any education board?',
    a: 'Yes, our curriculum is aligned with CBSE guidelines, ensuring students are well-prepared for future schooling. We follow a play-way methodology for early grades.',
  },
  {
    q: 'What safety measures are in place on campus?',
    a: 'We have 24/7 CCTV surveillance, verified staff, secure entry/exit gates, and GPS-tracked school buses. Child safety is our highest priority at Roots & Wings.',
  },
  {
    q: 'Are school transport facilities available?',
    a: 'Yes, we offer safe GPS-tracked bus service covering major areas in Saharanpur. Please contact our office for route details and availability near your location.',
  },
  {
    q: 'How can I apply for admission to Roots & Wings School?',
    a: 'Visit our Contact page and fill out the admission inquiry form, or call us directly at +91-74095-41444. Our team will guide you through the process within 24 hours.',
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-gradient-to-br from-sky-50 to-violet-50/50">
      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            FAQ — Admissions
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="text-gradient-day">Questions</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Everything you need to know about admissions, programs, and campus life at Roots & Wings.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="font-heading font-bold text-sm sm:text-base text-gray-900">{faq.q}</span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  open === i ? 'bg-sky-500 text-white rotate-180' : 'bg-gray-100 text-gray-500'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-gray-500 text-sm mb-5">Still have questions? We're here to help!</p>
          <Link to="/contact" className="btn-primary inline-flex">
            📞 Contact Admissions Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
