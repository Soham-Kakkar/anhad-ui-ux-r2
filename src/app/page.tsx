"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const images = [
  "/products/g1_1.png",
  "/products/g1_2.png",
  "/products/g1_3.png",
  "/products/g1_4.png",
  "/products/g1_5.png",
  "/products/g2_1.png",
  "/products/g2_2.png",
  "/products/g2_3.png",
  "/products/g2_4.png",
  "/products/g2_5.png",
  "/products/g3_1.png",
  "/products/g3_2.png",
  "/products/g3_3.png",
  "/products/g3_4.png",
  "/products/g3_5.png",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerView = images.length * 600 / window.innerWidth; // Number of images to show at once

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(images.length / imagesPerView) - 1
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % Math.ceil(images.length / imagesPerView)
    );
  };

  return (
    <main>
      <div className={styles.heading}>
        <h1>Designed to Impress, Built to Protect.</h1>
        <h2>Handcrafted Decorative Gates That Transform Your Entry into a Work of Art.</h2>
      </div>
      <div className={styles.carousel}>
        <div
          className={styles.carouselInner}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${(images.length / imagesPerView) * 100}%`,
          }}
        >
          {images.map((src, index) => (
            <div
              className={styles.carouselItem}
              key={index}
              style={{ flex: `0 0 ${100 / imagesPerView}%` }}
            >
              <Image src={src} alt={`Gate ${index + 1}`} width={300} height={300} />
            </div>
          ))}
        </div>
        <button className={styles.prevButton} onClick={handlePrev}>
          &#10094;
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </main>
  );
}