import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { cafe } from '@/data/cafe';

export default function Location() {
  return (
    <section id="location" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Find Us
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-ivory sm:text-4xl md:text-5xl">
            Find us by the lake.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="glass-strong flex flex-col justify-center rounded-3xl p-8 sm:p-10"
          >
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div>
                <p className="font-serif text-xl font-semibold text-ivory">{cafe.name}</p>
                <p className="mt-1 text-sm text-cream/70">{cafe.address.line1}</p>
                <p className="text-sm text-cream/70">{cafe.address.line2}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={cafe.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-all hover:bg-gold-light"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
              <a
                href={`tel:${cafe.phoneRaw}`}
                className="glass flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ivory transition-all hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call Cafe
              </a>
            </div>

            {/* Quick info chips */}
            <div className="mt-8 flex flex-wrap gap-2">
              {cafe.services.map((service) => (
                <span
                  key={service}
                  className="glass rounded-full px-3 py-1 text-xs font-medium text-cream/70"
                >
                  {service}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[300px] overflow-hidden rounded-3xl glass sm:min-h-[400px]"
          >
            <iframe
              src={cafe.mapsEmbedUrl}
              title={`Map showing ${cafe.name} location`}
              className="h-full w-full"
              style={{ border: 0, minHeight: 300, filter: 'grayscale(0.3) invert(0.9) hue-rotate(180deg) brightness(0.9) contrast(0.85)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
