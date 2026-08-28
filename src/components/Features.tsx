import { motion } from 'framer-motion';
import { Waves, Coffee, UtensilsCrossed, HeartHandshake } from 'lucide-react';
import { features } from '@/data/cafe';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Waves,
  Coffee,
  UtensilsCrossed,
  HeartHandshake,
};

export default function Features() {
  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Why People Come Here
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ivory sm:text-4xl md:text-5xl">
            A little more than a cafe.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                className="glass rounded-3xl p-6 text-center transition-all hover:bg-white/8 sm:p-8"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                  {Icon && <Icon className="h-6 w-6" />}
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold text-ivory">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
