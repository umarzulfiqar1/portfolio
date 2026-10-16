import { profile } from "@/content/profile";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Career</span>
            <h2 className="section-title">Experience</h2>
            <p className="section-sub">
              Where I&apos;ve worked, what I owned, and what changed because of it.
            </p>
          </div>
        </Reveal>

        <div className="timeline">
          {profile.experience.map((job, i) => (
            <Reveal key={`${job.role}-${job.company}`} delay={i * 70}>
              <div className="tl-item">
                <span className="tl-dot" aria-hidden />
                <div className="tl-top">
                  <span className="tl-role">{job.role}</span>
                  <span className="tl-company">
                    {job.company}
                    {job.location ? ` · ${job.location}` : ""}
                  </span>
                  <span className="tl-period mono">{job.period}</span>
                </div>
                <ul className="tl-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {profile.education.length ? (
          <Reveal delay={120}>
            <div className="edu-grid">
              {profile.education.map((ed) => (
                <div className="edu" key={`${ed.degree}-${ed.school}`}>
                  <div className="edu-degree">{ed.degree}</div>
                  <div className="edu-school">{ed.school}</div>
                  <div className="edu-period mono">{ed.period}</div>
                </div>
              ))}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
