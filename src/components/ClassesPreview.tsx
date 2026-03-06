import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const classesList = [
  {
    name: "Playgroup & Nursery",
    age: "2.5 to 4 Years",
    description: "Focus on sensory development, motor skills, and creative expression through play-way methods.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "bg-pink-50 border-pink-100",
    btnColor: "bg-pink-100 text-pink-700 hover:bg-pink-200"
  },
  {
    name: "LKG & UKG",
    age: "4 to 6 Years",
    description: "Building foundational literacy, numeracy, and pre-writing skills for essential development.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "bg-blue-50 border-blue-100",
    btnColor: "bg-blue-100 text-blue-700 hover:bg-blue-200"
  },
  {
    name: "Class 1 to 5",
    age: "6 to 11 Years",
    description: "Comprehensive primary education integrating holistic learning, critical thinking, and co-curriculars.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    color: "bg-green-50 border-green-100",
    btnColor: "bg-green-100 text-green-700 hover:bg-green-200"
  }
];

const ClassesPreview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Academic Programs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            As a leading kids learning school in Saharanpur, we offer diverse programs tailored to each developmental stage of your child.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classesList.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl border-2 overflow-hidden flex flex-col ${program.color}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={`${program.name} class students`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{program.name}</h3>
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-sm font-medium text-gray-800 self-start mb-4 shadow-sm border border-gray-100">
                  {program.age}
                </div>
                <p className="text-gray-700 flex-grow mb-8">{program.description}</p>
                <Link
                  to="/classes"
                  className={`mt-auto block text-center py-3 px-6 rounded-xl font-semibold transition-colors ${program.btnColor}`}
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesPreview;
