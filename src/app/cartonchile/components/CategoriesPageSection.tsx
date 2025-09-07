import CategorySection from "./CategorySection";

export default function CategoriesPageSection() {
  const items = [
    {
      title: "Caja Tradicional de Embalaje con o sin Impresión",
      images: [
        {
          src: "/cartonchile/cajas_tradicionales.png",
          alt: "Caja tradicional 1",
        },
      ],
    },
    {
      title: "Caja Exhibidora para Retail (Café o Blanca)",
      images: [
        {
          src: "/cartonchile/caja_exhibidora.png",
          alt: "Caja exhibidora 1",
        },
      ],
    },
    {
      title: "Caja Vinos con Tabique e Individuales",
      images: [
        {
          src: "/cartonchile/caja_vinos.png",
          alt: "Caja de vino con tabique",
        },
      ],
    },
    {
      title: "Cajas Pizza con o sin Impresión",
      images: [
        {
          src: "/cartonchile/caja_pizza.png",
          alt: "Caja de pizza impresa",
        },
      ],
    },
    {
      title: "Cajas industria hortofrutícola",
      images: [
        {
          src: "/cartonchile/caja_hortofruticola.png",
          alt: "Caja hortofrutícola impresa",
        },
      ],
    },
    {
      title: "Cajas Auto Armables",
      images: [
        {
          src: "/cartonchile/cajas_tradicionales.png",
          alt: "Caja autoarmable 1",
        },
      ],
    },
  ];

  return <CategorySection items={items} />;
}
