import { motion } from 'framer-motion';
import { featuredItems, menuCategories } from '@/data/cafe';
import { useState } from 'react';

export default function FeaturedMenu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? featuredItems.filter((item) => item.category === activeCategory)
    : featuredItems;

  return (
    <section id="menu" className="relative px-4 py-24 sm:px-6 sm:py-32">
      {/* Subtle background blob */}
      <div
        className="liquid-bg"
        style={{ top: '10%', right: '0', width: 400, height: 400, background: 'var(--color-coffee)' }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            The Menu
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-ivory sm:text-4xl md:text-5xl">
            Worth coming hungry for.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-cream/70 sm:text-lg">
            From carefully made coffee to comfort food and cafe favourites.
          </p>
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2 sm:justify-center sm:overflow-visible"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all ${
              activeCategory === null
                ? 'bg-gold text-ink'
                : 'glass text-cream/80 hover:text-ivory'
            }`}
          >
            All
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gold text-ink'
                  : 'glass text-cream/80 hover:text-ivory'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div
          layout
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item, i) => (
            <motion.article
              key={item.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass"
            >
              <div className="relative h-56 overflow-hidden sm:h-64">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <span className="glass absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-medium text-cream/90">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-semibold text-ivory">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Full menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-strong liquid-glass mt-14 overflow-hidden rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-16"
        >
          <h3 className="font-serif text-2xl font-bold text-ivory sm:text-3xl md:text-4xl">
            Something caught your eye?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-base text-cream/70">
            Explore the full menu and find your next favourite.
          </p>
          <a
            href="https://lakeviewcafe.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30"
          >
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
