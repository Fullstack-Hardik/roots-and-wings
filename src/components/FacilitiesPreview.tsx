import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MonitorPlay, Palette, Library, TreeDeciduous, ShieldCheck, Bus } from 'lucide-react';

const facilities = [
  { icon: MonitorPlay, title: 'Smart Classrooms', desc: 'Interactive digital boards & multimedia learning.', color: 'bg-sky-400', emoji: '🖥️' },
  { icon: Palette, title: 'Art & Activity Room', desc: 'Dedicated space for painting, craft, and music.', color: 'bg-pink-400', emoji: '🎨' },
  { icon: Library, title: 'Kids Library', desc: 'Hundreds of age-appropriate books for every reader.', color: 'bg-violet-400', emoji: '📚' },
  { icon: TreeDeciduous, title: 'Outdoor Play Area', desc: 'Safe swings, slides & physical activity zones.', color: 'bg-emerald-400', emoji: '🌳' },
  { icon: ShieldCheck, title: '24/7 CCTV Security', desc: 'Full campus surveillance for your peace of mind.', color: 'bg-red-400', emoji: '🛡️' },
  { icon: Bus, title: 'Safe Transport', desc: 'GPS-tracked school buses with safe pick & drop.', color: 'bg-amber-400', emoji: '🚌' },
];

const FacilitiesPreview = () => {
  return (
    <section className="section-padding theme-summer relative overflow-hidden">
      {/* 3D SVG Decorative: Sun */}
      <motion.div
        className="absolute top-8 right-8 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          {[...Array(8)].map((_, i) => (
            <rect key={i} x="47" y="5" width="6" height="18" rx="3" fill="#f59e0b"
              transform={`rotate(${i * 45} 50 50)`} />
          ))}
          <circle cx="50" cy="50" r="22" fill="#fbbf24" />
        </svg>
      </motion.div>
      
      {/* Floating Sunflower SVG */}
      <motion.div
        className="absolute bottom-10 left-8 opacity-15"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80">
          {[...Array(8)].map((_,i)=>(
            <ellipse key={i} cx="40" cy="12" rx="7" ry="14" fill="#facc15"
              transform={`rotate(${i*45} 40 40)`} />
          ))}
          <circle cx="40" cy="40" r="16" fill="#92400e" />
          <circle cx="40" cy="40" r="10" fill="#78350f" />
        </svg>
      </motion.div>

      <div className="container-pad relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            World-Class Facilities
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Our{' '}
            <span className="text-gradient-summer">Facilities</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Every corner of our campus is designed to delight young minds and keep them safe.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              className="card-3d card-3d-summer bg-white rounded-2xl p-5 sm:p-6 text-center group"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${f.color} flex items-center justify-center text-2xl sm:text-3xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {f.emoji}
              </div>
              <h3 className="font-heading font-bold text-sm sm:text-base text-gray-900 mb-1.5">{f.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/facilities" className="btn-primary inline-flex" style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)', boxShadow: '0 4px 20px rgba(245,158,11,0.4)' }}>
            🏫 Explore All Facilities
          </Link>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="white" preserveAspectRatio="none" className="w-full h-10">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
};

export default FacilitiesPreview;
