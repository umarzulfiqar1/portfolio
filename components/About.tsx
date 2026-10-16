import { profile } from "@/content/profile";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">About</span>
            <h2 className="section-title">
              A pragmatist&apos;s take on <span className="grad-text">machine learning</span>
            </h2>
            <p className="section-sub">
              Research-minded, production-obsessed. I care about outcomes you can measure.
            </p>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div className="about-text">
              {profile.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="facts">
              {profile.facts.map((f) => (
                <div className="fact" key={f.label}>
                  <span className="fact-label">{f.label}</span>
                  <span className="fact-val">{f.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
