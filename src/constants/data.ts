export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    category: "Frontend",
    skills: [
      "ReactJS",
      "NextJS",
      "Tailwind CSS",
      "Material UI",
      "NextUI",
      "Shadcn UI",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    skills: [
      "NextJS",
      "FastAPI",
      "NestJS",
      "ExpressJS",
      "tRPC",
      "Drizzle ORM",
      "Prisma ORM",
      "Mongoose",
    ],
  },
  {
    category: "Version Control",
    skills: ["Git", "GitHub", "GitLab", "BitBucket"],
  },
  {
    category: "GitOps",
    skills: ["GitHub Actions", "Jenkins", "Travis CI", "ArgoCD", "FluxCD"],
  },
  {
    category: "Web Servers",
    skills: ["Traefik", "Nginx", "Apache", "Caddy"],
  },
  {
    category: "Databases",
    skills: ["SQLite", "PostgreSQL", "MySQL", "MariaDB", "MongoDB", "Redis"],
  },
  {
    category: "Platforms & Tools",
    skills: [
      "VS Code",
      "Linux",
      "Linux Server Tools",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    category: "Cloud Platforms",
    skills: ["AWS", "Azure", "Oracle Cloud", "GCP"],
  },
];
