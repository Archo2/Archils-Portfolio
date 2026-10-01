import React from "react";
import { summary } from "../../utils/profile";

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <div className="about-text">
        {summary.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

export default About;
