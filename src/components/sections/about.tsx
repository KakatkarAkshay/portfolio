"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionContainer, SectionHeading } from "../shared/section-components";

// Profile image component
function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="flex items-center justify-center"
    >
      <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary shadow-xl">
        <Image
          src="/profile.jpg"
          alt="Akshay Kakatkar"
          fill
          className="object-cover"
          priority
        />
      </div>
    </motion.div>
  );
}

// Bio text component
function BioText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col gap-6"
    >
      <h3 className="font-bold text-2xl">DevOps & Cloud Professional</h3>
      <p className="text-lg text-muted-foreground">
        I'm Akshay Kakatkar, a DevOps engineer with expertise in cloud
        infrastructure and automation. With a background in software
        development, I specialize in building and maintaining robust, scalable
        cloud solutions using technologies like Docker, Kubernetes, and
        Terraform.
      </p>
      <p className="text-lg text-muted-foreground">
        I'm passionate about creating efficient, automated workflows that enable
        teams to deliver software faster and more reliably.
      </p>
      <p className="text-lg text-muted-foreground">
        Currently, I'm working as a Software Developer at MathonGo, where I
        contribute to both backend and frontend development.
      </p>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <SectionContainer id="about">
      <SectionHeading text="About Me" />
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <ProfileImage />
        <BioText />
      </div>
    </SectionContainer>
  );
}
