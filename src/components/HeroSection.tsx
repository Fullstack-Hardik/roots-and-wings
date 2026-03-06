import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-primary/10 overflow-hidden min-h-[90vh] flex items-center">
      {/* Cartoon Sky Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-b from-sky-200/50 to-white/20">
        
        {/* Floating Clouds */}
        <motion.div 
          animate={{ x: [0, 100, 0] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="absolute top-[10%] left-[5%] text-7xl opacity-80"
        >
          ☁️
        </motion.div>
        <motion.div 
          animate={{ x: [0, -120, 0] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="absolute top-[20%] right-[10%] text-8xl opacity-70"
        >
          ☁️
        </motion.div>
        
        {/* Animated Sun */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="absolute top-[5%] right-[20%] text-8xl drop-shadow-2xl"
        >
          ☀️
        </motion.div>

        {/* Animated Birds */}
        <motion.div
           animate={{ x: ['-10vw', '110vw'], y: [0, -20, 20, 0] }}
           transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
           className="absolute top-[15%] left-0 text-3xl opacity-60"
        >
          🦅
        </motion.div>

        {/* Animated School Bus at Bottom */}
        <motion.div
           animate={{ x: ['110vw', '-20vw'] }}
           transition={{ repeat: Infinity, duration: 20, ease: "linear", delay: 5 }}
           className="absolute bottom-10 right-0 text-7xl z-0"
        >
          🚌
        </motion.div>

      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="max-w-2xl bg-white/60 backdrop-blur-md p-8 sm:p-12 rounded-[3rem] shadow-xl border-4 border-white"
          >
            <div className="inline-block bg-white px-4 py-1.5 rounded-full text-primary font-bold shadow-sm mb-6 border border-primary/20 flex items-center gap-2 w-max">
              <span className="animate-bounce">🎒</span> Admissions Open 2024-25
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-tight font-sans">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Bright Futures</span> for Young Minds
            </h1>
            <p className="mt-6 text-lg sm:text-xl leading-8 text-gray-700 mb-8 font-medium">
              Welcome to Roots and Wings School in Saharanpur. The top kindergarten and primary school offering a joyful, activity-based learning environment for class Nursery to 5.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-8 py-4 text-center text-sm font-bold text-white shadow-xl hover:bg-primary/90 transition-all transform hover:-translate-y-1 hover:shadow-2xl flex justify-center items-center gap-2"
              >
                Apply for Admission 🚀
              </Link>
              <Link
                to="/studies"
                className="rounded-full bg-white px-8 py-4 text-center text-sm font-bold text-gray-900 shadow-md ring-2 ring-inset ring-gray-200 hover:bg-gray-50 transition-all flex justify-center items-center gap-2 hover:-translate-y-1"
              >
                Fun Learning Hub 🎨
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="relative"
          >
            {/* Playful Image Container */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4 border-[8px] border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Happy kindergarten children learning"
                className="w-full h-[400px] sm:h-[500px] object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-700"
                fetchPriority="high"
              />
              
              {/* Floating animated badges */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -left-6 top-16 bg-white p-4 rounded-3xl shadow-xl border-2 border-primary/20 flex items-center gap-3 backdrop-blur-sm"
              >
                <div className="bg-secondary p-3 rounded-2xl text-2xl shadow-inner">🌟</div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Top Rated</p>
                  <p className="text-xs text-gray-500 font-medium">School in Saharanpur</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 bottom-16 bg-white p-4 rounded-3xl shadow-xl border-2 border-secondary/20 flex items-center gap-3 backdrop-blur-sm hidden sm:flex"
              >
                <div className="bg-primary p-3 rounded-2xl text-2xl shadow-inner text-white">🏆</div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Best Facilities</p>
                  <p className="text-xs text-gray-500 font-medium">Safe & Secure</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
