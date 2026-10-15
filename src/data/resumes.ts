export type ResumeItem = {
  id: string;
  title: string;
  description: string;
  filename: string;
  available: boolean;
};

/**
 * PDFs live in /public/resumes/
 * Set available: false to show a placeholder instead of a broken link.
 */
export const resumes: ResumeItem[] = [
  {
    id: "swe-backend",
    title: "Software Engineering / Backend",
    description:
      "Emphasizes full-stack development, backend APIs, databases, and application engineering.",
    filename: "Rakesh_Borra_Resume_SWE_Backend.pdf",
    available: true,
  },
  {
    id: "ai-ml",
    title: "AI / ML Engineering",
    description:
      "Highlights machine learning, computer vision, LLMs, and Python-based AI workflows.",
    filename: "Rakesh_Borra_Resume_AI_ML.pdf",
    available: true,
  },
  {
    id: "qa-support",
    title: "QA / Application Support",
    description:
      "Focuses on testing, debugging, API integration, and technical problem-solving.",
    filename: "Rakesh_Borra_Resume_QAASIE.pdf",
    available: true,
  },
];
