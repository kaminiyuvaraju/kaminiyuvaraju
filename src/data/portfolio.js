// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Kamini Yuvaraju",
  role: "Backend Engineer",
  headline: "I build backends that",
  headlineAccent: "hold up in production.",
  summary:
    "Multi-tenant SaaS, real-time video and AI agents, built in Python and FastAPI and shipped to real users every month.",
  location: "Hyderabad, India",
  email: "kaminiyuvaraju@gmail.com",
  resume: "/Kamini-Resume.pdf",
  current: "Software Engineer at Achala IT Solutions",
  url: "https://kaminiyuvaraju-portfolio.netlify.app",
};

export const socials = {
  github: "https://github.com/kaminiyuvaraju",
  linkedin: "https://www.linkedin.com/in/kamini-yuvaraju/",
  leetcode: "https://leetcode.com/u/KAMINIYUVARAJU/",
  hackerrank: "https://www.hackerrank.com/profile/kaminiyuvaraju",
  gfg: "https://www.geeksforgeeks.org/user/kaminiyuvaraju/",
};

// Shown in the hero "production" panel.
export const prodStats = [
  { key: "pep.brands", value: "5", note: "healthcare brands live" },
  { key: "pep.patients", value: "~10k", note: "patients / month" },
  { key: "video.calls", value: "~1k", note: "consultations / month" },
  { key: "deploys.total", value: "100+", note: "with auto-rollback" },
  { key: "api.latency", value: "−30%", note: "average response time" },
  { key: "db.load", value: "−40%", note: "query load via caching" },
];

export const work = [
  {
    id: "pep",
    title: "Patient Engagement Platform",
    kicker: "Multi-tenant SaaS",
    status: "live",
    summary:
      "A multi-tenant SaaS platform I led end to end. Five healthcare brands run their patient engagement on it today.",
    points: [
      "Layered async backend (GraphQL resolvers, service layer, data access) on FastAPI and Strawberry",
      "Tenant isolation through tenant-scoped queries, tenant and role in JWT claims, and per-tenant RBAC",
      "Concurrency-safe booking: a unique index makes conflicting bookings fail at the database",
      "Meta Lead Ads webhooks route ~1,000 leads a month to the right tenant in real time",
    ],
    metrics: [
      { value: "5", label: "brands" },
      { value: "~10k", label: "patients / mo" },
      { value: "−30%", label: "API latency" },
      { value: "−40%", label: "DB load" },
    ],
    flow: ["React", "GraphQL", "Service layer", "MongoDB + Redis"],
    stack: ["FastAPI", "Strawberry GraphQL", "MongoDB", "Redis", "JWT / RBAC", "React"],
  },
  {
    id: "video",
    title: "Video Consultations",
    kicker: "Real-time / WebRTC",
    status: "live",
    summary:
      "Appointment-based doctor-patient video calls on self-hosted LiveKit, with server-side recording.",
    points: [
      "Backend-issued LiveKit tokens scoped to each appointment's room, with role-based grants",
      "Room lifecycle and call status driven by LiveKit webhooks",
      "Server-side recording, with the front end built on the LiveKit React SDK",
    ],
    metrics: [
      { value: "~1k", label: "calls / mo" },
      { value: "Self-hosted", label: "LiveKit" },
    ],
    flow: ["Appointment", "Scoped token", "LiveKit room", "Webhooks"],
    stack: ["LiveKit", "WebRTC", "FastAPI", "React"],
  },
  {
    id: "cti",
    title: "CTI Control Plane",
    kicker: "Deployment automation",
    status: "live",
    summary:
      "A central deployment platform with on-prem Python agents, so releases reach tenant servers without anyone logging in.",
    points: [
      "Agents poll for releases (default every 2 min) and deploy in under 5 minutes per server",
      "Diffs desired vs. running state (image tag, env, license), runs optional migrations, and reverts to the last good config on failure",
      "Per-server encrypted configs in S3 that only that server's agent can decrypt",
      "Observability with Prometheus, Promtail/Loki and a React health dashboard",
    ],
    metrics: [
      { value: "100+", label: "deployments" },
      { value: "6", label: "servers" },
      { value: "<5 min", label: "per server" },
    ],
    flow: ["Release", "Encrypted config (S3)", "Agent", "Docker Compose"],
    stack: ["FastAPI", "PostgreSQL", "AWS S3", "Docker Compose", "Prometheus", "Loki"],
  },
  {
    id: "reva",
    title: "REVA: Multi-Agent RAG",
    kicker: "Applied AI",
    status: "personal",
    summary:
      "An 8-agent pipeline that answers real estate questions by routing them to vector search or generated SQL.",
    points: [
      "Classifier → Intent Router → SQL Generator → Executor → Cache → Synthesizer",
      "Hybrid retrieval: vector search for vague questions, NL-to-SQL for structured ones",
      "Async FastAPI service with Redis query caching and JWT auth",
    ],
    metrics: [
      { value: "8", label: "agents" },
      { value: "85%+", label: "resolved" },
    ],
    flow: ["Question", "Router", "SQL / Vector", "Answer"],
    stack: ["LangChain", "RAG", "NL-to-SQL", "FastAPI", "PostgreSQL", "Redis"],
  },
];

