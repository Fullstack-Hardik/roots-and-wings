import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// 3D SVG Sun Component
const Sun3D = () => (
  <motion.svg
    width="120" height="120" viewBox="0 0 120 120"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
    className="drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]"
  >
    <defs>
      <radialGradient id="sunCore" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="60%" stopColor="#facc15" />
        <stop offset="100%" stopColor="#f97316" />
      </radialGradient>
      <filter id="sunGlow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
    {/* Rays */}
    {[...Array(12)].map((_, i) => (
      <rect key={i} x="57" y="4" width="6" height="16" rx="3" fill="#fde68a" opacity="0.8"
        transform={`rotate(${i * 30} 60 60)`} />
    ))}
    {/* Core */}
    <circle cx="60" cy="60" r="28" fill="url(#sunCore)" filter="url(#sunGlow)" />
    {/* Shine */}
    <ellipse cx="50" cy="45" rx="10" ry="6" fill="rgba(255,255,255,0.4)" />
  </motion.svg>
);

// 3D Cloud SVG
const Cloud3D = ({ size = 1, opacity = 1 }: { size?: number; opacity?: number }) => (
  <svg width={140 * size} height={70 * size} viewBox="0 0 140 70" opacity={opacity}>
    <defs>
      <linearGradient id="cloudGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e0f2fe" />
      </linearGradient>
      <filter id="cloudShadow">
        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#93c5fd" floodOpacity="0.4" />
      </filter>
    </defs>
    <ellipse cx="70" cy="45" rx="55" ry="22" fill="url(#cloudGrad)" filter="url(#cloudShadow)" />
    <ellipse cx="50" cy="38" rx="28" ry="22" fill="url(#cloudGrad)" />
    <ellipse cx="85" cy="35" rx="30" ry="24" fill="url(#cloudGrad)" />
    <ellipse cx="65" cy="30" rx="22" ry="20" fill="white" />
    <ellipse cx="58" cy="28" rx="8" ry="5" fill="rgba(255,255,255,0.9)" />
  </svg>
);

