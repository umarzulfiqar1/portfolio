import { profile } from "@/content/profile";
import Reveal from "@/components/Reveal";

export default function Publications() {
  if (!profile.publications.length) return null;

  return (
    <section className="section" id="publications">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Research</span>
            <h2 className="section-title">Publications &amp; writing</h2>
            <p className="section-sub">Peer-reviewed work and technical write-ups.</p>
          </div>
        </Reveal>

        <div className="pubs">
          {profile.publications.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 60}>
              <a
                className="pub"
                href={pub.href ?? "#"}
                target={pub.href?.startsWith("http") ? "_blank" : undefined}
                rel={pub.href?.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="pub-year mono">{pub.year}</span>
                <span>
                  <span className="pub-title">{pub.title}</span>
                  <span className="pub-venue" style={{ display: "block" }}>
                    {pub.venue}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
