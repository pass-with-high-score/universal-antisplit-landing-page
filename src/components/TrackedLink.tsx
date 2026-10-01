"use client";

import Link from "next/link";
import React from "react";

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  eventName?: string;
  eventParams?: Record<string, unknown>;
  children: React.ReactNode;
  className?: string;
}

export default function TrackedLink({
  href,
  children,
  className,
  ...props
}: TrackedLinkProps) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
