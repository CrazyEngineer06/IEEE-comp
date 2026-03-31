import { motion } from "framer-motion";
import "./Registration.css";

const registrationRows = [
  {
    category: "Academicians / Students",
    earlyIEEE:    "Rs. 6,000",
    earlyNonIEEE: "Rs. 6,500",
    afterIEEE:    "Rs. 6,500",
    afterNonIEEE: "Rs. 7,000",
  },
  {
    category: "Industry Persons",
    earlyIEEE:    "Rs. 7,000",
    earlyNonIEEE: "Rs. 7,500",
    afterIEEE:    "Rs. 7,500",
    afterNonIEEE: "Rs. 8,000",
  },
  {
    category: "Foreign Authors",
    earlyIEEE:    "$100 (USD)",
    earlyNonIEEE: "$120 (USD)",
    afterIEEE:    "$105 (USD)",
    afterNonIEEE: "$125 (USD)",
  },
  {
    category: "Conference Attendee",
    earlyIEEE:    "Rs. 1,500",
    earlyNonIEEE: "Rs. 1,800",
    afterIEEE:    "Rs. 2,000",
    afterNonIEEE: "Rs. 2,500",
  },
  {
    category: "Extra Page Charges per Page",
    earlyIEEE:    "Rs. 800",
    earlyNonIEEE: "Rs. 1,000",
    afterIEEE:    "Rs. 800",
    afterNonIEEE: "Rs. 1,000",
  },
];

export default function Registration() {
  return (
    <div className="registration-page">

      {/* Header */}
      <section className="registration-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1>Registration</h1>
          <div className="divider" />
          <p>Secure your spot at the premier international conference</p>
        </motion.div>
      </section>

      {/* Notice */}
      

      {/* Fees TABLE */}
      <section className="registration-fees">
        {/* <div className="section-header">
          
          <div className="divider" />
          <p>Choose the category that applies to you</p>
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="fee-table-scroll"
        >
          <table className="fee-table">
            <thead>
              {/* Row 1: top-level group headers */}
              <tr>
                <th className="fee-table__label-col" rowSpan={3}>
                  Registration Category
                </th>
                <th className="fee-table__group-head" colSpan={2}>
                  Early Bird Registration
                  <br />
                  <span className="fee-table__group-date">Before 10<sup>th</sup> July 2027</span>
                </th>
                <th className="fee-table__group-head fee-table__group-head--alt" colSpan={2}>
                  Registration After 1st August 2027
                </th>
              </tr>

              {/* Row 2: IEEE / Non-IEEE sub-headers */}
              <tr>
                <th className="fee-table__sub-head">IEEE Member</th>
                <th className="fee-table__sub-head fee-table__sub-head--highlight">Non IEEE Member</th>
                <th className="fee-table__sub-head fee-table__sub-head--alt">IEEE Member</th>
                <th className="fee-table__sub-head fee-table__sub-head--alt-highlight">Non IEEE Member</th>
              </tr>
            </thead>

            <tbody>
              {registrationRows.map((row, i) => (
                <tr key={i} className="fee-table__row">
                  <td className="fee-table__feature">{row.category}</td>
                  <td className="fee-table__cell">{row.earlyIEEE}</td>
                  <td className="fee-table__cell fee-table__cell--highlight">{row.earlyNonIEEE}</td>
                  <td className="fee-table__cell fee-table__cell--alt">{row.afterIEEE}</td>
                  <td className="fee-table__cell fee-table__cell--alt-highlight">{row.afterNonIEEE}</td>
                </tr>
              ))}

              {/* Register buttons row */}
              <tr className="fee-table__btn-row">
                <td></td>
                <td className="fee-table__cell">
                  <button className="register-btn">Register Now</button>
                </td>
                <td className="fee-table__cell fee-table__cell--highlight">
                  <button className="register-btn">Register Now</button>
                </td>
                <td className="fee-table__cell fee-table__cell--alt">
                  <button className="register-btn">Register Now</button>
                </td>
                <td className="fee-table__cell fee-table__cell--alt-highlight">
                  <button className="register-btn ">Register Now</button>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="registration-cta">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cta-box"
        >
          <h2>Ready to Register?</h2>
          <p>Complete your registration in just a few simple steps</p>
          <div className="cta-actions">
            <button className="primary-btn">Register Online</button>
            <button className="secondary-btn">Download Form</button>
          </div>
          <small>Questions? Contact us at hodcomp@aitpune.edu.in</small>
        </motion.div>
      </section>

    </div>
  );
}