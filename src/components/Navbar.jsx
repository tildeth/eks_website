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
  { href: "https://www.facebook.com/kristian.r.nielsen.5?mibextid=wwXIfr&rdid=kpyE7pRIppp5RXYz&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19MSPVeAJy%2F%3Fmibextid%3DwwXIfr", src: "/facebook.avif", alt: "Facebook" },
  { href: "https://www.instagram.com/bakunderground/", src: "/instagram.avif", alt: "Instagram" },
  { href: "https://www.tiktok.com/@bakunderground?_r=1&_d=secCgYIASAHKAESPgo8hdlfyd38nEtdzdSyvmLjw1xhp0mN8uqZviPgybQuEQIdVbdRfuut1gh5X6wbAEBfDoptyyR8PyQYDlCPGgA%3D&_svg=2&checksum=a512891f55f2d8bf469d0d48b2abfeab7114b7ac35703253937c1e69119c73b2&sec_uid=MS4wLjABAAAAlX-3Tgq7iPSH8Dq2Sq2DB6eQKAw9Y0So-MeJMv0jNkZ3Z2Vr7hyX8tQcPYKbeAf1&sec_user_id=MS4wLjABAAAAByTcqwEHFvcJAh2Sye81C-9GMfik7uqqp7COqpedIuwxARQt9A4CgsGMihtvzkns&share_app_id=1233&share_author_id=6709894068715193349&share_link_id=330A6276-C26E-4C61-AC68-2855833E3CEC&sharer_language=da&social_share_type=5&source=h5_m&timestamp=1748123124&tt_from=copy&u_code=d5f4df0d069fig&ug_btm=b0%2Cb5836&user_id=6676528271323382790&utm_campaign=client_share&utm_medium=ios&utm_source=copy", src: "/tik-tok.avif", alt: "TikTok" },
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
