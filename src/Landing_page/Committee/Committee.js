import { motion } from "framer-motion";
import { Users, Award, Mail } from "lucide-react";
import "./Committee.css";

const committeeStructure = [
  {
    section: "Chief Honorary Chair",
    members: [
      { name: "Maj Gen KK Chakrabarti", affiliation: "Chairman, AIT Pune" },
    ],
  },
  {
    section: "Honorary Chair",
    members: [
      { name: "Maj Gen Uday Shankar Sengupta", affiliation: "Director, AIT Pune" },
    ],
  },
  {
    section: "Convenor",
    members: [
      { name: "Dr. B.P. Patil", affiliation: "Principal ,AIT Pune", email: "principal@aitpune.edu.in" },
      { name: "Prof.(Dr.) S R Dhore", affiliation: "HOD comp ,AIT Pune", email: "hodcomp@aitpune.edu.in" },
    ],
  },
  {
    section: "Conference General Chair",
    members: [
      { name: "Dr. NK Bansode", affiliation: "Proff ,AIT Pune", email: "nkbansode@aitpune.edu.in" },
    ],
  },
  {
    section: "Conference Chair",
    members: [
      { name: "Dr. Nikita Singhal", affiliation: "	Assistant Professor ,AIT Pune", email: "ngupta@aitpune.edu.in" },
      { name: "Dr. Sita Yadav", affiliation: "	Assistant Professor ,AIT Pune", email: "syadav@aitpune.edu.in" },
    ],
  },
  // {
  //   section: "Conference Co-Chair",
  //   members: [
  //     { name: "ABC", affiliation: "AIT, Pune", email: "ABCa@ait.ac.in" },
  //   ],
  // },
  // {
  //   section: "Technical Program Chair",
  //   members: [
  //     { name: "Dr. Sagar Rane", affiliation: "Associate Professor ,AIT Pune", email: "sagarrane@aitpune.edu.in" },
  //     { name: "Ms Y T Hambir", affiliation: "Assistant Professor ,AIT Pune", email: "ythambir@aitpune.edu.in" },
  //   ],
  // },
  // {
  //   section: "Publicity Chair",
  //   members: [
  //     { name: "ABC", affiliation: "AIT, Pune", email: "ABC@ait.ac.in" },
  //   ],
  // },
  // {
  //   section: "Finance Chair",
  //   members: [
  //     { name: "ABC", affiliation: "AIT, Pune", email: "ABC@ait.ac.in" },
  //   ],
  // },
];

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
          <h1>Organizing Committee</h1>
          <div className="divider" />
          <p>Meet the distinguished team behind the conference</p>
        </motion.div>
      </section>

      {/* ALL COMMITTEE SECTIONS */}
      {committeeStructure.map((group, gi) => (
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

    </div>
  );
}