import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "The best nursery school in Saharanpur! My daughter absolutely loves going to school here. The environment is so nurturing and the teachers are exceptional.",
    author: "Priya Sharma",
    role: "Parent of Nursery Student",
    rating: 5,
  },
  {
    id: 2,
    content: "We moved to Qazi street recently and finding this school was a blessing. They focus on overall development, not just academics.",
    author: "Rahul Verma",
    role: "Parent of Class 2 Student",
    rating: 5,
  },
  {
    id: 3,
    content: "Excellent infrastructure and safety measures. The activity-based learning approach really helps children grasp concepts easily.",
    author: "Neha Gupta",
    role: "Parent of UKG Student",
    rating: 5,
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Parents
            </h2>
            <p className="mt-4 text-lg text-gray-600 mb-8">
              Don't just take our word for it. Hear what parents have to say about their child's experience at Roots & Wings.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6">
              <div className="flex flex-col items-center justify-center bg-secondary/20 p-4 rounded-xl">
                <span className="text-4xl font-extrabold text-gray-900">5.0</span>
                <div className="flex text-yellow-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900">Overall Rating</p>
                <p className="text-sm text-gray-500">Based on Google & Justdial</p>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white p-8 rounded-3xl shadow-sm border border-gray-100 ${index === 2 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
