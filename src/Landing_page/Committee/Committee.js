import { motion } from "framer-motion";
import { Users, Award, Mail } from "lucide-react";
import "./Committee.css";

const committeeStructure = [
  {
    section: "Chief Honorary Chair",
    members: [
      { name: "Maj Gen Parvinder Singh Sindhu", affiliation: "Chairman, AIT Pune" },
    ],
  },
  {
    section: "Honorary Chair",
    members: [
      { name: "Maj Gen Uday Shankar Sengupta [Retd]", affiliation: "Director, AIT Pune" },
    ],
  },
  {
    section: "Convenor",
    members: [
      { name: "Dr B P Patil", affiliation: "Principal, AIT Pune", email: "principal@aitpune.edu.in" },
      
    ],
  },
  {
    section: "Conference General Chair",
    members: [
     { name: "Prof(Dr) S R Dhore", affiliation: "HOD comp, AIT Pune", email: "hodcomp@aitpune.edu.in" },
    ],
  },
  {
    section: "General Co chair",
    members:[
       { name: "Dr NK Bansode", affiliation: "Prof, AIT Pune", email: "nkbansode@aitpune.edu.in" },
    ]
  },
  {
    section: "Conference Chair",
    members: [
      { name: "Dr Nikita Singhal", affiliation: "	Assistant Professor, AIT Pune", email: "ngupta@aitpune.edu.in" },
      { name: "Dr Sita Yadav", affiliation: "	Assistant Professor, AIT Pune", email: "syadav@aitpune.edu.in" },
    ],
  },
  {
    section: "TECHNICAL ADVISORY COMMITTEE",
    members: [
      { name: "Dr Amar Buchade", affiliation: "Chair IEEE Pune section"},
      { name: "Prof Abhijit Khurape", affiliation: "Secretary, IEEE Pune Section"},
      { name: "Dr Utpal Chakraborty", affiliation: "Founder & Chief Scientist, ExorionAI, Co-Founder & Chief Technology Officer-IndiqAI"},
      { name: "Dr Rajkumar Buyya", affiliation: "Director, Cloud Computing and Distributed Systems (CLOUDS) Lab, Professor at University of Melbourne"},
      { name: "Dr Debasis De", affiliation: "Professor, MAKAUT, West Bengal"},
      { name: "Dr Anindita Banerjee", affiliation: "Project Manager for Quantum Technlogy Projects, Scientist CDAC Pune"},
      { name: "Dr Aswath Babu", affiliation: "Assistant Professor in Physics, HoD, Department of Arts, Science and Design, IIIT Dharwad, Dharwad"},
      { name: "Dr Dipti Saxena", affiliation: "Professor, MNIT Jaipur"},
      { name: "Dr Pilli Emmanuel Shubhakar", affiliation: "Professor MNIT Jaipur"},
      { name: "Dr Anirvan Gupta", affiliation: "assistant Professor, JSPM University, Pune"},
      { name: "Dr Amit Saxena", affiliation: "Scientist, CDAC Pune"},
      { name: "Dr Umakant Rapol", affiliation: "professor, ISSER Pune"},
      { name: "Dr Amit D. Joshi", affiliation: "Assistant Professor, COEP"},
      { name: "Dr Suraj Sawant", affiliation: "Assistant Professor, COEP"},
      { name: "Col Gaurav Upadhyay", affiliation: "Chief Operational Officer, Majine"},
      { name: "Dr Manisha Nene", affiliation: "Chief Technology Officer, Majine"},
    ],
  },
  {
    section: "CONFERENCE ADVISORY COMMITTEE",
    members: [
      { name: "Mr Ambarish Natu", affiliation: "Vice Chair, IEEE Australia Council,Comb"},
      { name: "Dr Pradeep Mane", affiliation: "Chair, Conference committee, IEEE Pune Section"},
      { name: "Dr Mandar Bhawalkar", affiliation: "Vice Chair, IEEE Pune Section"},
      
      { name: "Dr Sudeep Thepade", affiliation: "Pro vice chancellor PCU Pune"},
      { name: "Mr. Nilesh Dhande", affiliation: "CEO and co founder fourty two labs"},
      { name: "Mr. Vijendra Yadav", affiliation: "CEO - accops,Technical Advisory Committee"},
     
      { name: "Dr Pramod Patil", affiliation: "Dean Faculty of Science and Technology, SPPU"},
      { name: "Dr Nilesh Uke", affiliation: "Chairman Board of studies Computer Engineering"},
      { name: "Dr P N Mahalle", affiliation: "Dean Academics VIT Pune"},
    ],
  },
  {
    section: "Technical Program Chair",
    members: [
      { name: "Dr R Jayadevan", affiliation: "Associate Professor ,AIT Pune"},
      { name: "Dr Vaishali Ganganwar", affiliation: "Associate Professor ,AIT Pune"},
    ],
  },
  {
    section: "Conference Treasurer Chair",
    members: [
      { name: "Dr Nikita Singhal", affiliation: "Assistant Professor ,AIT Pune"},
      { name: "Dr Sita Yadav", affiliation: "Assistant Professor ,AIT Pune"},
    ],
  },
  {
    section: "Information Contact Chair",
    members: [
      { name: "Mr. Anup Kadam", affiliation: "Assistant Professor ,AIT Pune"},
      { name: "Mr. Mangesh Hajare", affiliation: "Assistant Professor ,AIT Pune"},
    ],
  },
  {
    section: "Publication Chair",
    members: [
      { name: "Dr Ganesh Mundhe", affiliation: "Assistant Professor, AIT Pune"},
      { name: "Dr Sagar Rane", affiliation: "Associate Professor, AIT Pune"},
    ],
  },
  {
    section: "Publicity Chair",
    members: [
      { name: "Mr. MB Lonare", affiliation: "Assistant Professor, AIT Pune"},
      { name: "Mr. Kuldeep Hule", affiliation: "Assistant Professor, AIT Pune"},
    ],
  }
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