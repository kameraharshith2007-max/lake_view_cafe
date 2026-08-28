import { motion } from 'framer-motion';
import { cafe } from '@/data/cafe';

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/assets/gallery/cafe/lake-view-cafe-shamshabad-rangareddy-coffee-shops-zrgonki913.webp"
              alt="Lake View Cafe evening terrace with blue seating and warm lights in Shamshabad, Hyderabad"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue/40 to-transparent" />
          </div>
          {/* Floating glass pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass absolute -bottom-5 -right-3 rounded-2xl px-5 py-3 sm:-right-5"
          >
            <p className="font-serif text-2xl font-semibold text-gold">4.6★</p>
            <p className="text-xs text-cream/70">{cafe.reviewsCount} reviews</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Our Story
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ivory sm:text-4xl md:text-5xl">
            A little escape by the lake.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/75 sm:text-lg">
            Lake View Cafe is a relaxed coffee shop and dining destination in
            Shamshabad, Hyderabad. We bring together carefully made coffee,
            comforting food, and freshly baked desserts — all set against a
            calm lakeside backdrop with warm, modern interiors.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cream/65">
            Whether you're here for a quiet flat white, a long evening with
            friends, or a pizza by the water, it's a place to linger.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Coffee', 'Food', 'Desserts', 'Lakeside'].map((tag) => (
              <span
                key={tag}
                className="glass rounded-full px-4 py-1.5 text-sm font-medium text-cream/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
