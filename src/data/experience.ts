export type ExperienceItem = {
  id: string;
  title: string;
  organization: string;
  location?: string;
  period: string;
  responsibilities: string[];
};

/**
 * Verified experience from resume.
 * Edit responsibilities as you refine wording.
 */
export const experience: ExperienceItem[] = [
  {
    id: "ta-phys-113",
    title: "Graduate Teaching Assistant – PHYS 113",
    organization: "University of Massachusetts Boston",
    location: "Boston, MA",
    period: "September 2026 – Present",
    responsibilities: [
      "Evaluate quantitative assignments and exams, identify errors, and provide consistent, detailed feedback.",
      "Explain technical problem-solving methods during office hours and coordinate grading with instructional staff.",
    ],
  },
  {
    id: "dining-services",
    title: "Dining Services Associate",
    organization: "Sodexo – University of Massachusetts Boston",
    location: "Boston, MA",
    period: "January 2026 – August 2026",
    responsibilities: [
      "Collaborated with team members to support time-sensitive operations and provide responsive service in a fast-paced environment.",
    ],
  },
];
