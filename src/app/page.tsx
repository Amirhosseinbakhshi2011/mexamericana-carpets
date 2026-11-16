"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, Palette, Heart } from "lucide-react";
import CarpetCard from "@/components/CarpetCard";
import { getFeaturedCarpets } from "@/data/carpets";

const featured = getFeaturedCarpets(3);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative z-10 px-6 pb-20 pt-10 md:px-12 lg:px-20 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-cream/80 px-4 py-1.5 text-sm font-medium text-terracotta backdrop-blur"
          >
            <Sparkles className="h-4 w-4" />
            Weaving Two Americas Together
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl font-bold leading-[1.1] tracking-tight text-navy md:text-7xl lg:text-8xl"
          >
            Carpets that tell
            <br />
            <span className="bg-gradient-to-r from-terracotta via-gold to-turquoise bg-clip-text text-transparent">
              the borderland story
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/70 md:text-xl"
          >
            Handwoven masterpieces born at the crossroads of Mexican tradition and
            American Southwest spirit. Every thread carries color, history, and soul.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/collection"
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-semibold text-white shadow-xl shadow-navy/20 transition-all hover:bg-navy-deep"
            >
              Explore Collection
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/story"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 bg-white/50 px-8 py-4 text-base font-semibold text-navy backdrop-blur transition-all hover:border-terracotta hover:text-terracotta"
            >
              Discover the Story
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-16 h-3 w-full max-w-3xl origin-left rounded-full mexican-stripe shadow-lg"
          />
        </div>
      </section>

      {/* Featured */}
      <section className="relative z-10 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-terracotta">
                Featured Pieces
              </p>
              <h2 className="font-serif text-3xl font-bold text-navy md:text-4xl">
                From the current collection
              </h2>
            </div>
            <Link
              href="/collection"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-terracotta"
            >
              View all carpets
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((carpet, i) => (
              <CarpetCard key={carpet.id} carpet={carpet} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Story */}
      <section className="relative z-10 overflow-hidden bg-navy px-6 py-24 text-white md:px-12 lg:px-20">
        <div className="absolute inset-0 opacity-10 mexican-stripe" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            Why MexAmericana
          </p>
          <h2 className="font-serif text-3xl font-bold md:text-5xl">
            Where Mexico meets America
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            For centuries the lands between the Rio Grande and the deserts of the Southwest
            have woven cultures together. We celebrate that living tradition — taking
            ancient motifs, serape colors, Navajo geometry and Mexican folk art, then
            crafting them into modern heirlooms.
          </p>
          <Link
            href="/story"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
          >
            Read the full story
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { icon: Palette, label: "Natural Dyes" },
              { icon: Heart, label: "Handwoven" },
              { icon: MapPin, label: "Borderland Roots" },
              { icon: Sparkles, label: "Limited Editions" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <item.icon className="h-6 w-6 text-gold" />
                </div>
                <span className="text-sm font-medium text-white/90">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-terracotta via-gold to-turquoise p-1 shadow-2xl">
          <div className="rounded-[1.9rem] bg-navy px-8 py-16 text-center md:px-16">
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              Commission your own piece
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/70">
              Work directly with our weavers to create a one-of-a-kind carpet
              in the colors and scale of your space.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-bold text-navy shadow-xl transition-transform hover:scale-105"
            >
              Start a Conversation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
