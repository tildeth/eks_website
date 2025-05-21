import styles from './ommig.module.css';
import CTACom from '@/components/CTACom';
import OmMigCom from '@/components/OmMigCom';

export default function Om_MigPage() {
  return (
    <section className={styles.ommig}>
      <OmMigCom />
     <CTACom 
      title="Skal jeg være din næste dj?"
      description="Lyder jeg som den rette DJ til dit næste event? Lad os tage en snak om, hvordan jeg kan bidrage med musik og god stemning!"
      buttonText="BOOK HER"
      />
    </section>
  );
}
