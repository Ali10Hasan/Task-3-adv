import { motion } from 'framer-motion';
import { fadeInUp } from './Animation';

export const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);
