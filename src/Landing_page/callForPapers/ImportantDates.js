import React from "react";
import { motion } from "framer-motion";
import { FaRegCalendarAlt } from "react-icons/fa";
import "./papers.css";
import { dates } from "./papersData";

function ImportantDates() {
  return (
    <>
      <section className="committee-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>Important Dates</h1>
          <div className="divider" />
          <p>Key deadlines for authors and delegates</p>
        </motion.div>
      </section>

      <section className="Paper-section">
        <div className="timeline-container">
          <h2 className="timeline-title">Conference Timeline</h2>
          <ul className="timeline-list">
            {dates.map((d, index) => (
              <li className="timeline-item" key={index}>
                <div className="timeline-icon">
                  <FaRegCalendarAlt />
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-date">{d.date}</h3>
                  <p className="timeline-label">{d.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default ImportantDates;
