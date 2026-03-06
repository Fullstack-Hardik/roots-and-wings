import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const allReviews = [
  {
    id: 1,
    content: "The best nursery school in Saharanpur! My daughter absolutely loves going to school here. The environment is so nurturing and the teachers are exceptional.",
    author: "Priya Sharma",
    role: "Parent of Nursery Student",
    rating: 5,
    source: "Google Reviews"
  },
  {
    id: 2,
    content: "We moved to Qazi street recently and finding this school was a blessing. They focus on overall development, not just academics.",
    author: "Rahul Verma",
    role: "Parent of Class 2 Student",
    rating: 5,
    source: "Justdial"
  },
  {
    id: 3,
    content: "Excellent infrastructure and safety measures. The activity-based learning approach really helps children grasp concepts easily.",
    author: "Neha Gupta",
    role: "Parent of UKG Student",
    rating: 5,
    source: "Google Reviews"
  },
  {
    id: 4,
    content: "I'm amazed at the progress my son has made in just 6 months. He loves the interactive studies and smart classrooms.",
    author: "Amit Kumar",
    role: "Parent of LKG Student",
    rating: 5,
    source: "School Portal"
  },
  {
    id: 5,
    content: "The principal and staff are extremely approachable and genuinely care about every single student. Highly recommended for primary education.",
    author: "Sneha Desai",
    role: "Parent of Class 4 Student",
    rating: 4,
    source: "Google Reviews"
  },
  {
    id: 6,
    content: "Their emphasis on co-curricular activities like art and public speaking alongside strict academics is exactly what we wanted for our child.",
    author: "Vikram Singh",
    role: "Parent of Class 5 Student",
    rating: 5,
    source: "Justdial"
  }
];

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Parent Reviews | Top Schools in Saharanpur | Roots and Wings</title>
        <meta name="description" content="Read reviews and testimonials from parents about Roots and Wings School. See why we are rated as the best school in Saharanpur for kids." />
      </Helmet>

      {/* Page Header */}
      <div className="bg-primary/5 py-24 border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center text-gray-900">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            What Parents Say
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We are proud to have a 5.0 rating on Google and Justdial, supported by a strong community of happy parents.
          </motion.p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Rating Summary Card */}
          <div className="mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-[3rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 pointer-events-none"></div>
              <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Overall Excellence</p>
              <h2 className="text-6xl md:text-8xl font-black text-white mb-6">4.9<span className="text-3xl md:text-5xl text-gray-400">/5</span></h2>
              <div className="flex justify-center text-yellow-400 mb-6 gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 md:w-12 md:h-12 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-lg md:text-xl">Based on 100+ verified parent reviews across Saharanpur.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
              >
                <div className="flex text-yellow-400 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gray-200" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-lg leading-relaxed flex-grow mb-8 line-clamp-4">"{review.content}"</p>
                <div className="mt-auto border-t border-gray-100 pt-6 flex justify-between items-end">
                  <div>
                    <h4 className="font-bold text-gray-900">{review.author}</h4>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">
                    {review.source}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
