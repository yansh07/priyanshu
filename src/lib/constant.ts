export const SOCIAL_LINKS = {
  email: "pksingh69313@gmail.com",
  github: "https://github.com/yansh07",
  twitter: "https://x.com/yansh_08",
  linkedin: "https://linkedin.com/in/yourprofile",
};

export const TECH_STACK = {
  languages: ["Python", "TypeScript", "JavaScript"],
  frontend: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion"],
  backend: ["FastAPI", "Node.js", "Express.js", "Docker", "GitHub Actions"],
  database: ["MongoDB", "PostgreSQL", "Redis"],
  ml: ["NumPy", "PyTorch", "Scikit-learn", "OpenAI API"],
};

export const PROJECTS = [
  {
    id: 1,
    title: "SkillForge: AI-Assisted Job Portal",
    description:
      "An intelligent job matching platform using semantic embeddings and deterministic logic for explainable AI-assisted candidate-job matching.",
    technologies: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "OpenAI"],
    highlights: [
      "Explainable AI matching system avoiding black-box scoring",
      "PostgreSQL full-text search with weighted ranking",
      "Secure S3-compatible PDF upload pipeline",
      "OpenAI API integration for resume parsing",
      "JSONB storage for flexible querying",
      "Logic-first skill gap detection",
    ],
    github: "https://github.com/yansh07/skillforge",
    live: "https://applyherewithforge.vercel.app/",
    image: "/projects/skillforge.png",
    badge: "Featured",
  },
  {
    id: 2,
    title: "PlanIt: Notes App",
    description:
      "A full-stack notes application with JWT and Auth0 authentication, image uploads, and real-time synchronization.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    highlights: [
      "JWT and Auth0 authentication for 50+ active users",
      "Image upload with Multer and Cloudinary (40% faster load times)",
      "Scalable backend on Railway with 100% uptime",
      "CDN-fronted deployment on Vercel",
    ],
    github: "https://github.com/yansh07/todo-frontend",
    live: "https://planitfirst.vercel.app/",
    image: "/projects/planit.png",
    badge: "Production",
  },
];

export const EDUCATION = {
  degree: "Bachelor of Computer Application",
  institution: "Dehradun Institute of Technology University, India",
  expectedGrad: "2027",
  coursework: [
    "Data Structure & Algorithm",
    "Database Management",
    "Computer Networking",
    "Web Development",
  ],
};