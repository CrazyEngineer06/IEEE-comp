import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaGlobe, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col">
          <h2>IEEE 2027</h2>
          <p>
             The platform serves as a premier platform for collaboration and innovation at the intersection of quantum science and modern communication engineering.
          </p>
        </div>

        {/* MIDDLE */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/callForPapers">Call for Papers</a></li>
            <li><a href="/registration">Registration</a></li>
            <li><a href="/committee">Committee</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>Army Institute of Technology, Pune, India</p>
          <p>hodcomp@aitpune.edu.in</p>
          <p>Phone: 7249250186 [EXT:2140]</p>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2027 Department of Computer Engineering. All Rights Reserved.</p>

        <div className="socials">
          <a href="https://x.com/ait_pune" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>

          <a href="https://www.aitpune.com/" target="_blank" rel="noreferrer">
            <FaGlobe />
          </a>

          <a href="https://www.facebook.com/aitpune/" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>

          <a href="https://www.linkedin.com/school/army-institute-of-technology-ait-pune/posts/?feedView=all" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
