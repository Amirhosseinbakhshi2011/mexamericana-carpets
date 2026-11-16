import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Ruler, Layers, Check } from "lucide-react";
import { carpets, getCarpetBySlug } from "@/data/carpets";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return carpets.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const carpet = getCarpetBySlug(slug);
  if (!carpet) return { title: "Not Found" };
  return {
    title: carpet.name,
    description: carpet.description,
  };
}

export default async function CarpetDetailPage({ params }: Props) {
  const { slug } = await params;
  const carpet = getCarpetBySlug(slug);

  if (!carpet) notFound();

  return (
    <div className="px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/collection"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-navy/60 transition-colors hover:text-terracotta"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Collection
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Visual */}
          <div>
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl"
              style={{
                background: `linear-gradient(145deg, ${carpet.colors[0]} 0%, ${carpet.colors[1]} 35%, ${carpet.colors[2] || carpet.colors[0]} 70%, ${carpet.colors[3] || carpet.colors[1]} 100%)`,
              }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 16px, rgba(0,0,0,0.15) 16px, rgba(0,0,0,0.15) 32px)`,
                }}
              />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                {carpet.colors.map((c) => (
                  <div
                    key={c}
                    className="h-10 w-10 rounded-full border-4 border-white/90 shadow-lg"
                    style={{ backgroundColor: c }}
                    title={c}
                  />
                ))}
              </div>
              {carpet.limited && (
                <span className="absolute top-6 right-6 rounded-full bg-white px-4 py-1.5 text-sm font-bold text-terracotta shadow">
                  Limited Edition
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-turquoise">
              <MapPin className="h-4 w-4" />
              {carpet.origin}
            </div>
            <h1 className="font-serif text-4xl font-bold text-navy md:text-5xl">
              {carpet.name}
            </h1>
            <p className="mt-2 text-lg text-navy/50">{carpet.style}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-bold text-terracotta">
                ${carpet.price.toLocaleString()}
              </span>
              {carpet.inStock ? (
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                  In Stock
                </span>
              ) : (
                <span className="rounded-full bg-navy/10 px-3 py-1 text-sm font-medium text-navy/60">
                  Currently Unavailable
                </span>
              )}
            </div>

            <p className="mt-8 text-base leading-relaxed text-navy/75">
              {carpet.description}
            </p>

            <div className="mt-8 space-y-4 rounded-2xl bg-white/80 p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Ruler className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" />
                <div>
                  <p className="text-sm font-semibold text-navy">Dimensions</p>
                  <p className="text-sm text-navy/60">{carpet.dimensions}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" />
                <div>
                  <p className="text-sm font-semibold text-navy">Materials</p>
                  <p className="text-sm text-navy/60">{carpet.materials.join(" · ")}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy">
                Features
              </h3>
              <ul className="space-y-2">
                {carpet.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-navy/75">
                    <Check className="h-4 w-4 text-turquoise" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {carpet.inStock ? (
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-4 text-base font-semibold text-white shadow-lg shadow-terracotta/30 transition-all hover:bg-orange-600"
                >
                  Inquire / Purchase
                </Link>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-4 text-base font-semibold text-white"
                >
                  Join Waitlist
                </Link>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-navy/15 px-8 py-4 text-base font-semibold text-navy transition-colors hover:border-terracotta hover:text-terracotta"
              >
                Commission Similar
              </Link>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="mt-20 max-w-3xl">
          <h2 className="font-serif text-2xl font-bold text-navy md:text-3xl">
            The Story Behind the Weave
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/70">{carpet.story}</p>
        </div>
      </div>
    </div>
  );
}