export const otherProjects = [
  {
    title: "IPL Score & Win Predictor",
    description: "Score and win-probability prediction (92% accuracy) served through a Flask API.",
    tags: ["Python", "scikit-learn", "Flask"],
    link: "https://github.com/kaminiyuvaraju/IPL_Score_And_Win_Probability_Predictor",
  },
  {
    title: "Rice Crop Disease Detection",
    description: "A ResNet-50 model, served with Flask, that detects four major rice leaf diseases.",
    tags: ["Deep Learning", "ResNet-50", "Flask"],
    link: "https://github.com/kaminiyuvaraju/Rice_Crop_Disease_Detection",
  },
];

export const experience = [
  {
    company: "Achala IT Solutions",
    location: "Hyderabad",
    period: "Jun 2025 – Present",
    roles: [
      {
        title: "Software Engineer",
        period: "Apr 2026 – Present",
        promoted: true,
        points: [
          "Built self-hosted LiveKit video consultations (~1,000 / month) with recording and appointment-scoped access",
          "Architected the CTI Control Plane: on-prem agents on 6 servers, 100+ deployments, automatic rollback",
          "GitHub Actions CI/CD running pytest and code-quality checks, pushing Docker images to AWS ECR",
        ],
      },
      {
        title: "Associate Software Engineer",
        period: "Jun 2025 – Mar 2026",
        points: [
          "Led development of PEP, a multi-tenant SaaS platform now live for 5 healthcare brands",
          "Cut API latency ~30% with a layered async GraphQL backend, and DB load ~40% with Redis caching",
          "Built the Appointments and Supervisor modules: ticket management, call monitoring, missed-call alerts",
          "Zero-downtime releases with Alembic migrations, API versioning and Celery/Redis background jobs",
        ],
      },
    ],
  },
  {
    company: "Maang Technologies",
    location: "Remote",
    period: "Nov 2023 – Nov 2024",
    roles: [
      {
        title: "Technical Intern",
        period: "Nov 2023 – Nov 2024",
        points: [
          "Delivered production FastAPI services end to end: schema design, routing, Pydantic v2 validation, PostgreSQL",
          "Shipped REST APIs consumed directly by the production React front end",
          "Built an IPL score prediction model (92% accuracy) served as a live inference endpoint",
        ],
      },
    ],
  },
];

export const about = [
  "I'm a backend engineer from Hyderabad. I like the parts of a system most people never see: tenant isolation, booking that can't double-book, deployments that undo themselves when something breaks.",
  "Over the last year and a half I've taken a healthcare SaaS platform from first commit to five live brands, put real-time video into production, and built the tooling that ships it all. Outside work I build AI systems, most recently an 8-agent RAG pipeline.",
];

export const skills = [
  { group: "Backend", items: ["Python", "FastAPI", "GraphQL (Strawberry)", "REST", "AsyncIO", "Pydantic v2", "Celery"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "SQLAlchemy 2 (async)", "Alembic"] },
  { group: "Real-time", items: ["LiveKit", "WebRTC", "WebSockets", "Webhooks"] },
  { group: "AI / LLM", items: ["RAG", "LangChain", "Multi-agent orchestration", "NL-to-SQL", "Embeddings"] },
  { group: "Infra", items: ["Docker", "Docker Compose", "AWS (EC2, S3, ECR)", "GitHub Actions", "Nginx", "Prometheus", "Loki"] },
  { group: "Frontend", items: ["React 19", "TypeScript", "Tailwind CSS"] },
];

export const education = [
  { degree: "B.Tech, Computer Science", institution: "IIIT RGUKT RK Valley", period: "2021 – 2025", score: "9.02 / 10" },
  { degree: "Pre-University (MPC)", institution: "IIIT RGUKT RK Valley", period: "2019 – 2021", score: "9.58 / 10" },
];

export const achievements = [
  { title: "GATE 2025 Qualified", detail: "Data Science & Artificial Intelligence" },
  { title: "HackerRank 5★", detail: "Problem Solving, Python & SQL", link: "https://www.hackerrank.com/profile/kaminiyuvaraju" },
  { title: "300+ LeetCode problems", detail: "Data structures & algorithms", link: "https://leetcode.com/u/KAMINIYUVARAJU/" },
];

export const certificates = [
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
  { title: "Machine Learning, Deep Learning & NLP", issuer: "Udemy" },
  { title: "Pandas", issuer: "Kaggle" },
];
