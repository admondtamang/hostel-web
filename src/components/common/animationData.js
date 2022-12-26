export const container_stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
// used to show text
export const content_variants = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    ease: [0.5, 0.71, 1, 1.5],
  },
};

export const cardVariants = {
  initial: {
    y: 300,
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
