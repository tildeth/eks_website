import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.full_nav}>
        <Link href="/" className={styles.navLink}>
    <Image  src="/facebook.png"
    alt="Hjem"
    width={50}
    height={50} />
   </Link>

    <nav className={styles.navbar}>
       
    
      <ul className={styles.navList}>
        <li>
          <Link href="Om_Mig" className={styles.navLink}>
            Om mig
          </Link>
        </li>
        <li>
          <Link href="/Booking" className={styles.navLink}>
            Booking
          </Link>
        </li>
        <li>
          <Link href="/FAQ" className={styles.navLink}>
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

