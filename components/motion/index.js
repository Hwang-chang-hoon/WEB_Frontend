export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const FadeInUpVariants = {
  initial: {
    y: 40,
    opacity: 0,
    transition: { duration: 0.8, ease: defaultEasing, delay: 5 },
    willChange: 'opacity, transform',
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: defaultEasing, delay: 5 },
    willChange: 'opacity, transform',
  },
};

export const defaultFadeInUpVariants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.8, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    y: 130,
    opacity: 0,
    transition: { duration: 0.9, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

export const defaultFadeInLeftVariants = {
  initial: {
    x: -90,
    opacity: 0,
    transition: { duration: 0.9, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

export const defaultRotate = {
  initial: {
    y: 40,
    opacity: 0,
    transition: { duration: 1, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    y: 0,
    opacity: 1,
    rotateZ: 360,
    transition: { duration: 1, delay: 5, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};
