import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Target, Sparkles, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// 3D Flower SVG for Spring theme
const Flower3D = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80">
    <defs>
      <radialGradient id="petalGrad" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#f9a8d4" />
        <stop offset="100%" stopColor="#ec4899" />
      </radialGradient>
    </defs>
    {[...Array(6)].map((_, i) => (
      <ellipse key={i} cx="40" cy="14" rx="7" ry="14" fill="url(#petalGrad)" opacity="0.85"
        transform={`rotate(${i * 60} 40 40)`} />
    ))}
    <circle cx="40" cy="40" r="12" fill="#fbbf24" />
    <circle cx="40" cy="40" r="7" fill="#f59e0b" />
    <ellipse cx="37" cy="37" rx="3" ry="2" fill="rgba(255,255,255,0.5)" />
  </svg>
);

// Butterfly SVG
const Butterfly = () => (
  <svg width="60" height="50" viewBox="0 0 60 50">
    <ellipse cx="15" cy="20" rx="14" ry="18" fill="#f0abfc" opacity="0.8" transform="rotate(-30 15 20)" />
    <ellipse cx="15" cy="35" rx="10" ry="12" fill="#e879f9" opacity="0.7" transform="rotate(20 15 35)" />
    <ellipse cx="45" cy="20" rx="14" ry="18" fill="#f0abfc" opacity="0.8" transform="rotate(30 45 20)" />
    <ellipse cx="45" cy="35" rx="10" ry="12" fill="#e879f9" opacity="0.7" transform="rotate(-20 45 35)" />
    <ellipse cx="30" cy="27" rx="3" ry="17" fill="#4c1d95" />
    <circle cx="30" cy="10" r="3" fill="#4c1d95" />
  </svg>
);

const values = [
  { title: 'Holistic Development', desc: 'Physical, emotional, social & cognitive growth for every child.', icon: Heart, color: 'text-pink-500 bg-pink-100', emoji: '💗' },
  { title: 'Child-Centric Learning', desc: 'Tailored education that meets each child\'s unique learning style.', icon: Users, color: 'text-sky-500 bg-sky-100', emoji: '🧒' },
  { title: 'Academic Excellence', desc: 'High standards of education while keeping learning joyful and fun.', icon: Target, color: 'text-emerald-500 bg-emerald-100', emoji: '🎯' },
  { title: 'Creative Expression', desc: 'Music, arts, play, and imagination are core to everything we do.', icon: Sparkles, color: 'text-amber-500 bg-amber-100', emoji: '✨' },
];

const milestones = [
  { year: '2014', event: 'Roots & Wings School founded with 30 students' },
  { year: '2016', event: 'Expanded to Class 1–3 with new dedicated block' },
  { year: '2018', event: 'Smart classroom technology introduced' },
  { year: '2020', event: 'Launched online learning platform during pandemic' },
  { year: '2022', event: 'New playground and activity center inaugurated' },
  { year: '2025', event: '500+ students; recognized as top school in Saharanpur' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Roots & Wings | Best Nursery School in Saharanpur, UP</title>
        <meta name="description" content="Discover the mission, vision, and story of Roots & Wings School — the best kindergarten and primary school in Saharanpur, UP. 10+ years of educational excellence." />
        <meta property="og:title" content="About Roots & Wings | Best Nursery School in Saharanpur" />
        <meta property="og:description" content="10+ years of nurturing young minds. Learn about our team, values, and curriculum." />
      </Helmet>

      {/* SPRING Theme Hero */}
      <section className="theme-spring relative overflow-hidden py-20 sm:py-28">
        {/* 3D SVG: Floating flowers */}
        {[[5, 10], [80, 15], [90, 70], [10, 75]].map(([l, t], i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${l}%`, top: `${t}%` }}
            animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 5 + i * 1.5, ease: 'easeInOut', delay: i * 0.8 }}
          >
            <Flower3D size={50 + i * 10} />
          </motion.div>
        ))}
        
        {/* Butterfly 1 */}
        <motion.div
          className="absolute top-[20%] right-[15%] hidden lg:block"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        >
          <Butterfly />
        </motion.div>

        {/* 3D Blob shapes */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-200/50 rounded-full animate-morph" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-green-200/40 rounded-full animate-morph" style={{ animationDelay: '3s' }} />

        <div className="container-pad relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              🌸 Our Story
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-5 leading-tight">
              About{' '}
              <span className="text-gradient-spring">Roots & Wings</span>
              <br />School
            </h1>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Nurturing roots to grow strong, giving wings to soar high — the best kindergarten and primary school in Saharanpur since 2014.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="section-padding bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-5">
                Welcome to{' '}
                <span className="text-gradient-spring">Roots & Wings</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Established in 2014, <strong>Roots & Wings School</strong> is recognized as the <strong>best nursery and primary school in Saharanpur</strong>, UP. We believe the early years are the most critical phase of a child's development.
                </p>
                <p>
                  Located near Qazi Street, our kindergarten school provides a safe, nurturing environment where children feel loved and respected daily. Our unique curriculum blends traditional values with modern educational methodologies.
                </p>
                <p>
                  We don't just teach — we inspire curiosity, encourage questions, and help children discover the joy of learning through play, creativity, and real-world exploration.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {['500+ happy students across all classes', 'CBSE-aligned curriculum Nursery to Class 5', '24/7 secure campus with CCTV surveillance', 'Experienced and certified teaching staff'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-gray-700 text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary mt-8 inline-flex" style={{ background: 'linear-gradient(135deg, #ec4899, #16a34a)' }}>
                🌸 Enroll Today
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-100">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Students at Roots and Wings School Saharanpur"
                  className="w-full h-80 sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 to-transparent" />
              </div>
              {/* Flower decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                className="absolute -top-5 -right-5"
              >
                <Flower3D size={70} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Spring Theme */}
      <section className="section-padding theme-spring relative overflow-hidden">
        <div className="container-pad relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-4">
              Our Core{' '}
              <span className="text-gradient-spring">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-3d card-3d-spring bg-white rounded-2xl p-6 text-center border border-pink-100"
              >
                <div className="text-4xl mb-4">{v.emoji}</div>
                <h3 className="font-heading font-bold text-base text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-white">
        <div className="container-pad">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-4">
              Our <span className="text-gradient-spring">Journey</span>
            </h2>
          </motion.div>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 to-green-300" />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-start gap-6 mb-8 pl-14"
              >
                <div className="absolute left-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-400 to-emerald-400 flex items-center justify-center text-white font-heading font-black text-xs shadow-lg z-10">
                  {m.year}
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-emerald-50 rounded-2xl px-4 py-3 border border-pink-100 flex-1">
                  <p className="text-gray-700 text-sm font-semibold">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
