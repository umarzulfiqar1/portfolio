import type { Social, ProjectLink } from "@/content/profile";
import {
  FaGithub,
  FaLinkedin,
  FaGoogleScholar,
  FaKaggle,
  FaXTwitter,
  FaOrcid,
  FaMedium,
} from "react-icons/fa6";
import {
  FiMail,
  FiGlobe,
  FiExternalLink,
  FiFileText,
  FiPlayCircle,
  FiDatabase,
} from "react-icons/fi";

const socialMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  scholar: FaGoogleScholar,
  kaggle: FaKaggle,
  x: FaXTwitter,
  orcid: FaOrcid,
  medium: FaMedium,
  email: FiMail,
  website: FiGlobe,
} as const;

const linkMap = {
  github: FaGithub,
  website: FiExternalLink,
  paper: FiFileText,
  demo: FiPlayCircle,
  data: FiDatabase,
} as const;

export function SocialIcon({ name, size = 16 }: { name: Social["icon"]; size?: number }) {
  const Cmp = socialMap[name] ?? FiGlobe;
  return <Cmp size={size} aria-hidden />;
}

export function LinkIcon({ name, size = 15 }: { name: ProjectLink["icon"]; size?: number }) {
  const Cmp = linkMap[name] ?? FiExternalLink;
  return <Cmp size={size} aria-hidden />;
}
