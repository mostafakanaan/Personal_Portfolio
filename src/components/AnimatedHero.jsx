import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AnimatedHeroText({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedName({ name }) {
  const letters = name.split("");

  return (
    <motion.span className="animatedNameContainer">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="animatedLetter"
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5 + index * 0.05,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{
            scale: 1.2,
            color: "#ff7a18",
            transition: { duration: 0.2 },
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function AnimatedPhotoCard({ photo, name, title }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 50]);

  return (
    <motion.div
      ref={cardRef}
      className="photoCard"
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        duration: 1,
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ y }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 30px 80px rgba(2, 8, 20, 0.5), 0 0 40px rgba(255, 122, 24, 0.2)",
      }}
    >
      <motion.img
        src={photo}
        alt={`${name} portrait`}
        className="photo"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="photoGlow"
        aria-hidden="true"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="photoMeta">
        <motion.div
          className="photoName"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {name}
        </motion.div>
        <motion.div
          className="photoRole muted"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          {title}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function AnimatedButton({ children, href, className, target, rel, delay = 0 }) {
  return (
    <motion.a
      className={className}
      href={href}
      target={target}
      rel={rel}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(255, 122, 24, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}

export function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 5,
  }));

  return (
    <div className="floatingParticles" aria-hidden="true">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="floatingParticle"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-100vh",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
