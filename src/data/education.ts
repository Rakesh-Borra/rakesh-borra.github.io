export type EducationItem = {
  id: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  details?: string[];
  achievements?: string[];
};

export const education: EducationItem[] = [
  {
    id: "umass-boston-ms",
    degree: "Master of Science in Computer Science",
    school: "University of Massachusetts Boston",
    location: "Boston, MA, USA",
    period: "January 2025 – Expected December 2026",
    details: [
      "Focus areas: software engineering, backend systems, and AI/ML applications.",
    ],
  },
  {
    id: "iiit-sricity-btech",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "Indian Institute of Information Technology Sri City",
    location: "India",
    period: "Completed",
    details: [],
    achievements: ["JEE Main — 96.61 Percentile"],
  },
];
