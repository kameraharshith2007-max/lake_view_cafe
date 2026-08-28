import { motion } from 'framer-motion';
import { MapPin, Phone, IndianRupee, Utensils, Car, Bike, Clock } from 'lucide-react';
import { cafe } from '@/data/cafe';

const infoItems = [
  { icon: MapPin, text: 'Madhura Nagar, Shamshabad', href: cafe.directionsUrl, external: true },
  { icon: Phone, text: cafe.phone, href: `tel:${cafe.phoneRaw}` },
  { icon: IndianRupee, text: cafe.priceRangePerPerson },
  { icon: Utensils, text: 'Dine-in' },
  { icon: Car, text: 'Kerbside pickup' },
  { icon: Bike, text: 'Delivery' },
  { icon: Clock, text: cafe.hoursToday },
];

export default function Contact() {
  return (
    <section className="relative px-4 pb-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6 sm:p-8"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {infoItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors hover:bg-white/5">
                  <Icon className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm font-medium text-cream/80">{item.text}</span>
                </div>
              );
              return item.href ? (
                <a
                  key={i}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
