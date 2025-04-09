"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[1200px] mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-6 md:gap-10"
        >
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold inline-block text-xl">
              Akshay Kakatkar
            </span>
          </Link>
        </motion.div>

        <div className="flex items-center gap-2">
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: navItems.findIndex((i) => i.path === item.path) * 0.1,
                }}
              >
                <Link
                  href={item.path}
                  className={`relative text-sm font-medium transition-colors hover:text-foreground/80 ${
                    pathname === item.path
                      ? "text-foreground"
                      : "text-foreground/60"
                  }`}
                >
                  {item.label}
                  {pathname === item.path && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[2px] w-full bg-foreground"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
