import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedSection({ id, eyebrow, title, children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: delay + 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className="section"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div className="sectionHead" variants={headingVariants}>
        {eyebrow && (
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: delay + 0.1 }}
          >
            {eyebrow}
          </motion.div>
        )}
        {title && (
          <motion.h2
            className="h2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
          >
            {title}
          </motion.h2>
        )}
      </motion.div>
      {children}
    </motion.section>
  );
}
