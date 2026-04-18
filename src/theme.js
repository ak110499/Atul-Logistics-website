export const theme = {
  colors: {
    deepSlate: '#1E293B',
    electricBlue: '#2563EB',
    offWhite: '#F8FAFC',
    ghostWhite: '#F1F5F9',
  },
  typography: {
    fontFamily:
      "Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
    headingWeight: 700,
    bodyWeight: 400,
  },
  layout: {
    maxWidth: '72rem',
    sectionX: 'clamp(1.5rem, 6vw, 8rem)',
    sectionY: 'clamp(4rem, 10vh, 8rem)',
    buffer: 'clamp(1rem, 2.5vw, 2.25rem)',
  },
  motion: {
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

export const motionTransition = theme.motion.transition;
