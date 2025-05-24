"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/Om_Mig", label: "Om mig" },
  { href: "/Booking", label: "Booking" },
  { href: "/FAQ", label: "FAQ" },
];

const socialLinks = [
  { href: "https://facebook.com", src: "/facebook.png", alt: "Facebook" },
  { href: "https://instagram.com", src: "/instagram.png", alt: "Instagram" },
  { href: "https://tiktok.com", src: "/tik-tok.png", alt: "TikTok" },
];

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        {/* Logo */}
        <motion.div
          className={styles.logo}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <Image
              src="/Logo_pri2.avif"
              alt="Til forsiden"
              width={120}
              height={50}
              priority
            />
          </Link>
        </motion.div>

        {/* Burger button */}
        <button
          className={`${styles.burger} ${isOpen ? styles.open : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>

        {/* Desktop menu */}
        <div className={styles.menuDesktop}>
          <ul className={styles.navList}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.navLink} ${
                    pathname === href ? styles.active : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.socialIcons}>
            {socialLinks.map(({ href, src, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={30}
                  height={30}
                  className={styles.some_nav}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.menuMobile}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              <ul className={styles.navList}>
                {navLinks.map(({ href, label }) => (
                  <motion.li key={href} variants={itemVariants}>
                    <Link
                      href={href}
                      className={`${styles.navLink} ${
                        pathname === href ? styles.active : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className={styles.socialIcons}>
                {socialLinks.map(({ href, src, alt }) => (
                  <motion.a
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={30}
                      height={30}
                      className={styles.some_nav}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
