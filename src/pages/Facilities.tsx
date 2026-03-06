import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, MonitorPlay, Palette, Library, TreeDeciduous } from 'lucide-react';

export default function Facilities() {
  const facilitiesData = [
    {
      title: "Smart Classrooms",
      description: "Our classrooms are equipped with modern interactive digital boards that make learning visual, engaging, and fun. Every concept comes alive, catering to different learning styles.",
      icon: MonitorPlay,
      color: "text-blue-500 bg-blue-100",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Activity & Art Rooms",
      description: "Creativity knows no bounds in our dedicated art and activity rooms. Children explore painting, craft, modeling, and music under the guidance of specialized instructors.",
      icon: Palette,
      color: "text-pink-500 bg-pink-100",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Expansive Library",
      description: "A treasure trove of age-appropriate books, from colorful picture books for toddlers to early chapter books. We cultivate a love for reading from a very young age.",
      icon: Library,
      color: "text-indigo-500 bg-indigo-100",
      image: "https://images.unsplash.com/photo-1568227451457-4148e659c25f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Outdoor Play Area",
      description: "A sprawling, safe, and brightly colored playground equipped with child-friendly slides, swings, and physical activity zones to build gross motor skills.",
      icon: TreeDeciduous,
      color: "text-green-500 bg-green-100",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Safe & Secure Environment",
      description: "Your child's safety is our top priority. Our entire campus is under 24/7 CCTV surveillance, and we employ verified, trained security personnel and support staff.",
      icon: ShieldCheck,
      color: "text-red-500 bg-red-100",
      image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Campus Facilities | Roots and Wings School Saharanpur</title>
        <meta name="description" content="Discover smart classrooms, activity rooms, library, safe play areas, and our secure campus environment at Roots and Wings School." />
        <meta property="og:title" content="Campus Facilities | Roots and Wings School Saharanpur" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-primary/5 py-24 border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            World-Class Facilities
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            A vibrant, secure, and inspiring environment designed specifically for young learners.
          </motion.p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
          {facilitiesData.map((facility, index) => (
            <div key={facility.title} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-md bg-white/90 ${facility.color.split(' ')[0]}`}>
                      <facility.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm ${facility.color}`}>
                    <facility.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{facility.title}</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {facility.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
