import React from "react";
import { motion } from "framer-motion";
import "./guidelines.css";
import {
  FaFileWord,
  FaFileCode,
  FaBook,
  FaLeaf,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const SUBMISSION_LINK = "https://cmt3.research.microsoft.com/ICCUBEA2026";
const IEEE_TEMPLATES_LINK =
  "https://www.ieee.org/conferences/publishing/templates.html";

const templates = [
  {
    icon: <FaFileWord />,
    title: "Microsoft Word",
    meta: "A4 (DOC, 30 KB) • Updated Jan 2019",
    link: IEEE_TEMPLATES_LINK,
    label: "Download Template",
  },
  {
    icon: <FaFileCode />,
    title: "LaTeX Template",
    meta: "ZIP, 700 KB • Updated October 2019",
    link: IEEE_TEMPLATES_LINK,
    label: "Download Template",
  },
  {
    icon: <FaBook />,
    title: "LaTeX Bibliography Files",
    meta: "ZIP, 309 KB",
    link: IEEE_TEMPLATES_LINK,
    label: "Download Files",
  },
  {
    icon: <FaLeaf />,
    title: "Overleaf",
    meta: "Official IEEE templates gallery",
    link: "https://www.overleaf.com/gallery/tagged/ieee-official",
    label: "Open in Overleaf",
  },
];

const styleRules = [
  ["Paper Size", "A4"],
  ["File Format", "Only papers prepared in PDF format will be accepted."],
  [
    "Paper Length",
    "Up to 6 pages, including figures, tables & references. At maximum, two additional pages are permitted with an over-length page charge of Rs. 800/- per page, as per IEEE conference paper guidelines.",
  ],
  ["Paper Formatting", "Double column, single spaced, #10 point Times Roman font."],
  [
    "Margins",
    "Left, Right and Bottom: 0.75″ (19 mm). The top margin must be 0.75″ (19 mm), except for the title page where it must be 1″ (25 mm).",
  ],
];

const plagiarismRules = [
  "The overall similarity index is below 20% (including references).",
  "The overall similarity index is below 15% (excluding references).",
  "The similarity from any single source does not exceed 10%.",
  "AI-generated content is limited; some policies restrict AI-generated material to no more than 20% of the total content.",
  "Once a paper is submitted and assigned a PaperID, no changes in authorship and affiliation are permitted.",
];

const decisionCards = [
  {
    title: "Immediate Rejects / Desk Rejects",
    text: "For submissions that do not have a minimum quality or do not include adequate technical content as checked by two senior experts, Track Chairs, or Technical Program Chairs, they may be desk rejected and not subject to a full reviewing process.",
  },
  {
    title: "Revision",
    text: "Major or minor revisions may be recommended by reviewers, Track Chairs, or Technical Program Chairs based on the overall quality of the paper.",
  },
  {
    title: "Notification of Acceptance or Rejection",
    text: "Authors will be notified of paper acceptance or non-acceptance by email as close as possible to the published author notification date.",
  },
];

const publicationPoints = [
  "Accepted papers presented at the conference in person will be eligible for submission for further consideration for publication in IEEE Xplore, subject to quality maintenance and post-conference scrutiny through the Technical Program Questionnaire (TPQ) response.",
  "After the in-person paper presentation, all authors need to submit the original Word document / original LaTeX file for the post-conference publication process.",
  "All accepted papers will be selected for publication in the IEEE Xplore conference proceedings as per the quality of the paper and the acceptance policy of IEEE Xplore.",
  "An accepted paper will be published in the proceedings and uploaded to IEEE Xplore ONLY if the final camera-ready version is submitted and accompanied by the registration and signed copyright form(s), the fee(s) for at least one of the authors, and other payable fees (such as extra page charges), and is presented in person during the conference. By submitting a paper, you agree to these terms.",
];

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function AuthorGuidelines({ hideHero = false }) {
  return (
    <>
      {/* =============== HERO =============== */}
      {!hideHero && (
        <section className="committee-hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-content"
          >
            <h1>Author&apos;s Guidelines</h1>
            <div className="divider" />
            <p>
              Instructions for authors &mdash; submission, formatting and
              publication policies
            </p>
          </motion.div>
        </section>
      )}

      <section className="ag-section">

        {/* =============== SUBMISSION =============== */}
        <motion.div className="ag-block" {...fade}>
          <h2 className="ag-heading">Paper Submission Guidelines</h2>

          <div className="ag-submit-card">
            <div className="ag-submit-text">
              <h3>Paper Submission Link</h3>
              <p>Submit your manuscript through the Microsoft CMT portal.</p>
            </div>
            <a
              className="ag-btn"
              href={SUBMISSION_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit Paper <FaExternalLinkAlt />
            </a>
          </div>

          <p className="ag-note">
            The Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p>
        </motion.div>

        {/* =============== TEMPLATES =============== */}
        <motion.div className="ag-block" {...fade}>
          <h2 className="ag-heading">Manuscript Templates</h2>
          <div className="ag-template-grid">
            {templates.map((t, i) => (
              <div className="ag-template-card" key={i}>
                <div className="ag-template-icon">{t.icon}</div>
                <h3>{t.title}</h3>
                <p>{t.meta}</p>
                <a href={t.link} target="_blank" rel="noopener noreferrer">
                  {t.label} <FaExternalLinkAlt />
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =============== STYLE INFORMATION =============== */}
        <motion.div className="ag-block" {...fade}>
          <h2 className="ag-heading">Manuscript Style Information</h2>

          <div className="ag-table-scroll">
            <table className="ag-table">
              <tbody>
                {styleRules.map(([label, value], i) => (
                  <tr key={i}>
                    <th>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="ag-warning">
            <FaExclamationTriangle />
            <span>
              Note: Violations of any of the above specifications may result in
              rejection of your paper.
            </span>
          </div>
        </motion.div>

        {/* =============== PLAGIARISM =============== */}
        <motion.div className="ag-block" {...fade}>
          <h2 className="ag-heading">Plagiarism Policy</h2>
          <p className="ag-lead">
            All submitted papers will be screened using the plagiarism detection
            tool iThenticate. Manuscripts will be considered for review only if:
          </p>
          <ul className="ag-list">
            {plagiarismRules.map((rule, i) => (
              <li key={i}>
                <FaCheckCircle />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* =============== DECISION & REVISION =============== */}
        <motion.div className="ag-block" {...fade}>
          <h2 className="ag-heading">Decision and Revision</h2>
          <div className="ag-cards">
            {decisionCards.map((card, i) => (
              <div className="ag-card" key={i}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* =============== PUBLICATION POLICY =============== */}
        <motion.div className="ag-block" {...fade}>
          <h2 className="ag-heading">Publication Policy</h2>
          <ul className="ag-list">
            {publicationPoints.map((point, i) => (
              <li key={i}>
                <FaCheckCircle />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </section>
    </>
  );
}

export default AuthorGuidelines;
