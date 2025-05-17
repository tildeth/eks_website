export default function FAQPage() {
    return (
      <section className={styles.faq}>
        <h2 className={styles.heading}>Ofte stillede spørgsmål</h2>
        <ul className={styles.list}>
          <li>🎧 Hvilke genre spiller du? – Alt fra house til techno og lounge.</li>
          <li>📆 Hvor tidligt skal jeg booke? – Gerne mindst 2 uger i forvejen.</li>
          <li>🕺 Tager du imod specialønsker? – Ja, selvfølgelig!</li>
        </ul>
      </section>
    );
}