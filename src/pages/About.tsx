import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Target, Sparkles, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: "Holistic Development",
      description: "We focus on the physical, emotional, social, and cognitive growth of every child.",
      icon: Heart,
      color: "text-pink-500 bg-pink-100"
    },
    {
      title: "Child-Centric Approach",
      description: "Learning is tailored to meet the unique needs and learning style of each individual.",
      icon: Users,
      color: "text-blue-500 bg-blue-100"
    },
    {
      title: "Excellence in Education",
      description: "Maintaining high standards of academic rigor while keeping learning fun.",
      icon: Target,
      color: "text-green-500 bg-green-100"
    },
    {
      title: "Creative Expression",
      description: "Encouraging imagination and creative thinking through arts, music, and play.",
      icon: Sparkles,
      color: "text-yellow-500 bg-yellow-100"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Roots and Wings | Best Nursery School in Saharanpur</title>
        <meta name="description" content="Discover the mission, vision, and teaching philosophy of Roots and Wings School, the premier kids learning school in Saharanpur." />
        <meta property="og:title" content="About Roots and Wings | Best Nursery School in Saharanpur" />
        <meta property="og:description" content="Discover the mission, vision, and teaching philosophy of Roots and Wings School, the premier kids learning school in Saharanpur." />
      </Helmet>

      {/* Page Header */}
      <div className="bg-primary/5 py-24 border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            About Our School
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Nurturing roots to grow, giving wings to fly.
          </motion.p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg text-gray-600"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Roots & Wings</h2>
              <p>
                Established with a vision to revolutionize early childhood education, <strong>Roots and Wings School</strong> is recognized as the best nursery school in Saharanpur. We believe that the early years are the most critical phase of a child's life, laying the foundation for all future learning.
              </p>
              <p>
                Located near Qazi street, our kindergarten school provides a safe, nurturing, and stimulating environment where children feel loved and respected. Our unique curriculum blends traditional values with modern educational methodologies.
              </p>
              <p>
                We do not just teach; we facilitate learning by encouraging curiosity, asking questions, and exploring the world around us.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Happy students at Roots and Wings School" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600">The principles that guide our teaching and shape our culture.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${value.color}`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
