import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: "Benefits of Early Education: Why Kindergarten Matters",
    excerpt: "Discover how early childhood education lays the foundation for lifelong learning, social development, and cognitive skills.",
    image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: "Mar 15, 2024",
    author: "Dr. Sarah Johnson",
    slug: "benefits-of-early-education"
  },
  {
    title: "Child Development Tips for Parents at Home",
    excerpt: "Practical and fun ways to encourage your child's learning and creativity outside of school hours.",
    image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: "Mar 10, 2024",
    author: "Elena Rodriguez",
    slug: "child-development-tips"
  },
  {
    title: "The Importance of Play-Based Learning",
    excerpt: "Why play is the most natural and effective way for young children to understand the world around them.",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    date: "Mar 05, 2024",
    author: "Michael Chang",
    slug: "play-based-learning"
  }
];

const BlogPreview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest from Our Blog
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Insights, tips, and articles about early education and child development.
            </p>
          </div>
          <Link
            to="/blogs"
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="rounded-2xl overflow-hidden mb-6 h-48">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  <span>{blog.author}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
                {blog.excerpt}
              </p>
              <Link 
                to={`/blogs/${blog.slug}`}
                className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Read more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
