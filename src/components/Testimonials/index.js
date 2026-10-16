import React from "react";
import { workplaces, testimonials } from "../../utils/profile";

function Wrap({ placeholder, children }) {
  return placeholder ? <span className="placeholder">[Placeholder: {children}]</span> : children;
}

function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <h2 className="section-title">Testimonials</h2>

      <h3 className="subhead">Where I have worked</h3>
      <ul className="logo-row">
        {workplaces.map((w) => (
          <li key={w.name}>
            {w.logo ? <img src={w.logo} alt={w.name} /> : w.name}
          </li>
        ))}
      </ul>

      <h3 className="subhead">What people say about working with me</h3>
      <div className="quote-grid">
        {testimonials.map((t, i) => (
          <figure className="quote" key={i}>
            <blockquote>
              <Wrap placeholder={t.placeholder}>{t.quote}</Wrap>
            </blockquote>
            <figcaption>
              <strong>
                <Wrap placeholder={t.placeholder}>{t.name}</Wrap>
              </strong>
              <br />
              <Wrap placeholder={t.placeholder}>{t.role}</Wrap>
              {t.context && (
                <>
                  <br />
                  <span className="quote-context">{t.context}</span>
                </>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="fine-print">Recommendations received on LinkedIn.</p>
    </section>
  );
}

export default Testimonials;
