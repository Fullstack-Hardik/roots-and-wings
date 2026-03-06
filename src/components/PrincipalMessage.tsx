import { motion } from 'framer-motion';

const PrincipalMessage = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Principal of Roots and Wings School"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-3xl -z-10 transform rotate-6"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Message from the Principal</span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Nurturing Every Child's Unique Potential
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Welcome to Roots and Wings School, the best nursery school in Saharanpur. Our philosophy is simple: we believe that every child is born with remarkable potential, and our role is to provide them with both the 'roots' to stay grounded in strong values and the 'wings' to soar high in their aspirations.
              </p>
              <p>
                At our primary school near Qazi street, we have created an environment that feels like a second home. Our dedicated educators focus on holistic development, ensuring that learning is always a joyful experience filled with discovery and creativity.
              </p>
              <p>
                We look forward to partnering with you in your child's educational journey.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="font-bold text-xl text-gray-900">Dr. Sarah Johnson</p>
              <p className="text-primary font-medium">Principal, Roots & Wings</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
