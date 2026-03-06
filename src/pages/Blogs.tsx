import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Star SVG
const Star3D = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 20 20">
    <defs>
      <radialGradient id="starGrad">
        <stop offset="0%" stopColor="#fef9c3" />
        <stop offset="100%" stopColor="#fbbf24" />
      </radialGradient>
    </defs>
    <polygon points="10,1 12.9,7 19.5,7.6 14.8,11.9 16.2,18.5 10,15 3.8,18.5 5.2,11.9 0.5,7.6 7.1,7"
      fill="url(#starGrad)" />
  </svg>
);

const blogPosts = [
  {
    title: 'Top Schools in Saharanpur: A Parent\'s Complete Guide 2025',
    excerpt: 'Choosing the right school is one of the biggest decisions for your child\'s future. This comprehensive guide covers what to look for in the best schools in Saharanpur — from curriculum, safety, and facilities to fee structure and admission process.',
    date: 'February 20, 2026',
    category: 'Local Guide',
    readTime: '8 min read',
    emoji: '🏫',
    tags: ['Saharanpur', 'School Guide', 'Admissions'],
    color: 'from-sky-400 to-blue-500',
  },
  {
    title: 'How to Choose the Best Kindergarten for Your Child in 2025',
    excerpt: 'From curriculum design and teacher qualifications to campus safety and playful learning — here\'s the definitive checklist every Saharanpur parent should use when selecting a kindergarten.',
    date: 'February 10, 2026',
    category: 'Parenting Tips',
    readTime: '6 min read',
    emoji: '👶',
    tags: ['Kindergarten', 'Parenting', 'Early Education'],
    color: 'from-pink-400 to-rose-500',
  },
  {
    title: 'The Importance of Early Childhood Education: What Research Says',
    excerpt: 'The first 6 years of a child\'s life are the most formative. Researchers worldwide agree that high-quality early education is the single biggest predictor of long-term academic success and social well-being.',
    date: 'January 28, 2026',
    category: 'Education',
    readTime: '7 min read',
    emoji: '🧠',
    tags: ['Research', 'Early Education', 'Child Development'],
    color: 'from-violet-400 to-purple-600',
  },
  {
    title: 'Benefits of Kindergarten Learning: Play-Based vs. Academic',
    excerpt: 'Should your child\'s kindergarten be purely academic or play-based? Discover why leading education experts favor a balanced approach — and how Roots & Wings integrates both seamlessly.',
    date: 'January 15, 2026',
    category: 'Learning',
    readTime: '5 min read',
    emoji: '🎮',
    tags: ['Kindergarten', 'Play-Based Learning', 'Curriculum'],
    color: 'from-emerald-400 to-teal-600',
  },
  {
    title: 'School Admission Process in Saharanpur: A Step-by-Step Guide',
    excerpt: 'Confused about the school admission process in Saharanpur? From finding the right school to submitting documents and attending orientation — we walk you through every step.',
    date: 'December 20, 2025',
    category: 'Admissions',
    readTime: '5 min read',
    emoji: '📋',
    tags: ['Admissions', 'Saharanpur', 'Guide'],
    color: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Activities That Boost Your Child\'s Brain Development at Home',
    excerpt: 'Fun, simple activities you can do at home to stimulate your child\'s cognitive, emotional, and motor development — recommended by our expert teachers at Roots & Wings.',
    date: 'December 5, 2025',
    category: 'Parenting Tips',
    readTime: '4 min read',
    emoji: '🧩',
    tags: ['Activities', 'Brain Development', 'Parenting'],
    color: 'from-indigo-400 to-blue-600',
  },
];

export default function Blogs() {
  return (
    <>
      <Helmet>
        <title>Education Blog | Roots & Wings School Saharanpur</title>
        <meta name="description" content="School blog by Roots & Wings, Saharanpur — expert articles on kindergarten education, top schools, parenting tips, school admissions, and child development in Saharanpur, UP." />
        <meta property="og:title" content="Education Blog | Roots & Wings School Saharanpur" />
      </Helmet>

      {/* NIGHT Theme Hero */}
      <section className="theme-night relative overflow-hidden py-20 sm:py-28">
        {/* Twinkling Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              borderRadius: '50%',
              background: 'white',
            }}
            animate={{ opacity: [0.1, 1, 0.1], scale: [0.8, 1.3, 0.8] }}
            transition={{ repeat: Infinity, duration: Math.random() * 3 + 2, delay: Math.random() * 4 }}
          />
        ))}

        {/* Moon 3D SVG */}
        <motion.div
          className="absolute right-[8%] top-10 hidden lg:block"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <defs>
              <radialGradient id="moonGrad" cx="35%" cy="35%">
                <stop offset="0%" stopColor="#fef9c3" />
                <stop offset="100%" stopColor="#fbbf24" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="40" fill="url(#moonGrad)" />
            <circle cx="72" cy="28" r="28" fill="#1e1b4b" />
            {/* Craters */}
            <circle cx="28" cy="45" r="5" fill="rgba(0,0,0,0.15)" />
            <circle cx="38" cy="65" r="7" fill="rgba(0,0,0,0.12)" />
            <circle cx="20" cy="30" r="3" fill="rgba(0,0,0,0.1)" />
            <ellipse cx="25" cy="35" rx="10" ry="5" fill="rgba(255,255,255,0.3)" />
          </svg>
        </motion.div>

        {/* Shooting star */}
        <motion.div
          className="absolute h-0.5 w-24 bg-gradient-to-r from-white to-transparent rounded-full"
          style={{ top: '18%', left: '-5%', rotate: '-15deg' }}
          animate={{ x: ['0vw', '110vw'], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, delay: 2, ease: 'linear', repeatDelay: 8 }}
        />

        <div className="container-pad relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block bg-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 border border-violet-400/30">
              🌙 Education Blog
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-5">
              Our{' '}
              <span className="text-gradient-night">Knowledge Hub</span>
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl mx-auto">
              Expert articles on parenting, early education, school admissions, and child development — curated by our teachers at Roots & Wings Saharanpur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-[#0f0c29]">
        <div className="container-pad">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: 'spring' }}
                className="card-3d card-3d-night rounded-2xl overflow-hidden bg-[#1a1738] border border-violet-900/50 group cursor-pointer"
              >
                {/* Top Banner */}
                <div className={`bg-gradient-to-r ${post.color} h-24 flex items-center justify-center text-5xl relative overflow-hidden`}>
                  <motion.span
                    className="group-hover:scale-125 transition-transform duration-500 inline-block"
                  >{post.emoji}</motion.span>
                  {/* Stars overlay */}
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      className="absolute"
                      style={{ top: `${20 + j * 15}%`, left: `${15 + j * 18}%` }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: j * 0.4 }}
                    >
                      <Star3D size={12} />
                    </motion.div>
                  ))}
                </div>

                <div className="p-5">
                  {/* Meta */}
                  <div className="flex items-center gap-2 flex-wrap mb-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${post.color} text-white`}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <span className="text-slate-500 text-xs">· {post.readTime}</span>
                  </div>

                  <h2 className="font-heading font-bold text-base text-white mb-2 leading-snug group-hover:text-violet-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link to="/blogs" className="flex items-center gap-1.5 text-sm font-bold text-violet-400 group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
