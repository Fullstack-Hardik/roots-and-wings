import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is the admission procedure?",
    answer: "Admissions are open throughout the year subject to availability. You can fill out the enquiry form online or visit our Qazi Street campus. Following the enquiry, we schedule an interactive session with the parents and the child."
  },
  {
    question: "What are the school timings?",
    answer: "Our school operates from 8:00 AM to 2:00 PM from Monday to Saturday. Playgroup and Nursery timings are from 8:30 AM to 12:30 PM."
  },
  {
    question: "Is transport facility available?",
    answer: "Yes, we provide safe and secure air-conditioned transport facilities covering most areas of Saharanpur, including GPS tracking for parents."
  },
  {
    question: "What is the student-teacher ratio?",
    answer: "To ensure personalized attention, we maintain a strict 15:1 student-teacher ratio in kindergarten and 25:1 in primary classes."
  },
  {
    question: "How do you ensure campus safety?",
    answer: "The entire campus is covered by 24/7 CCTV surveillance. We have trained security guards, and no child is handed over to unverified individuals."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-primary/5">
      {/* Inject FAQ Schema specifically when this component mounts */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to the most common questions about admissions, facilities, and our educational approach.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
