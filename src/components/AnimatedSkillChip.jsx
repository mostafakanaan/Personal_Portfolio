import { motion } from "framer-motion";

export function AnimatedSkillChip({ skill, index = 0, big = false }) {
  return (
    <motion.span
      className={big ? "chip chipBig chipAnimated" : "chip chipAnimated"}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: index * 0.05,
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 20px rgba(255, 122, 24, 0.4)",
        borderColor: "rgba(255, 122, 24, 0.5)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {skill}
    </motion.span>
  );
}

export function AnimatedSkillGroup({ skills, big = false, staggerDelay = 0 }) {
  return (
    <motion.div
      className={big ? "chips chipsBig" : "chips"}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.05, delayChildren: staggerDelay },
        },
      }}
    >
      {skills.map((skill) => (
        <motion.span
          key={skill}
          className={big ? "chip chipBig chipAnimated" : "chip chipAnimated"}
          variants={{
            hidden: { opacity: 0, scale: 0.5, y: 20 },
            visible: { 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              }
            },
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(255, 122, 24, 0.4)",
            borderColor: "rgba(255, 122, 24, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          {skill}
        </motion.span>
      ))}
    </motion.div>
  );
}
