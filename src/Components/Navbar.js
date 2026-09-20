import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },

  // IQICSA dropdown menu
  {
    label: "IQICSA",
    children: [
      { label: "About CMT", path: "/about-cmt" },
      { label: "Call for Papers", path: "/iqicsa#call-for-paper" },
      { label: "Conference Tracks", path: "/iqicsa#conference-tracks" },
      { label: "Important Dates", path: "/iqicsa#important-dates" },
    ],
  },

  { label: "Brochure", path: "/brochure" },
  { label: "Committee", path: "/committee" },
  { label: "Advisory Board", path: "/advisoryBoard" },

  // Author dropdown
  {
    label: "Author",
    children: [
      { label: "Guidelines", path: "/author#guidelines" },
      { label: "Registration", path: "/author#registration" },
    ],
  },

  { label: "Contact Us", path: "/contactUs" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  const navRef = useRef(null);

  /* Close desktop dropdown when clicking outside */
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileMenu(null);
  };

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
            IEEE International Conference On
          </h2>

          <div className="conference-theme">
            Quantum Informatics, Communication Systems and Applications
            <br />
            (IQICSA 2027) (Hybrid Mode)
          </div>

          <p>
            Advancing Research • Innovation • Communication Technologies
          </p>

        </div>

        {/* RIGHT - IEEE + CONFERENCE LOGO */}
        <div className="conference-logo conference-logo-right">

          <img
            className="ieee-logo-img"
            src={`${process.env.PUBLIC_URL}/images.jpeg`}
            alt="IEEE"
          />

          <img
            className="conference-logo-img"
            src={`${process.env.PUBLIC_URL}/conferenceLogo.jpeg`}
            alt="Conference Logo"
          />

        </div>

      </div>

      {/* <p className="ag-lead" style={{fontSize : "17px"}}>
        The Microsoft CMT service was used for managing the peer-reviewing
        process for this conference. This service was provided for free by
        Microsoft and they bore all expenses, including costs for Azure
        cloud services as well as for software development and support.
      </p> */}

      {/* =====================================================
          BLUE NAVIGATION BAR
      ====================================================== */}

      <nav className="navBar" ref={navRef}>

        <div className="navbar-container">

          {/* DESKTOP NAVIGATION */}

          <ul className="nav-link">

            {navItems.map((item) => (

              item.children ? (

                /* =================================================
                   ITEMS WITH DROPDOWN
                ================================================== */

                <li
                  key={item.label}
                  className={`has-dd ${
                    openDropdown === item.label
                      ? "open"
                      : ""
                  }`}
                >

                  <button
                    type="button"
                    className="nav-dd-btn"
                    aria-expanded={
                      openDropdown === item.label
                    }
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label
                          ? null
                          : item.label
                      )
                    }
                  >

                    {item.label}

                    <FaChevronDown className="dropdown-caret" />

                  </button>

                  <ul className="nav-dd-panel">

                    {item.children.map((child) => (

                      <li key={child.path}>

                        <Link
                          to={child.path}
                          onClick={() =>
                            setOpenDropdown(null)
                          }
                        >
                          {child.label}
                        </Link>

                      </li>

                    ))}

                  </ul>

                </li>

              ) : (

                /* =================================================
                   NORMAL NAVIGATION ITEMS
                ================================================== */

                <li key={item.path}>

                  <Link
                    to={item.path}
                    onClick={() =>
                      setOpenDropdown(null)
                    }
                  >
                    {item.label}
                  </Link>

                </li>

              )

            ))}

          </ul>

          {/* =====================================================
              HAMBURGER
          ====================================================== */}

          <button
            className={`hamburger ${
              menuOpen ? "open" : ""
            }`}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
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

            {navItems.map((item) => (

              item.children ? (

                /* =================================================
                   MOBILE DROPDOWN
                ================================================== */

                <li
                  key={item.label}
                  className={`mobile-has-dropdown ${
                    openMobileMenu === item.label
                      ? "open"
                      : ""
                  }`}
                >

                  <button
                    type="button"
                    className="mobile-dropdown-toggle"
                    aria-expanded={
                      openMobileMenu === item.label
                    }
                    onClick={() =>
                      setOpenMobileMenu(
                        openMobileMenu === item.label
                          ? null
                          : item.label
                      )
                    }
                  >

                    {item.label}

                    <FaChevronDown className="dropdown-caret" />

                  </button>

                  <ul className="mobile-submenu">

                    {item.children.map((child) => (

                      <li key={child.path}>

                        <Link
                          to={child.path}
                          onClick={closeAll}
                        >
                          {child.label}
                        </Link>

                      </li>

                    ))}

                  </ul>

                </li>

              ) : (

                /* =================================================
                   NORMAL MOBILE NAVIGATION ITEMS
                ================================================== */

                <li key={item.path}>

                  <Link
                    to={item.path}
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>

                </li>

              )

            ))}

          </ul>

        </div>

      </nav>

      {/* =====================================================
          MICROSOFT CMT NOTICE
      ====================================================== */}

      {/*
      <p className="ag-lead">
        The Microsoft CMT service was used for managing the peer-reviewing
        process for this conference. This service was provided for free by
        Microsoft and they bore all expenses, including costs for Azure
        cloud services as well as for software development and support.
      </p>
      */}

    </header>
  );
}

export default Navbar;