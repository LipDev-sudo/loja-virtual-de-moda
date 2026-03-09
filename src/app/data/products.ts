export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  description: string;
  details: string[];
  image: string;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  isNew?: boolean;
  isSale?: boolean;
}

export const HERO_IMAGE = "https://images.unsplash.com/photo-1771072426459-1ab467cd80f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwbW9kZWwlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzMwNTcyMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export const LOOKBOOK_IMAGE = "https://images.unsplash.com/photo-1733324961705-97bd6cd7f4ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwbW9kZWxzJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NzMwNTcyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export const CATEGORY_IMAGES = {
  vestidos: "https://images.unsplash.com/photo-1763987275895-72f645d0acbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZsb3JhbCUyMGRyZXNzJTIwc3VtbWVyJTIwb3V0ZG9vcnN8ZW58MXx8fHwxNzczMDU3MjM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  blazers: "https://images.unsplash.com/photo-1767609127923-14192f306af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwd29tYW4lMjBibGF6ZXIlMjBzdHJlZXQlMjBzdHlsZXxlbnwxfHx8fDE3NzMwNTcyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  acessorios: "https://images.unsplash.com/photo-1717282924526-07a7373bb142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBqZXdlbHJ5JTIwcHJvZHVjdCUyMHdoaXRlfGVufDF8fHx8MTc3MzA1NzIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  bolsas: "https://images.unsplash.com/photo-1611350037371-f9e6a7da240a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcm9zc2JvZHklMjBiYWclMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MzA1NzI0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

