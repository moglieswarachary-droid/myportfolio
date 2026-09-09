export interface Project {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  category: string;
  description: string;
  stack: string[];
  features: string[];
  architecture?: string[];
  problem?: string;
  solution?: string;
  engineering?: string;
  learning?: string;
  githubUrl?: string;
  liveUrl?: string;
  tagline: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  projectTitle: string;
  projectDescription: string;
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  affiliation?: string;
  period: string;
  score?: string;
  isDominant?: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  verificationUrl?: string;
}

export const PORTFOLIO_DATA = {
  identity: {
    name: "MOGLIESWAR",
    shortName: "MOGLIESWAR",
    fullName: "M. MOGLIESWAR ACHARI",
    greeting: "Hi, I'm MOGLIESWAR",
    logoUrl: "/logo.jpg",
    role: "CSE (AI & ML) | Software Developer | AI/ML & Full-Stack Project Builder",
    headline: "CSE (AI & ML) | SOFTWARE DEVELOPER | AI/ML & FULL-STACK PROJECT BUILDER",
    location: "Kuppam, Andhra Pradesh, India",
    phone: "+91 7799885487",
    email: "moglieswar999@gmail.com",
    linkedin: "https://www.linkedin.com/in/m-moglieswar-achari-b324a5376",
    github: "https://github.com/moglieswarachary-droid",
    resumeUrl: "/M-Moglieswar-Resume.pdf",
    pageTitle: "M. MOGLIESWAR ACHARI | Software Developer | AI/ML & Full-Stack",
    displayStatement: "AI/ML & FULL-STACK PROJECT BUILDER",
    intro:
      "Computer Science and Engineering (Artificial Intelligence & Machine Learning) undergraduate with hands-on experience designing and building full-stack, mobile, AI/ML and student-focused digital products. Experienced with Python, JavaScript, TypeScript, React, Flutter, FastAPI, Firebase, REST APIs, PostgreSQL, Git/GitHub, LLM concepts and prompt engineering. Built multi-module platforms including CampusNet, RideToTrack, PayTrack and AI Career Hub, with emphasis on scalable architecture, authentication, role-based access, APIs, responsive UX, analytics and real-world problem solving.",
    bottomBarText:
      "Computer Science and Engineering (AI & ML) undergraduate building practical software, scalable systems, and intelligent digital products.",
    heroBadges: [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Flutter",
      "FastAPI",
      "PostgreSQL",
      "Firebase",
      "AI/ML",
      "LLMs",
    ],
  },

  about: {
    heading: "PROFESSIONAL SUMMARY",
    bio: "Computer Science and Engineering (Artificial Intelligence & Machine Learning) undergraduate with hands-on experience designing and building full-stack, mobile, AI/ML and student-focused digital products. Experienced with Python, JavaScript, TypeScript, React, Flutter, FastAPI, Firebase, REST APIs, PostgreSQL, Git/GitHub, LLM concepts and prompt engineering. Built multi-module platforms including CampusNet, RideToTrack, PayTrack and AI Career Hub, with emphasis on scalable architecture, authentication, role-based access, APIs, responsive UX, analytics and real-world problem solving.",
    profile: {
      name: "M. MOGLIESWAR ACHARI",
      domain: "Computer Science & Engineering (AI & ML)",
      education: "B.Tech CSE (AI & ML)",
      status: "2023–2027 | Pursuing",
      location: "Kuppam, Andhra Pradesh, India",
    },
  },

  engineeringServices: [
    {
      number: "01",
      title: "FULL-STACK DEVELOPMENT",
      description:
        "Building responsive web applications across frontend, backend and API layers with emphasis on authentication, data flow, usability and scalable architecture.",
      tags: ["React", "TypeScript", "JavaScript", "Responsive UI/UX", "State Management"],
    },
    {
      number: "02",
      title: "AI / MACHINE LEARNING",
      description:
        "Developing AI/ML solutions involving machine learning, NLP, computer vision, OpenCV, model evaluation, LLM concepts and prompt engineering.",
      tags: ["Python", "Scikit-Learn", "NLP", "TF-IDF", "OpenCV", "LLMs", "Prompt Engineering"],
    },
    {
      number: "03",
      title: "BACKEND & APIs",
      description:
        "Engineering REST APIs, backend services, and database management with FastAPI, Node.js, NestJS, PostgreSQL, Prisma, Firebase, and DBMS.",
      tags: ["FastAPI", "Node.js", "NestJS", "PostgreSQL", "Prisma", "Firebase", "DBMS"],
    },
    {
      number: "04",
      title: "MOBILE DEVELOPMENT",
      description:
        "Building cross-platform mobile experiences using Flutter and Dart, including GPS/location tracking workflows, dashboards, and responsive mobile interfaces.",
      tags: ["Flutter", "Dart", "GPS/Location", "REST API", "Mobile Dashboards"],
    },
    {
      number: "05",
      title: "SECURITY & ARCHITECTURE",
      description:
        "Structuring secure, reliable architectures with JWT, RBAC, Argon2, API authorization, and verification workflows.",
      tags: ["JWT", "RBAC", "Argon2", "API Authorization", "Verification Workflows"],
    },
  ] as Service[],

  projects: [
    {
      id: "campusnet",
      number: "01",
      name: "CampusNet",
      subtitle: "National Student, Mentor & Research Network",
      category: "FULL-STACK / AI / PLATFORM",
      tagline: "Scalable national student, mentor, PhD scholar, project, research and event ecosystem",
      description:
        "Designed and developed a scalable student, mentor, PhD scholar, project, research and event ecosystem. Defined role-based public, Organizer and Super Admin experiences; event discovery and registration; project/team collaboration; mentor matching; shared project workspaces; tasks, milestones and feedback; certificate generation with unique IDs/QR verification; institution and organization hubs; inter-institution collaboration; secure messaging; notifications; calendar; analytics; semantic search; AI-powered recommendations, teammate/mentor matching, research discovery, skill-gap analysis and project similarity; and verification, moderation, audit and security workflows.",
      features: [
        "Role-based public, Organizer and Super Admin experiences",
        "Event discovery, scheduling and registration workflows",
        "Project and team collaboration with shared workspaces",
        "Mentor matching & PhD scholar research collaboration",
        "Certificate generation with unique IDs and QR verification",
        "Institution & organization hubs with inter-institution networking",
        "AI-powered recommendations, teammate matching & skill-gap analysis",
        "Semantic search and project similarity discovery",
        "Verification, moderation, audit and security workflows",
      ],
      stack: [
        "Node.js",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "JWT",
        "Argon2",
        "RBAC",
        "Redis/BullMQ",
        "Socket.IO",
        "S3/Cloudinary",
        "Puppeteer",
        "QR",
        "Python/FastAPI",
        "Docker",
        "Railway",
      ],
      architecture: [
        "CLIENT / REACT",
        "AUTH / JWT / RBAC / ARGON2",
        "NESTJS API / PRISMA",
        "POSTGRESQL DB",
        "REDIS / BULLMQ / SOCKET.IO",
        "FASTAPI AI RECOMMENDATION",
      ],
      problem:
        "Students, mentors, and PhD scholars lack a unified, verified national platform to collaborate on projects, discover research events, match complementary skill sets, and verify academic achievements across institutions.",
      solution:
        "Engineered CampusNet as a unified scalable ecosystem providing role-based portals, automated QR verification, real-time messaging, and an AI service for matching teammates and mentors based on research and skill domains.",
      engineering:
        "Structured modular microservices with NestJS, Prisma, and PostgreSQL for relational integrity, Redis/BullMQ and Socket.IO for real-time messaging and queues, and Python FastAPI for asynchronous AI recommendation pipelines deployed on Railway via Docker.",
      learning:
        "Gained comprehensive experience in multi-role RBAC architecture, certificate generation with QR hashing, real-time event distribution, and containerized cloud deployment.",
      githubUrl: "https://github.com/moglieswarachary-droid",
    },
    {
      id: "ridetotrack",
      number: "02",
      name: "RideToTrack",
      subtitle: "GPS & Safety Tracking Mobile Application",
      category: "MOBILE / BACKEND",
      tagline: "Real-time location/GPS tracking and safety-focused mobile application with FastAPI backend",
      description:
        "Built a Flutter mobile application with a separate FastAPI backend for location/GPS tracking and safety-focused workflows. Structured the application into authentication, dashboard, tracking, safety, services, providers and model layers, with a web viewer and Docker-based setup. Backend deployed on Railway with API/Swagger access.",
      features: [
        "Real-time GPS coordinate telemetry & location tracking",
        "Layered mobile architecture (auth, dashboard, tracking, safety, services, providers, models)",
        "Separate asynchronous FastAPI backend with automated Swagger documentation",
        "Safety-focused workflows and emergency boundary monitoring",
        "Web viewer and containerized Docker-based configuration",
        "Production backend deployment on Railway cloud platform",
      ],
      stack: [
        "Flutter",
        "Dart",
        "FastAPI",
        "Python",
        "REST API",
        "GPS/Location",
        "Railway",
        "Docker",
      ],
      architecture: [
        "FLUTTER MOBILE CLIENT",
        "PROVIDER STATE & SERVICES",
        "REST API / FASTAPI BACKEND",
        "GPS TELEMETRY ENGINE",
        "DOCKER / RAILWAY CLOUD",
      ],
      problem:
        "Commuters and transit operators require low-latency, reliable location tracking and proactive safety workflows without excessive battery consumption or brittle connectivity drop-offs.",
      solution:
        "Engineered a cleanly architected Flutter mobile app paired with an asynchronous FastAPI backend on Railway, providing instant location telemetry, safety monitoring, and a web viewer.",
      engineering:
        "Structured clean architectural layers separating models, providers, and background location services, paired with containerized Docker deployment and comprehensive Swagger API schemas.",
      learning:
        "Mastered Flutter device GPS hardware APIs, state management via Providers, asynchronous Python REST architecture, and Dockerized Railway deployment.",
      githubUrl: "https://github.com/moglieswarachary-droid",
    },
    {
      id: "paytrack",
      number: "03",
      name: "PayTrack",
      subtitle: "Payment & Credit Tracking Platform",
      category: "FULL-STACK / FINTECH",
      tagline: "Responsive financial tracking web application for ICICI & Slice accounts, dues, and insights",
      description:
        "Developed and deployed a responsive financial tracking web application for monitoring ICICI and Slice accounts, paid and remaining amounts, upcoming dues, payment history, due-date reminders, credit utilization, monthly records, search/filtering, dashboards, charts and financial insights.",
      features: [
        "Multi-account monitoring for ICICI and Slice accounts",
        "Paid and remaining balances calculation with credit utilization metrics",
        "Upcoming dues monitoring and automated due-date reminders",
        "Complete payment history and archived monthly records",
        "Dynamic search and multi-criteria category filtering",
        "Interactive financial dashboards, visual charts and analytical insights",
        "Persistent cloud data synchronization with Firebase",
      ],
      stack: [
        "Web Development",
        "JavaScript",
        "TypeScript",
        "Firebase",
        "REST APIs",
        "Responsive UI",
      ],
      architecture: [
        "RESPONSIVE UI / CHARTS",
        "TYPESCRIPT BUSINESS LOGIC",
        "FIREBASE CLOUD PERSISTENCE",
        "ANALYTICS & REMINDERS",
      ],
      problem:
        "Managing multiple credit lines (ICICI, Slice) and varying billing cycles across disconnected channels leads to missed due dates, unoptimized credit utilization, and poor visibility of monthly liabilities.",
      solution:
        "Built PayTrack as a single responsive hub that tracks real-time account balances, warns of upcoming due dates, visualizes utilization graphs, and archives historical records.",
      engineering:
        "Designed reactive calculation models for credit utilization, structured clean Firebase persistence collections, and created fluid charts and filtering interfaces for instantaneous search.",
      learning:
        "Strengthened practical expertise in financial ledger logic, Firebase real-time database schemas, responsive data visualization, and user-centric UX.",
      githubUrl: "https://github.com/moglieswarachary-droid",
    },
    {
      id: "civicone",
      number: "04",
      name: "CIVICONE",
      subtitle: "Civic / Digital Platform",
      category: "WEB APPLICATION / CIVIC",
      tagline: "Modern user-facing digital platform focused on practical civic workflows",
      description:
        "Developed the CIVICONE project as part of a broader digital platform portfolio, focusing on practical user-facing workflows and modern web application design.",
      features: [
        "Practical user-facing civic workflows and interaction design",
        "Modern responsive web application architecture",
        "Clean, accessible citizen-oriented user interface",
        "Modular component structure and reactive state management",
      ],
      stack: [
        "Web Development",
        "JavaScript",
        "UI/UX",
        "GitHub",
      ],
      architecture: [
        "CLIENT UI / JAVASCRIPT",
        "USER WORKFLOW ENGINE",
        "RESPONSIVE LAYOUT MATRIX",
        "GITHUB REPOSITORY",
      ],
      problem:
        "Civic portals are frequently difficult to navigate, cumbersome on mobile devices, and lack intuitive user-centric workflows for public digital services.",
      solution:
        "Created CIVICONE to deliver a clean, intuitive, and modern web application experience tailored for practical civic workflows.",
      engineering:
        "Implemented structured, component-driven frontend architecture with high responsiveness across screen sizes and optimized user journey flows.",
      learning:
        "Deepened understanding of civic digital interfaces, accessible UI design, and efficient client-side user experience engineering.",
      githubUrl: "https://github.com/moglieswarachary-droid",
    },
    {
      id: "mediguru",
      number: "05",
      name: "MediGuru",
      subtitle: "Healthcare Technology Project",
      category: "HEALTHCARE / DIGITAL TECH",
      tagline: "Healthcare-oriented practical application applying core software development concepts",
      description:
        "Developed the MediGuru project as part of a practical application portfolio, applying software development concepts to a healthcare-oriented user experience.",
      features: [
        "Healthcare-oriented digital workflows and patient experiences",
        "Structured health information categorization and search",
        "Responsive cross-device user interface",
        "Robust input validation and streamlined navigation",
      ],
      stack: [
        "Software Development",
        "Web/App Development",
        "JavaScript",
        "Healthcare UX",
      ],
      architecture: [
        "HEALTHCARE UI CLIENT",
        "WORKFLOW LOGIC LAYER",
        "DATA MODEL & VALIDATION",
      ],
      problem:
        "Healthcare digital tools often present overwhelming interfaces to patients and practitioners, making basic wellness and information tracking stressful and inefficient.",
      solution:
        "Constructed MediGuru to apply foundational software engineering principles to a clean, empathetic, and organized healthcare experience.",
      engineering:
        "Engineered accessible data presentation patterns, clear status hierarchies, and modular application logic for healthcare workflows.",
      learning:
        "Gained practical experience in domain-specific UX considerations for health technology and clean application structuring.",
      githubUrl: "https://github.com/moglieswarachary-droid",
    },
    {
      id: "aicareerhub",
      number: "06",
      name: "AI Career Hub",
      subtitle: "AI/ML Career & Resume Toolkit",
      category: "AI / ML / CAREER TOOLKIT",
      tagline: "Interactive prototype for career role prediction, ATS resume scoring, and interview prep",
      description:
        "Built an interactive HTML/CSS/JavaScript prototype containing career-role prediction, resume keyword/ATS scoring, skill-gap analysis, project recommendations, interview-question generation, answer feedback and speech output. Implemented rule-based logic for role suggestions, ATS keyword checks and personalized project recommendations.",
      features: [
        "Career-role prediction engine based on user skill inputs",
        "Resume keyword matching & ATS scoring evaluation",
        "Skill-gap analysis with actionable roadmap generation",
        "Rule-based personalized project recommendations",
        "Interview question generator with structured answer feedback",
        "Interactive speech output synthesis for mock interviews",
      ],
      stack: [
        "HTML",
        "CSS",
        "JavaScript",
        "AI/ML concepts",
        "ATS/Resume Logic",
      ],
      architecture: [
        "CLIENT UI / WEB SPEECH API",
        "ATS KEYWORD SCORING ENGINE",
        "CAREER ROLE PREDICTION LOGIC",
        "SKILL-GAP & PROJECT MATCHER",
      ],
      problem:
        "Students and early-career developers struggle to benchmark their resumes against ATS filters, identify specific skill deficiencies, and practice technical interview questions tailored to target roles.",
      solution:
        "Built AI Career Hub as an all-in-one interactive toolkit that scores resumes against ATS criteria, predicts fitting roles, highlights missing skills, and conducts mock interviews with speech feedback.",
      engineering:
        "Implemented client-side parsing rules for ATS keyword density, algorithmic career-role scoring trees, and integrated the browser's native Web Speech synthesis API for dynamic question readouts.",
      learning:
        "Mastered rule-based heuristic AI modeling, ATS evaluation algorithms, Web Speech API integration, and creating self-contained client-side career tools.",
      githubUrl: "https://github.com/moglieswarachary-droid",
    },
  ] as Project[],

  skills: [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Dart", "HTML", "CSS"],
    },
    {
      title: "AI / Machine Learning",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "NLP",
        "Computer Vision",
        "OpenCV",
        "LLMs",
        "Prompt Engineering",
        "Scikit-learn",
        "TensorFlow",
        "NLTK",
      ],
    },
    {
      title: "Frontend / Mobile",
      skills: ["React", "Flutter", "Responsive UI/UX"],
    },
    {
      title: "Backend / Data",
      skills: [
        "FastAPI",
        "Node.js",
        "NestJS",
        "REST APIs",
        "PostgreSQL",
        "Prisma",
        "Firebase",
        "DBMS",
      ],
    },
    {
      title: "Security / Architecture",
      skills: [
        "JWT",
        "RBAC",
        "Argon2",
        "API authorization",
        "verification workflows",
      ],
    },
    {
      title: "Tools / Deployment",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Docker",
        "Railway",
        "Jupyter Notebook",
        "Matplotlib",
      ],
    },
  ] as SkillCategory[],

  experience: [
    {
      role: "AI/ML Intern",
      company: "VaultSphere AI Technologies",
      location: "Remote",
      duration: "2 Months",
      description:
        "Completed practical AI/ML training covering Python, NumPy, Pandas, data preprocessing, exploratory data analysis, machine learning algorithms, model evaluation, deep learning fundamentals and neural networks. Developed a Spam Mail Detection System using NLP and machine learning; performed text cleaning, tokenization, stopword removal and TF-IDF feature extraction, then trained Naive Bayes / Logistic Regression classifiers. Used Scikit-learn, NLTK, Matplotlib and Jupyter Notebook; tested, improved and documented the project.",
      projectTitle: "Spam Mail Detection System",
      projectDescription:
        "Developed a Spam Mail Detection System using NLP and machine learning; performed text cleaning, tokenization, stopword removal and TF-IDF feature extraction, then trained Naive Bayes / Logistic Regression classifiers. Used Scikit-learn, NLTK, Matplotlib and Jupyter Notebook; tested, improved and documented the project.",
      technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "NLTK",
        "Matplotlib",
        "Jupyter Notebook",
        "NLP",
        "TF-IDF",
        "Naive Bayes",
        "Logistic Regression",
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "B.Tech — Computer Science & Engineering",
      field: "Artificial Intelligence & Machine Learning",
      institution: "Kuppam Engineering College",
      affiliation: "JNTUA",
      period: "2023–2027",
      score: "Pursuing",
      isDominant: true,
    },
    {
      degree: "Intermediate",
      field: "Board of Intermediate Education (MPC)",
      institution: "Kuppam Junior College, Kuppam",
      period: "2021–2023",
      score: "72.8%",
      isDominant: false,
    },
    {
      degree: "SSC",
      field: "Secondary School Certificate",
      institution: "Narayana English Medium High School, Kuppam",
      period: "2020–2021",
      score: "100%",
      isDominant: false,
    },
  ] as EducationItem[],

  certifications: [
    {
      title: "AI for Business Professional Certificate",
      issuer: "HP LIFE",
    },
    {
      title: "Starting a Small Business",
      issuer: "HP LIFE",
    },
    {
      title: "Digital 101 Journey",
      issuer: "FutureSkills Prime / SSC NASSCOM",
    },
    {
      title: "APSSDC Skill Development Program",
      issuer: "APSSDC",
    },
    {
      title: "JavaScript Training",
      issuer: "EduPyramids / SINE, IIT Bombay",
    },
  ] as CertificationItem[],

  profileDetails: {
    languages: ["English", "Telugu", "Hindi", "Tamil"],
    strengths: [
      "Problem Solving",
      "Teamwork",
      "Communication",
      "Self-Motivation",
      "Goal Orientation",
    ],
  },
};
