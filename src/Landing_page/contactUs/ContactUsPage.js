import React from "react";
import { motion } from "framer-motion";
import "./ContactUs.css";
import { FaMapMarkerAlt, FaUser, FaEnvelope } from "react-icons/fa";

function VenueContact() {
  return (
    <>
      <section className="committee-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>Venue & Contact</h1>
          <div className="divider" />
        </motion.div>
      </section>
      <section className="venue-section" id="venue">

        <div className="venue-container">
          {/* LEFT SIDE */}
          <div className="contact-box">
            <h2>Get In Touch</h2>

            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <p>Army Institute of Technology, Pune, India</p>
            </div>

            <div className="contact-item">
              <FaUser className="icon" />
              <p>
                Dr. Sita Yadav,+91 9158362868 <br />
                Dr. Nikita Singhal,+91 8308320140
              </p>
            </div>

            <div className="contact-item">
              <FaEnvelope className="icon" />
              <p>
                xyz[at]aitpune[dot]edu[dot]in <br />
                abc[at]aitpune[dot]edu[dot]in
              </p>
            </div>
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="map-box">
            <iframe
              title="AIT Map"
              src="https://www.google.com/maps?q=Army%20Institute%20of%20Technology%20Pune&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default VenueContact;
