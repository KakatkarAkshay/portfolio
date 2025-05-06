"use client";

import { motion } from "framer-motion";

// Section heading component used across sections
export function SectionHeading({ text }: { text: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 text-center font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl"
    >
      {text}
    </motion.h2>
  );
}

// Section description component used across sections
export function SectionDescription({ text }: { text: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="mx-auto mb-16 max-w-[700px] text-center text-lg text-muted-foreground"
    >
      {text}
    </motion.p>
  );
}

// Section container component used across sections
export function SectionContainer({
  id,
  className = "",
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`w-full py-12 md:py-24 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">{children}</div>
    </section>
  );
}

// Animated list item component used across sections
export function AnimatedListItem({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: delay, duration: 0.3 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.li>
  );
}

// Animated badge component used across sections
export function AnimatedBadge({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.2 }}
      viewport={{ once: true }}
      className={`inline-flex rounded-full bg-primary/10 px-3 py-1 font-medium text-primary text-xs ${className}`}
    >
      {children}
    </motion.span>
  );
}

// Animated card component used across sections
export function AnimatedCard({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`rounded-xl border bg-card p-6 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
