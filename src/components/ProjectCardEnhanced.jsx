import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function ProjectCardEnhanced({ p, index = 0 }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position for 3D tilt effect
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth spring animation for tilt
  const springConfig = { damping: 25, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  // Transform mouse position to rotation
  const rotateX = useTransform(ySpring, [0, 1], [8, -8]);
  const rotateY = useTransform(xSpring, [0, 1], [-8, 8]);

  // Gradient position for spotlight effect
  const gradientX = useTransform(xSpring, [0, 1], [0, 100]);
  const gradientY = useTransform(ySpring, [0, 1], [0, 100]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className="cardEnhanced"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Animated border gradient */}
      <motion.div
        className="cardBorderGlow"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,122,24,0.6), rgba(33,212,180,0.4), transparent 60%)`
          ),
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Inner card content */}
      <div className="cardInner">
        <div className="cardImageWrapEnhanced">
          <motion.img
            src={p.image}
            alt=""
            className="cardImageEnhanced"
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <motion.div
            className="cardImageOverlayEnhanced"
            animate={{
              background: isHovered
                ? "linear-gradient(to bottom, rgba(7,10,18,0.1), rgba(7,10,18,0.75))"
                : "linear-gradient(to bottom, rgba(7,10,18,0.2), rgba(7,10,18,0.85))",
            }}
          >
            <motion.span
              className="lockIconEnhanced"
              animate={{
                scale: isHovered ? 1.2 : 1,
                rotate: isHovered ? [0, -10, 10, 0] : 0,
              }}
              transition={{ duration: 0.4 }}
            >
              🔒
            </motion.span>
            <motion.span
              className="lockTextEnhanced"
              animate={{ y: isHovered ? -5 : 0 }}
            >
              {p.status}
            </motion.span>
          </motion.div>

          {/* Floating particles on hover */}
          {isHovered && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="cardParticle"
                  initial={{ 
                    x: Math.random() * 100, 
                    y: 100 + Math.random() * 20,
                    opacity: 0 
                  }}
                  animate={{
                    y: -20,
                    opacity: [0, 1, 0],
                    x: Math.random() * 100,
                  }}
                  transition={{
                    duration: 1.5 + Math.random(),
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </>
          )}
        </div>

        <div className="cardBodyEnhanced">
          <motion.h3
            className="h3"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {p.name}
          </motion.h3>
          <p className="muted cardDescription">{p.description}</p>

          <div className="chipsEnhanced">
            {p.tech.map((t, i) => (
              <motion.span
                key={t}
                className="chipEnhanced"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255, 122, 24, 0.2)",
                }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
