export type Technology = {
  name: string;
  type: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: Technology[];
  githubLink: string;
  liveLink: string;
};

// ToDo: make technology type enum and refactor technologybadge component

const projects: Project[] = [
  {
    title: "worktime",
    description: "A work time tracker built using all modules of the T3 Stack",
    technologies: [
      { name: "TypeScript", type: "language" },
      { name: "Next.js", type: "framework" },
      { name: "Tailwind CSS", type: "framework" },
      { name: "Prisma", type: "framework" },
      { name: "NextAuth.js", type: "framework" },
      { name: "tRPC", type: "framework" },
      { name: "Vercel", type: "tool" },
    ],
    githubLink: "https://github.com/kulgg/worktime",
    liveLink: "https://worktime.kul.gg",
  },
  {
    title: "kul.gg",
    description: "My personal website",
    technologies: [
      { name: "TypeScript", type: "language" },
      { name: "Astro", type: "framework" },
      { name: "React", type: "framework" },
      { name: "Tailwind CSS", type: "framework" },
      { name: "Vercel", type: "tool" },
    ],
    githubLink: "https://github.com/kulgg/kul.gg",
    liveLink: "https://kul.gg",
  },
];

export { projects };
