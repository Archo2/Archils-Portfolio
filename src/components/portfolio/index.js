import React, { useState } from "react";
import projects from "../../utils/project.js";
import Projects from "../Projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

function Portfolio() {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="filter-row" role="group" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className={c === filter ? "chip active" : "chip"}
            aria-pressed={c === filter}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {shown.map((p) => (
          <Projects key={p._id} projectProps={p} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
