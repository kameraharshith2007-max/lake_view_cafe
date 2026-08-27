import { Phone, Navigation } from 'lucide-react';
import { cafe, navLinks } from '@/data/cafe';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 pb-24 pt-16 sm:px-6 sm:pb-12 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-ivory">{cafe.name}</h3>
            <p className="mt-2 text-sm text-cream/60">{cafe.tagline}</p>
            <div className="mt-4 flex gap-0.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={n <= Math.round(cafe.rating) ? 'text-gold' : 'text-mute/30'}
                >
                  ★
                </span>
              ))}
              <span className="ml-2 text-xs text-cream/50">
                {cafe.rating} · {cafe.reviewsCount} reviews
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-mute">
              Explore
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-mute">
              Quick Actions
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`tel:${cafe.phoneRaw}`}
                className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                Call Us · {cafe.phone}
              </a>
              <a
                href={cafe.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-mute">© 2026 {cafe.name}</p>
          <a
            href={cafe.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-mute transition-colors hover:text-gold"
          >
            {cafe.website}
          </a>
        </div>
      </div>
    </footer>
  );
}
