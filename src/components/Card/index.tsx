import { useState } from "react";
import styles from "./Card.module.css";
import Link from 'next/link';

interface CardProps {
  image: string;
  name: string;
  prices: Map<string, string>;
}

export default function Card(props: CardProps) {
  const [selectedSize, setSelectedSize] = useState<string| undefined>(props.prices.keys().next().value);
  const formattedName = props.name.replace(/ /g, '_').toLowerCase();
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardBox}>
        <div className={styles.imageContainer}>
          <Link href={`/buy/${formattedName}`}>
            <img src={props.image} alt="Card Image" className={styles.image} />
          </Link>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.nameContainer}>
            <Link href={`/buy/${formattedName}`}>
              <h3>{props.name}</h3>
            </Link>
          </div>
          <p className={styles.priceValue}>
              ${selectedSize ? props.prices.get(selectedSize) : "Select a size"}
            </p>
          <div className={styles.sizeContainer}>
            <div className={styles.sizeButtons}>
              {Array.from(props.prices.keys()).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`${styles.sizeButton} ${selectedSize === size ? styles.sizeButtonSelected : ""
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}