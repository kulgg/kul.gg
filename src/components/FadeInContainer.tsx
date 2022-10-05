import { motion } from "framer-motion";

export default function FadeInContainer({
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
        translateY: 55,
      }}
      whileInView={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        duration: 0.25,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}
