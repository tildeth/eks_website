import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
          <div>
        <a
          href="https://kattens-vaern.dk/katte-internater/internat-broendby/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/facebook.png"
            alt="Facebook"
            width={50}
            height={50}
            className={styles.some_footer}
          />
        </a>
        <a
          href="https://kattens-vaern.dk/katte-internater/internat-broendby/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={50}
            height={50}
            className={styles.some_footer}
          />
        </a>
        <a
          href="https://kattens-vaern.dk/katte-internater/internat-broendby/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/tik-tok.png"
            alt="Tiktok"
            width={50}
            height={50}
            className={styles.some_footer}
          />
        </a>
      </div>

      <p>© 2025 DJ Kristian Bak - Alle rettigheder forbeholdes</p>
    </footer>
  );
}
