import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt, FaCheckCircle } from "react-icons/fa";
import "./papers.css";
import "../authorGuidelines/guidelines.css";
import { tracks, dates } from "./papersData";

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const submissionNotes = [
  "Papers must report original, unpublished work and must not be under review elsewhere.",
  "Only papers prepared in PDF format, using the IEEE A4 conference template, will be accepted.",
  "Up to 6 pages including figures, tables and references; a maximum of two extra pages is allowed with over-length page charges.",
  "All submissions are peer reviewed and screened for plagiarism using iThenticate.",
];

function CallForPapers() {
  return (
    <>
      <section className="committee-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>Call for Papers</h1>
          <div className="divider" />
          <p>
            IEEE International Conference on Quantum Informatics, Communication
            Systems and Applications (IQICSA 2027)
          </p>
        </motion.div>
      </section>

      <section className="ag-section">

        {/* INVITATION */}
        <motion.div className="ag-block" {...fade}>
          <h2 className="ag-heading">Invitation to Authors</h2>
          <p className="ag-lead">
            Researchers, academicians, industry professionals and research
            scholars are invited to submit original research papers in the
            broad areas of quantum informatics, communication systems and their
            applications. Accepted and presented papers will be considered for
            publication in the IEEE Xplore conference proceedings.
          </p>

          <div className="ag-submit-card">
            <div className="ag-submit-text">
              <h3>Paper Submission</h3>
              <p>The paper submission portal will open soon.</p>
            </div>
            <button
              type="button"
              className="ag-btn ag-btn-inert"
              aria-disabled="true"
            >
              Submit Paper
            </button>
          </div>
        </motion.div>

        {/* SUBMISSION AT A GLANCE */}
        <motion.div className="ag-block" {...fade}>
          <h2 className="ag-heading">Submission at a Glance</h2>
          <ul className="ag-list">
            {submissionNotes.map((note, i) => (
              <li key={i}>
                <FaCheckCircle />
                <span>{note}</span>
              </li>
            ))}
          </ul>
          <p className="ag-note">
            Detailed formatting, plagiarism and publication policies are
            available on the{" "}
            <Link to="/authorGuidelines">Author&apos;s Guidelines</Link> page.
          </p>
        </motion.div>

        {/* TRACKS OVERVIEW */}
        <motion.div className="ag-block" {...fade}>
          <h2 className="ag-heading">Conference Tracks</h2>
          <div className="ag-template-grid">
            {tracks.map((track, i) => (
              <div className="ag-template-card" key={i}>
                <div className="ag-template-icon ag-track-label">{track.title}</div>
                <h3>{track.name}</h3>
                <p>{track.items.length} topics of interest</p>
              </div>
            ))}
          </div>
          <p className="ag-note">
            See all subtopics on the{" "}
            <Link to="/conferenceTracks">Conference Tracks</Link> page.
          </p>
        </motion.div>

        {/* KEY DATES */}
        <motion.div className="ag-block" {...fade}>
          <h2 className="ag-heading">Key Dates</h2>
          <div className="timeline-container">
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
        </motion.div>

      </section>
    </>
  );
}

export default CallForPapers;