// 3D School Building SVG
const SchoolBuilding = () => (
  <svg width="380" height="320" viewBox="0 0 380 320" className="drop-shadow-2xl">
    <defs>
      <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#67e8f9" />
        <stop offset="100%" stopColor="#a78bfa" />
      </linearGradient>
      <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#c026d3" />
      </linearGradient>
      <linearGradient id="sideWall" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#4f46e5" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <filter id="buildingGlow">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    {/* Ground */}
    <ellipse cx="190" cy="305" rx="160" ry="12" fill="rgba(0,0,0,0.08)" />
    
    {/* Main Building Body */}
    <rect x="60" y="130" width="200" height="160" rx="4" fill="url(#wallGrad)" filter="url(#buildingGlow)" />
    {/* Side wall (3D effect) */}
    <polygon points="260,130 320,100 320,260 260,290" fill="url(#sideWall)" />
    
    {/* Roof */}
    <polygon points="50,135 220,60 320,100 260,130" fill="url(#roofGrad)" />
    <polygon points="48,133 218,58 220,65 50,140" fill="rgba(255,255,255,0.15)" />
    
    {/* Flag pole */}
    <rect x="155" y="58" width="3" height="40" fill="#f59e0b" />
    <polygon points="158,58 180,65 158,72" fill="#ef4444" />
    
    {/* Door */}
    <rect x="140" y="230" width="40" height="60" rx="4" fill="#1e40af" />
    <rect x="143" y="233" width="34" height="50" rx="2" fill="#1d4ed8" />
    <circle cx="177" cy="265" r="2.5" fill="#fbbf24" />
    <rect x="158" y="233" width="1.5" height="50" fill="rgba(255,255,255,0.2)" />

    {/* Windows Row 1 */}
    {[80, 120, 195, 235].map((x, i) => (
      <g key={i}>
        <rect x={x} y="155" width="32" height="32" rx="4" fill="#bae6fd" stroke="white" strokeWidth="2" />
        <rect x={x + 2} y="157" width="28" height="10" rx="2" fill="rgba(255,255,255,0.5)" />
        <line x1={x + 16} y1="155" x2={x + 16} y2="187" stroke="white" strokeWidth="1.5" />
        <line x1={x} y1="171" x2={x + 32} y2="171" stroke="white" strokeWidth="1.5" />
      </g>
    ))}
    {/* Windows Row 2 */}
    {[80, 120, 195, 235].map((x, i) => (
      <g key={i}>
        <rect x={x} y="200" width="32" height="22" rx="4" fill="#bae6fd" stroke="white" strokeWidth="2" />
        <rect x={x + 2} y="202" width="28" height="8" fill="rgba(255,255,255,0.5)" rx="2" />
      </g>
    ))}
    {/* Side windows */}
    {[115, 150, 185].map((y, i) => (
      <rect key={i} x="273" y={y} width="28" height="22" rx="3" fill="#c4b5fd" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
    ))}
    
    {/* Sign board */}
    <rect x="85" y="108" width="150" height="28" rx="6" fill="#1e3a8a" />
    <text x="160" y="127" textAnchor="middle" fill="white" fontSize="11" fontFamily="Poppins, sans-serif" fontWeight="800">ROOTS &amp; WINGS</text>

    {/* Clouds */}
    <ellipse cx="40" cy="50" rx="25" ry="12" fill="white" opacity="0.7" />
    <ellipse cx="58" cy="43" rx="18" ry="13" fill="white" opacity="0.7" />
    <ellipse cx="340" cy="70" rx="20" ry="9" fill="white" opacity="0.6" />
    <ellipse cx="355" cy="64" rx="15" ry="10" fill="white" opacity="0.6" />
    
    {/* Stars */}
    {[[20,20],[360,30],[150,15],[310,45]].map(([cx,cy],i) => (
      <g key={i}>
        <polygon points={`${cx},${cy-6} ${cx+2},${cy-2} ${cx+6},${cy-2} ${cx+3},${cy+1} ${cx+4},${cy+5} ${cx},${cy+3} ${cx-4},${cy+5} ${cx-3},${cy+1} ${cx-6},${cy-2} ${cx-2},${cy-2}`}
          fill="#fde68a" opacity="0.8" />
      </g>
    ))}
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center theme-day" aria-label="Hero">
      
      {/* 3D Floating Sun */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        className="absolute top-8 right-[8%] z-10 hidden lg:block"
      >
        <Sun3D />
      </motion.div>

      {/* Floating Clouds */}
      <motion.div
        animate={{ x: [0, 80, 0] }}
        transition={{ repeat: Infinity, duration: 40, ease: 'easeInOut' }}
        className="absolute top-[15%] left-[2%] z-0 hidden lg:block"
      >
        <Cloud3D size={0.9} opacity={0.9} />
      </motion.div>
      <motion.div
        animate={{ x: [0, -60, 0] }}
        transition={{ repeat: Infinity, duration: 55, ease: 'easeInOut', delay: 5 }}
        className="absolute top-[8%] right-[30%] z-0 hidden xl:block"
      >
        <Cloud3D size={0.7} opacity={0.7} />
      </motion.div>

      {/* Floating Bubbles */}
      {[
        { size: 60, top: '25%', left: '5%', color: 'rgba(14,165,233,0.15)', delay: 0 },
        { size: 40, top: '70%', left: '3%', color: 'rgba(124,58,237,0.15)', delay: 2 },
        { size: 80, top: '80%', right: '5%', color: 'rgba(236,72,153,0.12)', delay: 1 },
      ].map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full z-0"
          style={{ width: b.size, height: b.size, background: b.color, top: b.top, left: (b as any).left, right: (b as any).right }}
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 6 + i * 2, ease: 'easeInOut', delay: b.delay }}
        />
      ))}

      {/* Animated Bus */}
      <motion.div
        animate={{ x: ['110vw', '-20vw'] }}
        transition={{ repeat: Infinity, duration: 22, ease: 'linear', delay: 3 }}
        className="absolute bottom-8 text-5xl z-10"
      >
        🚌
      </motion.div>

      {/* Main Content */}
      <div className="container-pad relative z-20 w-full py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >

            {/* ===== FLASHY SCHOOL NAME BANNER ===== */}
            <div className="mb-6 relative">

              {/* Orbiting sparkle stars around the name */}
              {[0, 60, 120, 180, 240, 300].map((deg, si) => (
                <motion.div
                  key={si}
                  className="absolute pointer-events-none"
                  style={{ top: '50%', left: '50%', transformOrigin: '0 0' }}
                  animate={{ rotate: [deg, deg + 360] }}
                  transition={{ repeat: Infinity, duration: 6 + si * 0.4, ease: 'linear' }}
                >
                  <div style={{ transform: `rotate(0deg) translateX(${90 + si * 8}px) rotate(0deg)` }}>
                    <svg width="14" height="14" viewBox="0 0 14 14">
                      <polygon points="7,0.5 8.5,5 13.5,5 9.5,8 11,12.5 7,10 3,12.5 4.5,8 0.5,5 5.5,5"
                        fill={['#fbbf24','#f472b6','#60a5fa','#34d399','#a78bfa','#fb923c'][si]} />
                    </svg>
                  </div>
                </motion.div>
              ))}

              {/* Animated SVG Pencil — left of name */}
              <motion.div
                className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 hidden sm:block"
                animate={{ rotate: [-8, 8, -8], y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                <svg width="36" height="36" viewBox="0 0 36 36">
                  {/* Pencil body */}
                  <rect x="14" y="4" width="8" height="22" rx="2" fill="#fbbf24" />
                  {/* Eraser */}
                  <rect x="14" y="2" width="8" height="5" rx="2" fill="#f9a8d4" />
                  <rect x="14" y="6" width="8" height="2" fill="#fb923c" opacity="0.5" />
                  {/* Tip base */}
                  <polygon points="14,26 22,26 18,34" fill="#fed7aa" />
                  {/* Lead tip */}
                  <polygon points="16.5,30 19.5,30 18,34" fill="#374151" />
                  {/* Shine */}
                  <rect x="16" y="6" width="2.5" height="12" rx="1" fill="rgba(255,255,255,0.5)" />
                </svg>
              </motion.div>

              {/* Animated SVG Open Book — right of name */}
              <motion.div
                className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 hidden sm:block"
                animate={{ rotate: [5, -5, 5], y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
              >
                <svg width="38" height="34" viewBox="0 0 38 34">
                  <defs>
                    <linearGradient id="bookL" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#60a5fa" /><stop offset="100%" stopColor="#818cf8" />
                    </linearGradient>
                    <linearGradient id="bookR" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                  <path d="M19,6 C14,4 4,8 2,12 L2,30 C4,26 14,22 19,24 Z" fill="url(#bookL)" />
                  <path d="M19,6 C24,4 34,8 36,12 L36,30 C34,26 24,22 19,24 Z" fill="url(#bookR)" />
                  <line x1="19" y1="5" x2="19" y2="25" stroke="#1e1b4b" strokeWidth="2" />
                  {[13,18,23].map(y => <line key={y} x1="5" y1={y} x2="16" y2={y-1} stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />)}
                  {[13,18,23].map(y => <line key={y} x1="22" y1={y} x2="33" y2={y-1} stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />)}
                  <ellipse cx="10" cy="10" rx="4" ry="2" fill="rgba(255,255,255,0.25)" />
                </svg>
              </motion.div>

              {/* "Welcome to" pill */}
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[11px] sm:text-xs font-black uppercase tracking-[0.3em] text-sky-500 mb-2 flex items-center gap-1.5"
              >
                <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>🏫</motion.span>
                Welcome to
              </motion.p>

              {/* SCHOOL NAME — letter by letter stagger + rainbow shimmer */}
              <div className="relative inline-block">
                {/* Glow pulse ring behind text */}
                <motion.div
                  className="absolute inset-0 rounded-2xl -z-10 blur-xl"
                  animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1.05, 0.95] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  style={{ background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6, #ec4899)' }}
                />

                <h2 className="font-heading font-black leading-none flex flex-wrap gap-x-3 gap-y-1">
                  {['Roots', '&', 'Wings', 'School'].map((word, wi) => (
                    <span key={wi} className="inline-flex">
                      {word.split('').map((char, ci) => (
                        <motion.span
                          key={ci}
                          initial={{ opacity: 0, y: 20, scale: 0.5 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: wi * 0.15 + ci * 0.04, type: 'spring', stiffness: 260 }}
                          className="text-3xl sm:text-4xl lg:text-5xl inline-block"
                          style={{
                            background: `linear-gradient(135deg, ${
                              ['#0ea5e9, #7c3aed', '#f59e0b, #ef4444', '#10b981, #06b6d4', '#ec4899, #8b5cf6'][wi % 4]
                            })`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  ))}
                </h2>

                {/* Shimmer sweep overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-xl"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', repeatDelay: 1 }}
                  style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)' }}
                />
              </div>

              {/* Floating mini confetti */}
              {['🌟', '✨', '⭐', '💫'].map((em, ei) => (
                <motion.span
                  key={ei}
                  className="absolute text-base pointer-events-none"
                  style={{ top: `${[-20, -25, -15, -22][ei]}px`, left: `${[10, 35, 60, 80][ei]}%` }}
                  animate={{ y: [0, -10, 0], rotate: [0, 20, -20, 0], scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2.5 + ei * 0.4, ease: 'easeInOut', delay: ei * 0.3 }}
                >
                  {em}
                </motion.span>
              ))}

              {/* Location pill */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="inline-flex items-center gap-1.5 mt-3 bg-gradient-to-r from-sky-50 to-violet-50 border border-sky-200 rounded-full px-3 py-1"
              >
                <span className="text-xs">📍</span>
                <span className="text-xs font-bold text-gray-600">Qazi Street, Saharanpur, Uttar Pradesh</span>
              </motion.div>
            </div>
            {/* ===== END SCHOOL NAME BANNER ===== */}

            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-sky-200 mb-6"
            >
              <span className="animate-bounce inline-block">🎒</span>
              <span className="text-sm font-bold text-sky-700">Admissions Open 2025–26</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </motion.div>

            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-gray-900 mb-6">
              Best{' '}
              <span className="text-gradient-day">Kindergarten</span>
              {' '}&{' '}
              <span className="text-gradient-day">Primary School</span>
              {' '}in Saharanpur
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
              Welcome to <strong>Roots & Wings School</strong> — Saharanpur's most trusted nursery and primary school. We provide a joyful, activity-based learning environment for Nursery to Class 5, where every child grows, plays, and discovers.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/contact" className="btn-primary text-center justify-center sm:justify-start">
                🚀 Apply for Admission
              </Link>
              <Link to="/about" className="btn-secondary text-gray-800 text-center justify-center sm:justify-start font-bold">
                📚 Book a School Visit
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { label: 'Happy Students', value: '500+', icon: '👦' },
                { label: 'Expert Teachers', value: '20+', icon: '👩‍🏫' },
                { label: 'Years of Trust', value: '10+', icon: '🏆' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-2xl">{stat.icon}</span>
                  <div>
                    <p className="font-heading font-black text-xl text-gray-900 leading-none">{stat.value}</p>
                    <p className="text-xs text-gray-500 font-semibold">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: 3D School Building + Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, type: 'spring' }}
            className="relative flex justify-center items-center"
          >
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}>
              <SchoolBuilding />
            </motion.div>

            {/* Floating Badge: Top Rated */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -left-4 top-16 glass-white rounded-2xl px-3 py-2.5 shadow-xl hidden sm:flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center text-xl shadow-inner">⭐</div>
              <div>
                <p className="text-xs font-black text-gray-900">Top Rated School</p>
                <p className="text-[10px] text-gray-500 font-semibold">Saharanpur, UP</p>
              </div>
            </motion.div>

            {/* Floating Badge: Safe Campus */}
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [2, -2, 2] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1.5 }}
              className="absolute -right-4 bottom-20 glass-white rounded-2xl px-3 py-2.5 shadow-xl hidden sm:flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-400 flex items-center justify-center text-xl shadow-inner">🛡️</div>
              <div>
                <p className="text-xs font-black text-gray-900">100% Safe Campus</p>
                <p className="text-[10px] text-gray-500 font-semibold">24/7 CCTV Security</p>
              </div>
            </motion.div>

            {/* Floating Badge: Play-based */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.8 }}
              className="absolute left-0 bottom-10 glass-white rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2 hidden sm:flex"
            >
              <span className="text-xl">🎨</span>
              <p className="text-xs font-black text-gray-900">Play-Based Learning</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 80" fill="white" preserveAspectRatio="none" className="w-full h-12 sm:h-16 lg:h-20">
          <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,20 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
