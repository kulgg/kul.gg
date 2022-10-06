import { motion } from "framer-motion";

export default function FadeRightContainer({
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
        translateX: -55,
      }}
      whileInView={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{
        duration: 0.25,
        delay: delay,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.div>
  );
}
