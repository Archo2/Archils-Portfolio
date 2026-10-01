import React from "react";
import resume from "../../utils/pdf/Archils_Oburu_Resume.pdf";
import { contact } from "../../utils/profile";

function Footer() {
  const icons = [
    { name: "fa fa-envelope", label: "Email", link: `mailto:${contact.email}` },
    { name: "fab fa-linkedin", label: "LinkedIn", link: contact.linkedin },
    { name: "fab fa-github", label: "GitHub", link: contact.github },
    { name: "fas fa-file-pdf", label: "Resume", link: resume },
  ];
  return (
    <footer className="footer">
      <div className="footer-icons">
        {icons.map((icon) => (
          <a href={icon.link} key={icon.label} aria-label={icon.label} target="_blank" rel="noopener noreferrer">
            <i className={icon.name} aria-hidden="true"></i>
          </a>
        ))}
      </div>
      <p>&copy; {new Date().getFullYear()} Archils Oburu</p>
    </footer>
  );
}

export default Footer;
