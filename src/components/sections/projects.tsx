"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import {
  AnimatedBadge,
  AnimatedListItem,
  SectionContainer,
  SectionDescription,
  SectionHeading,
} from "../shared/section-components";

type Project = {
  title: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  features: string[];
};

// Project feature list component
function ProjectFeatures({ features }: { features: string[] }) {
  return (
    <ul className="ml-5 list-disc space-y-2 text-muted-foreground">
      {features.map((feature, index) => (
        <AnimatedListItem key={feature} delay={0.3 + index * 0.1}>
          {feature}
        </AnimatedListItem>
      ))}
    </ul>
  );
}

// Project technology badges component
function TechnologyBadges({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <AnimatedBadge key={tech} delay={0.5 + index * 0.05}>
          {tech}
        </AnimatedBadge>
      ))}
    </div>
  );
}

// Project card component
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      }}
      className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md"
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="p-8">
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h3 className="font-bold text-2xl">{project.title}</h3>
          </div>
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary p-2 text-primary-foreground transition-transform hover:scale-110"
          >
            <FiGithub className="h-5 w-5" />
          </Link>
        </div>

        <p className="mb-6 text-muted-foreground">{project.description}</p>

        <div className="mb-8">
          <h4 className="mb-3 font-semibold text-lg">Key Features</h4>
          <ProjectFeatures features={project.features} />
        </div>

        <TechnologyBadges technologies={project.technologies} />
      </div>
    </motion.div>
  );
}

// Project data
const projects: Project[] = [
  {
    title: "MathonGo LMS",
    description:
      "A comprehensive Learning Management Platform supporting 15,000 active users and handling 1 million daily requests. Built with NodeJS, ExpressJS, MongoDB, and Redis for robust and scalable solutions.",
    githubUrl: "https://app.mathongo.com",
    technologies: [
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Redis",
      "RESTful APIs",
      "OAuth",
    ],
    features: [
      "Scalable backend architecture handling 1M+ daily requests",
      "Redis caching for enhanced performance",
      "Secure OAuth authentication",
      "RESTful API design for efficient communication",
      "AWS Lambda integration for complex calculations",
      "High availability and performance optimization",
    ],
  },
  {
    title: "Quizrr Platform",
    description:
      "An online test series platform serving 100,000 active users and handling 10 million daily requests. Achieved 150% improvement in response performance through optimization.",
    githubUrl: "https://app.quizrr.in",
    technologies: [
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Redis",
      "RESTful APIs",
      "AWS Lambda",
    ],
    features: [
      "High-performance backend optimized for 10M+ daily requests",
      "150% improvement in response time",
      "Scalable architecture for 100K+ active users",
      "Efficient data retrieval and caching",
      "AWS Lambda integration for complex operations",
      "Cross-functional team collaboration",
    ],
  },
  {
    title: "MARKS App",
    description:
      "A JEE/NEET Preparation App with 1.6 million active users and 50 million daily requests. Achieved 50% improvement in response time through backend optimization.",
    githubUrl: "https://web.getmarks.app",
    technologies: [
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Redis",
      "RESTful APIs",
      "AWS Lambda",
    ],
    features: [
      "Massive scale handling 50M+ daily requests",
      "50% improvement in response time",
      "Support for 1.6M+ active users",
      "Optimized backend architecture",
      "Efficient data management and retrieval",
      "High availability and reliability",
    ],
  },
  {
    title: "CloudLab (Infrastructure as Code)",
    description:
      "A 4-node Kubernetes cluster deployment on Oracle Cloud Infrastructure (OCI) using Terraform for Infrastructure as Code (IaC).",
    githubUrl: "https://github.com/KakatkarAkshay/cloudlab_infra",
    technologies: [
      "Terraform",
      "Kubernetes",
      "Oracle Cloud",
      "Cloud-init",
      "GitOps",
      "Prometheus",
      "Grafana",
      "Loki",
    ],
    features: [
      "Automated infrastructure provisioning using Terraform",
      "4-node Kubernetes cluster setup",
      "Cloud-init for instance configuration",
      "GitOps with ArgoCD and FluxCD",
      "Comprehensive monitoring with Prometheus, Grafana, and Loki",
      "Backups to S3-compatible storage (Cloudflare R2)",
    ],
  },
];

export function ProjectsSection() {
  return (
    <SectionContainer id="projects" className="bg-accent/20">
      <SectionHeading text="Featured Projects" />
      <SectionDescription text="Exploring my technical projects and their implementations." />

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-1 lg:grid-cols-1"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </SectionContainer>
  );
}
