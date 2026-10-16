"use client";

import { useEffect, useState } from "react";
import { FiArrowUpRight, FiDownload, FiMapPin } from "react-icons/fi";
import { profile } from "@/content/profile";
import NodeField from "@/components/NodeField";

export default function Hero() {
  const roles = profile.roles;
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(roles[0]);
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = roles[roleIndex % roles.length];
      setText(word.slice(0, charIndex));

      if (!deleting && charIndex < word.length) {
        charIndex += 1;
        timer = setTimeout(tick, 52 + Math.random() * 45);
      } else if (!deleting) {
        deleting = true;
        timer = setTimeout(tick, 1700);
      } else if (charIndex > 0) {
        charIndex -= 1;
        timer = setTimeout(tick, 26);
      } else {
        deleting = false;
        roleIndex += 1;
        timer = setTimeout(tick, 300);
      }
    };

    timer = setTimeout(tick, 700);
    return () => clearTimeout(timer);
  }, [roles]);

  return (
    <section className="hero" id="top">
      <NodeField />

      <div className="container">
        <div className="hero-grid">
          <div>
            {profile.availability ? (
              <span className="badge">
                <span className="pulse" aria-hidden />
                {profile.availability}
              </span>
            ) : null}

            <h1 className="hero-title">
              {profile.name}
              <br />
              <span className="grad-text">builds AI that ships.</span>
            </h1>

            <p className="hero-roles" aria-live="polite">
              <span className="typed">{text}</span>
              <span className="caret" aria-hidden />
            </p>

            <p className="hero-sub">{profile.headline}</p>

            <div className="hero-cta">
              <a className="btn btn-primary" href="#work">
                View selected work
                <FiArrowUpRight />
              </a>
              {profile.resumeUrl ? (
                <a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  <FiDownload />
                  Résumé
                </a>
              ) : null}
              <a className="btn btn-ghost" href="#contact">
                Contact
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <FiMapPin />
                {profile.location}
              </span>
              <span>
                <span className="pulse" aria-hidden />
                Available for new work
              </span>
            </div>
          </div>

          <div className="portrait" aria-hidden>
            <span className="portrait-initials grad-text">{profile.initials}</span>
          </div>
        </div>

        <div className="stats">
          {profile.stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-val">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
