import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Star, MapPin, ChevronDown } from 'lucide-react';
import { cafe } from '@/data/cafe';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <img
          src="https://images.pexels.com/photos/5940034/pexels-photo-5940034.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Lakeside cafe terrace at sunset with warm golden light reflecting on the water"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Dark blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue/80 via-ink/60 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue/50 to-transparent" />

      {/* Floating liquid blobs */}
      <div
        className="liquid-bg"
        style={{ top: '20%', right: '10%', width: 300, height: 300, background: 'var(--color-cyan)' }}
      />
      <div
        className="liquid-bg"
        style={{ bottom: '15%', left: '5%', width: 250, height: 250, background: 'var(--color-teal)', animationDelay: '5s' }}
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold sm:text-sm"
        >
          Lakeside Coffee · Shamshabad
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="font-hero text-4xl uppercase leading-[0.95] text-ivory sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Coffee tastes better
          <br />
          with a view.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-5 max-w-xl text-base text-cream/80 sm:text-lg"
        >
          A calm lakeside escape for great coffee, delicious food, and slow moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#menu"
            className="liquid-glass w-full rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 sm:w-auto"
          >
            Explore Menu
          </a>
          <a
            href="#reservation"
            className="glass w-full rounded-full px-7 py-3.5 text-sm font-semibold text-ivory transition-all hover:bg-white/10 sm:w-auto"
          >
            Reserve a Table
          </a>
        </motion.div>

        {/* Location pill */}
        <motion.a
          href={cafe.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-cream/70 transition-colors hover:text-gold"
        >
          <MapPin className="h-4 w-4 text-gold" />
          Madhura Nagar · Shamshabad, Hyderabad
        </motion.a>

        {/* Hero metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-cream/70"
        >
          <span className="flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-gold text-gold" />
            <span className="font-semibold text-ivory">{cafe.rating}</span>
            <span className="text-cream/50">·</span>
            <span>{cafe.reviewsCount} Reviews</span>
          </span>
          <span className="hidden text-cream/30 sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-ivory">{cafe.priceRange}</span>
            <span className="text-cream/50">per person</span>
          </span>
        </motion.div>
      </motion.div>

      {/* Floating glass cards */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="absolute bottom-28 left-4 hidden md:block lg:left-10"
      >
        <div className="glass liquid-glass rounded-2xl px-5 py-4">
          <p className="font-serif text-base font-semibold text-ivory">{cafe.name}</p>
          <p className="mt-0.5 text-xs text-cream/70">Coffee · Food · Lakeside</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-28 right-4 hidden md:block lg:right-10"
      >
        <div className="glass flex items-center gap-2 rounded-full px-4 py-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span className="text-xs font-medium text-cream/90">{cafe.hoursToday}</span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 glass"
        >
          <ChevronDown className="h-5 w-5 text-cream/80" />
        </motion.div>
      </motion.div>
    </section>
  );
}
