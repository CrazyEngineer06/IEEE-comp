import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import "../authorGuidelines/guidelines.css";
import { SUBMISSION_LINK } from "./papersData";

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

function AboutCMT() {
  return (
    <>
      <section className="committee-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>About CMT</h1>
          <div className="divider" />
          <p>Microsoft Conference Management Toolkit &mdash; the peer review platform for IQICSA 2027</p>
        </motion.div>
      </section>

      <section className="ag-section">

        <motion.div className="ag-block" {...fade}>
          <h2 className="ag-heading">Conference Management Toolkit</h2>
          <p className="ag-lead">
            <a href={SUBMISSION_LINK} target="_blank"> The Microsoft CMT</a> service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p>

          <div className="ag-submit-card">
            <div className="ag-submit-text">
              <h3>IQICSA 2027 Submission Portal</h3>
              <p>All submissions and reviews are handled through Microsoft CMT.</p>
            </div>
            <a
              className="ag-btn"
              href={SUBMISSION_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open CMT Portal <FaExternalLinkAlt />
            </a>
          </div>
        </motion.div>

        <motion.div className="ag-block" {...fade}>
          <h2 className="ag-heading">How to Submit through CMT</h2>
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
        </motion.div>

      </section>
    </>
  );
}

export default AboutCMT;
