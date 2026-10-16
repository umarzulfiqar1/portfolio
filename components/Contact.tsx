import { profile } from "@/content/profile";
import Reveal from "@/components/Reveal";
import { SocialIcon } from "@/components/Icons";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <span className="eyebrow">Contact</span>
            <h2 className="contact-title" style={{ marginTop: 12 }}>
              {profile.contactTitle}
            </h2>
            <p className="contact-text">{profile.contactText}</p>

            <div className="contact-links">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <FiMail />
                {profile.email}
              </a>
              {profile.resumeUrl ? (
                <a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  Download résumé
                </a>
              ) : null}
            </div>

            {profile.socials.length ? (
              <div className="social-row">
                {profile.socials.map((s) => (
                  <a
                    key={s.label}
                    className="social-link"
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <SocialIcon name={s.icon} />
                    {s.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
