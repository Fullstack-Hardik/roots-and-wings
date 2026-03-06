import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// 3D Star cloud for Night theme  
const NightStar = ({ size = 20, x = 0, y = 0, delay = 0 }: { size?: number; x?: number; y?: number; delay?: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
    transition={{ repeat: Infinity, duration: 2.5 + delay, ease: 'easeInOut', delay }}
  >
    <svg width={size} height={size} viewBox="0 0 20 20">
      <polygon points="10,1 12.9,7 19.5,7.6 14.8,11.9 16.2,18.5 10,15 3.8,18.5 5.2,11.9 0.5,7.6 7.1,7" fill="#fef08a" />
    </svg>
  </motion.div>
);

const reviews = [
  { name: 'Priya Sharma', role: 'Mother of Aarav, Class 2', date: 'January 2026', rating: 5, text: 'Roots & Wings is simply the best school in Saharanpur! My son went from being a shy, introverted child to a confident, curious learner. The teachers genuinely love what they do. Cannot recommend enough!', emoji: '👩', color: 'from-violet-500 to-purple-700' },
  { name: 'Rahul Verma', role: 'Father of Diya, Nursery', date: 'December 2025', rating: 5, text: 'My daughter literally runs to school every morning! The play-based learning approach is outstanding. The facilities are top-class and the security makes us feel extremely comfortable. Best kindergarten in Saharanpur.', emoji: '👨', color: 'from-sky-500 to-blue-700' },
  { name: 'Simran Kaur', role: 'Mother of Rohan, UKG', date: 'November 2025', rating: 5, text: 'We tried 3 schools before finding Roots & Wings. The difference is night and day! The teachers know every child by name, the learning is creative, and my son is thriving academically and emotionally.', emoji: '👩🏽', color: 'from-pink-500 to-rose-700' },
  { name: 'Anil Gupta', role: 'Father of Siya, Class 1', date: 'October 2025', rating: 5, text: 'Such a beautifully maintained campus, smart classrooms with modern technology, and a principal who is truly dedicated. The admission process was smooth and the teachers are very responsive to parent concerns.', emoji: '👨🏽', color: 'from-emerald-500 to-teal-700' },
  { name: 'Neha Joshi', role: 'Mother of Aryan, LKG', date: 'September 2025', rating: 5, text: 'My son is so excited about learning now! The activity rooms are fantastic — he comes home singing songs and talking about whatever they did in art or music. Perfect school for young kids in Saharanpur!', emoji: '👩', color: 'from-amber-500 to-orange-600' },
  { name: 'Vikas Singh', role: 'Father of Riya, Class 3', date: 'August 2025', rating: 5, text: 'The staff here are exceptional. My daughter\'s math and English skills have improved dramatically in just one year. The school also keeps parents informed constantly — very transparent and professional management.', emoji: '👨🏼', color: 'from-indigo-500 to-blue-700' },
];

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Parent Reviews | Roots & Wings School Saharanpur — 5★ Rated</title>
        <meta name="description" content="Read genuine parent reviews for Roots & Wings School, the best kindergarten and primary school in Saharanpur, UP. Rated 5 stars by 100+ happy parents." />
        <meta property="og:title" content="Parent Reviews | Roots & Wings — Best School Saharanpur" />
      </Helmet>

      {/* NIGHT Theme Hero */}
      <section className="theme-night relative overflow-hidden py-20 sm:py-28">
        {/* Animated star field */}
        {[...Array(40)].map((_, i) => (
          <NightStar
            key={i}
            size={Math.random() * 18 + 8}
            x={Math.random() * 100}
            y={Math.random() * 80}
            delay={Math.random() * 4}
          />
        ))}

        {/* 3D Moon */}
        <motion.div
          className="absolute right-[8%] top-10 hidden lg:block"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 7. }}
        >
          <svg width="90" height="90" viewBox="0 0 90 90">
            <circle cx="45" cy="45" r="38" fill="#fef9c3" />
            <circle cx="65" cy="22" r="30" fill="#0f0c29" />
            <circle cx="24" cy="50" r="6" fill="rgba(0,0,0,0.1)" />
            <circle cx="35" cy="67" r="9" fill="rgba(0,0,0,0.08)" />
            <ellipse cx="22" cy="40" rx="12" ry="6" fill="rgba(255,255,255,0.3)" />
          </svg>
        </motion.div>

        <div className="container-pad relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-1.5 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}>
                  <Star className="w-7 h-7 text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                </motion.div>
              ))}
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
              <span className="text-gradient-night">5-Star</span>{' '}
              Parent Reviews
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">
              Hear from the families who trust us with their most precious treasure — their children. 100% of reviewed parents recommend Roots & Wings School.
            </p>
            <div className="inline-flex items-center gap-2 mt-6 bg-amber-400/10 border border-amber-400/30 rounded-full px-5 py-2">
              <span className="text-amber-300 font-bold text-sm">⭐ 5.0 / 5.0</span>
              <span className="text-slate-400 text-sm">· 100+ Happy Families</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="bg-[#0f0c29] section-padding">
        <div className="container-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: 'spring' }}
                className="card-3d card-3d-night bg-[#1a1738] rounded-2xl border border-violet-900/50 p-5 sm:p-6 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${review.color}`} />
                
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic mb-5">"{review.text}"</p>

                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-xl shadow-lg`}>
                    {review.emoji}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white text-sm">{review.name}</p>
                    <p className="text-slate-400 text-xs">{review.role}</p>
                  </div>
                  <span className="ml-auto text-slate-500 text-xs shrink-0">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
