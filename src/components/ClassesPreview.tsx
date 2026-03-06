import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const classes = [
  {
    name: 'Playgroup',
    age: '2–3 Years',
    emoji: '🧸',
    description: 'A safe, warm introduction to school life through sensory play, rhymes, and story time.',
    features: ['Sensory Play', 'Rhymes & Songs', 'Story Time'],
    color: 'from-pink-400 to-rose-500',
    lightBg: 'bg-pink-50',
    border: 'border-pink-200',
    badge: 'bg-pink-100 text-pink-700',
  },
  {
    name: 'Nursery',
    age: '3–4 Years',
    emoji: '🎨',
    description: 'Creative and playful learning focused on colors, shapes, counting and social skills.',
    features: ['Art & Craft', 'Counting & Colors', 'Social Skills'],
    color: 'from-amber-400 to-orange-500',
    lightBg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'LKG',
    age: '4–5 Years',
    emoji: '📖',
    description: 'Building foundations in language, math, and science through fun activities.',
    features: ['Phonics & Reading', 'Basic Math', 'Science Explore'],
    color: 'from-sky-400 to-blue-500',
    lightBg: 'bg-sky-50',
    border: 'border-sky-200',
    badge: 'bg-sky-100 text-sky-700',
  },
  {
    name: 'UKG',
    age: '5–6 Years',
    emoji: '🔬',
    description: 'Advanced concepts in language, numeracy, and hands-on science experiments.',
    features: ['Reading & Writing', 'Numeracy', 'Science Projects'],
    color: 'from-violet-400 to-purple-600',
    lightBg: 'bg-violet-50',
    border: 'border-violet-200',
    badge: 'bg-violet-100 text-violet-700',
  },
  {
    name: 'Class 1–3',
    age: '6–9 Years',
    emoji: '✏️',
    description: 'CBSE-aligned curriculum with a focus on conceptual clarity and creative thinking.',
    features: ['English & Hindi', 'Mathematics', 'EVS & GK'],
    color: 'from-emerald-400 to-teal-600',
    lightBg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'Class 4–5',
    age: '9–11 Years',
    emoji: '🚀',
    description: 'Advanced primary schooling with project-based learning, debates, and critical thinking.',
    features: ['STEM Projects', 'Debates', 'Critical Thinking'],
    color: 'from-indigo-400 to-blue-700',
    lightBg: 'bg-indigo-50',
    border: 'border-indigo-200',
    badge: 'bg-indigo-100 text-indigo-700',
  },
];

const ClassesPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-pad">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Our Programs
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Classes &{' '}
            <span className="text-gradient-day">Programs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From Playgroup to Class 5, every stage is carefully designed to nurture your child's growth with joy and purpose.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 100 }}
              className={`card-3d relative rounded-2xl border ${cls.border} ${cls.lightBg} p-5 sm:p-6 group cursor-pointer overflow-hidden`}
            >
              {/* Top Gradient Strip */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cls.color} rounded-t-2xl`} />

              {/* Icon + Age Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cls.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {cls.emoji}
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${cls.badge}`}>{cls.age}</span>
              </div>

              <h3 className="font-heading font-black text-xl text-gray-900 mb-2">{cls.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{cls.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cls.features.map((f) => (
                  <span key={f} className="text-xs font-semibold bg-white/80 text-gray-700 px-2.5 py-1 rounded-full border border-gray-200">
                    {f}
                  </span>
                ))}
              </div>

              <Link
                to="/classes"
                className={`flex items-center gap-1.5 text-sm font-bold bg-gradient-to-r ${cls.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
              >
                Learn More <ArrowRight className="w-4 h-4 text-current group-hover:translate-x-1 transition-transform" style={{ stroke: 'url(#grad)' }} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/contact" className="btn-primary inline-flex">
            🎒 Apply for Admission Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ClassesPreview;
