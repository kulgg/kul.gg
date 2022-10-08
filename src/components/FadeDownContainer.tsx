import { motion } from "framer-motion";

export default function FadeDownContainer({
  children,
  delay,
}: {
  children: JSX.Element;
  delay: number;
}): JSX.Element {
  return (
    <motion.div
      viewport={{
        once: true,
      }}
      initial={{
        opacity: 0,
        translateY: -35,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        duration: 0.1,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}
