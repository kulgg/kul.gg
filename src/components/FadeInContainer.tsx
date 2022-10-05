import { motion } from "framer-motion";

const FadeInContainer: React.FC<{ children: JSX.Element; delay: number }> = ({
  children,
  delay,
}) => {
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
};

export default FadeInContainer;
