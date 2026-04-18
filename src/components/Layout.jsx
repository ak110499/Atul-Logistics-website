import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { motionTransition } from '../theme';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-section-x pt-buffer">
      <div className="mx-auto flex w-full max-w-content-max items-center justify-between rounded-2xl border border-white/35 bg-offWhite/70 px-6 py-4 shadow-glass backdrop-blur-glass">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-deepSlate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electricBlue/70"
        >
          Atul Logistics
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="rounded-md px-4 py-2 text-sm font-medium text-deepSlate transition-colors duration-200 hover:bg-ghostWhite hover:text-electricBlue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electricBlue/70"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-section-y border-t border-deepSlate/10 bg-ghostWhite px-section-x py-section-y text-deepSlate">
      <div className="mx-auto grid w-full max-w-content-max gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-base font-semibold">Atul Logistics</h2>
          <p className="mt-3 max-w-sm text-sm text-deepSlate/80">
            Total logistics solutions for air, sea, and road freight with dependable execution.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-deepSlate/80">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="tel:+912261218888"
                className="transition-colors hover:text-electricBlue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electricBlue/70"
              >
                +91 22 6121 8888
              </a>
            </li>
            <li>
              <a
                href="mailto:atulship@atulship.in"
                className="transition-colors hover:text-electricBlue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electricBlue/70"
              >
                atulship@atulship.in
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-deepSlate/80">Office</h3>
          <p className="mt-3 text-sm text-deepSlate/80">G-4C, Ground Floor, Silverline Co-Op. Hsg. Soc. Ltd., S.B. Marg, J. B Nagar, Andheri (E), Mumbai - 400059</p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children, routeKey }) {
  return (
    <div className="min-h-screen bg-offWhite font-sans text-deepSlate">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={routeKey}
          className="px-section-x pt-[calc(5rem+clamp(1rem,2.5vw,2.25rem))]"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={motionTransition}
        >
          <div className="mx-auto w-full max-w-content-max">{children}</div>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
