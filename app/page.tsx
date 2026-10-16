import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { profile } from "@/content/profile";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      <Nav initials={profile.initials} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
