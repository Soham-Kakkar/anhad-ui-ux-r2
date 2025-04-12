import BuyComponent from "@/components/Buy";

export default function Page() {
  const productInfo = {
    images: [
      "/products/f2.png",
      "/products/g1_2.png",
      "/products/g1_3.png",
      "/products/g1_4.png",
      "/products/g1_5.png",
    ],
    title: "Sea Shells",
    info: `Development of ferrous metals technology and misleading newusages of the term "wrought iron" have created a dangerousconfusion about the equivalence of today's commerciallyavailable architectural iron, known as mild steel, and truehistoric "wrought iron" These result in a carbon content of about  20th century.`,
    prices: new Map([
      ["6 ft", "540 per foot"],
      ["8 ft", "700 per foot"],
      ["10 ft", "846 per foot"],
    ]),
  };

  return <BuyComponent {...productInfo} />;
}