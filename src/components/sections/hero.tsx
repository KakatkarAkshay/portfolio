"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center py-12 md:py-24 w-full">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="inline-block bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent animate-gradient bg-[size:400%]">
                Akshay Kakatkar
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-medium text-muted-foreground sm:text-3xl">
              Crafting Scalable Solutions for the Cloud
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[700px] text-lg text-muted-foreground md:text-xl"
          >
            DevOps engineer skilled in cloud infrastructure and automation.
            Expertise includes Docker, Kubernetes, Terraform, and CI/CD.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="https://github.com/KakatkarAkshay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                <FiGithub className="h-5 w-5" />
                <span>GitHub</span>
              </motion.button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/akshay-kakatkar-4ba900270"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
              >
                <FiLinkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </motion.button>
            </Link>
            <Link href="mailto:me@kakatkarakshay.dev">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/90"
              >
                <FiMail className="h-5 w-5" />
                <span>Contact</span>
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            }}
            className="absolute bottom-10"
          >
            <svg
              className="h-8 w-8 text-muted-foreground"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