export const products: Product[] = [
  {
    id: "1",
    name: "Vestido Midi Seda",
    price: 1290,
    category: "Vestidos",
    description: "Vestido midi em seda pura com caimento fluido e elegante. Perfeito para ocasiões especiais e eventos sofisticados.",
    details: ["100% Seda pura", "Caimento fluido", "Forro interno", "Lavagem a seco"],
    image: "https://images.unsplash.com/photo-1741816219281-371d26f23fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBlbGVnYW50JTIwYmxhY2slMjBkcmVzcyUyMHN0dWRpb3xlbnwxfHx8fDE3NzMwNTcyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1741816219281-371d26f23fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBlbGVnYW50JTIwYmxhY2slMjBkcmVzcyUyMHN0dWRpb3xlbnwxfHx8fDE3NzMwNTcyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1773005695434-69abf20398cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGRyZXNzJTIwZWxlZ2FudCUyMGV2ZW5pbmclMjBnb3dufGVufDF8fHx8MTc3MzA1NzIzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    colors: [
      { name: "Preto", hex: "#1a1a1a" },
      { name: "Champagne", hex: "#f5e6d3" },
      { name: "Bordeaux", hex: "#722f37" },
    ],
    sizes: ["PP", "P", "M", "G", "GG"],
    isNew: true,
  },
  {
    id: "2",
    name: "Blazer Alfaiataria",
    price: 890,
    originalPrice: 1190,
    category: "Blazers",
    description: "Blazer estruturado em tecido premium com corte impecável. Versatilidade que transita do escritório ao jantar.",
    details: ["Tecido premium", "Corte estruturado", "Dois bolsos frontais", "Forro acetinado"],
    image: "https://images.unsplash.com/photo-1770364019737-aca75ef026fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsYXplciUyMHByb2Zlc3Npb25hbCUyMG91dGZpdHxlbnwxfHx8fDE3NzMwNTcyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1770364019737-aca75ef026fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsYXplciUyMHByb2Zlc3Npb25hbCUyMG91dGZpdHxlbnwxfHx8fDE3NzMwNTcyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1767609127923-14192f306af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwd29tYW4lMjBibGF6ZXIlMjBzdHJlZXQlMjBzdHlsZXxlbnwxfHx8fDE3NzMwNTcyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    colors: [
      { name: "Preto", hex: "#1a1a1a" },
      { name: "Camel", hex: "#c4956a" },
    ],
    sizes: ["PP", "P", "M", "G", "GG"],
    isSale: true,
  },
  {
    id: "3",
    name: "Bolsa Couro Italiano",
    price: 2490,
    category: "Bolsas",
    description: "Bolsa em couro italiano legítimo com acabamento artesanal. Uma peça atemporal para compor qualquer look.",
    details: ["Couro italiano legítimo", "Acabamento artesanal", "Alça ajustável", "Fecho magnético"],
    image: "https://images.unsplash.com/photo-1596552639068-99bd471b579c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwaGFuZGJhZyUyMHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzMwNTIzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1596552639068-99bd471b579c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwaGFuZGJhZyUyMHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzMwNTIzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1611350037371-f9e6a7da240a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcm9zc2JvZHklMjBiYWclMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MzA1NzI0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    colors: [
      { name: "Cognac", hex: "#9a4e1c" },
      { name: "Preto", hex: "#1a1a1a" },
      { name: "Creme", hex: "#f5f0e8" },
    ],
    sizes: ["Único"],
    isNew: true,
  },
  {
    id: "4",
    name: "Sandália Salto Bloco",
    price: 690,
    category: "Sapatos",
    description: "Sandália de salto bloco em couro macio com design contemporâneo. Conforto e elegância em cada passo.",
    details: ["Couro macio", "Salto bloco 7cm", "Palmilha acolchoada", "Solado antiderrapante"],
    image: "https://images.unsplash.com/photo-1566499003412-4736d6099504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhpZ2glMjBoZWVsJTIwc2FuZGFscyUyMHByb2R1Y3R8ZW58MXx8fHwxNzczMDU3MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1566499003412-4736d6099504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhpZ2glMjBoZWVsJTIwc2FuZGFscyUyMHByb2R1Y3R8ZW58MXx8fHwxNzczMDU3MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1676838179247-6e60dba67d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGlsZXR0byUyMHNob2VzJTIwYmxhY2slMjBwcm9kdWN0JTIwcGhvdG98ZW58MXx8fHwxNzczMDU3MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    colors: [
      { name: "Nude", hex: "#d4a574" },
      { name: "Preto", hex: "#1a1a1a" },
    ],
    sizes: ["35", "36", "37", "38", "39", "40"],
  },
  {
    id: "5",
    name: "Blusa Cetim",
    price: 490,
    category: "Blusas",
    description: "Blusa em cetim com brilho sutil e toque sedoso. Peça versátil para composições elegantes.",
    details: ["Cetim premium", "Toque sedoso", "Modelagem solta", "Botões forrados"],
    image: "https://images.unsplash.com/photo-1592339358596-774f79021f34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNhdGluJTIwYmxvdXNlJTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzA1NzIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1592339358596-774f79021f34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNhdGluJTIwYmxvdXNlJTIwZmFzaGlvbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzA1NzIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    colors: [
      { name: "Off-White", hex: "#faf8f5" },
      { name: "Rosa Antigo", hex: "#c4858a" },
      { name: "Verde Oliva", hex: "#556b2f" },
    ],
    sizes: ["PP", "P", "M", "G"],
  },
  {
    id: "6",
    name: "Calça Wide Leg",
    price: 590,
    category: "Calças",
    description: "Calça wide leg em tecido fluido com cintura alta. Silhueta moderna que alonga e valoriza.",
    details: ["Tecido fluido", "Cintura alta", "Pernas amplas", "Zíper lateral invisível"],
    image: "https://images.unsplash.com/photo-1762331224129-783a3ea1fc3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdpZGUlMjBsZWclMjB0cm91c2VycyUyMG91dGZpdHxlbnwxfHx8fDE3NzMwNTcyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1762331224129-783a3ea1fc3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdpZGUlMjBsZWclMjB0cm91c2VycyUyMG91dGZpdHxlbnwxfHx8fDE3NzMwNTcyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    colors: [
      { name: "Preto", hex: "#1a1a1a" },
      { name: "Bege", hex: "#d4c5a9" },
    ],
    sizes: ["PP", "P", "M", "G", "GG"],
  },
  {
    id: "7",
    name: "Colar Dourado Minimal",
    price: 390,
    category: "Acessórios",
    description: "Colar em banho de ouro 18k com design minimalista. A joia perfeita para o dia a dia sofisticado.",
    details: ["Banho de ouro 18k", "Design minimalista", "Fecho ajustável", "Antialérgico"],
    image: "https://images.unsplash.com/photo-1717282924526-07a7373bb142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBqZXdlbHJ5JTIwcHJvZHVjdCUyMHdoaXRlfGVufDF8fHx8MTc3MzA1NzIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1717282924526-07a7373bb142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbmVja2xhY2UlMjBqZXdlbHJ5JTIwcHJvZHVjdCUyMHdoaXRlfGVufDF8fHx8MTc3MzA1NzIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    colors: [
      { name: "Dourado", hex: "#d4a94c" },
      { name: "Prata", hex: "#c0c0c0" },
    ],
    sizes: ["Único"],
  },
  {
    id: "8",
    name: "Casaco Lã Premium",
    price: 1890,
    originalPrice: 2390,
    category: "Casacos",
    description: "Casaco em lã premium com corte reto e acabamento impecável. Elegância para os dias frios.",
    details: ["Lã premium", "Corte reto", "Bolsos internos", "Forrado"],
    image: "https://images.unsplash.com/photo-1695452819219-fa756a6e518d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNhbWVsJTIwd29vbCUyMGNvYXQlMjB3aW50ZXIlMjBmYXNoaW9ufGVufDF8fHx8MTc3MzA1NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    images: [
      "https://images.unsplash.com/photo-1695452819219-fa756a6e518d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNhbWVsJTIwd29vbCUyMGNvYXQlMjB3aW50ZXIlMjBmYXNoaW9ufGVufDF8fHx8MTc3MzA1NzIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
    colors: [
      { name: "Camel", hex: "#c4956a" },
      { name: "Cinza", hex: "#808080" },
      { name: "Preto", hex: "#1a1a1a" },
    ],
    sizes: ["PP", "P", "M", "G", "GG"],
    isSale: true,
  },
];

export const categories = [
  "Todos",
  "Vestidos",
  "Blazers",
  "Blusas",
  "Calças",
  "Casacos",
  "Bolsas",
  "Sapatos",
  "Acessórios",
];
