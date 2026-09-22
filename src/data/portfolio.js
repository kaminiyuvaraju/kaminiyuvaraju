// All site content lives here — edit this file to update the portfolio.

export const profile = {
  name: "Kamini Yuvaraju",
  role: "Backend Engineer",
  tagline:
    "I build fast, reliable backends and multi-agent AI systems with Python, FastAPI, PostgreSQL, Redis and GraphQL.",
  location: "Hyderabad, IN",
  email: "kaminiyuvaraju@gmail.com",
  phone: "+91 6305763683",
  resume: "/Kamini-Resume.pdf",
  available: "Software Engineer @ Achala IT Solutions",
};

export const socials = {
  github: "https://github.com/kaminiyuvaraju",
  linkedin: "https://www.linkedin.com/in/kamini-yuvaraju/",
  instagram: "https://instagram.com/kaminiyuvaraju",
  whatsapp: "https://wa.me/916305763683",
  hackerrank: "https://www.hackerrank.com/profile/kaminiyuvaraju",
  leetcode: "https://leetcode.com/u/KAMINIYUVARAJU/",
  gfg: "https://www.geeksforgeeks.org/user/kaminiyuvaraju/",
};

export const stats = [
  { value: "2+", label: "Years building backends" },
  { value: "5", label: "Brands running PEP live" },
  { value: "~30%", label: "API latency cut" },
  { value: "85%+", label: "Queries resolved by REVA" },
];

export const about = [
  "I'm a Backend Engineer with 2+ years of hands-on experience across internship and full-time roles, specialising in Python, FastAPI, PostgreSQL, Redis, Docker and GraphQL.",
  "I've built and shipped production systems on my own, including PEP, a multi-tenant SaaS platform with RBAC now live across five healthcare and wellness brands, and REVA, an 8-agent RAG / NL-to-SQL chatbot that resolves 85%+ of queries without help.",
  "In production I've delivered a ~30% cut in API latency and ~40% less database query load. I also qualified GATE 2025 in Data Science & AI.",
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Achala IT Solutions",
    period: "Jun 2025 – Present",
    location: "Hyderabad",
    points: [
      "Engineered REST APIs and GraphQL services (FastAPI + Strawberry) with full async execution, cutting average API response latency by ~30% across all production endpoints.",
      "Reduced DB query load by ~40% via Redis caching and cursor-based pagination with zero regressions post-rollout; designed multi-database schemas (PostgreSQL + MongoDB) with Alembic migrations for zero-breaking-change deployments.",
      "Architected async background pipelines using Celery + Redis and implemented an API versioning strategy supporting ongoing releases without downtime.",
    ],
    tags: ["FastAPI", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "Celery", "Alembic"],
  },
  {
    role: "Technical Intern",
    company: "Maang Technologies Pvt. Ltd.",
    period: "Nov 2023 – Nov 2024",
    location: "Remote",
    points: [
      "Owned end-to-end delivery of production FastAPI backend services: schema design, API routing, Pydantic v2 validation, PostgreSQL integration and data-flow wiring to the React frontend.",
      "Designed and shipped RESTful APIs consumed directly by the production frontend, managing features from requirements through deployment.",
      "Engineered an IPL Score Prediction model (Random Forest + feature engineering) with 92% accuracy, served as a live ML inference endpoint.",
    ],
    tags: ["FastAPI", "Pydantic v2", "PostgreSQL", "React", "scikit-learn"],
  },
];

