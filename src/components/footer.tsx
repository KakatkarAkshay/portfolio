"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-border/40 border-t bg-background py-6">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4 md:flex-row md:items-start"
          >
            <p className="text-muted-foreground text-sm">
              © {currentYear} Akshay Kakatkar. All rights reserved.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4"
          >
            <Link
              href="https://github.com/KakatkarAkshay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <FiGithub className="h-5 w-5" />
              </motion.div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/akshay-kakatkar-4ba900270"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <FiLinkedin className="h-5 w-5" />
              </motion.div>
            </Link>
            <Link href="mailto:me@kakatkarakshay.dev" aria-label="Email">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <FiMail className="h-5 w-5" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
