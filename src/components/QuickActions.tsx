import { motion } from 'framer-motion';
import { Coffee, MapPin, Phone, Calendar } from 'lucide-react';
import { cafe } from '@/data/cafe';

const actions = [
  {
    icon: Coffee,
    label: 'View Menu',
    href: '#menu',
  },
  {
    icon: MapPin,
    label: 'Get Directions',
    href: cafe.directionsUrl,
    external: true,
  },
  {
    icon: Phone,
    label: 'Call Us',
    href: `tel:${cafe.phoneRaw}`,
  },
  {
    icon: Calendar,
    label: 'Reserve Table',
    href: '#reservation',
  },
];

export default function QuickActions() {
  return (
    <section className="relative z-20 -mt-12 px-4 sm:-mt-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-strong liquid-glass grid grid-cols-2 gap-3 rounded-3xl p-4 sm:grid-cols-4 sm:gap-4 sm:p-5"
        >
          {actions.map((action, i) => {
            const Icon = action.icon;
            return (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center gap-2 rounded-2xl px-3 py-4 transition-all hover:bg-white/5 sm:px-4 sm:py-5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-ink sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <span className="text-xs font-semibold text-ivory sm:text-sm">
                  {action.label}
                </span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
