import React from "react";

function Projects({ projectProps: p }) {
  return (
    <article className="project-card">
      <div className="project-body">
        <p className="eyebrow">{p.category}</p>
        <h3>{p.title}</h3>
        <p>{p.about}</p>
        <ul className="tags small">
          {p.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="project-links">
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          )}
          {p.deploy && (
            <a href={p.deploy} target="_blank" rel="noopener noreferrer">
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Projects;
