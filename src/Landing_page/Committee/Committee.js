import { motion } from "framer-motion";
import { Users, Award, Mail } from "lucide-react";
import "./Committee.css";
import {
  committeeStructure,
  ADVISORY_SECTIONS,
  trackChairs,
  financeChairs,
} from "./committeeData";

const organizingCommittee = committeeStructure.filter(
  (g) => !ADVISORY_SECTIONS.includes(g.section)
);

export default function Committee() {
  return (
    <div className="committee-page">

      {/* HEADER */}
      <section className="committee-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>IQICSA Committee</h1>
          <div className="divider" />
          <p>Meet the distinguished team behind the conference</p>
        </motion.div>
      </section>

      {/* ALL COMMITTEE SECTIONS */}
      {organizingCommittee.map((group, gi) => (
        <section key={gi} className={`section ${gi % 2 === 0 ? "white" : "gray"}`}>
          <div className="section-title">
            <h2>{group.section}</h2>
            <div className="divider" />
          </div>

          <div className={`grid ${group.members.length === 1 ? "one" : "two"}`}>
            {group.members.map((m, i) => (
              <motion.div
                key={i}
                className={`member-card ${gi === 0 ? "card--chief" : gi === 1 ? "card--honorary" : "card--default"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="card-icon">
                  {gi <= 1 ? <Award size={20} /> : <Users size={20} />}
                </div>
                <h3>{m.name}</h3>
                <p>{m.affiliation}</p>
                {m.email && (
                  <a href={`mailto:${m.email}`} className="email">
                    <Mail size={14} /> {m.email}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* TRACK CHAIRS */}
      <section className="section white">
        <div className="section-title">
          <h2>Track Chairs</h2>
          <div className="divider" />
        </div>

        <motion.div
          className="committee-table-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <table className="committee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {trackChairs.map((row, i) => (
                <tr key={i}>
                  <td className="cell-strong">{row.name}</td>
                  <td>{row.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* FINANCE CHAIRS */}
      <section className="section gray">
        <div className="section-title">
          <h2>Finance Chair</h2>
          <div className="divider" />
        </div>

        <motion.div
          className="committee-table-scroll"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <table className="committee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              {financeChairs.map((row, i) => (
                <tr key={i}>
                  <td className="cell-strong">{row.name}</td>
                  <td>{row.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

    </div>
  );
}