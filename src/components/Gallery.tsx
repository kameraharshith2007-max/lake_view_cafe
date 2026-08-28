import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cafeGalleryImages, foodGalleryImages } from '@/data/cafe';

type Category = 'cafe' | 'food';

const categoryConfig: Record<Category, { label: string; images: typeof cafeGalleryImages }> = {
  cafe: { label: 'The Cafe', images: cafeGalleryImages },
  food: { label: 'Food & Drinks', images: foodGalleryImages },
};

const AUTO_INTERVAL = 7000;

export default function Gallery() {
  const [category, setCategory] = useState<Category>('cafe');
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const images = categoryConfig[category].images;
  const count = images.length;

  useEffect(() => {
    setActive(0);
  }, [category]);

  useEffect(() => {
    if (paused || count <= 1) return;
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, AUTO_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, count, category]);

  const current = images[active];

  return (
    <section
      id="gallery"
      className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Faded atmospheric background from current image */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={`${category}-${active}`}
            src={current.url}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: 'blur(3px)' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-blue/25 to-ink" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan">
            Gallery
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ivory sm:text-4xl md:text-5xl">
            A look inside.
          </h2>
        </motion.div>

        {/* Category switcher */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          {(Object.keys(categoryConfig) as Category[]).map((key) => (
            <button
              key={key}
              onClick={() => setCategory(key)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                category === key
                  ? 'bg-gold text-ink'
                  : 'glass text-cream/80 hover:text-ivory'
              }`}
            >
              {categoryConfig[key].label}
            </button>
          ))}
        </motion.div>

        {/* Featured image with crossfade */}
        <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-3xl glass sm:aspect-[16/9]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={`${category}-${active}`}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <img
                src={current.url}
                alt={current.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </motion.figure>
          </AnimatePresence>

          {/* Caption */}
          <div className="absolute bottom-4 left-4 z-10">
            <span className="glass rounded-full px-4 py-1.5 text-xs font-medium text-cream/90 sm:text-sm">
              {current.caption}
            </span>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setActive((prev) => (prev - 1 + count) % count)}
            aria-label="Previous photo"
            className="glass absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-cream/80 transition-all hover:bg-white/10 hover:text-ivory"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActive((prev) => (prev + 1) % count)}
            aria-label="Next photo"
            className="glass absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-cream/80 transition-all hover:bg-white/10 hover:text-ivory"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnail strip + indicators */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((img, i) => (
            <button
              key={img.url}
              onClick={() => setActive(i)}
              aria-label={`View photo ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? 'w-8 bg-cyan' : 'w-4 bg-cream/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
