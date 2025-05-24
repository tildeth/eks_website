"use client";
import styles from './ommig.module.css';
import CTACom from '@/components/CTACom';
import OmMigCom from '@/components/OmMigCom';
import { motion } from 'framer-motion';

export default function Om_MigPage() {
  return (
    <motion.main
      className={styles.ommig}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <OmMigCom />

      <CTACom
        title="Skal jeg være din næste DJ?"
        description="Lyder jeg som den rette DJ til dit næste event? Lad os tage en snak om, hvordan jeg kan bidrage med musik og god stemning!"
        buttonText="BOOK HER"
        className={styles.cta}
      />
    </motion.main>
  );
}
