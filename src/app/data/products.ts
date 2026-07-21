export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  details: string[];
  image: string;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
}

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1771072426459-1ab467cd80f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwbW9kZWwlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzMwNTcyMzh8MA&ixlib=rb-4.1.0&q=80&w=1600";

export const LOOKBOOK_IMAGE =
  "https://images.unsplash.com/photo-1733324961705-97bd6cd7f4ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcnVud2F5JTIwbW9kZWxzJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NzMwNTcyMzl8MA&ixlib=rb-4.1.0&q=80&w=1600";

const image = {
  dress:
    "https://images.unsplash.com/photo-1741816219281-371d26f23fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  blazer:
    "https://images.unsplash.com/photo-1770364019737-aca75ef026fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  bag:
    "https://images.unsplash.com/photo-1596552639068-99bd471b579c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  sandal:
    "https://images.unsplash.com/photo-1566499003412-4736d6099504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  shirt:
    "https://images.unsplash.com/photo-1592339358596-774f79021f34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  trousers:
    "https://images.unsplash.com/photo-1762331224129-783a3ea1fc3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  necklace:
    "https://images.unsplash.com/photo-1717282924526-07a7373bb142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  coat:
    "https://images.unsplash.com/photo-1545912193-41b5212f30ee?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.1.0",
};

export const products: Product[] = [
  {
    id: "1",
    name: "Camisa Ampla Areia",
    price: 349,
    category: "Partes de cima",
    description:
      "Camisa demonstrativa de modelagem ampla, pensada para funcionar aberta, fechada ou com as mangas dobradas.",
    details: ["Algodão demonstrativo", "Modelagem ampla", "Barra levemente arredondada"],
    image: image.shirt,
    images: [image.shirt],
    colors: [
      { name: "Areia", hex: "#c8b79f" },
      { name: "Branco", hex: "#f4f3ef" },
    ],
    sizes: ["PP", "P", "M", "G", "GG"],
  },
  {
    id: "2",
    name: "Calça Reta Grafite",
    price: 399,
    category: "Partes de baixo",
    description:
      "Calça demonstrativa de cintura alta e perna reta para combinar com camisas, tricôs e terceiras peças.",
    details: ["Tecido plano demonstrativo", "Cintura alta", "Bolsos laterais"],
    image: image.trousers,
    images: [image.trousers],
    colors: [
      { name: "Grafite", hex: "#343638" },
      { name: "Aveia", hex: "#c9bea9" },
    ],
    sizes: ["34", "36", "38", "40", "42", "44"],
  },
  {
    id: "3",
    name: "Blazer Leve Argila",
    price: 499,
    category: "Terceiras peças",
    description:
      "Blazer demonstrativo sem estrutura rígida, criado para acrescentar uma camada sem pesar a composição.",
    details: ["Viscose demonstrativa", "Ombro natural", "Dois bolsos frontais"],
    image: image.blazer,
    images: [image.blazer],
    colors: [
      { name: "Argila", hex: "#a65a4b" },
      { name: "Preto", hex: "#1f2021" },
    ],
    sizes: ["PP", "P", "M", "G", "GG"],
  },
  {
    id: "4",
    name: "Vestido Coluna Preto",
    price: 439,
    category: "Vestidos",
    description:
      "Vestido demonstrativo de linhas simples, adequado para sobreposições e mudanças rápidas de contexto.",
    details: ["Malha de viscose demonstrativa", "Comprimento midi", "Fenda lateral"],
    image: image.dress,
    images: [image.dress],
    colors: [
      { name: "Preto", hex: "#171819" },
      { name: "Telha", hex: "#934c3e" },
    ],
    sizes: ["PP", "P", "M", "G", "GG"],
  },
  {
    id: "5",
    name: "Blusa Fluida Marfim",
    price: 289,
    category: "Partes de cima",
    description:
      "Blusa demonstrativa de toque leve e desenho limpo para usar sozinha ou sob o blazer da cápsula.",
    details: ["Viscose demonstrativa", "Modelagem solta", "Acabamento fosco"],
    image: image.shirt,
    images: [image.shirt],
    colors: [
      { name: "Marfim", hex: "#e8e2d7" },
      { name: "Preto", hex: "#1f2021" },
    ],
    sizes: ["PP", "P", "M", "G"],
  },
  {
    id: "6",
    name: "Casaco Reto Aveia",
    price: 549,
    category: "Terceiras peças",
    description:
      "Casaco demonstrativo de corte reto para concluir as combinações de dias mais frios sem excesso de volume.",
    details: ["Lã mista demonstrativa", "Corte reto", "Forro leve"],
    image: image.coat,
    images: [image.coat],
    colors: [
      { name: "Aveia", hex: "#b9aa92" },
      { name: "Grafite", hex: "#444648" },
    ],
    sizes: ["PP", "P", "M", "G", "GG"],
  },
  {
    id: "7",
    name: "Bolsa Estruturada Conhaque",
    price: 379,
    category: "Acessórios",
    description:
      "Bolsa demonstrativa compacta com espaço para os itens essenciais do cotidiano.",
    details: ["Material sintético demonstrativo", "Alça regulável", "Fecho magnético"],
    image: image.bag,
    images: [image.bag],
    colors: [
      { name: "Conhaque", hex: "#8f4e2c" },
      { name: "Preto", hex: "#1f2021" },
    ],
    sizes: ["Único"],
  },
  {
    id: "8",
    name: "Sandália Bloco Preta",
    price: 329,
    category: "Acessórios",
    description:
      "Sandália demonstrativa de linhas discretas para acompanhar todas as bases da cápsula.",
    details: ["Material sintético demonstrativo", "Salto bloco de 5 cm", "Fivela ajustável"],
    image: image.sandal,
    images: [image.sandal, image.necklace],
    colors: [
      { name: "Preto", hex: "#1f2021" },
      { name: "Conhaque", hex: "#8f4e2c" },
    ],
    sizes: ["35", "36", "37", "38", "39", "40"],
  },
];

export const categories = [
  "Todas",
  "Partes de cima",
  "Partes de baixo",
  "Terceiras peças",
  "Vestidos",
  "Acessórios",
];
