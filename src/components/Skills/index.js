import React from "react";
import { skills } from "../../utils/profile";

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-card" key={s.group}>
            <h3>{s.group}</h3>
            <ul className="tags">
              {s.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
