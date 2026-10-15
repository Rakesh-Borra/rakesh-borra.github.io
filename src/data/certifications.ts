export type CertificationStatus = "Completed" | "In Progress";

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  status: CertificationStatus;
  completedAt?: string;
  verificationUrl?: string;
};

/**
 * Only include certifications you can verify.
 * Add verification links when available.
 */
export const certifications: Certification[] = [
  {
    id: "udemy-dsa-python",
    name: "The Complete Data Structures and Algorithms Course in Python",
    issuer: "Udemy",
    status: "Completed",
    // Add certificate URL when ready:
    // verificationUrl: "https://...",
  },
];
