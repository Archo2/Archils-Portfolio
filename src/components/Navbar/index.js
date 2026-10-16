import React, { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

function initialTheme() {
  const set = document.documentElement.getAttribute("data-theme");
  if (set === "dark" || set === "light") return set;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function Navbar() {
  const [theme, setTheme] = useState(initialTheme);
  const [active, setActive] = useState("");

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const ids = links.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* storage can be blocked; the toggle still works for this visit */
    }
  }, [theme]);

  const next = theme === "dark" ? "light" : "dark";

  return (
    <nav className="navbar">
      <a className="brand" href="#home">Archils Oburu</a>
      <ul className="link-group">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={active === l.href.slice(1) ? "active" : undefined} aria-current={active === l.href.slice(1) ? "true" : undefined}>{l.label}</a>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme(next)}
        aria-label={`Switch to ${next} mode`}
        title={`Switch to ${next} mode`}
      >
        <i className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"} aria-hidden="true"></i>
      </button>
    </nav>
  );
}

export default Navbar;
