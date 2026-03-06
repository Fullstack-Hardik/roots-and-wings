import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Classes() {
  const programs = [
    {
      id: "kindergarten",
      title: "Kindergarten (Playgroup & Nursery)",
      age: "2.5 to 4 Years",
      description: "Our kindergarten program provides a gentle transition from home to school. We focus on play-based learning to develop fine and gross motor skills, social interaction, and early language development.",
      features: [
        "Sensory and motor skill development",
        "Storytelling and role-play",
        "Introduction to colors, shapes, and numbers",
        "Music, dance, and creative arts"
      ],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-pink-50"
    },
    {
      id: "lkg-ukg",
      title: "LKG & UKG",
      age: "4 to 6 Years",
      description: "In LKG and UKG, we build strong foundational skills in literacy and numeracy. Children engage in structured activities that promote cognitive development and prepare them for primary school.",
      features: [
        "Phonics and early reading skills",
        "Basic mathematical concepts",
        "Environmental awareness",
        "Pre-writing and handwriting practice"
      ],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-blue-50"
    },
    {
      id: "primary",
      title: "Primary (Class 1 to 5)",
      age: "6 to 11 Years",
      description: "Our primary education curriculum is designed to foster critical thinking, problem-solving, and a love for continuous learning. We ensure academic excellence alongside co-curricular engagement.",
      features: [
        "Comprehensive academic curriculum",
        "Computer literacy and smart classes",
        "Sports, yoga, and physical education",
        "Project-based interactive learning"
      ],
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-green-50"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Classes & Programs | Kindergarten School in Saharanpur</title>
        <meta name="description" content="Explore our educational programs from Nursery, LKG, UKG to primary classes (1 to 5) at Roots and Wings kids learning school in Saharanpur." />
        <meta property="og:title" content="Classes & Programs | Kindergarten School in Saharanpur" />
      </Helmet>

      {/* Page Header */}
      <div className="bg-primary/5 py-24 border-b border-primary/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            Academic Programs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Tailored education for every stage of your child's early development.
          </motion.p>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
          {programs.map((program, index) => (
            <div key={program.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className={`p-2 rounded-3xl ${program.color} transform ${index % 2 === 1 ? '-rotate-2' : 'rotate-2'} transition-transform hover:rotate-0 duration-500`}>
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-sm font-semibold text-gray-800 mb-4">
                  Age: {program.age}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{program.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{program.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-transform transform hover:scale-105"
                >
                  Inquire Admissions
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
