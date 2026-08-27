import { motion } from 'framer-motion';
import { foodGalleryImages } from '@/data/cafe';

export default function FoodGallery() {
  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div
        className="liquid-bg"
        style={{ top: '10%', right: '5%', width: 300, height: 300, background: 'var(--color-blue-light)' }}
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
            The Food
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-ivory sm:text-4xl md:text-5xl">
            From Our Kitchen
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-cream/70 sm:text-lg">
            Coffee, pizza, desserts and everything in between.
          </p>
        </motion.div>

        {/* Editorial grid */}
        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {foodGalleryImages.map((img, i) => (
            <motion.figure
              key={img.url}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${
                img.span === 'tall'
                  ? 'row-span-2'
                  : img.span === 'wide'
                  ? 'col-span-2'
                  : ''
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
              <figcaption className="glass absolute bottom-3 left-3 rounded-full px-4 py-1.5 text-xs font-medium text-cream/90 sm:text-sm">
                {img.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
