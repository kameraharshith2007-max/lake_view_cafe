import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
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
  const reduceMotion = useReducedMotion();

  return (
    <section ref={ref} id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Brief cinematic brand reveal */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          delay: reduceMotion ? 0 : 1.05,
          duration: reduceMotion ? 0.15 : 0.65,
          ease: 'easeInOut',
        }}
        className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-ink"
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: reduceMotion ? 0 : 0.12,
            duration: reduceMotion ? 0.01 : 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(74,122,138,0.2),transparent_34%)]"
        />
        <motion.span
          initial={{ opacity: 0, y: 12, letterSpacing: '0.28em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.08em' }}
          transition={{
            delay: reduceMotion ? 0 : 0.18,
            duration: reduceMotion ? 0.01 : 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-brand relative text-center text-xl text-ivory sm:text-2xl md:text-3xl"
        >
          Lake View Cafe
        </motion.span>
        <motion.span
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.5 }}
          transition={{ delay: reduceMotion ? 0 : 0.4, duration: reduceMotion ? 0.01 : 0.8 }}
          className="absolute bottom-[43%] h-px w-24 origin-center bg-cyan sm:w-32"
        />
      </motion.div>

      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="/image.png"
          alt="Lake View Cafe terrace with blue seating, lake views, and warm lights in Shamshabad, Hyderabad"
          className="h-full w-full object-cover object-[center_45%] brightness-[0.82] saturate-[0.92] sm:object-center"
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
        {/* Brand name — prominent */}
        <motion.h2
          initial={{ opacity: 0, letterSpacing: '0.3em' }}
          animate={{ opacity: 1, letterSpacing: '0.08em' }}
          transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
          className="font-brand text-sm text-gold sm:text-base md:text-lg"
        >
          {cafe.name}
        </motion.h2>

        {/* Hero headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-hero mt-4 text-4xl uppercase leading-[0.95] text-ivory sm:text-6xl md:text-7xl lg:text-8xl"
        >
          A lakeside cafe
          <br />
          in Shamshabad.
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mt-5 max-w-xl text-base text-cream/80 sm:text-lg"
        >
          Great coffee, delicious food, and slow moments by the lake.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
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

        {/* Location indicator */}
        <motion.a
          href={cafe.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cream/70 transition-colors hover:text-gold"
        >
          <MapPin className="h-4 w-4 text-gold" />
          Madhura Nagar · Shamshabad
        </motion.a>

        {/* Subtle rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-4 flex items-center gap-1.5 text-sm text-cream/60"
        >
          <Star className="h-3.5 w-3.5 fill-gold text-gold" />
          <span className="font-medium text-ivory">{cafe.rating}</span>
          <span className="text-cream/40">·</span>
          <span>{cafe.reviewsCount} reviews</span>
        </motion.div>
      </motion.div>

      {/* Open status pill */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.7 }}
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
        transition={{ delay: 1.6, duration: 0.6 }}
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
