import React from "react";
import { contact } from "../../utils/profile";
import resume from "../../utils/pdf/Archils_Oburu_Resume.pdf";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Contact</h2>
      <p>Open to IT support, technical support and cybersecurity opportunities. The quickest way to reach me is email or LinkedIn.</p>
      <div className="contact-links">
        <a className="btn primary" href={`mailto:${contact.email}`}>
          <i className="fa fa-envelope" aria-hidden="true"></i> {contact.email}
        </a>
        <a className="btn" href={resume} download="Archils_Oburu_Resume.pdf">
          <i className="fas fa-file-download" aria-hidden="true"></i> Download resume (PDF)
        </a>
        <a className="btn" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" aria-hidden="true"></i> LinkedIn
        </a>
        <a className="btn" href={contact.github} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" aria-hidden="true"></i> GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
