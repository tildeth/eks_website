import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/" className={styles.navLink}>
            Home
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
  );
}

