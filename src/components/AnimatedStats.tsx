import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Counter = ({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

const stats = [
  { label: "Happy Students", value: 500, suffix: "+", color: "text-blue-500", icon: "👨‍🎓" },
  { label: "Expert Teachers", value: 40, suffix: "+", color: "text-pink-500", icon: "👩‍🏫" },
  { label: "Years of Excellence", value: 10, suffix: "+", color: "text-yellow-500", icon: "⭐" },
  { label: "Awards Won", value: 15, suffix: "", color: "text-green-500", icon: "🏆" }
];

export default function AnimatedStats() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Cartoon Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-10 left-[10%] w-24 h-24 bg-primary rounded-full blur-3xl"></div>
         <div className="absolute bottom-10 right-[10%] w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className={`text-4xl sm:text-5xl font-extrabold mb-2 ${stat.color}`}>
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
