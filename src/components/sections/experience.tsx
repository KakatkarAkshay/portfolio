"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

type Experience = {
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  description: string[];
};

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      title: "Software Developer",
      company: "MathonGo",
      companyUrl: "https://www.mathongo.com/",
      location: "Remote",
      period: "June 2024 - Present",
      description: [
        "Developed and maintained backend and frontend for a Learning Management Platform using NodeJS, ExpressJS, MongoDB, and Redis, providing robust and scalable solutions for managing user data and course content. The platform supports 15,000 active users and handles 1 million daily requests.",
        "Utilized Redis caching and integrated OAuth for secure authentication, enhancing performance, data retrieval efficiency, and user data privacy.",
        "Designed and implemented RESTful APIs to ensure efficient communication between frontend and backend components, delivering a consistent and engaging user experience.",
        "Worked on the backend for a JEE/NEET Preparation App with 1.6 million active users and 50 million daily requests, achieving a 50% improvement in response time.",
        "Optimized the backend for the Quizrr Platform, an online test series platform serving 100,000 active users and handling 10 million daily requests, boosting response performance by 150%.",
        "Leveraged AWS Lambda Functions to offload complex calculations from ExpressJS, reducing CPU usage and enhancing scalability.",
        "Collaborated with cross-functional teams to resolve issues, maintain backend reliability, and ensure high availability and performance across all platforms.",
      ],
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="experience" className="w-full py-12 md:py-24">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl"
        >
          Work Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-[700px] text-center text-lg text-muted-foreground"
        >
          My professional journey and accomplishments.
        </motion.p>

        <div className="mx-auto max-w-4xl">
          <div className="relative border-primary border-l-2 pt-2 pl-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                custom={index}
                variants={fadeInUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative mb-16"
              >
                <div className="-left-[45px] absolute top-0 h-6 w-6 rounded-full border-4 border-background bg-primary" />
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-xl">{experience.title}</h3>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-lg text-primary">
                          {experience.company}
                        </p>
                        <Link
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          <FiExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {experience.location} | {experience.period}
                      </p>
                    </div>
                  </div>

                  <ul className="ml-5 list-disc space-y-2 text-muted-foreground">
                    {experience.description.map((point, i) => (
                      <motion.li
                        key={`${point.slice(0, 20)}-${i}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "NodeJS",
                      "ExpressJS",
                      "MongoDB",
                      "Redis",
                      "RESTful APIs",
                      "AWS Lambda",
                    ].map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.05, duration: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-flex rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-xs"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
