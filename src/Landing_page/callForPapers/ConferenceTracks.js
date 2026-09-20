import React from "react";
import { motion } from "framer-motion";
import "./papers.css";
import { tracks } from "./papersData";

function ConferenceTracks() {
  return (
    <>
      <section className="committee-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>Conference Tracks</h1>
          <div className="divider" />
          <p>Technical tracks and subtopics of IQICSA 2027</p>
        </motion.div>
      </section>

      <section className="Paper-section">
        <div className="tracks-section">
          <h2 className="tracks-heading">Conference Track and Subtopic</h2>
          <h5 className="tracks-subheading">
            Topics of interest include, but are not limited to:
          </h5>

          <div className="cards">
            {tracks.map((track, index) => (
              <div className="box" key={index}>
                <div className="track-number">{track.title}</div>
                <h3 className="track-name">{track.name}</h3>
                <ul className="track-list">
                  {track.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ConferenceTracks;
