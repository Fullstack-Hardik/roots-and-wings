import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Children playing in classroom", colSpan: "lg:col-span-2", rowSpan: "lg:row-span-2" },
    { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Kids learning art", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
    { src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Outdoor play area", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Student raising hand to answer", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-2" },
    { src: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Teacher explaining to students", colSpan: "lg:col-span-1", rowSpan: "lg:row-span-1" },
    { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Classroom activities", colSpan: "lg:col-span-2", rowSpan: "lg:row-span-1" }
  ];

  return (
    <>
      <Helmet>
        <title>School Gallery | Roots and Wings School Saharanpur</title>
        <meta name="description" content="View campus photos, student activities, and event highlights from Roots and Wings kindergarten school in Saharanpur." />
        <meta property="og:title" content="School Gallery | Roots and Wings School Saharanpur" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-primary/5 py-24 border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            Memories & Highlights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            A glimpse into the joyful learning and vibrant life at our campus.
          </motion.p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${image.colSpan} ${image.rowSpan}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              Follow us on Instagram for more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
