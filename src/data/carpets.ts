export type Carpet = {
  id: string;
  slug: string;
  name: string;
  origin: string;
  region: string;
  style: string;
  materials: string[];
  dimensions: string;
  price: number;
  colors: string[];
  description: string;
  story: string;
  features: string[];
  inStock: boolean;
  limited: boolean;
};

export const carpets: Carpet[] = [
  {
    id: "1",
    slug: "desert-sunrise",
    name: "Desert Sunrise",
    origin: "Sonoran Desert × Arizona",
    region: "American Southwest",
    style: "Navajo-inspired geometric",
    materials: ["Hand-spun wool", "Natural dyes"],
    dimensions: "8' × 10' (244 × 305 cm)",
    price: 2480,
    colors: ["#C2410C", "#D97706", "#FEF3C7", "#0D9488"],
    description:
      "Bold diamond and stepped motifs that echo the rising sun over red rock canyons. Woven with traditional techniques passed through generations of Southwest weavers.",
    story:
      "Inspired by classic Navajo chief blankets and the fiery skies of Monument Valley. Each diamond represents a mountain or a sacred direction. The warm terracotta base is dyed with madder root, while the turquoise accents come from indigo overdyed with local plants.",
    features: [
      "Handwoven on vertical loom",
      "100% natural dyes",
      "Reversible design",
      "Heirloom quality",
    ],
    inStock: true,
    limited: false,
  },
  {
    id: "2",
    slug: "talavera-dreams",
    name: "Talavera Dreams",
    origin: "Puebla × Santa Fe",
    region: "Central Mexico & New Mexico",
    style: "Talavera tile motif",
    materials: ["Merino wool", "Cotton warp"],
    dimensions: "6' × 9' (183 × 274 cm)",
    price: 1890,
    colors: ["#0D9488", "#1E3A5F", "#E11D48", "#F59E0B"],
    description:
      "Intricate ceramic-inspired patterns translated into soft wool. A modern homage to the famous Talavera pottery of Puebla and the blue doors of Santa Fe.",
    story:
      "Talavera ceramics arrived in Mexico with Spanish artisans and blended with indigenous designs. This carpet takes those cobalt blues, warm yellows and coral reds and softens them into a floor covering that feels both colonial and deeply Mexican.",
    features: [
      "High knot density",
      "Soft underfoot",
      "Colorfast natural dyes",
      "Signed by the weaver",
    ],
    inStock: true,
    limited: true,
  },
  {
    id: "3",
    slug: "route-66-weave",
    name: "Route 66 Weave",
    origin: "American Southwest",
    region: "Route 66 Corridor",
    style: "Serape stripe revival",
    materials: ["Wool", "Recycled cotton"],
    dimensions: "5' × 8' (152 × 244 cm)",
    price: 1650,
    colors: ["#1E3A5F", "#C2410C", "#D97706", "#FEF9E7"],
    description:
      "Vintage highway spirit meets traditional Mexican serape. Wide bold stripes that feel like an open road and a classic roadside blanket at the same time.",
    story:
      "Serapes have been worn and traded along the border for centuries. This piece reinterprets the classic Saltillo and Mexican serape stripes with the dusty, romantic colors of old Route 66 — neon signs, desert motels, and endless sky.",
    features: [
      "Lightweight yet durable",
      "Double-sided stripes",
      "Perfect for layering",
      "Vintage-inspired",
    ],
    inStock: true,
    limited: false,
  },
  {
    id: "4",
    slug: "aztec-horizon",
    name: "Aztec Horizon",
    origin: "Central Mexico",
    region: "Valley of Mexico",
    style: "Pre-Hispanic geometric",
    materials: ["Hand-spun wool", "Cochineal dye"],
    dimensions: "9' × 12' (274 × 366 cm)",
    price: 3200,
    colors: ["#E11D48", "#D97706", "#0D9488", "#1E3A5F"],
    description:
      "Sacred geometry and solar symbols reimagined for the contemporary home. Large-scale stepped frets and solar discs in deep cochineal red.",
    story:
      "Drawing from the stone carvings of Teotihuacan and the feathered serpent motifs of the Aztec empire, this large carpet brings pre-Hispanic power into modern interiors. The deep red is achieved with traditional cochineal, the insect dye that once colored the robes of emperors.",
    features: [
      "Monumental scale",
      "Cochineal natural dye",
      "Museum-quality craft",
      "Limited edition of 12",
    ],
    inStock: true,
    limited: true,
  },
  {
    id: "5",
    slug: "canyon-echo",
    name: "Canyon Echo",
    origin: "Grand Canyon × Chihuahua",
    region: "Borderland Deserts",
    style: "Landscape abstract",
    materials: ["Wool", "Natural plant dyes"],
    dimensions: "7' × 10' (213 × 305 cm)",
    price: 2140,
    colors: ["#C2410C", "#0F766E", "#F59E0B", "#FEF3C7"],
    description:
      "Layered earth tones that echo the stratified walls of the Grand Canyon and the vast deserts of northern Mexico.",
    story:
      "Standing on the South Rim or looking across the Chihuahuan Desert, the same colors appear: iron-red cliffs, sage green, sun-baked gold, and pale sand. This carpet captures that shared landscape language of the borderlands.",
    features: [
      "Organic undulating pattern",
      "Subtle color gradients",
      "Very soft hand",
      "Excellent for large rooms",
    ],
    inStock: true,
    limited: false,
  },
  {
    id: "6",
    slug: "borderland-bloom",
    name: "Borderland Bloom",
    origin: "Texas × Coahuila",
    region: "Rio Grande Valley",
    style: "Otomi floral hybrid",
    materials: ["Wool", "Cotton"],
    dimensions: "6' × 9' (183 × 274 cm)",
    price: 1780,
    colors: ["#0D9488", "#E11D48", "#D97706", "#1E3A5F"],
    description:
      "A joyful hybrid of Otomi embroidery flowers and Southwestern geometric frames. Celebrates the shared botanical heritage of the border.",
    story:
      "The Otomi people of central Mexico are famous for their vibrant embroidered animals and plants. Here those free-form blooms are disciplined by strong geometric borders, creating a dialogue between Mexican folk art and American Southwest design.",
    features: [
      "Playful yet refined",
      "Dense floral details",
      "Bright and energetic",
      "Great statement piece",
    ],
    inStock: true,
    limited: false,
  },
  {
    id: "7",
    slug: "chimayo-cross",
    name: "Chimayo Cross",
    origin: "Chimayo, New Mexico",
    region: "Northern New Mexico",
    style: "Chimayo traditional",
    materials: ["Hand-spun Churro wool"],
    dimensions: "4' × 6' (122 × 183 cm)",
    price: 1450,
    colors: ["#1E3A5F", "#C2410C", "#FEF3C7", "#D97706"],
    description:
      "Classic Chimayo weaving with the signature central cross and lightning motifs. Woven in the village that has kept this tradition alive for centuries.",
    story:
      "Chimayo weavers in northern New Mexico developed a distinctive style blending Spanish, Mexican, and Pueblo influences. The central cross and stepped diamonds are instantly recognizable and deeply rooted in the local Hispanic and Native communities.",
    features: [
      "Authentic Chimayo technique",
      "Churro wool (historic breed)",
      "Traditional size",
      "Strong cultural heritage",
    ],
    inStock: true,
    limited: true,
  },
  {
    id: "8",
    slug: "saltillo-serape",
    name: "Saltillo Serape",
    origin: "Saltillo, Coahuila",
    region: "Northern Mexico",
    style: "Classic Saltillo",
    materials: ["Fine wool", "Silk accents"],
    dimensions: "5' × 8.5' (152 × 259 cm)",
    price: 2950,
    colors: ["#C2410C", "#0D9488", "#F59E0B", "#1E3A5F", "#E11D48"],
    description:
      "A modern interpretation of the legendary Saltillo serape — once the most prized textile of northern Mexico and the American Southwest trade routes.",
    story:
      "In the 18th and 19th centuries, Saltillo serapes were status symbols across the borderlands. Their complex diamond medallions and rainbow of colors made them highly sought after by both Mexican elites and American traders on the Santa Fe Trail.",
    features: [
      "Complex central medallion",
      "Fine yarn count",
      "Silk highlights",
      "Collector-level piece",
    ],
    inStock: false,
    limited: true,
  },
];

export function getCarpetBySlug(slug: string): Carpet | undefined {
  return carpets.find((c) => c.slug === slug);
}

export function getFeaturedCarpets(count = 3): Carpet[] {
  return carpets.filter((c) => c.inStock).slice(0, count);
}
