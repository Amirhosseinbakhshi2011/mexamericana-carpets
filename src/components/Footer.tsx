import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-navy/10 bg-sand/50 px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full mexican-stripe" />
              <span className="font-serif text-xl font-bold text-navy">MexAmericana</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-navy/60">
              Handcrafted carpets and rugs that celebrate the living dialogue between
              Mexican textile traditions and the American Southwest.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy">Explore</h4>
            <ul className="space-y-2 text-sm text-navy/70">
              <li><Link href="/collection" className="hover:text-terracotta transition-colors">Collection</Link></li>
              <li><Link href="/story" className="hover:text-terracotta transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-terracotta transition-colors">Commission a Piece</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-navy">Connect</h4>
            <ul className="space-y-2 text-sm text-navy/70">
              <li><a href="mailto:hello@mexamericana.com" className="hover:text-terracotta transition-colors">hello@mexamericana.com</a></li>
              <li className="text-navy/50">Santa Fe · Mexico City · Online</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy/10 pt-8 text-sm text-navy/50 md:flex-row">
          <p>© {new Date().getFullYear()} MexAmericana Carpets. All rights reserved.</p>
          <p>Crafted by Amirhossein Bakhshi · Next.js 15</p>
        </div>
      </div>
    </footer>
  );
}
