import React from "react";
import { experience, education, certifications } from "../../utils/profile";

function EducationAndExperience() {
  return (
    <>
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline-item" key={job.title + job.company}>
              <div className="timeline-head">
                <h3>{job.title}</h3>
                <span className="dates">{job.dates}</span>
              </div>
              <p className="org">
                {job.company} · {job.location}
              </p>
              <ul>
                {job.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section id="education" className="section two-col">
        <div>
          <h2 className="section-title">Education</h2>
          {education.map((ed) => (
            <div className="edu" key={ed.title}>
              <h3>{ed.title}</h3>
              <p className="org">{ed.school}</p>
              <p className="dates">{ed.dates}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="section-title">Certifications</h2>
          <ul className="cert-list">
            {certifications.map((c) => (
              <li key={c.name}>
                <span>{c.name}</span>
                <span className={c.detail === "In progress" ? "badge" : "cert-detail"}>{c.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default EducationAndExperience;
