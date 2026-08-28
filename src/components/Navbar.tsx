import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import { cafe, navLinks } from '@/data/cafe';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToReserve = () => {
    setMobileOpen(false);
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:px-6"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled ? 'glass-strong' : 'glass'
          }`}
        >
          <a href="#home" className="flex items-center gap-2">
            <span className="font-brand text-sm font-normal uppercase tracking-[0.1em] text-ivory sm:text-base">
              {cafe.name}
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cream/85 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollToReserve}
              className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30 sm:flex"
            >
              <Calendar className="h-4 w-4" />
              Reserve
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-full p-2 text-ivory lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] glass-strong p-6"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-brand text-sm font-normal uppercase tracking-[0.1em] text-ivory">
                  {cafe.name}
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full p-2 text-ivory"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-cream/90 transition-colors hover:bg-white/5 hover:text-gold"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={scrollToReserve}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-base font-semibold text-ink"
                >
                  <Calendar className="h-5 w-5" />
                  Reserve a Table
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