export const projects = [
  {
    title: "PEP: Patient Engagement Platform",
    subtitle: "Multi-tenant SaaS",
    live: true,
    description:
      "A live multi-tenant SaaS platform I built and own end-to-end, adopted by AIG Hospitals, GVK Health Hub, BMS Fit Club, Sparsh Hospitals and Hosmat Hospitals.",
    points: [
      "Configurable, tenant-specific RBAC for staff permissions",
      "Concurrency-safe booking logic that prevents double-booking under simultaneous multi-tenant traffic",
      "GraphQL schema and resolvers for low-overhead access across patient, appointment and staff entities",
    ],
    tags: ["FastAPI", "GraphQL", "MongoDB", "JWT", "RBAC", "AsyncIO", "Docker"],
    link: null,
  },
  {
    title: "REVA: Multi-Agent RAG Chatbot",
    subtitle: "Real estate",
    live: false,
    description:
      "An 8-agent orchestration pipeline (Classifier → Intent Router → SQL Generator → Executor → Cache → Synthesizer) whose NL-to-SQL resolves 85%+ of queries without fallback.",
    points: [
      "Hybrid retrieval: vector search for ambiguous input, prompt-engineered NL-to-SQL for structured queries",
      "Production FastAPI service with async execution, Redis query caching and JWT auth",
      "Scalable agent routing for real-world property search load",
    ],
    tags: ["LangChain", "RAG", "NL-to-SQL", "Vector DB", "FastAPI", "PostgreSQL"],
    link: null,
  },
];

export const otherProjects = [
  {
    title: "IPL Score & Win Predictor",
    description: "Real-time score and win probability prediction with regression models behind a Flask API.",
    tags: ["Python", "scikit-learn", "Flask"],
    link: "https://github.com/kaminiyuvaraju/IPL_Score_And_Win_Probability_Predictor",
  },
  {
    title: "Rice Crop Disease Detection",
    description: "ResNet-50 model served with Flask that detects four major rice leaf diseases.",
    tags: ["Deep Learning", "ResNet-50", "Flask"],
    link: "https://github.com/kaminiyuvaraju/Rice_Crop_Disease_Detection",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "SQL", "TypeScript"] },
  {
    group: "Backend",
    items: ["FastAPI", "REST APIs", "GraphQL (Strawberry)", "AsyncIO", "Pydantic v2", "Celery"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "Redis", "MongoDB", "SQLAlchemy 2 (async)", "Alembic", "asyncpg"],
  },
  {
    group: "AI / LLM",
    items: [
      "RAG Pipelines",
      "LangChain",
      "Vector Databases",
      "Multi-Agent Orchestration",
      "NL-to-SQL",
      "Prompt Engineering",
      "Embeddings",
    ],
  },
  { group: "DevOps", items: ["Docker", "Docker Compose", "Nginx", "Git", "JWT / RBAC", "Slowapi"] },
  { group: "Frontend", items: ["React 19", "TypeScript", "TailwindCSS 4", "PWA", "Leaflet"] },
];

export const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "IIIT RGUKT RK Valley",
    period: "2021 – 2025",
    score: "GPA 9.02 / 10",
  },
  {
    degree: "Pre-University Course (MPC)",
    institution: "IIIT RGUKT RK Valley",
    period: "2019 – 2021",
    score: "CGPA 9.58",
  },
  {
    degree: "Secondary School",
    institution: "ZPHS RV Palli",
    period: "2018 – 2019",
    score: "GPA 10.0",
  },
];

export const certificates = [
  { title: "GATE 2025: Data Science & AI", issuer: "Qualified", link: null },
  {
    title: "Problem Solving, SQL & Python: 5★",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/profile/kaminiyuvaraju",
  },
  { title: "Pandas", issuer: "Kaggle", link: null },
  {
    title: "Data Science & Machine Learning",
    issuer: "GeeksforGeeks",
    link: "https://media.geeksforgeeks.org/courses/certificates/b0ee312c2a512b1a852a7dd1ca68d056.pdf",
  },
  {
    title: "Data Structures & Algorithms (Python)",
    issuer: "GeeksforGeeks",
    link: "https://media.geeksforgeeks.org/courses/certificates/2f58d6e0639707055c180ac5cd360368.pdf",
  },
  { title: "Machine Learning, Deep Learning & NLP", issuer: "Udemy", link: null },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/b977cb51981e",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    link: "https://www.hackerrank.com/certificates/14e552531dce",
  },
];
