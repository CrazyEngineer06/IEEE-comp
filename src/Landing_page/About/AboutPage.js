import React from "react";
import "./AboutPage.css";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <section className="committee-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>About The Conference, Institute & Department</h1>
          <div className="divider" />
          <p>Meet the distinguished team behind the conference</p>
        </motion.div>
      </section>
      <section id="about" className="about-main">

        <div className="about-container">
          {/* CONFERENCE */}
          <div className="about-card">
            <h2>About The Conference</h2>
              <p>
                IQICSA 2027 is an IEEE international conference focused on quantum computing, secure communication systems and their real-world applications. It brings together researchers, academics and industry professionals to discuss advancements in Quantum Key Distribution (QKD), qubit architectures, post-quantum cryptography and quantum machine learning. Accepted papers will be submitted for possible inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements. It serves as a premier platform for collaboration and innovation at the intersection of quantum science and modern communication engineering.
              </p>
          </div>

          {/* AIT */}
          <div className="about-card">
            <h2>About AIT</h2>
            <p>
              AIT was founded in 1994, as a result of the vision, and untiring efforts of Late Gen. B.C. Joshi PVSM, AVSM, ADC for the children of all ranks of the Indian Army. The lush green campus, its resilience and architectural splendor and state of the art infrastructure, all provde vital ingredients for a delectable academic environment for the development of total quality engineers. AIT is ranked in a band of 200-300 in NIRF across India. AIT runs Undergraduate courses in Computer Engineering, IT, Mech, E&TC and Post Graduate course in Machine Design. All courses are affiliated to SPPU.
            </p>
          </div>

          {/* DEPARTMENT */}
          <div className="about-card">
            <h2>About The Department</h2>
            <p>The Department of Computer Engineering was established in 1994 with a strong vision to nurture technically skilled and innovative engineers. The department strives hard to provide a very good learning experience to its students. The department has developed state-of-art infrastructure, well-equipped laboratories, departmental library and classrooms with modern teaching aids. The department has quality intake, experienced and dedicated faculty and staff, excellent academic results and placements. It actively promotes research, industry collaboration and participation in national and international competitions to enhance students' overall development</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
