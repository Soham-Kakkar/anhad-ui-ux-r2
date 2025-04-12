import BuyComponent from "@/components/Buy";

export default function Page() {
  const productInfo = {
    images: [
      "/products/g2_1.png",
      "/products/g2_2.png",
      "/products/g2_3.png",
      "/products/g2_4.png",
      "/products/g2_5.png",
    ],
    title: "Golden Orchard",
    info: "This Driveway gates with a Island Thyme is Custom made according to the wishes of a home owner. A Metal Security Driveway Gates Don't have to take away from the beauty of your main home Entrance we can Custom make the gate to compliment you home Entry. The Metal Gate can be made Swing Or Sliding.",
    prices: new Map([
      ["6 ft", "540 per foot"],
      ["8 ft", "700 per foot"],
      ["10 ft", "846 per foot"],
    ]),
  };

  return <BuyComponent {...productInfo} />;
}