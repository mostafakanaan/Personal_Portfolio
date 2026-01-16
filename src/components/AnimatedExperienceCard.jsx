import { motion } from "framer-motion";

export default function AnimatedExperienceCard({ experience, index = 0 }) {
  return (
    <motion.div
      className="panel experienceCard"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.02,
        borderColor: "rgba(255, 122, 24, 0.3)",
        boxShadow: "0 20px 60px rgba(2, 8, 20, 0.4), 0 0 30px rgba(255, 122, 24, 0.1)",
      }}
    >
      {/* Timeline connector */}
      <motion.div
        className="timelineConnector"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
      />
      
      {/* Timeline dot */}
      <motion.div
        className="timelineDot"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 15,
          delay: index * 0.15 + 0.2,
        }}
      />

      <div className="experienceContent">
        <div className="row">
          <div>
            <motion.h3
              className="h3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.3 }}
            >
              {experience.role}
            </motion.h3>
            <motion.div
              className="muted companyInfo"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.4 }}
            >
              <span className="companyName">{experience.company}</span>
              <span className="separator">·</span>
              <span>{experience.location}</span>
            </motion.div>
          </div>
          <motion.div
            className="periodBadge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.35 }}
          >
            {experience.period}
          </motion.div>
        </div>

        <motion.ul
          className="list bulletList"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: index * 0.15 + 0.5 },
            },
          }}
        >
          {experience.bullets.map((bullet, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {bullet}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}
