import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const programs = [
  { name: 'Playgroup', age: '2–3 yrs', emoji: '🧸', color: 'from-pink-400 to-rose-500', bg: 'bg-pink-50', border: 'border-pink-200', features: ['Sensory Play', 'Rhymes & Songs', 'Motor Skills', 'Socialization'] },
  { name: 'Nursery', age: '3–4 yrs', emoji: '🎨', color: 'from-amber-400 to-orange-500', bg: 'bg-amber-50', border: 'border-amber-200', features: ['Colors & Shapes', 'Counting 1–20', 'Pre-Writing', 'Art & Craft'] },
  { name: 'LKG', age: '4–5 yrs', emoji: '📖', color: 'from-sky-400 to-blue-500', bg: 'bg-sky-50', border: 'border-sky-200', features: ['Phonics & Letters', 'Math Basics', 'Science Fun', 'Drawing & Paint'] },
  { name: 'UKG', age: '5–6 yrs', emoji: '🔬', color: 'from-violet-400 to-purple-600', bg: 'bg-violet-50', border: 'border-violet-200', features: ['Reading & Writing', 'Addition & Sub.', 'Computer Intro', 'Music & Dance'] },
  { name: 'Class 1–3', age: '6–9 yrs', emoji: '✏️', color: 'from-emerald-400 to-teal-600', bg: 'bg-emerald-50', border: 'border-emerald-200', features: ['English Grammar', 'Mathematics', 'EVS & GK', 'Social Science'] },
  { name: 'Class 4–5', age: '9–11 yrs', emoji: '🚀', color: 'from-indigo-400 to-blue-700', bg: 'bg-indigo-50', border: 'border-indigo-200', features: ['Advanced English', 'Maths & Science', 'Computer Sci.', 'STEM Projects'] },
];

export default function Classes() {
  return (
    <>
      <Helmet>
        <title>Classes & Admissions | Roots & Wings School Saharanpur</title>
        <meta name="description" content="Explore all classes from Playgroup to Class 5 at Roots & Wings School, Saharanpur. Apply for 2025-26 admissions for the best kindergarten and primary school in Saharanpur, UP." />
        <meta property="og:title" content="Classes & Admissions | Roots & Wings School Saharanpur" />
      </Helmet>

      {/* SPRING Theme Hero */}
      <section className="theme-spring relative overflow-hidden py-20 sm:py-28">
        {/* Floating school items */}
        {['📚', '✏️', '🎒', '🎨'].map((emoji, i) => (
          <motion.div
            key={i}
            className={`absolute text-3xl hidden lg:block`}
            style={{ left: `${[8, 85, 15, 80][i]}%`, top: `${[20, 15, 65, 70][i]}%` }}
            animate={{ y: [0, -12, 0], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 + i, ease: 'easeInOut', delay: i * 0.7 }}
          >
            {emoji}
          </motion.div>
        ))}

        <div className="container-pad relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              🌸 Programs & Admissions
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-5">
              Our{' '}
              <span className="text-gradient-spring">Classes</span>
            </h1>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-8">
              From Playgroup to Class 5, every stage is carefully crafted to nurture your child's potential at Roots & Wings, Saharanpur.
            </p>
            <Link to="/contact" className="btn-primary inline-flex" style={{ background: 'linear-gradient(135deg, #ec4899, #7c3aed)' }}>
              🎒 Apply for Admission 2025–26
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="white" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Programs Detail */}
      <section className="section-padding bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, type: 'spring' }}
                className={`card-3d card-3d-spring rounded-2xl border ${prog.border} ${prog.bg} overflow-hidden`}
              >
                <div className={`bg-gradient-to-r ${prog.color} p-5 flex items-center gap-3`}>
                  <span className="text-4xl">{prog.emoji}</span>
                  <div>
                    <h2 className="font-heading font-black text-xl text-white">{prog.name}</h2>
                    <span className="text-white/80 text-sm font-semibold">{prog.age}</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Curriculum Highlights</p>
                  <div className="space-y-2">
                    {prog.features.map((f) => (
                      <div key={f} className={`flex items-center gap-2 px-3 py-2 bg-white rounded-xl border ${prog.border}`}>
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${prog.color}`} />
                        <span className="text-sm text-gray-700 font-semibold">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="mt-4 flex items-center gap-1.5 text-sm font-bold hover:gap-3 transition-all" style={{ color: '#ec4899' }}>
                    Inquire About {prog.name} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="theme-spring section-padding relative overflow-hidden">
        <div className="container-pad">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-gray-900 mb-4">
              Simple <span className="text-gradient-spring">Admission Process</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Contact Us', desc: 'Call or fill the inquiry form on our Contact page.', emoji: '📞' },
              { step: '02', title: 'School Visit', desc: 'Book a campus tour and meet our teaching team.', emoji: '🏫' },
              { step: '03', title: 'Submit Documents', desc: 'Provide birth certificate, ID, and photos.', emoji: '📋' },
              { step: '04', title: 'Confirm Seat', desc: 'Pay the admission fee and confirm your child\'s seat.', emoji: '✅' },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-pink-100 text-center card-3d card-3d-spring relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 font-heading font-black text-5xl text-pink-100">{s.step}</div>
                <div className="text-4xl mb-3 relative z-10">{s.emoji}</div>
                <h3 className="font-heading font-bold text-base text-gray-900 mb-1.5 relative z-10">{s.title}</h3>
                <p className="text-gray-500 text-xs relative z-10">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
