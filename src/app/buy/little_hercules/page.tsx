import BuyComponent from "@/components/Buy";

export default function Page() {

  const productInfo = {
    images: [
      "/products/g3_1.png",
      "/products/g3_2.png",
      "/products/g3_3.png",
      "/products/g3_4.png",
      "/products/g3_5.png",
    ],
    title: "Little Hercules",
    info: "A Safety Driveway gates is the first defense that your homehas against unwanted elements. Safety Driveway gates arevery useful to keep intruders at bay. Driveway Gates, alsoknown as Safety Driveway Gates are often the cause ofmany a foiled robbery plans Safety Driveway gates arecustomised according to the wishes of a house owner.",
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