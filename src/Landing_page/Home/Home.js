import "./Home.css";
import { Hero } from "../../Components/Hero";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Award,
  BookOpen,
  MapPin,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


/* =========================================================
   COUNTDOWN
========================================================= */

function Countdown() {
  const targetDate = new Date("2027-09-24T00:00:00");

  const calculateTime = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    {
      value: time.days,
      label: "DAYS",
    },
    {
      value: time.hours,
      label: "HOURS",
    },
    {
      value: time.minutes,
      label: "MINUTES",
    },
    {
      value: time.seconds,
      label: "SECONDS",
    },
  ];

  return (
    <div className="countdown-container">

      {countdownItems.map((item, index) => (
        <div
          className="countdown-card"
          key={index}
        >
          <div className="countdown-number">
            {item.value}
          </div>

          <div className="countdown-label">
            {item.label}
          </div>
        </div>
      ))}

    </div>
  );
}


/* =========================================================
   FEATURES
========================================================= */

const features = [
  {
    icon: Calendar,
    title: "Important Dates",
    description:
      "Mark your calendar for paper submission, registration, and conference dates.",
  },
  {
    icon: Users,
    title: "Expert Speakers",
    description:
      "Interact with renowned researchers, academicians, and industry leaders.",
  },
  {
    icon: Award,
    title: "IEEE Publication",
    description:
      "Present your research and explore opportunities for IEEE digital library publication.",
  },
  {
    icon: BookOpen,
    title: "Technical Sessions",
    description:
      "Discover emerging research through technical sessions and presentations.",
  },
];


/* =========================================================
   CONFERENCE INFORMATION
========================================================= */

const conferenceInfo = [
  {
    icon: Calendar,
    title: "Conference Date",
    text: "24th & 25th September 2027",
  },
  {
    icon: MapPin,
    title: "Venue",
    text: "Army Institute of Technology, Pune",
  },
  {
    icon: FileText,
    title: "Paper Submission",
    text: "Submit your original research work",
  },
  {
    icon: Users,
    title: "Who Can Attend",
    text: "Researchers, Academicians, Students & Industry",
  },
];


/* =========================================================
   HOME
========================================================= */

export default function Home() {
  return (
    <div className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero />


      {/* =====================================================
          COMPACT CONFERENCE DATE + COUNTDOWN
      ===================================================== */}

      <section className="conference-date-section">

        <div className="conference-date-container">

          <motion.div
            className="date-heading"

            initial={{
              opacity: 0,
              x: -30,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.5,
            }}

            viewport={{
              once: true,
            }}
          >

            <span className="small-heading">
              CONFERENCE DATE
            </span>

            <h2>
              24th &amp; 25th September 2027
            </h2>

          </motion.div>


          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.5,
            }}

            viewport={{
              once: true,
            }}
          >
            <Countdown />
          </motion.div>

        </div>

      </section>


      {/* =====================================================
          CONFERENCE INFORMATION
      ===================================================== */}

      <section className="conference-info-section">

        <div className="container">

          <motion.div
            className="section-header"

            initial={{
              opacity: 0,
              y: 25,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
            }}

            viewport={{
              once: true,
            }}
          >

            <span className="section-tag">
              CONFERENCE AT A GLANCE
            </span>

            <h2>
              Everything You Need to Know
            </h2>

            <div className="underline" />

          </motion.div>


          <div className="conference-info-grid">

            {conferenceInfo.map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  className="info-card"
                  key={index}

                  initial={{
                    opacity: 0,
                    y: 25,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}

                  viewport={{
                    once: true,
                  }}
                >

                  <div className="info-icon">
                    <Icon size={26} />
                  </div>

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </div>

                </motion.div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY ATTEND
      ===================================================== */}

      <section className="features-section">

        <div className="container">

          <motion.div
            className="section-header"

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
            }}

            viewport={{
              once: true,
            }}
          >

            <span className="section-tag">
              WHY ATTEND
            </span>

            <h2>
              Be Part of the Conversation
            </h2>

            <div className="underline" />

            <p className="section-subtitle">
              Connect with the research community and
              explore the future of quantum informatics
              and communication technologies.
            </p>

          </motion.div>


          <div className="features-grid">

            {features.map((feature, index) => {

              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  className="feature-card"

                  initial={{
                    opacity: 0,
                    y: 30,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}

                  viewport={{
                    once: true,
                  }}
                >

                  <div className="feature-number">
                    0{index + 1}
                  </div>

                  <div className="feature-icon">
                    <Icon size={30} />
                  </div>

                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {feature.description}
                  </p>

                  <div className="card-line" />

                </motion.div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT SECTION
      ===================================================== */}

      <section className="about-section">

        <div className="container about-grid">

          <motion.div
            className="about-content"

            initial={{
              opacity: 0,
              x: -40,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.6,
            }}

            viewport={{
              once: true,
            }}
          >

            <span className="section-tag">
              ABOUT THE CONFERENCE
            </span>

            <h2>
              Shaping the Future of
              <span> Quantum Technology</span>
            </h2>

            <div className="about-divider" />

            <p>
              The International Conference on Quantum
              Informatics, Communication Systems and
              Applications is a global platform focused
              on advancements in quantum information
              science and modern communication
              technologies.
            </p>

            <p>
              Hosted by the Army Institute of Technology,
              the conference brings together researchers,
              academicians, industry professionals and
              students to exchange ideas, present
              innovative research and explore emerging
              technological trends.
            </p>

            <Link
              to="/about"
              className="btn-primary"
            >
              Explore Conference
              <span>→</span>
            </Link>

          </motion.div>


          <motion.div
            className="about-image-wrapper"

            initial={{
              opacity: 0,
              x: 40,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.6,
            }}

            viewport={{
              once: true,
            }}
          >

            <img
              src="https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?auto=format&fit=crop&w=1080&q=80"
              alt="Conference"
            />

            <div className="image-overlay" />

            <div className="about-image-caption">

              <strong>
                Army Institute of Technology
              </strong>

              <span>
                Pune, Maharashtra
              </span>

            </div>

            <div className="image-border" />

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          CONFERENCE HIGHLIGHT
      ===================================================== */}

      <section className="highlight-section">

        <div className="container">

          <motion.div
            className="highlight-box"

            initial={{
              opacity: 0,
              scale: 0.97,
            }}

            whileInView={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: 0.6,
            }}

            viewport={{
              once: true,
            }}
          >

            <div className="highlight-content">

              <span className="section-tag">
                JOIN THE CONFERENCE
              </span>

              <h2>
                Share Your Research.
                <br />
                Shape the Future.
              </h2>

              <p>
                Present your work, connect with experts,
                and become part of a global community
                advancing quantum informatics and
                communication systems.
              </p>

              <div className="highlight-buttons">

                <Link
                  to="/callForPapers"
                  className="btn-primary"
                >
                  Submit Your Paper
                  <span>→</span>
                </Link>

                <Link
                  to="/registration"
                  className="btn-outline"
                >
                  Register Now
                </Link>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="cta-section">

        <motion.div
          className="cta-content"

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.6,
          }}

          viewport={{
            once: true,
          }}
        >

          <span className="section-tag">
            BE A PART OF IT
          </span>

          <h2>
            Ready to Join Us?
          </h2>

          <p>
            Submit your research paper or register
            for the conference and be part of this
            exciting academic gathering.
          </p>

          <div className="cta-buttons">

            <Link
              to="/callForPapers"
              className="btn-light"
            >
              Submit Paper
            </Link>

            <Link
              to="/registration"
              className="btn-dark"
            >
              Register Now
            </Link>

          </div>

        </motion.div>

      </section>

    </div>
  );
}