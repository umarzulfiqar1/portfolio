import { profile } from "@/content/profile";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Toolkit</span>
            <h2 className="section-title">Skills &amp; stack</h2>
            <p className="section-sub">
              The tools I reach for when turning a messy dataset into a dependable service.
            </p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {profile.skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className="skill-card">
                <div className="skill-title">{group.title}</div>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
