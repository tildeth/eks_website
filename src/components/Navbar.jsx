"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/Om_Mig", label: "Om mig" },
  { href: "/Booking", label: "Booking" },
  { href: "/FAQ", label: "FAQ" },
];

const socialLinks = [
  { href: "https://...", src: "/facebook.png", alt: "Facebook" },
  { href: "https://...", src: "/instagram.png", alt: "Instagram" },
  { href: "https://...", src: "/tik-tok.png", alt: "TikTok" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className={styles.full_nav}>
      <Link href="/" className={styles.navLink}>
        <Image src="/Logo_pri2.avif" alt="Til forsiden" width={120} height={50} priority />
      </Link>

      <button
        className={`${styles.burger} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </button>

      <nav className={`${styles.navbar} ${isOpen ? styles.showMenu : ""}`}>
  <ul className={styles.navList}>
    {navLinks.map(({ href, label }) => (
      <li key={href}>
        <Link
          href={href}
          className={`${styles.navLink} ${pathname === href ? styles.active : ""}`}
          onClick={() => setIsOpen(false)}
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>

  <div className={styles.socialIcons}>
    {socialLinks.map(({ href, src, alt }) => (
      <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={alt} width={35} height={35} className={styles.some_nav} />
      </a>
    ))}
  </div>
</nav>
    </div>
  );
}
