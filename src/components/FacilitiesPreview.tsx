import { motion } from 'framer-motion';
import { Palette, Library, MonitorPlay, ShieldCheck } from 'lucide-react';

const facilities = [
  {
    name: "Smart Classrooms",
    description: "Interactive digital boards and engaging multimedia learning tools.",
    icon: MonitorPlay,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Activity Rooms",
    description: "Dedicated spaces for art, craft, music, and dance classes.",
    icon: Palette,
    color: "bg-pink-100 text-pink-600",
  },
  {
    name: "Expansive Library",
    description: "A wide collection of picture books and early reader stories.",
    icon: Library,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Safe Environment",
    description: "24/7 CCTV surveillance and verified security personnel.",
    icon: ShieldCheck,
    color: "bg-green-100 text-green-600",
  }
];

const FacilitiesPreview = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            World-Class Facilities
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            At Roots and Wings, a premium kindergarten school in Saharanpur, we provide a vibrant and secure environment equipped with modern amenities for your child's holistic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${facility.color}`}>
                <facility.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{facility.name}</h3>
              <p className="text-gray-600 leading-relaxed">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesPreview;
