"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { ReactNode } from "react";

const images = [
  "/products/g1_1.png",
  "/products/r3.png",
  "/products/f2.jpg",
  "/products/g5.jpg",
  "/products/g2_1.png",
  "/products/g7.jpg",
  "/products/g8.jpg",
  "/products/r6.jpg",
  "/products/g9.jpg",
  "/products/g10.jpg",
  "/products/g11.jpg",
  "/products/r5.jpg",
  "/products/g12.jpg",
  "/products/f1.jpg",
  "/products/f2.jpg",
  "/products/f3.jpg",
  "/products/r1.png",
  "/products/r2.png",
  "/products/r4.jpg",
];


export default function Home() {

  return (
    <main>
      <div className={styles.heading}>
        <h1>Designed to Impress, Built to Protect.</h1>
        <h2>Handcrafted Decorative Gates That Transform Your Entry into a Work of Art.</h2>
      </div>
      <Swiper
      modules={[Autoplay, Grid, Navigation]}
      slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        
        {images.map((src, index) => (
            <SwiperSlide
            key={index}
            >
              <Image src={src} alt={`Gate ${index + 1}`} width={300} height={300} />
            </SwiperSlide>
          ))}
      </Swiper>

      <div className={styles.subHeading}>
        <h2>All Categories</h2>
      </div>
      <div className={styles.categories}>
        <div className={styles.category}>
          <Image src="/illustrations/rectangle 11.png" alt="Gate 1" width={150} height={150} />
        </div>
        <div className={styles.category}>
          <Image src="/illustrations/rectangle 13.png" alt="Gate 2" width={150} height={150} />
        </div>
        <div className={styles.category}>
          <Image src="/illustrations/rectangle 12.png" alt="Gate 3" width={150} height={150} />
        </div>
      </div>

      <div className={styles.subHeading} id="featured-gates">
        <h2>Featured Gates</h2>
        <div className={styles.categories}>
          <div className={styles.category}>
            <Card
              image="/products/g1_1.png"
              name="Entrance Of Eden"
              prices={new Map([
                ["10' W × 6' H", "5400"],
                ["12' W × 8' H", "7000"],
                ["14' W × 10' H", "8460"],
              ])}
            />
          </div>
          <div className={styles.category}>
            <Card
              image="/products/g8.jpg"
              name="Golden Orchard"
              prices={new Map([
                ["10' W × 6' H", "5400"],
                ["12' W × 8' H", "7000"],
                ["14' W × 10' H", "8460"],
              ])}
            />
          </div>
          <div className={styles.category}>
            <Card
              image="/products/g7.jpg"
              name="Little Hercules"
              prices={new Map([
                ["10' W × 6' H", "5400"],
                ["12' W × 8' H", "7000"],
                ["14' W × 10' H", "8460"],
              ])}
            />
          </div>
        </div>
      </div>

      <div className={styles.subHeading} id="featured-fences">
        <h2>Featured Fences</h2>
        <div className={styles.categories}>
          <div className={styles.category}>
            <Card
              image="/products/f1.jpg"
              name="Sea Shells"
              prices={new Map([
                ["6 ft", "540 per foot"],
                ["8 ft", "700 per foot"],
                ["10 ft", "846 per foot"],
              ])}
            />
          </div>
          <div className={styles.category}>
            <Card
              image="/products/f2.jpg"
              name="The In Circle"
              prices={new Map([
                ["6 ft", "540 per foot"],
                ["8 ft", "700 per foot"],
                ["10 ft", "846 per foot"],
              ])}
            />
          </div>
          <div className={styles.category}>
            <Card
              image="/products/f3.jpg"
              name="Brittany Spears"
              prices={new Map([
                ["6 ft", "540 per foot"],
                ["8 ft", "700 per foot"],
                ["10 ft", "846 per foot"],
              ])}
            />
          </div>
        </div>
      </div>


      <div className={styles.subHeading} id="featured-railings">
        <h2>Featured Railings</h2>
        <div className={styles.categories}>
          <div className={styles.category}>
            <Card
              image="/products/r1.png"
              name="Entrance Of Eden"
              prices={new Map([
                ["10' W × 6' H", "5400"],
                ["12' W × 8' H", "7000"],
                ["14' W × 10' H", "8460"],
              ])}
            />
          </div>
          <div className={styles.category}>
            <Card
              image="/products/r2.png"
              name="Golden Orchard"
              prices={new Map([
                ["10' W × 6' H", "5400"],
                ["12' W × 8' H", "7000"],
                ["14' W × 10' H", "8460"],
              ])}
            />
          </div>
          <div className={styles.category}>
            <Card
              image="/products/r3.png"
              name="Little Hercules"
              prices={new Map([
                ["10' W × 6' H", "5400"],
                ["12' W × 8' H", "7000"],
                ["14' W × 10' H", "8460"],
              ])}
            />
          </div>
        </div>
      </div>
    </main>
  );
}