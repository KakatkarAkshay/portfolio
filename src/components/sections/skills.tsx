"use client";

import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/constants/data";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-24 w-full bg-muted/50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-4 text-xl font-bold">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
