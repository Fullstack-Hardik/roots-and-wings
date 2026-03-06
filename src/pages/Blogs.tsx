import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blogs() {
  const blogs = [
    {
      id: "benefits-of-early-education",
      title: "Benefits of Early Education: Why Kindergarten Matters",
      excerpt: "Discover how early childhood education lays the foundation for lifelong learning, social development, and cognitive skills. The first five years are crucial for brain development.",
      image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Mar 15, 2024",
      author: "Dr. Sarah Johnson",
      category: "Education Insights"
    },
    {
      id: "child-development-tips",
      title: "Child Development Tips for Parents at Home",
      excerpt: "Practical and fun ways to encourage your child's learning and creativity outside of school hours. Simple daily activities can significantly boost your child's cognitive abilities.",
      image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Mar 10, 2024",
      author: "Elena Rodriguez",
      category: "Parenting Guide"
    },
    {
      id: "play-based-learning",
      title: "The Importance of Play-Based Learning",
      excerpt: "Why play is the most natural and effective way for young children to understand the world around them. It builds problem-solving skills, social competence, and emotional resilience.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Mar 05, 2024",
      author: "Michael Chang",
      category: "Teaching Methodology"
    },
    {
      id: "screen-time-management",
      title: "Managing Screen Time for Young Children",
      excerpt: "Striking the right balance between digital learning and physical play in the modern age. Expert guidelines and practical tips for parents navigating the digital landscape.",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Feb 28, 2024",
      author: "Dr. Sarah Johnson",
      category: "Child Health"
    },
    {
      id: "healthy-habits",
      title: "Building Healthy Eating Habits Early",
      excerpt: "Nutrition plays a vital role in cognitive development. Learn how to encourage your kids to make healthy food choices and enjoy nutritious meals together.",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Feb 15, 2024",
      author: "Anita Sharma",
      category: "Parenting Guide"
    },
    {
      id: "separation-anxiety",
      title: "How to Help Your Child Overcome Separation Anxiety",
      excerpt: "Starting school can be tough. We share proven strategies to make the morning drop-off tear-free and help your child build independence and confidence.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "Jan 20, 2024",
      author: "Elena Rodriguez",
      category: "Emotional Well-being"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Educational Blogs & Articles | Roots and Wings School</title>
        <meta name="description" content="Read expert articles on early education, child development, and parenting tips from the educators at Roots and Wings School." />
        <meta property="og:title" content="Educational Blogs & Articles | Roots and Wings School" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-primary/5 py-24 border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            School Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Insights, tips, and resources for our parent community.
          </motion.p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article 
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link 
                    to={`/blogs/${blog.id}`}
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors gap-2 group-hover:gap-3"
                  >
                    Read full article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
