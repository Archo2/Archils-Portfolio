import React from "react";
import projects from "../../utils/project.js";
import Projects from "../Projects";

function Portfolio() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <Projects key={p._id} projectProps={p} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
