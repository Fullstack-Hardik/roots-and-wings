import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Crystal Raindrop SVG
const CrystalDrop = ({ x, delay }: { x: number; delay: number }) => (
  <motion.div
    className="absolute hidden md:block"
    style={{ left: `${x}%`, top: '-5%' }}
    animate={{ y: ['0vh', '110vh'], opacity: [0, 0.7, 0] }}
    transition={{ repeat: Infinity, duration: 2 + Math.random(), ease: 'linear', delay }}
  >
    <svg width="3" height="30" viewBox="0 0 3 30">
      <rect x="0" y="0" width="3" height="30" rx="1.5" fill="rgba(147,197,253,0.5)" />
    </svg>
  </motion.div>
);

const tips = [
  { emoji: '🧸', title: 'Make School Fun at Home', desc: 'Play "school" at home to build excitement. Let your child experience being both teacher and student.' },
  { emoji: '📅', title: 'Establish a Routine', desc: 'A consistent wake-up, meal, and bedtime routine helps children feel safe and ready to learn each day.' },
  { emoji: '📖', title: 'Read Together Daily', desc: 'Spend 15 minutes reading with your child every day. Let them choose books and ask about the story.' },
  { emoji: '🗣️', title: 'Talk About Their Day', desc: 'Ask specific questions: "What made you laugh today?" or "Who did you sit next to?" — not just "How was school?"' },
  { emoji: '🎨', title: 'Support Creative Activity', desc: 'Provide crayons, clay, and building blocks at home. Creative play builds the same brain pathways as learning.' },
  { emoji: '🙏', title: 'Communicate With Teachers', desc: 'Attend parent-teacher meetings and maintian open communication. Teachers greatly appreciate involved parents.' },
];

export default function ParentGuide() {
  return (
    <>
      <Helmet>
        <title>Parent Guide | Roots & Wings School Saharanpur</title>
        <meta name="description" content="A complete parent guide for Roots & Wings School, Saharanpur — tips for supporting your child's learning, school policies, and frequently asked questions." />
        <meta property="og:title" content="Parent Guide | Roots & Wings School Saharanpur" />
      </Helmet>

      {/* RAINY Theme Hero */}
      <section className="theme-rainy relative overflow-hidden py-20 sm:py-28">
        {/* Rain */}
        {[...Array(25)].map((_, i) => (
          <CrystalDrop key={i} x={i * 4 + Math.random() * 3} delay={Math.random() * 2} />
        ))}

        {/* 3D Open Book SVG */}
        <motion.div
          className="absolute right-[8%] top-12 hidden lg:block"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        >
          <svg width="110" height="85" viewBox="0 0 110 85">
            <defs>
              <linearGradient id="bookLeft" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <linearGradient id="bookRight" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#818cf8" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            {/* Left page */}
            <path d="M55,15 C40,12 15,18 8,25 L8,72 C15,65 40,59 55,62 Z" fill="url(#bookLeft)" />
            {/* Right page */}
            <path d="M55,15 C70,12 95,18 102,25 L102,72 C95,65 70,59 55,62 Z" fill="url(#bookRight)" />
            {/* Spine */}
            <line x1="55" y1="13" x2="55" y2="63" stroke="#1e3a8a" strokeWidth="3" />
            {/* Lines on pages */}
            {[30,38,46,54].map(y => <line key={y} x1="18" y1={y} x2="48" y2={y-3} stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />)}
            {[30,38,46,54].map(y => <line key={y} x1="62" y1={y} x2="92" y2={y-3} stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />)}
            {/* Shine */}
            <ellipse cx="25" cy="22" rx="12" ry="4" fill="rgba(255,255,255,0.2)" />
          </svg>
        </motion.div>

        <div className="container-pad relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-blue-400/30">
              🌧️ For Parents
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
              <span className="text-gradient-rainy">Parent</span>{' '}
              Guide
            </h1>
            <p className="text-blue-200 text-xl max-w-2xl mx-auto">
              Your child's success is a partnership between home and school. Here's everything you need to be an active, informed parent at Roots & Wings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="section-padding bg-[#0d1b3e]">
        <div className="container-pad">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-white mb-3">
              Tips for <span className="text-gradient-rainy">Supporting Your Child</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tips.map((tip, i) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: 'spring' }}
                className="card-3d bg-[#1e3a5f]/60 border border-blue-700/40 rounded-2xl p-5 hover:border-blue-400/50 transition-all duration-300"
                style={{ backdropFilter: 'blur(12px)' }}
              >
                <div className="text-4xl mb-4">{tip.emoji}</div>
                <h3 className="font-heading font-bold text-white text-base mb-2">{tip.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Policy info */}
      <section className="bg-[#0a1628] section-padding">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* School timings */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-[#1e3a5f]/50 rounded-2xl border border-blue-700/40 p-5 sm:p-6" style={{ backdropFilter: 'blur(12px)' }}>
              <h3 className="font-heading font-bold text-white text-lg mb-5 flex items-center gap-2">
                ⏰ School Timings & Policies
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'School Hours', value: '8:00 AM – 3:00 PM (Mon–Sat)' },
                  { label: 'Playgroup Timing', value: '9:00 AM – 12:00 PM' },
                  { label: 'Lunch Break', value: '12:00 PM – 12:30 PM' },
                  { label: 'Uniform', value: 'Compulsory Monday–Friday (Colour Day – Saturday)' },
                  { label: 'Minimal Homework', value: 'Kindergarten: 0 hw. Primary: 20–30 min/day' },
                  { label: 'Holidays', value: 'As per UP State Government Calendar' },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col sm:flex-row sm:justify-between gap-1 pb-2 border-b border-blue-800/50">
                    <span className="text-blue-300 text-sm font-semibold">{item.label}</span>
                    <span className="text-white text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-gradient-to-br from-sky-600/20 to-violet-600/20 rounded-2xl border border-sky-500/30 p-5 sm:p-6 flex flex-col justify-center items-center text-center gap-5">
              <div className="text-6xl">👨‍👩‍👧‍👦</div>
              <h3 className="font-heading font-black text-xl text-white">Ready to Join Our School Family?</h3>
              <p className="text-blue-200 text-sm max-w-xs">
                Admissions for 2025-26 are open! Contact us today for a free school tour and admission inquiry.
              </p>
              <Link to="/contact" className="btn-primary" style={{ background: 'linear-gradient(135deg, #60a5fa, #a78bfa)' }}>
                📞 Contact Us Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
