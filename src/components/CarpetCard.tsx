"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { Carpet } from "@/data/carpets";

interface Props {
  carpet: Carpet;
  index?: number;
}

export default function CarpetCard({ carpet, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="carpet-card group overflow-hidden rounded-3xl border border-navy/5 bg-white shadow-xl shadow-navy/5"
    >
      <Link href={`/collection/${carpet.slug}`} className="block">
        <div
          className="relative h-52 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${carpet.colors[0]} 0%, ${carpet.colors[1]} 40%, ${carpet.colors[2] || carpet.colors[0]} 75%, ${carpet.colors[3] || carpet.colors[1]} 100%)`,
          }}
        >
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(0,0,0,0.12) 12px, rgba(0,0,0,0.12) 24px)`,
            }}
          />
          {carpet.limited && (
            <span className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-terracotta backdrop-blur">
              Limited
            </span>
          )}
          {!carpet.inStock && (
            <span className="absolute top-4 left-4 rounded-full bg-navy/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
              Sold Out
            </span>
          )}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {carpet.colors.slice(0, 5).map((c) => (
              <div
                key={c}
                className="h-5 w-5 rounded-full border-2 border-white/90 shadow-md"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        <div className="p-6">
          <div className="mb-1 flex items-center gap-1.5 text-xs font-medium text-turquoise">
            <MapPin className="h-3.5 w-3.5" />
            {carpet.origin}
          </div>
          <h3 className="font-serif text-xl font-bold text-navy group-hover:text-terracotta transition-colors">
            {carpet.name}
          </h3>
          <p className="mt-1 text-sm text-navy/50">{carpet.style}</p>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-navy/65">
            {carpet.description}
          </p>
          <div className="mt-5 flex items-center justify-between">
            <span className="text-lg font-bold text-terracotta">
              ${carpet.price.toLocaleString()}
            </span>
            <span className="rounded-full bg-sand px-4 py-2 text-sm font-semibold text-navy transition-colors group-hover:bg-terracotta group-hover:text-white">
              View Details
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
