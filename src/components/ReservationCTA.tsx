import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';
import { cafe } from '@/data/cafe';

export default function ReservationCTA() {
  return (
    <section id="reservation" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background image */}
          <img
            src="https://images.pexels.com/photos/30606245/pexels-photo-30606245.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Tranquil waterfront deck with umbrella at sunset"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-blue/80" />

          {/* Content */}
          <div className="relative z-10 px-6 py-16 text-center sm:px-12 sm:py-20 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-strong liquid-glass mx-auto max-w-lg rounded-3xl p-8 sm:p-10"
            >
              <h2 className="font-serif text-3xl font-bold text-ivory sm:text-4xl">
                Make an evening of it.
              </h2>
              <p className="mx-auto mt-4 max-w-sm text-base text-cream/75">
                Planning a coffee date, dinner, or a relaxed evening by the lake?
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href={cafe.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:bg-gold-light hover:shadow-xl hover:shadow-gold/30 sm:w-auto"
                >
                  <Calendar className="h-5 w-5" />
                  Reserve a Table
                </a>
                <a
                  href={`tel:${cafe.phoneRaw}`}
                  className="glass flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-ivory transition-all hover:bg-white/10 sm:w-auto"
                >
                  <Phone className="h-5 w-5" />
                  Call {cafe.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
