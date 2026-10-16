import React from "react";

const paths = {
  "Networking and payments": (
    <g fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
      <path d="M130 95a100 100 0 0 1 140 0" />
      <path d="M157 121a62 62 0 0 1 86 0" />
      <path d="M183 147a25 25 0 0 1 34 0" />
      <circle cx="200" cy="168" r="6" fill="currentColor" />
    </g>
  ),
  "Cloud and security": (
    <g fill="none" stroke="currentColor" strokeWidth="7" strokeLinejoin="round">
      <path d="M130 135h140a28 28 0 0 0 4-56 42 42 0 0 0-80-12 34 34 0 0 0-64 22 23 23 0 0 0 0 46z" />
    </g>
  ),
  "APIs and databases": (
    <g fill="none" stroke="currentColor" strokeWidth="7">
      <ellipse cx="200" cy="65" rx="55" ry="18" />
      <path d="M145 65v70c0 10 25 18 55 18s55-8 55-18V65" />
      <path d="M145 100c0 10 25 18 55 18s55-8 55-18" />
    </g>
  ),
};

const code = (
  <g fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M165 80l-45 40 45 40" />
    <path d="M235 80l45 40-45 40" />
    <path d="M215 70l-30 100" />
  </g>
);

function Art({ category }) {
  return (
    <svg className="project-art" viewBox="0 0 400 225" role="img" aria-label={`${category} illustration`}>
      {paths[category] || code}
    </svg>
  );
}

function Projects({ projectProps: p }) {
  return (
    <article className="project-card">
      {p.image ? (
        <img className="project-img" src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
      ) : (
        <Art category={p.category} />
      )}
      <div className="project-body">
        <p className="eyebrow">
          {p.category}
          {p.featured && <span className="featured">Featured</span>}
        </p>
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
          {p.admin && (
            <a href={p.admin} target="_blank" rel="noopener noreferrer">
              Admin dashboard (login required)
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Projects;
