"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative rounded-md p-2 transition-colors hover:bg-accent"
      aria-label="Toggle theme"
      type="button"
    >
      <FiSun className="dark:-rotate-90 h-5 w-5 rotate-0 scale-100 transition-all dark:scale-0" />
      <FiMoon className="absolute top-2 left-2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
