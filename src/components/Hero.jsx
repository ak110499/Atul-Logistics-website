import { motion } from 'framer-motion';
import { motionTransition } from '../theme';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: motionTransition,
  },
};

export default function Hero() {
  return (
    <section className="grid min-h-[70vh] items-center gap-16 py-section-y lg:grid-cols-2">
      <motion.div
        className="space-y-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={item}
          className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-deepSlate md:text-6xl"
        >
          Precision Logistics for Every Critical Shipment.
        </motion.h1>

        <motion.p variants={item} className="max-w-lg text-base leading-relaxed text-deepSlate/80 md:text-lg">
          From regional freight to time-sensitive deliveries, we move your cargo with reliability, visibility, and calm operational excellence.
        </motion.p>

        <motion.div variants={item}>
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileFocus={{ scale: 1.02 }}
            transition={motionTransition}
            className="rounded-lg bg-electricBlue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electricBlue/70 focus-visible:ring-offset-2"
          >
            Get a Quote
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={motionTransition}
        className="relative h-[420px] overflow-hidden rounded-3xl border border-deepSlate/10 bg-gradient-to-br from-ghostWhite via-offWhite to-white shadow-glass"
        aria-hidden="true"
      >
        <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-electricBlue/15 blur-2xl" />
        <div className="absolute -bottom-16 left-10 h-64 w-64 rounded-full bg-deepSlate/10 blur-2xl" />
        <div className="absolute inset-8 rounded-2xl border border-deepSlate/10 bg-white/35 backdrop-blur-sm" />
      </motion.div>
    </section>
  );
}
