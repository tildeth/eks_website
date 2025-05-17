import styles from './booking.module.css';

export default function BookingPage() {
  return (
    <section className={styles.booking}>
      <h2 className={styles.heading}>Book mig</h2>
      <p className={styles.text}>Udfyld formularen og jeg vender tilbage hurtigst muligt.</p>
    </section>
  );
}
