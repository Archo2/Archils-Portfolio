import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import EducationAndExperience from "./components/EducationAndExperience";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Gentle fade-and-rise as blocks scroll into view. Anything already on screen,
// and every block when the visitor prefers reduced motion, is left untouched.
function useRevealOnScroll() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const vh = window.innerHeight;
    const els = Array.from(
      document.querySelectorAll(".section > *, .timeline-item, .skill-card, .project-card, .quote, .edu")
    ).filter((el) => el.getBoundingClientRect().top > vh * 0.9);
    els.forEach((el) => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function App() {
  useRevealOnScroll();
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <EducationAndExperience />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
