import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, MonitorPlay, Palette, Library, TreeDeciduous, Bus, Coffee, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

// 3D Beach Ball SVG
const BeachBall = () => (
  <svg width="80" height="80" viewBox="0 0 80 80">
    <defs>
      <clipPath id="ballClip"><circle cx="40" cy="40" r="36" /></clipPath>
    </defs>
    <circle cx="40" cy="40" r="36" fill="white" />
    <path d="M4,40 Q20,0 40,4 Q60,8 76,40" fill="#ef4444" clipPath="url(#ballClip)" />
    <path d="M4,40 Q20,80 40,76 Q60,72 76,40" fill="#3b82f6" clipPath="url(#ballClip)" />
    <path d="M40,4 Q80,20 76,40 Q72,60 40,76" fill="#fbbf24" clipPath="url(#ballClip)" />
    <circle cx="40" cy="40" r="36" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="2" />
    <ellipse cx="30" cy="25" rx="8" ry="4" fill="rgba(255,255,255,0.35)" />
  </svg>
);

const facilitiesData = [
  {
    title: 'Smart Classrooms',
    description: 'Our classrooms are equipped with modern interactive digital boards making learning visual, engaging, and adaptive to each student\'s pace. Every concept comes alive on screen.',
    icon: MonitorPlay,
    emoji: '🖥️',
    color: 'from-sky-400 to-blue-600',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    features: ['Interactive Digital Boards', 'Projectors & Audio', 'Wi-Fi Connected', 'Child-height furniture'],
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Activity & Art Room',
    description: 'Creativity knows no bounds in our dedicated art and activity rooms. Children explore painting, craft, clay modeling, and music under specialized instructors.',
    icon: Palette,
    emoji: '🎨',
    color: 'from-pink-400 to-rose-600',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    features: ['Painting & Drawing', 'Clay Modeling', 'Music & Dance', 'Theatre & Drama'],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Expansive Library',
    description: 'A treasure trove of age-appropriate books from colorful picture books to early chapter books. We cultivate a love for reading from the very first year.',
    icon: Library,
    emoji: '📚',
    color: 'from-violet-400 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    features: ['1000+ Books', 'Story Time Sessions', 'Reading Corners', 'Monthly Book Clubs'],
    image: 'https://images.unsplash.com/photo-1568227451457-4148e659c25f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Outdoor Play Area',
    description: 'A sprawling, safe, and colorfully designed playground with child-friendly slides, swings, monkey bars, and activity zones to build gross motor skills.',
    icon: TreeDeciduous,
    emoji: '🌳',
    color: 'from-emerald-400 to-teal-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    features: ['Swings & Slides', 'Climbing Wall', 'Sand Pit', 'Sports Ground'],
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: '24/7 CCTV Security',
    description: 'Your child\'s safety is our top priority. The entire campus is under 24/7 CCTV surveillance with verified security personnel at all entry and exit points.',
    icon: ShieldCheck,
    emoji: '🛡️',
    color: 'from-red-400 to-rose-700',
    bg: 'bg-red-50',
    border: 'border-red-200',
    features: ['Full CCTV Coverage', 'Visitor Log System', 'Secure Entry Gates', 'Emergency Protocols'],
    image: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Safe School Transport',
    description: 'GPS-tracked school buses with trained drivers and female attendants cover all major areas of Saharanpur. Safe pick-up and drop-off guaranteed every day.',
    icon: Bus,
    emoji: '🚌',
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    features: ['GPS Tracked Vehicles', 'Female Attendants', 'All Major Routes', 'Live Tracking App'],
    image: 'https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

export default function Facilities() {
  return (
    <>
      <Helmet>
        <title>School Facilities | Roots & Wings School Saharanpur</title>
        <meta name="description" content="Explore world-class facilities at Roots & Wings School — smart classrooms, activity rooms, library, outdoor playground, 24/7 security, and GPS school transport in Saharanpur." />
        <meta property="og:title" content="Campus Facilities | Roots & Wings School Saharanpur" />
      </Helmet>

      {/* SUMMER Theme Hero */}
      <section className="theme-summer relative overflow-hidden py-20 sm:py-28">
        {/* 3D SVG Decorations */}
        <motion.div
          className="absolute top-10 right-[8%] hidden lg:block"
          animate={{ y: [0, -15, 0], rotate: [0, 360] }}
          transition={{ y: { repeat: Infinity, duration: 5 }, rotate: { repeat: Infinity, duration: 12, ease: 'linear' } }}
        >
          <BeachBall />
        </motion.div>

        {/* Sunflower */}
        <motion.div
          className="absolute bottom-10 left-[5%] opacity-20"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            {[...Array(10)].map((_,i) => (
              <ellipse key={i} cx="50" cy="12" rx="8" ry="18" fill="#facc15" transform={`rotate(${i*36} 50 50)`} />
            ))}
            <circle cx="50" cy="50" r="20" fill="#92400e" />
            <circle cx="50" cy="50" r="12" fill="#78350f" />
          </svg>
        </motion.div>

        {/* Floating bubbles */}
        <div className="absolute top-20 left-[15%] w-16 h-16 rounded-full bg-orange-300/30 animate-float" />
        <div className="absolute bottom-24 right-[20%] w-24 h-24 rounded-full bg-yellow-300/20 animate-float" style={{ animationDelay: '2s' }} />

        <div className="container-pad relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              ☀️ Campus Life
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-5">
              World-Class{' '}
              <span className="text-gradient-summer">Facilities</span>
            </h1>
            <p className="text-gray-700 text-xl max-w-2xl mx-auto">
              A vibrant, secure, and inspiring environment designed for young learners to thrive, play, and discover at Roots & Wings.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="white" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Facilities List */}
      <section className="section-padding bg-white">
        <div className="container-pad space-y-20">
          {facilitiesData.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className={`relative rounded-3xl overflow-hidden border-4 ${facility.border} shadow-xl`}>
                  <img
                    src={facility.image}
                    alt={facility.title + ' at Roots and Wings School Saharanpur'}
                    className="w-full h-64 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className={`absolute top-4 left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {facility.emoji}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${facility.bg} border ${facility.border} mb-4`}>
                  <span className="text-sm">{facility.emoji}</span>
                  <span className={`text-xs font-bold bg-gradient-to-r ${facility.color} bg-clip-text text-transparent`}>{facility.title}</span>
                </div>
                <h2 className="font-heading font-black text-2xl sm:text-3xl text-gray-900 mb-4">{facility.title}</h2>
                <p className="text-gray-600 text-base leading-relaxed mb-6">{facility.description}</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {facility.features.map((f) => (
                    <div key={f} className={`flex items-center gap-2 px-3 py-2 rounded-xl ${facility.bg} border ${facility.border}`}>
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${facility.color}`} />
                      <span className="text-xs font-semibold text-gray-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="theme-summer section-padding text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20" />
        <div className="container-pad relative z-10">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-gray-900 mb-4">
            Come See Our Campus in Person!
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Book a free school tour and let your child experience the magic of Roots & Wings first-hand.</p>
          <Link to="/contact" className="btn-primary inline-flex" style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', boxShadow: '0 4px 20px rgba(245,158,11,0.4)' }}>
            ☀️ Book a School Visit
          </Link>
        </div>
      </section>
    </>
  );
}
