import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedBlockProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedBlock: React.FC<AnimatedBlockProps> = ({
  children,
  className = "",
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={`animated-block ${className}`}
      style={{ width: "100%" }}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBlock;
