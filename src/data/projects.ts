import type { Project } from "../types/projects.types";

export const projects: Project[] = [
  {
    title: "Pulse Analytics",
    description:
      "Responsive analytics workspace designed for operations teams. Delivered charts, filters and exports in a polished Next.js interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "#",
    demo: "#",
    type: "Dashboard",
    date: "2024",
  },
  {
    title: "AuthFlow",
    description:
      "Modular authentication UI with token handling, sign-in flows and secure session state for modern web apps.",
    tech: ["React", "Node.js", "JWT", "Prisma"],
    github: "#",
    type: "Authentication",
    date: "2024",
  },
  {
    title: "Design System",
    description:
      "Reusable component library with accessible controls, theme variants, and responsive layout utilities.",
    tech: ["React", "Storybook", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "#",
    type: "Component Library",
    date: "2023",
  },
  {
    title: "Launch Page",
    description:
      "High-conversion landing experience with fast loading performance, animated sections, and polished product storytelling.",
    tech: ["Next.js", "Framer Motion", "Vercel"],
    demo: "#",
    type: "Marketing",
    date: "2023",
  },
];
