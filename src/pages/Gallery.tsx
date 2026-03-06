import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Rain Drop SVG
const RainDrop = ({ x, delay, size = 1 }: { x: number; delay: number; size?: number }) => (
  <motion.div
    className="absolute w-0.5 rounded-full"
    style={{
      left: `${x}%`,
      top: '-20px',
      height: `${40 * size}px`,
      background: 'linear-gradient(to bottom, transparent, rgba(147,197,253,0.7))'
    }}
    animate={{ y: ['0vh', '105vh'], opacity: [0, 1, 0] }}
    transition={{ repeat: Infinity, duration: 1.2 + Math.random() * 0.8, delay, ease: 'linear' }}
  />
);

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', alt: 'Children learning at Roots Wings School', category: 'Classroom', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80', alt: 'Art and craft activity', category: 'Activities' },
  { src: 'https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=600&q=80', alt: 'Kids reading in library', category: 'Library' },
  { src: 'https://images.unsplash.com/photo-1555009393-f20bdb245c4d?w=600&q=80', alt: 'Science experiment class', category: 'Science' },
  { src: 'https://images.unsplash.com/photo-1567593810070-7a3d471af022?w=600&q=80', alt: 'Annual sports day event', category: 'Sports', span: 'col-span-2' },
  { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80', alt: 'Yoga and mindfulness session', category: 'Wellness' },
  { src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80', alt: 'Smart classroom digital board', category: 'Classroom' },
  { src: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&q=80', alt: 'Cultural celebration event', category: 'Events', span: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1491308056676-28de9dacf0df?w=600&q=80', alt: 'Playground outdoor area', category: 'Playground' },
  { src: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&q=80', alt: 'Outdoor sports and games', category: 'Sports' },
];

const categories = ['All', 'Classroom', 'Activities', 'Library', 'Sports', 'Events', 'Playground'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>School Gallery | Roots & Wings School Saharanpur</title>
        <meta name="description" content="Browse photos from Roots & Wings School — classrooms, activities, sports day, cultural events, and campus life in Saharanpur, UP." />
        <meta property="og:title" content="Gallery | Roots & Wings School Saharanpur" />
      </Helmet>

      {/* RAINY NIGHT Theme Hero */}
      <section className="theme-rainy relative overflow-hidden py-20 sm:py-28 min-h-[55vh] flex items-center">
        {/* Rain drops */}
        {[...Array(20)].map((_, i) => (
          <RainDrop key={i} x={i * 5 + Math.random() * 3} delay={Math.random() * 1.5} size={0.7 + Math.random() * 0.6} />
        ))}

        {/* 3D Umbrella SVG */}
        <motion.div
          className="absolute right-[8%] top-12 hidden lg:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="umbrellaGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <path d="M10,50 Q50,5 90,50" fill="url(#umbrellaGrad)" />
            <path d="M10,50 Q50,5 90,50 Q90,52 50,52 Q10,52 10,50" fill="url(#umbrellaGrad)" />
            <rect x="49" y="50" width="3" height="35" rx="1.5" fill="#f59e0b" />
            <path d="M52,85 Q60,85 62,90 Q64,95 57,95 Q52,95 52,85" fill="#f59e0b" />
            <ellipse cx="35" cy="25" rx="12" ry="4" fill="rgba(255,255,255,0.2)" />
          </svg>
        </motion.div>

        {/* Crystal raindrops decoration */}
        {[20, 40, 65, 85].map((x, i) => (
          <motion.div
            key={i}
            className="absolute hidden sm:block"
            style={{ left: `${x}%`, top: '15%' }}
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ repeat: Infinity, duration: 3 + i, ease: 'easeInOut', delay: i * 0.5 }}
          >
            <svg width="20" height="30" viewBox="0 0 20 30">
              <path d="M10,2 Q18,12 10,28 Q2,12 10,2 Z" fill="rgba(147,197,253,0.6)" />
              <path d="M10,5 Q14,10 10,18" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
            </svg>
          </motion.div>
        ))}

        <div className="container-pad relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-blue-400/30">
              🌧️ Photo Gallery
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
              Life at{' '}
              <span className="text-gradient-rainy">Roots & Wings</span>
            </h1>
            <p className="text-blue-200 text-xl max-w-2xl mx-auto">
              Glimpses of our vibrant school life — classrooms, celebrations, sports, art, and unforgettable memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-[#0f1e3d] py-6 sticky top-16 z-30 border-b border-blue-900/50">
        <div className="container-pad">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-sky-400 to-violet-500 text-white shadow-lg shadow-sky-500/30'
                    : 'bg-blue-900/50 text-blue-300 hover:bg-blue-800/50 border border-blue-700/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-10 sm:py-14 bg-[#0a1628]">
        <div className="container-pad">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.04, type: 'spring' }}
                className={`relative group rounded-2xl overflow-hidden aspect-square ${img.span || ''} cursor-pointer`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-bold bg-sky-500 text-white px-2.5 py-1 rounded-full">{img.category}</span>
                  <p className="text-white text-xs mt-1 font-medium">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
