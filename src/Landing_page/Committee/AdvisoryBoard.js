import { motion } from "framer-motion";
import { Users, Mail } from "lucide-react";
import "./Committee.css";
import { committeeStructure, ADVISORY_SECTIONS } from "./committeeData";

const advisoryGroups = committeeStructure.filter((g) =>
  ADVISORY_SECTIONS.includes(g.section)
);

export default function AdvisoryBoard() {
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
          <h1>Advisory Board</h1>
          <div className="divider" />
          <p>Technical and conference advisory committees guiding IQICSA 2027</p>
        </motion.div>
      </section>

      {/* ADVISORY SECTIONS */}
      {advisoryGroups.map((group, gi) => (
        <section key={gi} className={`section ${gi % 2 === 0 ? "white" : "gray"}`}>
          <div className="section-title">
            <h2>{group.section}</h2>
            <div className="divider" />
          </div>

          <div className={`grid ${group.members.length === 1 ? "one" : "two"}`}>
            {group.members.map((m, i) => (
              <motion.div
                key={i}
                className="member-card card--default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="card-icon">
                  <Users size={20} />
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

    </div>
  );
}
