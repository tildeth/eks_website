import styles from "./page.module.css"

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Velkommen til DJ Echo</h1>
      <p className={styles.subtitle}>Din professionelle DJ til events og klubber.</p>
    </section>
  );
}
