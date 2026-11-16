"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-terracotta">
            Contact
          </p>
          <h1 className="font-serif text-4xl font-bold text-navy md:text-5xl">
            Start a conversation
          </h1>
          <p className="mt-4 text-lg text-navy/65">
            Whether you want to purchase a piece from the collection, join a waitlist,
            or commission something entirely unique — we would love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-terracotta/10">
                <Mail className="h-5 w-5 text-terracotta" />
              </div>
              <div>
                <h3 className="font-semibold text-navy">Email</h3>
                <a
                  href="mailto:hello@mexamericana.com"
                  className="mt-1 text-navy/70 hover:text-terracotta transition-colors"
                >
                  hello@mexamericana.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-turquoise/10">
                <MapPin className="h-5 w-5 text-turquoise" />
              </div>
              <div>
                <h3 className="font-semibold text-navy">Studios</h3>
                <p className="mt-1 text-navy/70">Santa Fe, New Mexico</p>
                <p className="text-navy/70">Mexico City</p>
                <p className="mt-1 text-sm text-navy/50">Appointments by arrangement</p>
              </div>
            </div>

            <div className="rounded-2xl bg-navy p-6 text-white">
              <h3 className="font-serif text-xl font-bold">Commission Process</h3>
              <ol className="mt-4 space-y-3 text-sm text-white/80">
                <li className="flex gap-3">
                  <span className="font-bold text-gold">1.</span>
                  Tell us about your space, preferred colors, and size.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gold">2.</span>
                  We propose designs and a timeline (usually 8–16 weeks).
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gold">3.</span>
                  Your carpet is woven by hand and shipped with care.
                </li>
              </ol>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center rounded-3xl border border-navy/10 bg-white p-12 text-center shadow-xl"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-turquoise/15">
                  <Send className="h-7 w-7 text-turquoise" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy">Message received</h3>
                <p className="mt-3 max-w-sm text-navy/60">
                  Thank you. We will get back to you within two business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm font-semibold text-terracotta hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-navy/10 bg-white p-8 shadow-xl md:p-10"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-navy">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-xl border border-navy/15 bg-sand/30 px-4 py-3 text-navy outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-navy">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full rounded-xl border border-navy/15 bg-sand/30 px-4 py-3 text-navy outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-navy">
                    Interest
                  </label>
                  <select className="w-full rounded-xl border border-navy/15 bg-sand/30 px-4 py-3 text-navy outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/20">
                    <option>Purchase from collection</option>
                    <option>Commission a custom piece</option>
                    <option>Join waitlist</option>
                    <option>General inquiry</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-navy">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-navy/15 bg-sand/30 px-4 py-3 text-navy outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/20"
                    placeholder="Tell us about the piece you have in mind, preferred colors, size, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-terracotta py-4 text-base font-semibold text-white shadow-lg shadow-terracotta/30 transition-all hover:bg-orange-600"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
