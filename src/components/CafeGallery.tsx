import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cafeGalleryImages } from '@/data/cafe';

const INTERVAL = 6000;

export default function CafeGallery() {
  const [active, setActive] = useState(0);
  const count = cafeGalleryImages.length;

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [count]);

  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      {/* Faded real cafe photos as atmospheric background */}
      <div className="absolute inset-0">
        {cafeGalleryImages.map((img, i) => (
          <motion.img
            key={img.url}
            src={img.url}
            alt=""
            aria-hidden="true"
            animate={{ opacity: i === active ? 0.22 : 0 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: 'blur(2px)' }}
          />
        ))}
        {/* Dark blue gradient overlay */}
        <div className="absolute inset-0 bg-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-blue/30 to-ink" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan">
            The Space
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-ivory sm:text-4xl md:text-5xl">
            Inside Lake View Cafe
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-cream/70 sm:text-lg">
            Open-air seating, warm lighting, and a view that stays with you.
          </p>
        </motion.div>

        {/* Glass foreground panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass-strong liquid-glass mx-auto mt-10 max-w-2xl rounded-3xl p-8 sm:p-12"
        >
          <p className="font-serif text-xl leading-relaxed text-cream/85 sm:text-2xl">
            Blue seating under warm pendant lights, the lake just beyond the
            railing, and the quiet hum of an evening that doesn't need to go
            anywhere.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-cream/60">
            It's a space that feels removed from the city without leaving it —
            modern, calm, and made for lingering over coffee or a long meal.
          </p>
        </motion.div>

        {/* Subtle photo indicators */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {cafeGalleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View cafe photo ${i + 1}`}
              className={`h-1 rounded-full transition-all ${
                i === active ? 'w-8 bg-cyan' : 'w-4 bg-cream/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
