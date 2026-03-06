import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

// Flower SVG for Spring theme
const FloatingPetal = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{ y: [0, 60, 120], x: [0, 15, -5], rotate: [0, 180, 360], opacity: [0, 0.8, 0] }}
    transition={{ repeat: Infinity, duration: 5 + delay, ease: 'easeIn', delay }}
  >
    <svg width="15" height="15" viewBox="0 0 15 15">
      <ellipse cx="7.5" cy="7.5" rx="3" ry="7" fill="#f9a8d4" opacity="0.7" />
    </svg>
  </motion.div>
);

const teachers = [
  {
    name: 'Mrs. Nusrat Ansari',
    role: 'Principal & Founder',
    subject: 'School Administration',
    qualification: 'M.Ed, B.Ed',
    experience: '15+ Years',
    emoji: '👩‍💼',
    color: 'from-violet-400 to-purple-600',
    speciality: 'Educational Leadership, Child Psychology',
  },
  {
    name: 'Mrs. Priya Sharma',
    role: 'Head Teacher — Primary',
    subject: 'English & EVS',
    qualification: 'B.Ed, MA English',
    experience: '10 Years',
    emoji: '👩‍🏫',
    color: 'from-sky-400 to-blue-600',
    speciality: 'Phonics, Creative Writing',
  },
  {
    name: 'Mrs. Sunita Verma',
    role: 'Mathematics Teacher',
    subject: 'Maths & Science',
    qualification: 'B.Ed, B.Sc Mathematics',
    experience: '8 Years',
    emoji: '👩‍🔬',
    color: 'from-emerald-400 to-teal-600',
    speciality: 'Abacus, Logical Reasoning',
  },
  {
    name: 'Mr. Deepak Kumar',
    role: 'Art & Activity Teacher',
    subject: 'Art, Craft & Music',
    qualification: 'Diploma in Fine Arts',
    experience: '7 Years',
    emoji: '👨‍🎨',
    color: 'from-pink-400 to-rose-500',
    speciality: 'Painting, Clay Art, Puppet Shows',
  },
  {
    name: 'Mrs. Anjali Singh',
    role: 'Kindergarten Teacher',
    subject: 'Nursery, LKG & UKG',
    qualification: 'D.El.Ed, B.Ed',
    experience: '9 Years',
    emoji: '👩‍🏫',
    color: 'from-amber-400 to-orange-500',
    speciality: 'Montessori Method, Story-Based Learning',
  },
  {
    name: 'Mrs. Fatima Khan',
    role: 'Hindi & Urdu Teacher',
    subject: 'Hindi, Urdu & Moral Science',
    qualification: 'MA Hindi, B.Ed',
    experience: '6 Years',
    emoji: '👩‍🏫',
    color: 'from-indigo-400 to-blue-600',
    speciality: 'Poetry, Moral Stories, Value Education',
  },
];

export default function Teachers() {
  return (
    <>
      <Helmet>
        <title>Our Teachers | Roots & Wings School Saharanpur</title>
        <meta name="description" content="Meet the expert, caring, and experienced teachers at Roots & Wings School, the best kindergarten and primary school in Saharanpur, UP." />
        <meta property="og:title" content="Our Teachers | Roots & Wings School Saharanpur" />
      </Helmet>

      {/* SPRING Theme Hero */}
      <section className="theme-spring relative overflow-hidden py-20 sm:py-28">
        {/* Falling petals */}
        {[...Array(15)].map((_, i) => (
          <FloatingPetal key={i} x={Math.random() * 100} y={-5 + Math.random() * 10} delay={Math.random() * 5} />
        ))}

        {/* 3D Graduation Cap SVG */}
        <motion.div
          className="absolute right-[8%] top-12 hidden lg:block"
          animate={{ y: [0, -12, 0], rotate: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <svg width="90" height="80" viewBox="0 0 90 80">
            <defs>
              <linearGradient id="capGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            {/* Board */}
            <polygon points="45,10 80,28 45,46 10,28" fill="url(#capGrad)" />
            <polygon points="45,10 80,28 45,46 10,28" fill="rgba(255,255,255,0.1)" />
            {/* Top shine */}
            <ellipse cx="45" cy="18" rx="20" ry="5" fill="rgba(255,255,255,0.2)" />
            {/* Cylinder */}
            <ellipse cx="45" cy="46" rx="14" ry="5" fill="#6d28d9" />
            <rect x="31" y="41" width="28" height="12" rx="2" fill="#5b21b6" />
            <ellipse cx="45" cy="53" rx="14" ry="5" fill="#4c1d95" />
            {/* Tassel */}
            <line x1="78" y1="28" x2="78" y2="55" stroke="#fbbf24" strokeWidth="2" />
            <circle cx="78" cy="56" r="4" fill="#fbbf24" />
          </svg>
        </motion.div>

        <div className="container-pad relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              🌸 Our Educators
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-5">
              Meet Our{' '}
              <span className="text-gradient-spring">Amazing Teachers</span>
            </h1>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Our experienced, certified, and passionate teachers are the heart of Roots & Wings School — dedicated to shaping young minds every day.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="white" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="section-padding bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {teachers.map((teacher, i) => (
              <motion.div
                key={teacher.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
                className="card-3d card-3d-spring bg-white rounded-2xl border border-pink-100 overflow-hidden group text-center"
              >
                {/* Top color banner */}
                <div className={`bg-gradient-to-r ${teacher.color} h-28 flex items-center justify-center text-6xl relative`}>
                  <span className="group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">{teacher.emoji}</span>
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="font-heading font-black text-lg text-gray-900 mb-0.5">{teacher.name}</h3>
                  <p className={`text-sm font-bold bg-gradient-to-r ${teacher.color} bg-clip-text text-transparent mb-3`}>{teacher.role}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <GraduationCap className="w-4 h-4 text-pink-400" />
                      {teacher.qualification}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                      <Award className="w-4 h-4 text-amber-400" />
                      {teacher.experience} Experience
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-pink-50/70 border border-pink-100">
                    <p className="text-xs font-bold text-gray-500 mb-0.5">Speciality</p>
                    <p className="text-gray-700 text-xs font-semibold">{teacher.speciality}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="theme-spring section-padding relative overflow-hidden">
        <div className="container-pad text-center">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-gray-900 mb-4">Join Our Teaching Family</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Are you a passionate, qualified educator? We'd love to have you on our team at Roots & Wings School!</p>
          <a
            href="mailto:careers@rootsandwings.edu.in"
            className="btn-primary inline-flex"
            style={{ background: 'linear-gradient(135deg, #ec4899, #16a34a)' }}
          >
            🌸 Apply to Teach With Us
          </a>
        </div>
      </section>
    </>
  );
}
