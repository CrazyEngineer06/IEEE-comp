import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    ["/", "Home"],
    ["/brochure", "Brochure"],
    ["/about", "About"],
    ["/Highlights", "Highlights"],
    ["/callForPapers", "Papers"],
    ["/committee", "Committee"],
    ["/registration", "Registration"],
    ["/contactUs", "Contact Us"],
  ];

  return (
    <header className="conference-header">

      {/* =====================================================
          TOP INSTITUTIONAL HEADER
      ====================================================== */}

      <div className="conference-top">

        {/* LEFT - AIT LOGO */}
        <div className="conference-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/6/6a/AIT_Pune_logo.gif"
            alt="Army Institute of Technology"
          />
        </div>


        {/* CENTER - CONFERENCE INFORMATION */}
        <div className="conference-title">

          <h1>
            ARMY INSTITUTE OF TECHNOLOGY
          </h1>

          <h2>
            IEEE International Conference
          </h2>

          <div className="conference-theme">
            Quantum Informatics, Communication Systems and Applications
          </div>

          <p>
            Advancing Research • Innovation • Communication Technologies
          </p>

        </div>


        {/* RIGHT - IEEE */}
        <div className="conference-ieee">
          <div className="ieee-text">
            IEEE
          </div>

          <div className="ieee-subtext">
            International Conference
          </div>
        </div>

      </div>


      {/* =====================================================
          BLUE NAVIGATION BAR
      ====================================================== */}

      <nav className="navBar">

        <div className="navbar-container">

          {/* Desktop Navigation */}
          <ul className="nav-link">

            {navItems.map(([path, label]) => (

              <li key={path}>
                <Link to={path}>
                  {label}
                </Link>
              </li>

            ))}

          </ul>


          {/* Hamburger */}
          <button
            className={`hamburger ${
              menuOpen ? "open" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >

            <span />
            <span />
            <span />

          </button>

        </div>


        {/* =====================================================
            MOBILE DRAWER
        ====================================================== */}

        <div
          className={`mobile-drawer ${
            menuOpen ? "active" : ""
          }`}
        >

          <ul className="mobile-nav-link">

            {navItems.map(([path, label]) => (

              <li key={path}>

                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>

              </li>

            ))}

          </ul>

        </div>

      </nav>


      {/* =====================================================
          SPOTLIGHT BAR
      ====================================================== */}

      <div className="spotlight-bar">

        <div className="spotlight-label">
          SPOTLIGHT:
        </div>

        <div className="spotlight-window">

          <div className="spotlight-text">

            Paper Submission is Open
            &nbsp;&nbsp; • &nbsp;&nbsp;

            Registration Open
            &nbsp;&nbsp; • &nbsp;&nbsp;

            Important Conference Updates
            &nbsp;&nbsp; • &nbsp;&nbsp;

            IEEE International Conference on
            Quantum Informatics, Communication
            Systems and Applications

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;