import BuyComponent from "@/components/Buy";

export default function Page() {
  const productInfo = {
    images: [
      "/products/f1.jpg",
      "/products/g3_2.png",
      "/products/g3_3.png",
      "/products/g3_4.png",
      "/products/g3_5.png",
    ],
    title: "Brittany Spears",
    info: `Material: Fence Panels are 72" in width but we can make it anyHeight or Width.  All welded construction in Aluminum Powder Coat Oven Baked, we have one of the larges selection of color in the net. The picket are 1"x 1" with a slip collar, the horizontal at the bottom is 1"x 2" tubing the top is made from 3/8" x 2" flat stock with scroll.`,
    prices: new Map([
      ["6 ft", "540 per foot"],
      ["8 ft", "700 per foot"],
      ["10 ft", "846 per foot"],
    ]),
  };

  return <BuyComponent {...productInfo} />;
}