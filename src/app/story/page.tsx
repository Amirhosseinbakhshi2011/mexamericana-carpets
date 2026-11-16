import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The living dialogue between Mexican textile traditions and the American Southwest — from Saltillo serapes to Chimayo weavings and Navajo geometry.",
};

export default function StoryPage() {
  return (
    <div className="px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-terracotta">
          Our Story
        </p>
        <h1 className="font-serif text-4xl font-bold text-navy md:text-5xl leading-tight">
          Weaving the Borderland
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-navy/70">
          For more than three centuries, the lands that stretch from central Mexico
          to the high deserts of the American Southwest have shared more than a border.
          They have shared threads, colors, symbols, and ways of making beauty underfoot.
        </p>

        <div className="mt-16 space-y-16">
          <section>
            <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
              The Saltillo Serape
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/70">
              In the 18th and 19th centuries, the finely woven serapes of Saltillo,
              Coahuila became the most coveted textiles of northern Mexico and the
              American frontier. Traders on the Santa Fe Trail carried them north.
              Ranchers, soldiers, and Native communities all prized their complex
              diamond medallions and brilliant colors. Today we revisit that
              tradition with modern materials and a contemporary eye.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
              Chimayo & the Northern New Mexico Tradition
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/70">
              In the mountain villages of northern New Mexico, Hispanic weavers
              developed a distinctive style that blended Spanish, Mexican, and
              Pueblo influences. The signature Chimayo cross, lightning motifs,
              and soft Churro wool remain living traditions. We work with weavers
              who still practice these techniques, keeping the cultural memory alive
              in every piece.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
              Navajo Geometry & Desert Color
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/70">
              The bold geometric language of Navajo (Diné) weaving — stepped diamonds,
              terraced outlines, and strong directional symbols — has influenced
              design across the Southwest for generations. Our pieces honor that
              visual power while remaining respectful of its cultural origins.
              Colors come from the same desert palette: iron-red cliffs, turquoise
              sky, sage, and sun-baked gold.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
              Mexican Folk & Pre-Hispanic Echoes
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy/70">
              From the embroidered gardens of Otomi textiles to the solar discs and
              stepped frets of Teotihuacan and the Aztec world, Mexican visual culture
              is rich with pattern and symbolism. We translate these motifs into
              woven form, using traditional natural dyes such as cochineal for deep
              reds and indigo for blues that feel both ancient and modern.
            </p>
          </section>

          <section className="rounded-3xl bg-navy px-8 py-12 text-white md:px-12">
            <h2 className="font-serif text-2xl font-bold md:text-3xl">
              Our Approach Today
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              MexAmericana is not a museum. It is a living workshop that sits at the
              crossroads of these traditions. Every carpet is designed with respect
              for cultural origins and made with the highest craft standards —
              natural fibers, traditional techniques, and colors that sing.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Whether you choose a classic Chimayo-inspired piece, a bold Saltillo
              revival, or a contemporary borderland landscape, you are bringing home
              a story that spans two nations and many centuries.
            </p>
            <Link
              href="/collection"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-navy transition-transform hover:scale-105"
            >
              Explore the Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
