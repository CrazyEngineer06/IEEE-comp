import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt, FaCheckCircle } from "react-icons/fa";
import "../callForPapers/papers.css";
import "../authorGuidelines/guidelines.css";
import "./iqicsa.css";
import { tracks, dates } from "../callForPapers/papersData";

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const cmtSteps = [
  "Create a free Microsoft CMT account, or sign in with an existing one.",
  "Open the IQICSA 2027 submission page and select \"Create new submission\".",
  "Enter the title, abstract, keywords and the complete list of co-authors.",
  "Upload the manuscript as a PDF prepared in the IEEE A4 conference template.",
  "Submit before the deadline; the system assigns a PaperID used for all further correspondence.",
];

const submissionNotes = [
  "Papers must report original, unpublished work and must not be under review elsewhere.",
  "Only papers prepared in PDF format, using the IEEE A4 conference template, will be accepted.",
  "Up to 6 pages including figures, tables and references; a maximum of two extra pages is allowed with over-length page charges.",
  "All submissions are peer reviewed and screened for plagiarism using iThenticate.",
];

function IqicsaPage() {
  return (
    <>
      {/* =============== HERO =============== */}
      <section className="committee-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>IQICSA 2027</h1>
          <div className="divider" />
          <p>
            IEEE International Conference on Quantum Informatics, Communication
            Systems and Applications
          </p>
        </motion.div>
      </section>

      <div className="ag-section">

        {/* =============== ABOUT CMT =============== */}
        <motion.section id="about-cmt" className="ag-block iq-anchor" {...fade}>
          <h2 className="ag-heading">About CMT</h2>
          <p className="ag-lead">
            The Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p>

          <h3 className="iq-subheading">How to Submit through CMT</h3>
          <ul className="ag-list">
            {cmtSteps.map((step, i) => (
              <li key={i}>
                <FaCheckCircle />
                <span>{step}</span>
              </li>
            ))}
          </ul>
          <p className="ag-note">
            Once a paper is submitted and assigned a PaperID, no changes in
            authorship and affiliation are permitted.
          </p>
        </motion.section>

        {/* =============== CALL FOR PAPER =============== */}
        <motion.section id="call-for-paper" className="ag-block iq-anchor" {...fade}>
          <h2 className="ag-heading">Call for Paper</h2>
          {/* <p className="ag-lead">
            The Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p> */}

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

          <h3 className="iq-subheading">Submission at a Glance</h3>
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
            <Link to="/author#guidelines">Author&apos;s Guidelines</Link> page.
          </p>
        </motion.section>

        {/* =============== CONFERENCE TRACKS =============== */}
        <motion.section
          id="conference-tracks"
          className="ag-block iq-anchor"
          {...fade}
        >
          <h2 className="ag-heading">Conference Tracks</h2>
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
        </motion.section>

        {/* =============== IMPORTANT DATES =============== */}
        <motion.section
          id="important-dates"
          className="ag-block iq-anchor"
          {...fade}
        >
          <h2 className="ag-heading">Important Dates</h2>

          <div className="timeline-container iq-timeline">
            <ul className="timeline-list">
              {dates.map((d, index) => (
                <li
                  className={`timeline-item ${
                    index === dates.length - 1 ? "is-final" : ""
                  }`}
                  key={index}
                >
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
        </motion.section>

      </div>
    </>
  );
}

export default IqicsaPage;
