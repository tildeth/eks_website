import styles from "./CTACom.module.css";
import Link from "next/link";

export default function CTACom({ title, description }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <Link href="/Booking" className="button">
        Book nu
      </Link>
    </div>
  );
}
