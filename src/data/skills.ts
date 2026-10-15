export type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
};

/**
 * Skills drawn from verified resume content.
 * Add or remove items as your experience grows.
 */
export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "SQL", "Java", "Kotlin"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    skills: ["React", "HTML", "CSS", "Vite", "Streamlit"],
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Firestore", "SQLite", "Firebase"],
  },
  {
    id: "ai-ml",
    title: "AI / Machine Learning",
    skills: [
      "TensorFlow",
      "Keras",
      "CNNs",
      "OpenCV",
      "YOLO",
      "Ollama",
      "Prompt Engineering",
      "NumPy",
      "Pandas",
      "Librosa",
    ],
  },
  {
    id: "tools",
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Docker", "Data Structures", "OOP"],
  },
  {
    id: "testing",
    title: "Testing & Quality Assurance",
    skills: ["pytest", "Unit Testing", "Debugging", "Data Validation"],
  },
];
