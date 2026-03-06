import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

// 3D Sunflower / Trophy for Summer theme
const Trophy3D = () => (
  <svg width="90" height="100" viewBox="0 0 90 100">
    <defs>
      <linearGradient id="trophyGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <rect x="30" y="70" width="30" height="15" rx="3" fill="#d97706" />
    <rect x="20" y="83" width="50" height="8" rx="4" fill="#b45309" />
    <path d="M15,20 Q15,60 38,65 L52,65 Q75,60 75,20 Z" fill="url(#trophyGrad)" />
    <path d="M15,20 L5,20 Q5,45 25,50" fill="none" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />
    <path d="M75,20 L85,20 Q85,45 65,50" fill="none" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />
    <polygon points="45,25 48,35 58,35 51,41 54,51 45,46 36,51 39,41 32,35 42,35" fill="white" opacity="0.9" />
    <ellipse cx="35" cy="28" rx="8" ry="4" fill="rgba(255,255,255,0.3)" />
  </svg>
);

const activities = [
  { name: 'Annual Sports Day', date: 'January 15', category: 'Sports', emoji: '🏆', color: 'from-amber-400 to-orange-500', desc: 'Races, relay, tug-of-war, and field events for all classes.', bg: 'bg-amber-50' },
  { name: 'Art & Craft Exhibition', date: 'February 8', category: 'Creative', emoji: '🎨', color: 'from-pink-400 to-rose-500', desc: 'Students showcase paintings, clay models, and handmade crafts.', bg: 'bg-pink-50' },
  { name: 'Science Fair', date: 'February 20', category: 'STEM', emoji: '🔬', color: 'from-sky-400 to-blue-500', desc: 'Young scientists present hands-on experiments and models.', bg: 'bg-sky-50' },
  { name: 'Republic Day Celebration', date: 'January 26', category: 'Cultural', emoji: '🇮🇳', color: 'from-emerald-400 to-green-600', desc: 'Flag hoisting, patriotic songs, parade, and cultural programs.', bg: 'bg-emerald-50' },
  { name: 'Annual Day & Prize Giving', date: 'March 10', category: 'Events', emoji: '🎭', color: 'from-violet-400 to-purple-600', desc: 'Dance performances, drama, and merit awards ceremony.', bg: 'bg-violet-50' },
  { name: 'Diwali Mela', date: 'October 20', category: 'Cultural', emoji: '🪔', color: 'from-yellow-400 to-amber-600', desc: 'Traditional fair with games, crafts, and lights.', bg: 'bg-yellow-50' },
  { name: 'Yoga & Wellness Day', date: 'June 21', category: 'Wellness', emoji: '🧘', color: 'from-teal-400 to-emerald-600', desc: 'Group yoga sessions, breathing exercises, and mindfulness activities.', bg: 'bg-teal-50' },
  { name: 'Book Week', date: 'March 22', category: 'Learning', emoji: '📚', color: 'from-indigo-400 to-blue-600', desc: 'Story reading sessions, character parades, and library activities.', bg: 'bg-indigo-50' },
];

const categories = ['All', 'Sports', 'Creative', 'STEM', 'Cultural', 'Events', 'Wellness', 'Learning'];

export default function Activities() {
  return (
    <>
      <Helmet>
        <title>Activities & Events | Roots & Wings School Saharanpur</title>
        <meta name="description" content="Explore exciting activities and events at Roots & Wings School Saharanpur — sports day, art exhibitions, science fair, cultural celebrations, and more." />
        <meta property="og:title" content="Activities & Events | Roots & Wings School Saharanpur" />
      </Helmet>

      {/* SUMMER Theme Hero */}
      <section className="theme-summer relative overflow-hidden py-20 sm:py-28">
        {/* 3D Trophy */}
        <motion.div
          className="absolute right-[8%] top-12 hidden lg:block"
          animate={{ y: [0, -15, 0], rotate: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <Trophy3D />
        </motion.div>

        {/* Floating stars */}
        {[10, 30, 60, 85].map((x, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{ left: `${x}%`, top: `${20 + i * 15}%` }}
            animate={{ y: [0, -12, 0], rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 4 + i, ease: 'easeInOut', delay: i * 0.5 }}
          >
            ⭐
          </motion.div>
        ))}

        <div className="container-pad relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              ☀️ School Life
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-5">
              Activities &{' '}
              <span className="text-gradient-summer">Events</span>
            </h1>
            <p className="text-gray-700 text-xl max-w-2xl mx-auto">
              At Roots & Wings, school life extends far beyond the classroom. Explore our vibrant calendar of events, sports, and cultural activities.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="white" preserveAspectRatio="none" className="w-full h-10">
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="section-padding bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activities.map((activity, i) => (
              <motion.div
                key={activity.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, type: 'spring' }}
                className={`card-3d card-3d-summer rounded-2xl ${activity.bg} border border-amber-100 overflow-hidden group`}
              >
                {/* Icon banner */}
                <div className={`bg-gradient-to-r ${activity.color} h-20 flex items-center justify-center text-4xl relative`}>
                  <span className="group-hover:scale-125 transition-transform duration-500">{activity.emoji}</span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${activity.color} text-white`}>
                      {activity.category}
                    </span>
                    <span className="text-[10px] font-semibold text-gray-400 flex items-center gap-1">
                      📅 {activity.date}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-sm text-gray-900 mb-1.5">{activity.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{activity.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extra-curriculars */}
      <section className="theme-summer section-padding relative overflow-hidden">
        <div className="container-pad">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-gray-900 mb-3">
              Regular Activities Every Week
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Drawing', emoji: '✏️' },
              { name: 'Dance', emoji: '💃' },
              { name: 'Story Time', emoji: '📖' },
              { name: 'Yoga', emoji: '🧘' },
              { name: 'Music', emoji: '🎵' },
              { name: 'Games', emoji: '🎮' },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl p-4 text-center shadow-sm border border-amber-100 hover:-translate-y-2 transition-all duration-300 card-3d card-3d-summer"
              >
                <div className="text-3xl mb-2">{item.emoji}</div>
                <p className="text-sm font-bold text-gray-700">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
