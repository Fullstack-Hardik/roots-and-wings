import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 500, suffix: '+', label: 'Happy Students', icon: '👦', color: 'from-sky-400 to-blue-600', shadow: 'rgba(14,165,233,0.4)' },
  { value: 20, suffix: '+', label: 'Expert Teachers', icon: '👩‍🏫', color: 'from-violet-400 to-purple-600', shadow: 'rgba(124,58,237,0.4)' },
  { value: 10, suffix: '+', label: 'Years of Trust', icon: '🏆', color: 'from-amber-400 to-orange-500', shadow: 'rgba(245,158,11,0.4)' },
  { value: 5, suffix: '★', label: 'Parent Rating', icon: '❤️', color: 'from-pink-400 to-rose-600', shadow: 'rgba(236,72,153,0.4)' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, value);
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-heading font-black text-4xl sm:text-5xl text-white leading-none">
      {count}{suffix}
    </span>
  );
}

const AnimatedStats = () => {
  return (
    <section className="py-12 bg-white relative z-10 -mt-1">
      <div className="container-pad">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
              className="card-3d relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-default"
              style={{ background: `linear-gradient(135deg, hsl(from ${stat.color} s l / 1) 0%, transparent 100%)` }}
            >
              <div className={`bg-gradient-to-br ${stat.color} p-5 sm:p-6 rounded-2xl sm:rounded-3xl h-full`}
                style={{ boxShadow: `0 10px 30px ${stat.shadow}` }}>
                <div className="text-3xl sm:text-4xl mb-3">{stat.icon}</div>
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-white/80 text-xs sm:text-sm font-semibold mt-1">{stat.label}</p>

                {/* Decorative orb */}
                <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white/10 animate-morph" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-white/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;
