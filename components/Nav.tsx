"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ initials }: { initials: string }) {
  const [stuck, setStuck] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as "dark" | "light" | null) ?? null;
    const initial =
      stored ?? (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    setTheme(initial);
  }, []);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id).filter((id) => document.getElementById(id));
    if (!ids.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <header className={`nav${stuck ? " is-stuck" : ""}`}>
        <div className="container nav-inner">
          <a className="brand" href="#top" aria-label="Back to top">
            <span className="brand-mark" aria-hidden>
              {initials}
            </span>
          </a>

          <nav className="nav-links" aria-label="Section navigation">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`nav-link${active === l.id ? " is-active" : ""}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              type="button"
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              title="Toggle theme"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
            <a className="btn btn-primary nav-cta" href="#contact">
              Get in touch
            </a>
            <button
              type="button"
              className="icon-btn nav-toggle"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${open ? " is-open" : ""}`} hidden={!open}>
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="mobile-link"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a className="btn btn-primary" href="#contact" onClick={() => setOpen(false)}>
          Get in touch
        </a>
      </div>
    </>
  );
}
