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
    title: "Entrance of Eden",
    info: "This Driveway gates with a Island Thyme is Custom made according to the wishes of a home owner. A Metal Security Driveway Gates Don't have to take away from the beauty of your main home Entrance we can Custom make the gate to compliment you home Entry.  The Metal Gate can be made Swing Or Sliding",
    prices: new Map([
      ["10' W × 6' H", "5400"],
      ["12' W × 8' H", "7000"],
      ["14' W × 10' H", "8460"],
    ]),
  };

  return (
    <BuyComponent {...productInfo} />
  );
}