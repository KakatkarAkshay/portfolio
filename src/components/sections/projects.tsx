"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  features: string[];
};

export function ProjectsSection() {
  const projects: Project[] = [
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-12 md:py-24 bg-accent/20 w-full">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-[700px] text-center text-lg text-muted-foreground"
        >
          Exploring my technical projects and their implementations.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-1 lg:grid-cols-1"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-md"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="p-8">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
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

                <p className="mb-6 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="mb-3 text-lg font-semibold">Key Features</h4>
                  <ul className="ml-5 space-y-2 list-disc text-muted-foreground">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.05, duration: 0.2 }}
                      viewport={{ once: true }}
                      className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
