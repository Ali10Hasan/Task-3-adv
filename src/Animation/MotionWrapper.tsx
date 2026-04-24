import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

const MotionWrapper = ({ children, delay = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
