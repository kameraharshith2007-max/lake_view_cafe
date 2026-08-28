import { Phone, Navigation, Calendar, MapPin, Globe, IndianRupee, Utensils } from 'lucide-react';
import { cafe, navLinks } from '@/data/cafe';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 pb-24 pt-16 sm:px-6 sm:pb-12 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Brand + business info */}
          <div>
            <h3 className="font-brand text-base font-normal uppercase tracking-[0.1em] text-ivory">
              {cafe.name}
            </h3>
            <p className="mt-2 text-sm text-cream/60">{cafe.tagline}</p>

            <div className="mt-5 space-y-2.5">
              <div className="flex items-start gap-2 text-sm text-cream/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{cafe.address.full}</span>
              </div>
              <a
                href={`tel:${cafe.phoneRaw}`}
                className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                {cafe.phone}
              </a>
              <div className="flex items-center gap-2 text-sm text-cream/70">
                <IndianRupee className="h-4 w-4 shrink-0 text-gold" />
                {cafe.priceRangePerPerson}
              </div>
              <div className="flex items-center gap-2 text-sm text-cream/70">
                <Utensils className="h-4 w-4 shrink-0 text-gold" />
                Dine-in · Kerbside Pickup · Delivery
              </div>
              <a
                href={cafe.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold"
              >
                <Globe className="h-4 w-4 shrink-0 text-gold" />
                lakeviewcafe.org
              </a>
            </div>
          </div>

          {/* Navigation */}
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
                href="#reservation"
                className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold"
              >
                <Calendar className="h-4 w-4" />
                Reserve a Table
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
              <a
                href={`tel:${cafe.phoneRaw}`}
                className="flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6">
          <p className="text-xs text-mute">© 2026 {cafe.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
