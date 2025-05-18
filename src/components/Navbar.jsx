"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen]= useState(false);

  return (
    <div className={styles.full_nav}>

       {/* Logo-link */}
      <Link href="/" className={styles.navLink}>
        <Image src="/Logo_pri2.avif" alt="Hjem" width={120} height={50} />
      </Link>

       {/* Burger Icon */}
  <button
  className={`${styles.burger} ${isOpen ? styles.open : ""}`}
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Toggle navigation"
>
  <span className={styles.burgerLine}></span>
  <span className={styles.burgerLine}></span>
  <span className={styles.burgerLine}></span>
</button>

       {/* Nav Menu midte  */}

      <nav className={`${styles.navbar} ${isOpen ? styles.showMenu : ""}`}>
        <ul className={styles.navList}>
          <li>
            <Link href="Om_Mig" className={`${styles.navLink} ${pathname === "/Om_Mig" ? styles.active : ""}`}
            onClick={() => setIsOpen(false)}>
              Om mig
            </Link>
          </li>
          <li>
            <Link href="/Booking" className={`${styles.navLink} ${pathname === "/Booking" ? styles.active : ""}`}
            onClick={() => setIsOpen(false)}>
              Booking
            </Link>
          </li>
          <li>
            <Link href="/FAQ" className={`${styles.navLink} ${pathname === "/FAQ" ? styles.active : ""}`}
            onClick={() => setIsOpen(false)}>
              FAQ
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.navbar}>
        <div className={styles.navList}>
          <a
            href="https://kattens-vaern.dk/katte-internater/internat-broendby/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/facebook.png"
              alt="Facebook"
              width={35}
              height={35}
              className={styles.some_nav}
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
              width={35}
              height={35}
              className={styles.some_nav}
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
              width={35}
              height={35}
              className={styles.some_nav}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
