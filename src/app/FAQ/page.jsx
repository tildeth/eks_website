"use client";
import styles from './faq.module.css';
import FaqCom from '@/components/FaqCom';
import CTACom from '@/components/CTACom';
import { motion } from 'framer-motion';

export default function FAQPage() {
  return (
    <motion.main
      className={styles.faq}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.heading}>FAQ</h2>
      <p className={styles.introText}>
        Her kan du finde svar på de mest hyppige spørgsmål, jeg får i forbindelse med booking. Skulle du ikke finde det, du leder efter, er du meget velkommen til at sende mig en mail på email@email.dk.
      </p>

      <FaqCom />

      <CTACom
        title="Skal vi tage en snak?"
        description="Hver fest er unik – og det skal musikken også være. Kontakt mig i dag og få et tilbud, der passer præcis til dit arrangement."
        className={styles.cta}
      />
    </motion.main>
  );
}
