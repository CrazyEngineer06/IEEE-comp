import "./Home.css";
import { Hero } from "../../Components/Hero";
import { motion } from "framer-motion";
import { Calendar, Users, Award, BookOpen } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Important Dates",
    description:
      "Mark your calendar for submission deadlines and conference dates",
  },
  {
    icon: Users,
    title: "Expert Speakers",
    description:
      "Learn from renowned researchers and industry leaders",
  },
  {
    icon: Award,
    title: "Publication",
    description:
      "Get your work published in IEEE digital library",
  },
  {
    icon: BookOpen,
    title: "Technical Sessions",
    description:
      "Participate in cutting-edge research presentations",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />

      {/* FEATURES */}
      <section className="features-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <h2 style={{paddingRight:"30px"}}>Why Attend?</h2>
            <div className="underline" />
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="feature-icon">
                    <Icon size={30} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="container about-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>About the Conference</h2>
            <p>
              The International Conference on Quantum Informatics, Communication Systems and Applications is a global platform focused on advancements in quantum information science and modern communication technologies. It brings together researchers, academicians, industry experts, and students to share innovative research and emerging trends.
            </p>

            <p>
              Hosted by the Army Institute of Technology, this conference
              provides a platform for knowledge exchange and networking among
              the global research community.
            </p>

            <a href="/about" className="btn-primary">
              Learn More
            </a>
          </motion.div>

          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?auto=format&fit=crop&w=1080&q=80"
              alt="conference"
            />
            <div className="image-border" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2>Ready to Join Us?</h2>
          <p>
            Submit your research paper or register for the conference to be part
            of this event.
          </p>

          <div className="cta-buttons">
            <a href="/papers" className="btn-light">
              Submit Paper
            </a>
            <a href="/registration" className="btn-dark">
              Register Now
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}