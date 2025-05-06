"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

// Social link button component
function SocialLinkButton({
  href,
  icon: Icon,
  label,
  variant = "primary",
}: {
  href: string;
  icon: typeof FiGithub;
  label: string;
  variant?: "primary" | "accent" | "secondary";
}) {
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
  };

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 rounded-full px-6 py-3 shadow-sm transition-colors ${variantStyles[variant]}`}
      >
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </motion.button>
    </Link>
  );
}

// Scroll indicator component
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.7,
        repeat: Number.POSITIVE_INFINITY,
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
        role="img"
        aria-label="Scroll down"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </motion.div>
  );
}

// Animated heading component
function AnimatedHeading({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <h2 className={className}>{text}</h2>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center py-12 md:py-24">
      <div className="-z-10 absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <AnimatedHeading
            text="Akshay Kakatkar"
            className="font-bold text-4xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
          />

          <AnimatedHeading
            text="Crafting Scalable Solutions for the Cloud"
            className="font-medium text-2xl text-muted-foreground sm:text-3xl"
            delay={0.1}
          />

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
            className="mt-4 flex flex-wrap justify-center gap-4"
          >
            <SocialLinkButton
              href="https://github.com/KakatkarAkshay"
              icon={FiGithub}
              label="GitHub"
              variant="primary"
            />
            <SocialLinkButton
              href="https://www.linkedin.com/in/akshay-kakatkar-4ba900270"
              icon={FiLinkedin}
              label="LinkedIn"
              variant="accent"
            />
            <SocialLinkButton
              href="mailto:me@kakatkarakshay.dev"
              icon={FiMail}
              label="Contact"
              variant="secondary"
            />
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
