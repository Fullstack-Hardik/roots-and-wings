import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PlayCircle, Star, Sparkles, Music, BookOpen } from 'lucide-react';

export default function Studies() {
  const categories = [
    {
      id: "abcd",
      title: "Learn ABCD",
      description: "Fun and musical alphabet learning for beginners.",
      videoId: "75p-N9YKqNo", // ABC Song placeholder
      color: "bg-pink-100",
      textColor: "text-pink-600",
      icon: <Music className="w-8 h-8 text-pink-500" />
    },
    {
      id: "counting",
      title: "Countings 1 to 20",
      description: "Learn numbers with bright colorful animations.",
      videoId: "D0Ajq682yrA", // Numbers song placeholder
      color: "bg-blue-100",
      textColor: "text-blue-600",
      icon: <Star className="w-8 h-8 text-blue-500" />
    },
    {
      id: "hindi",
      title: "Hindi Varnmaala",
      description: "Ka Kha Ga Gha Phonics and writing for kids.",
      videoId: "8_mEusF9cKA", // Hindi varnmaala placeholder
      color: "bg-green-100",
      textColor: "text-green-600",
      icon: <BookOpen className="w-8 h-8 text-green-500" />
    },
    {
      id: "tables",
      title: "Multiplication Tables",
      description: "Easy and sing-along way to memorize tables.",
      videoId: "9eQ_vQeebtk", // Tables placeholder
      color: "bg-yellow-100",
      textColor: "text-yellow-600",
      icon: <Sparkles className="w-8 h-8 text-yellow-500" />
    },
    {
      id: "body-parts",
      title: "Body Parts Names",
      description: "Head, shoulders, knees and toes! Interactive learning.",
      videoId: "h4euejcEp1Q", // Body parts placeholder
      color: "bg-purple-100",
      textColor: "text-purple-600",
      icon: <PlayCircle className="w-8 h-8 text-purple-500" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Interactive Studies | Roots and Wings School Saharanpur</title>
        <meta name="description" content="Engaging video lessons for kids: ABCD, counting, Hindi Varnmaala, maths tables, and body parts. Fun learning for kindergarten." />
      </Helmet>

      {/* Hero Section with Morning Theme */}
      <div className="relative bg-gradient-to-b from-sky-300 via-sky-100 to-white py-24 border-b border-primary/20 overflow-hidden min-h-[50vh]">
        {/* Sun theme element */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute -top-10 -right-10 text-8xl opacity-80"
        >
          ☀️
        </motion.div>
        {/* Floating clouds */}
        <motion.div 
          animate={{ x: [0, 100, 0] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute top-20 left-10 text-6xl opacity-70"
        >
          ☁️
        </motion.div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <span className="inline-block bg-white px-4 py-1.5 rounded-full text-primary font-bold shadow-sm mb-6 border border-primary/20">
              Kids Learning Zone
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Studies</span>
            </h1>
            <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Watch, listen, and learn! Beautiful video lessons carefully crafted to make education fun and engaging for young minds.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Video Sections */}
      <div className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-20">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
              >
                {/* Text & Graphics */}
                <div className="w-full lg:w-1/3 flex flex-col justify-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border-2 border-white ${category.color}`}>
                    {category.icon}
                  </div>
                  <h2 className={`text-3xl font-extrabold mb-4 ${category.textColor}`}>
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 font-medium">
                    {category.description}
                  </p>
                  
                  {/* Small decorative bubbles */}
                  <div className="flex gap-2 text-2xl">
                    <motion.span animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>{index % 2 === 0 ? '📚' : '🎈'}</motion.span>
                    <motion.span animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}>{index % 2 === 0 ? '🖍️' : '🧩'}</motion.span>
                    <motion.span animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}>{index % 2 === 0 ? '🍎' : '🧸'}</motion.span>
                  </div>
                </div>

                {/* Video Embed */}
                <div className="w-full lg:w-2/3">
                  <div className={`p-3 md:p-4 rounded-[2rem] shadow-xl ${category.color} transform transition-transform hover:scale-[1.02] duration-300`}>
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-gray-900 border-4 border-white shadow-inner">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${category.videoId}?rel=0`}
                        title={category.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Footer cartoon accent */}
        <div className="mt-24 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/20 p-8 rounded-full border-4 border-white shadow-xl"
          >
            <span className="text-6xl">🎓</span>
          </motion.div>
          <h3 className="text-2xl font-bold mt-6 text-gray-900">Keep Learning Every Day!</h3>
        </div>
      </div>

      {/* Educational Charts Section - Night Theme */}
      <div className="py-24 bg-gradient-to-b from-slate-900 to-indigo-950 border-t border-gray-100 relative overflow-hidden">
        {/* Night Theme Elements (Stars/Planets) */}
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-20 left-10 text-3xl"
        >
          ⭐
        </motion.div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="absolute top-10 right-20 text-6xl opacity-60"
        >
          🪐
        </motion.div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 line-clamp-none relative z-10">
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-4">
              Educational <span className="text-yellow-400">Charts</span>
            </h2>
            <p className="mt-4 text-xl text-indigo-200 max-w-2xl mx-auto">
              Visual learning made fun! Explore our colorful charts to quickly grasp basic concepts under the stars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Human Body Parts", subject: "Science", icon: "🧍‍♂️", color: "bg-orange-100", img: "/images/chart_body.png" },
              { title: "Alphabet Learning", subject: "English", icon: "🔤", color: "bg-blue-100", img: "/images/chart_alphabet.png" },
              { title: "Numbers 1-100", subject: "Maths", icon: "🔢", color: "bg-green-100", img: "/images/chart_numbers.png" },
              { title: "Animals & Birds", subject: "Nature", icon: "🦁", color: "bg-yellow-100", img: "/images/chart_animals.png" },
              { title: "Fruits & Vegetables", subject: "Health", icon: "🍎", color: "bg-red-100", img: "/images/chart_fruits.png" },
              { title: "Shapes & Colors", subject: "Art", icon: "🎨", color: "bg-purple-100", img: "/images/chart_shapes.png" }
            ].map((chart, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-md border-4 border-white hover:shadow-2xl hover:border-primary transition-all group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img src={chart.img} alt={`Educational Chart for ${chart.title}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 right-4 ${chart.color} w-12 h-12 flex items-center justify-center rounded-full text-2xl shadow-lg border-2 border-white`}>
                    {chart.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">{chart.subject}</div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">{chart.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
