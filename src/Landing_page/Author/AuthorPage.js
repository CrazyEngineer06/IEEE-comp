import React from "react";
import { motion } from "framer-motion";
import AuthorGuidelines from "../authorGuidelines/AuthorGuidelines";
import Registration from "../Registration/Registration";
import "./author.css";

function AuthorPage() {
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
          <h1>Author</h1>
          <div className="divider" />
          <p>Guidelines and registration for IQICSA 2027 authors</p>
        </motion.div>
      </section>

      {/* =============== GUIDELINES =============== */}
      <section id="guidelines" className="au-anchor">
        <h2 className="au-section-title">Guidelines</h2>
        <AuthorGuidelines hideHero />
      </section>

      {/* =============== REGISTRATION =============== */}
      <section id="registration" className="au-anchor">
        <h2 className="au-section-title">Registration</h2>
        <Registration hideHero />
      </section>
    </>
  );
}

export default AuthorPage;
