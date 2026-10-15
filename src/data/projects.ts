export type ProjectCategory =
  | "Software Engineering"
  | "Backend"
  | "AI / ML"
  | "QA / Automation";

export type ProjectStatus = "Completed" | "In Progress";

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  technologies: string[];
  highlights: string[];
  categories: ProjectCategory[];
  status: ProjectStatus;
  featured?: boolean;
  githubUrl?: string;
  /** Override the default "GitHub" link label (e.g. "Team Repository"). */
  githubLabel?: string;
  /**
   * Link to filtered commit history for verified personal contributions
   * on a collaborative repository.
   */
  contributionsUrl?: string;
  /** Brief, verified summary of personal contributions (optional). */
  contributionSummary?: string;
  liveUrl?: string;
  image?: string;
};

export const projectFilters = [
  "All Projects",
  "Software Engineering",
  "Backend",
  "AI / ML",
  "QA / Automation",
] as const;

export type ProjectFilter = (typeof projectFilters)[number];

/**
 * Project content verified from resume and public GitHub where available.
 * Featured projects: Clinical Trial AI and Real Estate Analysis.
 */
export const projects: Project[] = [
  {
    id: "clinical-trial-ai",
    title: "Clinical Trial AI",
    shortDescription:
      "Hackathon MVP that turns dense clinical trial protocol PDFs into verified, structured study information and source-backed answers for research coordinators and patients.",
    technologies: [
      "Python",
      "Streamlit",
      "Ollama",
      "PyMuPDF",
      "OCR",
      "pytest",
      "Pydantic",
    ],
    highlights: [
      "PDF text extraction with OCR fallback for scanned pages",
      "Local LLM protocol analysis via Ollama (qwen3:4b)",
      "Source-page verification for traceable summaries",
      "Coordinator and Patient assistants with safety disclaimers",
      "Automated testing workflows for extraction accuracy",
    ],
    categories: ["AI / ML", "Software Engineering", "QA / Automation"],
    status: "Completed",
    featured: true,
    githubUrl: "https://github.com/Rakesh-Borra/clinical-trial-ai",
  },
  {
    id: "real-estate-analysis",
    title: "Real-Time Real Estate Investment Analysis",
    shortDescription:
      "Collaborative team project: a full-stack web application for authenticated property analysis with ROI, cash flow, and cap rate calculations plus five-year investment projections.",
    technologies: [
      "React",
      "Vite",
      "Firebase Authentication",
      "Firestore",
      "REST APIs",
    ],
    highlights: [
      "Authenticated user workflows with Firebase Auth",
      "Property-data API integration for live market inputs",
      "ROI, cash flow, and cap rate calculation engine",
      "Five-year projection views for investment planning",
      "User-scoped Firestore access rules",
    ],
    categories: ["Software Engineering", "Backend"],
    status: "Completed",
    featured: true,
    githubUrl:
      "https://github.com/srikarchowdary03/real_time_real_estate_investment_analysis",
    githubLabel: "Team Repository",
    contributionsUrl:
      "https://github.com/srikarchowdary03/real_time_real_estate_investment_analysis/commits?author=Rakesh-Borra",
    contributionSummary:
      "Verified GitHub contributions (11 commits as Rakesh-Borra): investment calculation engine, Firebase authentication setup, Realty/Zillow API integration, property search with autocomplete, investor profile and dashboard/profile work, and auth/navigation UI (Sign In, Sign Up, navbar, footer).",
  },
  {
    id: "smart-traffic-monitoring",
    title: "Smart Traffic Monitoring System",
    shortDescription:
      "Real-time traffic monitoring and congestion prediction platform using computer vision, FastAPI services, and React dashboards.",
    technologies: [
      "Python",
      "YOLO",
      "OpenCV",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Docker",
    ],
    highlights: [
      "Vehicle detection and lane-wise counting from live video",
      "Congestion analysis and density prediction workflows",
      "FastAPI backend with PostgreSQL data integration",
      "Real-time React dashboards for traffic visibility",
      "Docker-based deployment setup",
    ],
    categories: ["Software Engineering", "Backend", "AI / ML"],
    status: "Completed",
    githubUrl:
      "https://github.com/Rakesh-Borra/smart-traffic-monitoring-system",
  },
  {
    id: "filter-pruning-vgg16",
    title: "Filter Pruning in Deep Neural Networks",
    shortDescription:
      "Structured filter pruning applied to convolutional neural networks to reduce inference latency while preserving model accuracy.",
    technologies: ["Python", "CNNs", "TensorFlow", "Keras"],
    highlights: [
      "Structured filter pruning on convolutional architectures",
      "Statistical evaluation of pruning strategies",
      "Reported up to 2x inference speedup in experiments",
    ],
    categories: ["AI / ML"],
    status: "Completed",
    githubUrl: "https://github.com/Rakesh-Borra/filter-pruning-in-VGG16",
  },
  {
    id: "emotion-detection-speech",
    title: "Speech Emotion Detection",
    shortDescription:
      "Machine learning workflow for recognizing emotional patterns in speech using audio feature extraction and neural network classification.",
    technologies: ["Python", "Librosa", "Keras"],
    highlights: [
      "Audio feature processing with Librosa",
      "Neural network-based emotion classification",
      "End-to-end Python ML workflow",
    ],
    categories: ["AI / ML"],
    status: "Completed",
    githubUrl:
      "https://github.com/Rakesh-Borra/Emotion-Detection-using-Speech",
  },
  {
    id: "project-pulse",
    title: "Project Pulse",
    shortDescription:
      "Android task management application with persistent local storage, status tracking, and reminder scheduling.",
    technologies: ["Kotlin", "SQLite", "AlarmManager"],
    highlights: [
      "Task tracking with persistent SQLite storage",
      "Reminder scheduling via AlarmManager",
      "Task status indicators and login workflows",
    ],
    categories: ["Software Engineering"],
    status: "Completed",
    githubUrl: "https://github.com/Rakesh-Borra/ProjectPulse",
  },
];
