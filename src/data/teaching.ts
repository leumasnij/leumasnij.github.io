export type TeachingEntry = {
  course: string;
  role: string;
  institution: string;
  term: string;
  description?: string;
};

export const teaching: TeachingEntry[] = [
  {
    course: "CS 5757 - Optimization Methods for Robotics",
    role: "Head Teaching Assistant",
    institution: "Cornell University",
    term: "Spring 2026",
    description:
      "Supporting a graduate robotics course focused on optimization methods for planning, control, and learning.",
  },
  {
    course: "CS 4750 - Foundations of Robotics",
    role: "Teaching Assistant",
    institution: "Cornell University",
    term: "Fall 2025",
    description:
      "Helping students build a foundation in robot kinematics, dynamics, perception, planning, and control.",
  },
  {
    course: "ECE 311 - Digital Signal Processing Lab",
    role: "Undergraduate Grader",
    institution: "University of Illinois Urbana-Champaign",
    term: "Spring 2024",
  },
  {
    course: "ECE 210 - Analog Signal Processing",
    role: "Undergraduate Grader",
    institution: "University of Illinois Urbana-Champaign",
    term: "Fall 2024",
  },
];
