import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const posts = [
  {
    title: 'Top Schools in Saharanpur: A Parent\'s Complete Guide',
    excerpt: 'Choosing the right school for your child is one of the most important decisions you\'ll make. Here\'s what to look for when comparing schools in Saharanpur.',
    date: 'Feb 20, 2026',
    category: 'Guide',
    emoji: '🏫',
    color: 'from-sky-400 to-blue-500',
    bg: 'bg-sky-50',
  },
  {
    title: 'How to Choose the Best Kindergarten for Your Child in 2025',
    excerpt: 'From curriculum to safety measures, this comprehensive guide helps Saharanpur parents make the perfect kindergarten choice for their little ones.',
    date: 'Feb 10, 2026',
    category: 'Parenting',
    emoji: '👶',
    color: 'from-pink-400 to-rose-500',
    bg: 'bg-pink-50',
  },
  {
    title: 'The Importance of Early Childhood Education',
    excerpt: 'Research shows that the first 6 years of life are critical. Here\'s why investing in quality early education at the right nursery school matters so much.',
    date: 'Jan 28, 2026',
    category: 'Education',
    emoji: '🧠',
    color: 'from-violet-400 to-purple-600',
    bg: 'bg-violet-50',
  },
];

const BlogPreview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Latest Articles
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900">
              From Our{' '}
              <span className="text-gradient-night">Blog</span>
            </h2>
          </div>
          <Link to="/blogs" className="flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-800 shrink-0">
            View All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              className={`card-3d rounded-2xl ${post.bg} border border-gray-100 overflow-hidden group cursor-pointer`}
            >
              {/* Top Color Banner */}
              <div className={`bg-gradient-to-r ${post.color} h-32 flex items-center justify-center text-6xl relative overflow-hidden`}>
                <span className="group-hover:scale-125 transition-transform duration-500">{post.emoji}</span>
                <div className="absolute inset-0 bg-black/10" />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${post.color} text-white`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-base text-gray-900 mb-2 leading-snug group-hover:text-sky-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                <Link to="/blogs" className="flex items-center gap-1.5 text-sm font-bold text-sky-600 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
