import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Parent of Aarav (Class 2)',
    rating: 5,
    text: 'Roots & Wings is simply the best school in Saharanpur! My son went from being shy to being super confident. The teachers are incredible and the learning environment is magical.',
    avatar: '👩',
    color: 'from-violet-500 to-purple-700',
  },
  {
    name: 'Rahul Verma',
    role: 'Parent of Diya (Nursery)',
    rating: 5,
    text: 'My daughter loves going to school every single day! The play-based learning approach is fantastic. Best kindergarten school in Saharanpur, hands down!',
    avatar: '👨',
    color: 'from-sky-500 to-blue-700',
  },
  {
    name: 'Simran Kaur',
    role: 'Parent of Rohan (UKG)',
    rating: 5,
    text: 'The facilities are world-class and the teachers genuinely care about every child. My son is excelling in academics and arts. Highly recommend to all Saharanpur parents!',
    avatar: '👩🏽',
    color: 'from-pink-500 to-rose-700',
  },
  {
    name: 'Anil Gupta',
    role: 'Parent of Siya (Class 1)',
    rating: 5,
    text: 'The school has a beautiful campus, smart classrooms, and a very nurturing environment. Admissions were smooth, teachers are very qualified. Very happy parents!',
    avatar: '👨🏽',
    color: 'from-emerald-500 to-teal-700',
  },
];

const ReviewsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-sky-50/30 relative overflow-hidden">
      {/* 3D Decorative SVG Bubble */}
      <div className="absolute top-12 left-6 opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="55" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="8 6" />
          <circle cx="60" cy="60" r="40" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="6 8" />
          <circle cx="60" cy="60" r="20" fill="#bae6fd" opacity="0.5" />
        </svg>
      </div>

      <div className="container-pad">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Parent Reviews
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-4">
            What{' '}
            <span className="text-gradient-day">Parents Say</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
            <span className="ml-2 text-gray-600 font-semibold text-sm">5.0 / 5 — 100% Recommend</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring' }}
              className="card-3d bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 relative overflow-hidden group"
            >
              {/* Top color strip */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${review.color}`} />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{review.text}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-xl font-bold text-white shadow-lg`}>
                  {review.avatar}
                </div>
                <div>
                  <p className="font-heading font-bold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
