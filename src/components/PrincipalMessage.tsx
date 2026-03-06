import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const PrincipalMessage = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-sky-900 to-indigo-900 relative overflow-hidden">
      {/* Stars BG */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="star absolute"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 4 + 's',
            animationDuration: Math.random() * 3 + 2 + 's',
          }}
        />
      ))}
      
      {/* 3D SVG: Decorative Diploma / Medal */}
      <motion.div
        className="absolute right-6 top-6 opacity-20"
        animate={{ rotate: [0, 5, -5, 0], y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="40" r="32" fill="none" stroke="#fbbf24" strokeWidth="3" />
          <circle cx="50" cy="40" r="22" fill="none" stroke="#fbbf24" strokeWidth="2" />
          <polygon points="50,20 54,33 68,33 57,41 61,55 50,47 39,55 43,41 32,33 46,33" fill="#fbbf24" />
          <rect x="43" y="70" width="14" height="20" rx="3" fill="#fbbf24" />
          <rect x="38" y="88" width="24" height="6" rx="3" fill="#f59e0b" />
        </svg>
      </motion.div>
      
      <div className="container-pad relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Principal of Roots and Wings School Saharanpur"
                className="w-full h-72 sm:h-96 object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="glass rounded-2xl px-4 py-3">
                  <p className="text-white font-heading font-black text-base">Mrs. Nusrat Ansari</p>
                  <p className="text-sky-200 text-xs font-semibold">Principal & Founder</p>
                </div>
              </div>
            </div>
            {/* Floating achievement badge */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -right-4 top-10 glass-dark rounded-2xl px-3 py-2 shadow-xl hidden sm:flex items-center gap-2"
            >
              <span className="text-2xl">🏆</span>
              <div>
                <p className="text-white font-bold text-xs">Award Winning</p>
                <p className="text-sky-300 text-[10px]">Education 2024</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-sky-500/20 text-sky-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-sky-500/30">
              Principal's Message
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-white mb-5 leading-tight">
              A Message From{' '}
              <span className="text-gradient-night">Our Principal</span>
            </h2>
            
            <div className="relative">
              <Quote className="w-10 h-10 text-sky-400/40 absolute -top-2 -left-2" />
              <blockquote className="text-slate-300 text-base sm:text-lg leading-relaxed pl-6 italic mb-6">
                At Roots and Wings, we believe every child is born with infinite potential. Our mission is to provide a nurturing, creative, and safe environment where young minds can blossom.
                <br /><br />
                We don't just teach — we inspire curiosity, build character, and lay the foundation for lifelong learning. To every parent who trusts us with their most precious treasure — your child — we promise our best every single day.
              </blockquote>
              <div className="pl-6 mt-4">
                <p className="text-white font-heading font-bold">Mrs. Nusrat Ansari</p>
                <p className="text-sky-400 text-sm">Principal & Founder, Roots and Wings School</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
