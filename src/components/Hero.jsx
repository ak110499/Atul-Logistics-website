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
    <section className="grid min-h-[72vh] items-center gap-16 py-section-y lg:grid-cols-2">
      <motion.div
        className="space-y-6"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={item} className="text-sm font-semibold uppercase tracking-[0.16em] text-electricBlue">
          Total Logistics Solutions
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-deepSlate md:text-6xl"
        >
          Reliable Freight Services by Air, Sea, and Road.
        </motion.h1>

        <motion.p variants={item} className="max-w-lg text-base leading-relaxed text-deepSlate/80 md:text-lg">
          We route every shipment safe, fast, and on time with dependable communication, experienced operations,
          and end-to-end support for your business.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4">
          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileFocus={{ scale: 1.02 }}
            transition={motionTransition}
            className="rounded-lg bg-electricBlue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electricBlue/70 focus-visible:ring-offset-2"
          >
            Get a Freight Quote
          </motion.button>
          <a
            href="mailto:atulship@atulship.in"
            className="rounded-lg border border-deepSlate/20 px-6 py-3 text-sm font-semibold text-deepSlate transition-colors hover:border-electricBlue hover:text-electricBlue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electricBlue/70"
          >
            Contact Operations
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={motionTransition}
        className="relative h-[440px] overflow-hidden rounded-3xl border border-deepSlate/10 bg-gradient-to-br from-ghostWhite via-offWhite to-white shadow-glass"
        aria-hidden="true"
      >
        <div className="absolute right-8 top-8 rounded-full border border-deepSlate/15 bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-deepSlate/80">
          Worldwide Freight
        </div>
        <div className="absolute -right-16 -top-10 h-56 w-56 rounded-full bg-electricBlue/15 blur-2xl" />
        <div className="absolute -bottom-16 left-10 h-64 w-64 rounded-full bg-deepSlate/10 blur-2xl" />
        <div className="absolute inset-8 grid content-end rounded-2xl border border-deepSlate/10 bg-white/35 p-8 backdrop-blur-sm">
          <p className="max-w-xs text-sm font-medium leading-relaxed text-deepSlate/80">
            “Nothing happens until something moves.”
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.16em] text-deepSlate/60">— Logistics Principle</p>
        </div>
      </motion.div>
    </section>
  );
}
