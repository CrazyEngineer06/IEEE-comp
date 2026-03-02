import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const TYPING_SPEED = 100;
const INSTITUTION_TEXT = "ARMY INSTITUTE OF TECHNOLOGY";

export function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < INSTITUTION_TEXT.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + INSTITUTION_TEXT[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, TYPING_SPEED);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <div className="hero">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-inner">

          {/* Typing Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="hero-institute">
              {displayedText}
              <span className="cursor" />
            </h2>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="hero-title">
              IEEE International Conference
            </h1>

            <div className="hero-badge">
               Quantum Informatics, Communication Systems and Applications 
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hero-subtitle"
          >
            Join leading researchers, academics, and industry professionals in shaping the future of technology
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="hero-buttons"
          >
            <a href="/registration" className="btn primary">
              Register Now
            </a>
            <a href="/papers" className="btn secondary">
              Submit Paper
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mouse"
        >
          <div className="dot" />
        </motion.div>
      </motion.div>
    </div>
  );
}
