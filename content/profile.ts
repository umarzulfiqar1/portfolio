/**
 * ─────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR YOUR PORTFOLIO
 * ─────────────────────────────────────────────────────────────
 *  Edit this one file to update the entire site.
 *  Every value marked with  // TODO  is a placeholder — replace it.
 */

export type Social = {
  label: string;
  href: string;
  /** One of: github | linkedin | scholar | kaggle | x | email | orcid | medium | website */
  icon: "github" | "linkedin" | "scholar" | "kaggle" | "x" | "email" | "orcid" | "medium" | "website";
};

export type ProjectLink = {
  label: string;
  href: string;
  icon: "github" | "website" | "paper" | "demo" | "data";
};

export type Project = {
  title: string;
  year: string;
  summary: string;
  tags: string[];
  metrics?: { value: string; label: string }[];
  links: ProjectLink[];
  featured?: boolean;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  href?: string;
};

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export const profile = {
  // ── Identity ────────────────────────────────────────────────
  name: "Umar 1", // TODO: your full name
  initials: "U", // TODO: 1–2 letters shown in the nav badge
  roles: [
    "Machine Learning Engineer",
    "Data Scientist",
    "AI Researcher",
  ],
  headline: "I build machine learning systems that make it out of the notebook and into production.",
  location: "Remote", // TODO: e.g. "London, UK"
  availability: "Open to ML / Data Science roles", // TODO: or remove
  email: "hello@example.com", // TODO: your real email
  resumeUrl: "", // TODO: e.g. "/resume.pdf" (drop the file in /public) — leave "" to hide the button

  socials: [
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/", icon: "linkedin" },
    { label: "Google Scholar", href: "https://scholar.google.com/", icon: "scholar" },
    { label: "Kaggle", href: "https://kaggle.com/", icon: "kaggle" },
  ] as Social[],

  // ── Hero metrics ────────────────────────────────────────────
  stats: [
    { value: "5+", label: "Years shipping ML" },
    { value: "20+", label: "Models in production" },
    { value: "3", label: "Peer-reviewed papers" },
    { value: "1.2B", label: "Rows processed" },
  ],

  // ── About ───────────────────────────────────────────────────
  about: [
    "I'm a machine learning engineer who cares about the unglamorous half of AI — reliable data pipelines, honest evaluation, and models that keep working after launch. I've taken systems from a research prototype to serving millions of requests.",
    "My work spans natural language processing, recommendation and ranking, and large-scale data engineering. I like problems where the metric is real: revenue moved, latency cut, or a decision made cheaper and faster.",
    "Outside of work I write about evaluation, contribute to open-source tooling, and mentor people breaking into data careers.",
  ],
  facts: [
    { label: "Focus", value: "NLP · Ranking · MLOps" },
    { label: "Stack", value: "Python · PyTorch · SQL" },
    { label: "Cloud", value: "AWS · GCP" },
    { label: "Currently", value: "Building RAG systems" }, // TODO
  ],

  // ── Skills ──────────────────────────────────────────────────
  skillGroups: [
    {
      title: "Languages",
      items: ["Python", "SQL", "TypeScript", "Bash", "R"],
    },
    {
      title: "Machine Learning",
      items: ["PyTorch", "scikit-learn", "XGBoost", "Hugging Face", "Transformers", "Ray"],
    },
    {
      title: "Data & MLOps",
      items: ["Airflow", "dbt", "Spark", "Snowflake", "Docker", "Kubernetes", "MLflow", "Weights & Biases"],
    },
    {
      title: "Analytics & Apps",
      items: ["Pandas", "Polars", "Pydantic", "FastAPI", "Next.js", "Plotly"],
    },
  ],

  // ── Projects ────────────────────────────────────────────────
  projects: [
    {
      title: "Retrieval-Augmented Knowledge Assistant",
      year: "2025",
      featured: true,
      summary:
        "Production RAG service over 4M internal documents. Hybrid BM25 + dense retrieval, cross-encoder reranking, and grounded citations with an evaluation harness that gates every deploy.",
      tags: ["RAG", "Transformers", "FAISS", "FastAPI", "Evaluation"],
      metrics: [
        { value: "-38%", label: "Hallucination rate" },
        { value: "p95 240ms", label: "Latency" },
      ],
      links: [
        { label: "Case study", href: "#", icon: "website" },
        { label: "Code", href: "#", icon: "github" },
      ],
    },
    {
      title: "Churn & Lifetime-Value Ranking Engine",
      year: "2024",
      featured: true,
      summary:
        "Gradient-boosted ranking model that prioritises retention outreach. Survived a 6-week A/B test and became the default for the growth team.",
      tags: ["XGBoost", "Ranking", "A/B Testing", "Feature Store"],
      metrics: [
        { value: "+14%", label: "Retention lift" },
        { value: "$2.1M", label: "ARR protected" },
      ],
      links: [{ label: "Write-up", href: "#", icon: "paper" }],
    },
    {
      title: "Real-Time Anomaly Detection on Streaming Telemetry",
      year: "2024",
      summary:
        "Unsupervised detector over 80k events/sec using online statistical models and a streaming feature pipeline, with automatic alert de-duplication.",
      tags: ["Streaming", "Kafka", "Unsupervised", "Kubernetes"],
      links: [{ label: "Code", href: "#", icon: "github" }],
    },
    {
      title: "Open-Source Evaluation Toolkit",
      year: "2023",
      summary:
        "A small library for reproducible LLM evaluation: dataset versioning, deterministic scoring, and CI-friendly reports.",
      tags: ["Open Source", "LLM", "Python", "CI"],
      links: [
        { label: "GitHub", href: "#", icon: "github" },
        { label: "Docs", href: "#", icon: "website" },
      ],
    },
  ] as Project[],

  // ── Experience ──────────────────────────────────────────────
  experience: [
    {
      role: "Senior Machine Learning Engineer",
      company: "Company Name", // TODO
      period: "2023 — Present",
      location: "Remote",
      points: [
        "Led the migration of the recommendation stack to a feature-store-backed real-time architecture, cutting p99 latency by 61%.",
        "Built the offline/online evaluation framework now used by four product teams.",
        "Mentored three engineers and set the team's model-review standard.",
      ],
    },
    {
      role: "Data Scientist",
      company: "Previous Company", // TODO
      period: "2021 — 2023",
      location: "Hybrid",
      points: [
        "Shipped the churn-ranking model that protected $2.1M in ARR.",
        "Designed the experimentation review process adopted company-wide.",
      ],
    },
    {
      role: "Data Analyst",
      company: "Earlier Company", // TODO
      period: "2019 — 2021",
      points: [
        "Automated reporting that saved 20 analyst-hours per week.",
        "Built the first version of the company's customer segmentation.",
      ],
    },
  ] as Experience[],

  // ── Publications (delete the whole array to hide the section) ─
  publications: [
    {
      title: "Placeholder: Efficient Retrieval for Domain-Specific Question Answering",
      venue: "Conference / Journal name", // TODO
      year: "2024",
      href: "#",
    },
    {
      title: "Placeholder: Robust Evaluation of Ranking Models Under Distribution Shift",
      venue: "Workshop name", // TODO
      year: "2023",
      href: "#",
    },
  ] as Publication[],

  // ── Education ───────────────────────────────────────────────
  education: [
    {
      degree: "MSc, Machine Learning", // TODO
      school: "University Name",
      period: "2019 — 2021",
    },
    {
      degree: "BSc, Computer Science", // TODO
      school: "University Name",
      period: "2015 — 2019",
    },
  ] as Education[],

  // ── Contact copy ────────────────────────────────────────────
  contactTitle: "Let's build something that works in production.",
  contactText:
    "I'm open to machine learning and data science roles, consulting, and interesting collaborations. The fastest way to reach me is email.",
};

export type Profile = typeof profile;
