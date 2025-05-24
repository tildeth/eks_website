import styles from "./Footer.module.css";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://kattens-vaern.dk/katte-internater/internat-broendby/",
    src: "/facebook.png",
    alt: "Facebook",
  },
  {
    href: "https://kattens-vaern.dk/katte-internater/internat-broendby/",
    src: "/instagram.png",
    alt: "Instagram",
  },
  {
    href: "https://kattens-vaern.dk/katte-internater/internat-broendby/",
    src: "/tik-tok.png",
    alt: "TikTok",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        {socialLinks.map(({ href, src, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
            <Image
              src={src}
              alt={alt}
              width={50}
              height={50}
              className={styles.some_footer}
            />
          </a>
        ))}
      </div>
      <p>© 2025 DJ Kristian Bak – Alle rettigheder forbeholdes</p>
    </footer>
  );
}
