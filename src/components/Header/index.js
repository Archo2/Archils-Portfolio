import React from "react";
import me from "../../Assets/images/Archo.jpg";
import resume from "../../utils/pdf/Archils_Oburu_Resume.pdf";
import { contact } from "../../utils/profile";

function Header() {
  return (
    <header id="home" className="hero">
      <img src={me} className="hero-img" alt="Archils Oburu" />
      <div className="hero-text">
        <p className="eyebrow">{contact.location}</p>
        <h1 className="hero-name">{contact.name}</h1>
        <p className="hero-headline">{contact.headline}</p>
        <div className="hero-actions">
          <a className="btn primary" href={resume} target="_blank" rel="noopener noreferrer">
            Download resume
          </a>
          <a className="btn" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="btn" href={contact.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
