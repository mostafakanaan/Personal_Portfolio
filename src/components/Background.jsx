import { useEffect, useRef } from "react";
import styles from "../styles/Background.module.scss";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null, radius: 150 };

    // Reduced density & connection distance for much lighter load
    const connectionDistanceSq = 100 * 100; // squared — skip sqrt
    const particleSpeed = 0.15;
    const particleSize = 1.8;

    const color = "rgba(33, 212, 180,";

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Throttle mousemove to ~60fps max
    let lastMouseTime = 0;
    const handleMouseMove = (e) => {
      const now = performance.now();
      if (now - lastMouseTime < 16) return;
      lastMouseTime = now;
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * particleSpeed;
        this.vy = (Math.random() - 0.5) * particleSpeed;
        this.size = Math.random() * particleSize + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (mouse.x != null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distSq = dx * dx + dy * dy;
          const radiusSq = mouse.radius * mouse.radius;

          if (distSq < radiusSq) {
            const distance = Math.sqrt(distSq);
            const force = (mouse.radius - distance) / mouse.radius;
            this.vx -= (dx / distance) * force * 0.15;
            this.vy -= (dy / distance) * force * 0.15;
          }
        }
      }
    }

    function initParticles() {
      particles = [];
      // Much lower density: ~50 particles on 1080p instead of ~138
      const count = Math.min((canvas.width * canvas.height) / 30000, 60);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const len = particles.length;

      // Batch all particle dots into one path
      ctx.fillStyle = `${color} 0.5)`;
      ctx.beginPath();
      for (let i = 0; i < len; i++) {
        particles[i].update();
        const p = particles[i];
        ctx.moveTo(p.x + p.size, p.y);
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      }
      ctx.fill();

      // Batch all connection lines into one path per opacity bucket
      // Use 3 opacity buckets to avoid per-line strokeStyle changes
      const buckets = [
        { paths: [], style: `${color} 0.12)` },
        { paths: [], style: `${color} 0.08)` },
        { paths: [], style: `${color} 0.04)` },
      ];

      for (let i = 0; i < len; i++) {
        const pi = particles[i];
        for (let j = i + 1; j < len; j++) {
          const pj = particles[j];
          const dx = pi.x - pj.x;
          const dy = pi.y - pj.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDistanceSq) {
            // Approximate opacity bucket (no sqrt needed)
            const ratio = distSq / connectionDistanceSq;
            const bucket = ratio < 0.33 ? 0 : ratio < 0.66 ? 1 : 2;
            buckets[bucket].paths.push(pi.x, pi.y, pj.x, pj.y);
          }
        }
      }

      ctx.lineWidth = 0.5;
      for (const bucket of buckets) {
        if (bucket.paths.length === 0) continue;
        ctx.strokeStyle = bucket.style;
        ctx.beginPath();
        for (let k = 0; k < bucket.paths.length; k += 4) {
          ctx.moveTo(bucket.paths[k], bucket.paths[k + 1]);
          ctx.lineTo(bucket.paths[k + 2], bucket.paths[k + 3]);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.backgroundCanvas} />;
}
