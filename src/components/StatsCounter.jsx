"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./StatsCounter.module.css";

const counters = [
  { to: 12, label: "År med erfaring", suffix: "", duration: 2000 },
  { to: 2000, label: "Tilfredse kunder", suffix: "+", duration: 1000 }, // hurtigere!
  { to: 110, label: "Dedikation", suffix: "%", duration: 2000 },
];

export default function StatsCounter() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className={styles.statsContainer}>
      {counters.map((counter, i) => (
        <StatItem
          key={i}
          to={counter.to}
          label={counter.label}
          suffix={counter.suffix}
          duration={counter.duration}
          animate={hasAnimated}
        />
      ))}
    </section>
  );
}

function StatItem({ to, label, suffix, duration, animate }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let current = 0;
    const steps = Math.min(to, 60);
    const stepTime = Math.max(Math.floor(duration / steps), 10);
    const increment = Math.ceil(to / steps);

    const counter = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(counter);
      } else {
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [animate, to, duration]);

  return (
    <div className={`${styles.statItem} ${animate ? styles.fadeIn : ""}`}>
      <h1 className={styles.statNumber}>
        {count}
        {suffix}
      </h1>
      <h3 className={styles.statLabel}>{label}</h3>
    </div>
  );
}
