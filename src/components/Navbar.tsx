"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "Collection" },
  { href: "/story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="h-10 w-10 rounded-full mexican-stripe transition-transform group-hover:scale-105" />
        <span className="font-serif text-xl font-bold tracking-tight text-navy md:text-2xl">
          MexAmericana
        </span>
      </Link>

      <div className="hidden items-center gap-8 text-sm font-medium text-navy/80 md:flex">
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative transition-colors hover:text-terracotta ${
                isActive ? "text-terracotta" : ""
              }`}
            >
              {link.label}
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-terracotta"
                />
              )}
            </Link>
          );
        })}
        <Link
          href="/contact"
          className="rounded-full bg-terracotta px-5 py-2.5 text-white shadow-lg shadow-terracotta/30 transition-all hover:bg-terracotta-light"
        >
          Commission
        </Link>
      </div>

      {/* Mobile */}
      <div className="flex items-center gap-4 md:hidden">
        <Link
          href="/collection"
          className="text-sm font-medium text-navy hover:text-terracotta"
        >
          Collection
        </Link>
        <Link
          href="/contact"
          className="rounded-full bg-terracotta px-4 py-2 text-sm font-medium text-white"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
