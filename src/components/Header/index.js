import React from "react";
import me from "../../Assets/images/Archo-linkedin.jpg";
import resume from "../../utils/pdf/Archils_Oburu_Resume.pdf";
import { contact, availability, stats } from "../../utils/profile";

function Header() {
  return (
    <header id="home" className="hero">
      <div className="hero-main">
        <img src={me} className="hero-img" alt="Archils Oburu" width="200" height="200" />
        <div className="hero-text">
          <p className="availability">
            <span className="dot" aria-hidden="true"></span>
            {availability}
          </p>
          <h1 className="hero-name">{contact.name}</h1>
          <p className="hero-headline">{contact.headline}</p>
          <p className="hero-pitch">
            I resolve escalated technical issues, document the fixes so they stay fixed, and bring
            cloud, security and full-stack skills to every support problem.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href={resume} target="_blank" rel="noopener noreferrer">
              Download resume
            </a>
            <a className="btn" href={`mailto:${contact.email}`}>
              Email me
            </a>
            <a className="btn" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="btn" href={contact.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <ul className="stat-row">
        {stats.map((s) => (
          <li key={s.value}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
