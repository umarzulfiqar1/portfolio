import { profile } from "@/content/profile";
import Reveal from "@/components/Reveal";
import { LinkIcon } from "@/components/Icons";

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title">Projects with receipts</h2>
            <p className="section-sub">
              A few systems I designed, shipped, and measured — not just notebooks.
            </p>
          </div>
        </Reveal>

        <div className="project-grid">
          {profile.projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 70}>
              <article className={`project${project.featured ? " featured" : ""}`}>
                <div className="project-top">
                  <span className="chip chip-accent">
                    {project.featured ? "Featured" : "Project"}
                  </span>
                  <span className="project-year mono">{project.year}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.summary}</p>

                {project.metrics?.length ? (
                  <div className="project-metrics">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="metric-val grad-text">{m.value}</div>
                        <div className="metric-label">{m.label}</div>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links.length ? (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        <LinkIcon name={link.icon} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
