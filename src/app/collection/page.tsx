import type { Metadata } from "next";
import CarpetCard from "@/components/CarpetCard";
import { carpets } from "@/data/carpets";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "Browse our full collection of handwoven Mexican-American inspired carpets and rugs. Navajo, Saltillo, Chimayo, Otomi and more.",
};

export default function CollectionPage() {
  return (
    <div className="px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-terracotta">
            The Collection
          </p>
          <h1 className="font-serif text-4xl font-bold text-navy md:text-5xl">
            Eight stories in wool
          </h1>
          <p className="mt-4 text-lg text-navy/65">
            Each carpet is woven by hand using traditional techniques and natural dyes.
            From the high deserts of New Mexico to the workshops of Oaxaca and Saltillo.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {carpets.map((carpet, i) => (
            <CarpetCard key={carpet.id} carpet={carpet} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
