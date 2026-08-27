import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote } from 'lucide-react';
import { cafe, reviewData, reviewBackgrounds } from '@/data/cafe';

export default function Reviews() {
  const [active, setActive] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const count = reviewData.length;

  const go = useCallback(
    (dir: number) => {
      setActive((prev) => (prev + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    setBgIndex(active % reviewBackgrounds.length);
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  const review = reviewData[active];

  return (
    <section id="reviews" className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32">
      {/* Faded cafe photo background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={bgIndex}
            src={reviewBackgrounds[bgIndex]}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.18 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-blue/30 to-ink" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Reviews
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-ivory sm:text-4xl md:text-5xl">
            Loved by the people who stop by.
          </h2>
        </motion.div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 flex items-center justify-center gap-6"
        >
          <p className="font-serif text-6xl font-bold text-ivory">{cafe.rating}</p>
          <div className="text-left">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  className={`h-4 w-4 ${
                    n <= Math.round(cafe.rating)
                      ? 'fill-gold text-gold'
                      : 'fill-mute/30 text-mute/30'
                  }`}
                />
              ))}
            </div>
            <p className="mt-1 text-sm text-cream/70">{cafe.reviewsCount} Google reviews</p>
          </div>
        </motion.div>

        {/* Featured review */}
        <div className="glass-strong liquid-glass mx-auto mt-10 max-w-2xl rounded-3xl p-8 sm:p-12">
          <Quote className="mx-auto h-8 w-8 text-gold/40" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="mt-5 text-center"
            >
              <p className="font-serif text-xl leading-relaxed text-cream/90 sm:text-2xl">
                {review.text}
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-sm font-semibold text-gold">
                  {review.initials}
                </span>
                <span className="text-sm font-medium text-cream/70">{review.author}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-cream/80 transition-all hover:bg-white/10 hover:text-ivory"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-sm font-medium text-cream/50 tabular-nums">
              {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
            <button
              onClick={() => go(1)}
              aria-label="Next review"
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-cream/80 transition-all hover:bg-white/10 hover:text-ivory"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={cafe.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
          >
            Read all reviews
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
