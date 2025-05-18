import { useState } from "react";
import styles from "./Anmeld.module.css";

export default function Anmeld({ imageSrc, reviews, title = "Anmeldelser" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? styles.starFilled : styles.starEmpty}>★</span>
    ));
  };

  return (
    <section className={styles.reviewSection}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt="Review Visual" />
      </div>

      <div className={styles.reviewContent}>
        <h2>{title}</h2>
        <p className={styles.reviewText}>"{reviews[activeIndex].text}"</p>
        <div className={styles.reviewerInfo}>
          <span className={styles.reviewerName}>– {reviews[activeIndex].name}</span>
          <div className={styles.stars}>
            {renderStars(reviews[activeIndex].stars)}
          </div>
        </div>

        <div className={styles.controls}>
          <button onClick={prevReview}>←</button>
          <div className={styles.dots}>
            {reviews.map((_, i) => (
              <span
                key={i}
                className={i === activeIndex ? styles.activeDot : styles.dot}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
          <button onClick={nextReview}>→</button>
        </div>
      </div>
    </section>
  );
}
