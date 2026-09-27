import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type AnimationType =
  | "fade"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "zoom"
  | "zoomInUp";

interface RevealProps {
  children: ReactNode;
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  distance?: number;
  once?: boolean;
}

export const Reveal = ({
  children,
  animation = "slideUp",
  duration = 0.6,
  delay = 0,
  distance = 30,
  once = true,
}: RevealProps) => {
  const variants: Record<AnimationType, Variants> = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },

    slideUp: {
      hidden: { opacity: 0, y: distance },
      visible: { opacity: 1, y: 0 },
    },

    slideDown: {
      hidden: { opacity: 0, y: -distance },
      visible: { opacity: 1, y: 0 },
    },

    slideLeft: {
      hidden: { opacity: 0, x: distance },
      visible: { opacity: 1, x: 0 },
    },

    slideRight: {
      hidden: { opacity: 0, x: -distance },
      visible: { opacity: 1, x: 0 },
    },

    zoom: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },

    zoomInUp: {
      hidden: {
        opacity: 0,
        scale: 0.9,
        y: distance,
      },
      visible: {
        opacity: 1,
        scale: 1,
        y: 0,
      },
    },
  };

  return (
    <motion.div
      variants={variants[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};
