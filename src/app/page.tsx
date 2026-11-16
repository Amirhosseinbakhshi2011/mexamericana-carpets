"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, Palette, Heart } from "lucide-react";

const carpets = [
  {
    id: 1,
    name: "Desert Sunrise",
    origin: "Sonoran × Arizona",
    colors: ["#C2410C", "#D97706", "#FEF3C7", "#0D9488"],
    price: "$1,240",
    description: "Bold geometric diamonds inspired by Navajo and Otomi motifs",
  },
  {
    id: 2,
    name: "Talavera Dreams",
    origin: "Puebla × New Mexico",
    colors: ["#0D9488", "#1E3A5F", "#E11D48", "#F59E0B"],
    price: "$980",
    description: "Intricate tile patterns reimagined as soft wool underfoot",
  },
  {
    id: 3,
    name: "Route 66 Weave",
    origin: "American Southwest",
    colors: ["#1E3A5F", "#C2410C", "#D97706", "#FEF9E7"],
    price: "$1,450",
    description: "Vintage highway spirit meets traditional serape stripes",
  },
  {
    id: 4,
    name: "Aztec Horizon",
    origin: "Central Mexico",
    colors: ["#E11D48", "#D97706", "#0D9488", "#1E3A5F"],
    price: "$1,680",
    description: "Sacred geometry and solar symbols in contemporary form",
  },
  {
    id: 5,
    name: "Canyon Echo",
    origin: "Grand Canyon × Chihuahua",
    colors: ["#C2410C", "#0F766E", "#F59E0B", "#FEF3C7"],
    price: "$1,120",
    description: "Layered earth tones echoing red rock and desert blooms",
  },
  {
    id: 6,
    name: "Borderland Bloom",
    origin: "Texas × Coahuila",
    colors: ["#0D9488", "#E11D48", "#D97706", "#1E3A5F"],
    price: "$890",
    description: "Floral and geometric hybrid celebrating shared heritage",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background pattern */}
      <div className="fixed inset-0 rug-pattern pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-full mexican-stripe" />
          <span className="font-serif text-xl font-bold tracking-tight text-navy md:text-2xl">
            MexAmericana
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden items-center gap-8 text-sm font-medium text-navy/80 md:flex"
        >
          <a href="#collection" className="hover:text-terracotta transition-colors">Collection</a>
          <a href="#story" className="hover:text-terracotta transition-colors">Our Story</a>
          <a href="#palette" className="hover:text-terracotta transition-colors">Palette</a>
          <a
            href="#contact"
            className="rounded-full bg-terracotta px-5 py-2.5 text-white shadow-lg shadow-terracotta/30 hover:bg-terracotta-light transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-6 pb-24 pt-12 md:px-12 lg:px-20 lg:pt-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-cream/80 px-4 py-1.5 text-sm font-medium text-terracotta backdrop-blur"
          >
            <Sparkles className="h-4 w-4" />
            Weaving Two Americas Together
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl font-bold leading-[1.1] tracking-tight text-navy md:text-7xl lg:text-8xl"
          >
            Carpets that tell
            <br />
            <span className="bg-gradient-to-r from-terracotta via-gold to-turquoise bg-clip-text text-transparent">
              the borderland story
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/70 md:text-xl"
          >
            Handwoven masterpieces born at the crossroads of Mexican tradition and
            American Southwest spirit. Every thread carries color, history, and soul.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#collection"
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-semibold text-white shadow-xl shadow-navy/20 transition-all hover:bg-navy-deep hover:shadow-2xl"
            >
              Explore Collection
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-2 rounded-full border-2 border-navy/15 bg-white/50 px-8 py-4 text-base font-semibold text-navy backdrop-blur transition-all hover:border-terracotta hover:text-terracotta"
            >
              Discover the Story
            </a>
          </motion.div>

          {/* Color strip */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 h-3 w-full max-w-3xl origin-left rounded-full mexican-stripe shadow-lg"
          />
        </div>
      </section>

      {/* Collection */}
      <section id="collection" className="relative z-10 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <motion.p variants={fadeUp} custom={0} className="mb-3 text-sm font-semibold uppercase tracking-widest text-terracotta">
              The Collection
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-4xl font-bold text-navy md:text-5xl">
              Six Stories in Wool
            </motion.h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {carpets.map((carpet, i) => (
              <motion.article
                key={carpet.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="carpet-card group overflow-hidden rounded-3xl border border-navy/5 bg-white shadow-xl shadow-navy/5"
              >
                {/* Pattern preview */}
                <div
                  className="relative h-48 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${carpet.colors[0]} 0%, ${carpet.colors[1]} 35%, ${carpet.colors[2]} 70%, ${carpet.colors[3]} 100%)`,
                  }}
                >
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)`,
                  }} />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    {carpet.colors.map((c) => (
                      <div
                        key={c}
                        className="h-6 w-6 rounded-full border-2 border-white/80 shadow-md"
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
                  <h3 className="font-serif text-xl font-bold text-navy">{carpet.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{carpet.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-lg font-bold text-terracotta">{carpet.price}</span>
                    <button className="rounded-full bg-sand px-4 py-2 text-sm font-semibold text-navy transition-colors group-hover:bg-terracotta group-hover:text-white">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="relative z-10 overflow-hidden bg-navy px-6 py-28 text-white md:px-12 lg:px-20">
        <div className="absolute inset-0 opacity-10 mexican-stripe" />
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Our Story</p>
            <h2 className="font-serif text-4xl font-bold md:text-5xl">
              Where Mexico meets America
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
              For centuries, the lands between the Rio Grande and the deserts of the Southwest
              have woven cultures together. MexAmericana celebrates that living tradition —
              taking ancient motifs, serape colors, Navajo geometry and Mexican folk art,
              then crafting them into modern heirlooms for contemporary homes.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              Every carpet is a conversation between two nations that share more history,
              color, and spirit than borders can ever divide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {[
              { icon: Palette, label: "12 Color Stories" },
              { icon: Heart, label: "Handwoven Love" },
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
          </motion.div>
        </div>
      </section>

      {/* Palette */}
      <section id="palette" className="relative z-10 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-terracotta">The Palette</p>
            <h2 className="font-serif text-4xl font-bold text-navy md:text-5xl">
              Colors that sing
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy/60">
              Our signature palette draws from desert sunsets, turquoise jewelry,
              adobe walls and the bold textiles of Oaxaca and Santa Fe.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "Terracotta", hex: "#C2410C", desc: "Adobe & clay" },
              { name: "Turquoise", hex: "#0D9488", desc: "Sky & stone" },
              { name: "Gold", hex: "#D97706", desc: "Desert sun" },
              { name: "Coral", hex: "#E11D48", desc: "Mexican rose" },
              { name: "Navy", hex: "#1E3A5F", desc: "Night canyon" },
              { name: "Cream", hex: "#FEF3C7", desc: "Sand & bone" },
            ].map((color, i) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group overflow-hidden rounded-2xl border border-navy/5 bg-white shadow-lg"
              >
                <div className="h-28 transition-transform duration-500 group-hover:scale-105" style={{ backgroundColor: color.hex }} />
                <div className="p-4">
                  <p className="font-semibold text-navy">{color.name}</p>
                  <p className="text-xs text-navy/50">{color.hex}</p>
                  <p className="mt-1 text-xs text-navy/40">{color.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative z-10 px-6 pb-32 pt-12 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-terracotta via-gold to-turquoise p-1 shadow-2xl"
        >
          <div className="rounded-[1.9rem] bg-navy px-8 py-16 text-center md:px-16">
            <h2 className="font-serif text-3xl font-bold text-white md:text-5xl">
              Bring the borderland home
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-white/70">
              Commission a custom piece or explore limited editions.
              Every carpet is made to order by master weavers.
            </p>
            <a
              href="mailto:hello@mexamericana.com"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-bold text-navy shadow-xl transition-transform hover:scale-105"
            >
              Start Your Commission
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-navy/10 px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-navy/50 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full mexican-stripe" />
            <span className="font-serif font-semibold text-navy">MexAmericana Carpets</span>
          </div>
          <p>Crafted with ❤️ by Amirhossein Bakhshi · Next.js 15</p>
        </div>
      </footer>
    </div>
  );
}
