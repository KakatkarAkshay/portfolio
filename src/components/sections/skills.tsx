"use client";

import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/constants/data";
import {
  AnimatedCard,
  SectionContainer,
  SectionHeading,
} from "../shared/section-components";

// Skill badge component
function SkillBadge({ skill }: { skill: string }) {
  return (
    <Badge variant="secondary" className="px-3 py-1 text-sm">
      {skill}
    </Badge>
  );
}

// Skill category card component
function SkillCategoryCard({
  category,
  skills,
  index,
}: {
  category: string;
  skills: string[];
  index: number;
}) {
  return (
    <AnimatedCard delay={index * 0.1}>
      <h3 className="mb-4 font-bold text-xl">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </AnimatedCard>
  );
}

export function SkillsSection() {
  return (
    <SectionContainer id="skills" className="bg-muted/50">
      <SectionHeading text="Skills & Technologies" />
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {skillsData.map((category, idx) => (
          <SkillCategoryCard
            key={category.category}
            category={category.category}
            skills={category.skills}
            index={idx}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
