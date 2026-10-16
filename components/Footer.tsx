import { profile } from "@/content/profile";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </span>
        <a className="to-top" href="#top">
          Back to top
          <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
