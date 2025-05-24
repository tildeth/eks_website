import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <span
        key={i}
        className={i < count ? styles.starFilled : styles.starEmpty}
      >
        ★
      </span>
    ));
  };

  return (
    <section className={styles.reviewSection}>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt="Review Visual" />
      </div>

      <div className={styles.reviewContent}>
        <h2>{title}</h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) => {
              if (info.offset.x < -50) {
                nextReview();
              } else if (info.offset.x > 50) {
                prevReview();
              }
            }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            <p className={styles.reviewText}>"{reviews[activeIndex].text}"</p>
            <div className={styles.reviewerInfo}>
              <span className={styles.reviewerName}>
                – {reviews[activeIndex].name}
              </span>
              <div className={styles.stars}>
                {renderStars(reviews[activeIndex].stars)}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className={styles.controls}>
          <button className={styles.andbtn} onClick={prevReview}>
            ←
          </button>
          <div className={styles.dots}>
            {reviews.map((_, i) => (
              <span
                key={i}
                className={i === activeIndex ? styles.activeDot : styles.dot}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
          <button className={styles.andbtn} onClick={nextReview}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}
