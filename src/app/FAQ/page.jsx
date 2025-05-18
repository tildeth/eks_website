import styles from './faq.module.css';
import FaqCom from '@/components/FaqCom';

export default function FAQPage() {
  return (
    <section className={styles.faq}>
      <h2 className={styles.heading}>Ofte stillede spørgsmål</h2>
     <FaqCom />
    </section>
  );
}
