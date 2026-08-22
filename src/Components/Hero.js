import { motion } from "framer-motion";
import "./Hero.css";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="hero">

      {/* Background */}
      <div className="hero-bg">
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">

        <div className="hero-inner">

          {/* Buttons only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="hero-buttons"
          >

            <Link
              to="/registration"
              className="btn primary"
            >
              Register Now
            </Link>

            <Link
              to="/callForPapers"
              className="btn secondary"
            >
              Submit Paper
            </Link>

          </motion.div>

        </div>

      </div>


      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="scroll-indicator"
      >

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mouse"
        >

          <div className="dot" />

        </motion.div>

      </motion.div>

    </div>
  );
}