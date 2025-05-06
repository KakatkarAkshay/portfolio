import type React from "react";

interface CardProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * A simple card component without "use client" directive
 * Can be used in:
 * 1. Server components directly
 * 2. Client components when wrapped with AsClient
 */
export function Card({ title, className = "", children }: CardProps) {
  return (
    <div className={`rounded-lg border bg-card p-6 shadow-sm ${className}`}>
      {title && <h3 className="mb-4 font-bold text-xl">{title}</h3>}
      {children}
    </div>
  );
}
