import styles from './FaqCom.module.css';

const faqItems = [
  {
    question: "Hvorfor booke en DJ?",
    answer: "At booke en professionel DJ sikrer den rette stemning, musik tilpasset publikum og en nem afvikling. Musikken styres med erfaring og energi, så dit arrangement bliver en succes fra start til slut.",
  },
  {
    question: "Spiller du i hele landet?",
    answer: " Nej, jeg spiller primært kun i Storkøbenhavn, men kan godt rykke ud til enten nordsjælland eller deromkring.",
  },
  {
    question: "Hvad koster det at booke dig?",
    answer: " Prisen afhænger af arrangementets type, varighed, lokation og udstyr. Kontakt mig for et tilbud.",
  },
  {
    question: "Hvad med udstyr?",
    answer: " Ja, jeg har mit eget professionelle lyd- og lysudstyr, der kan tilpasses både små og store events. Jeg ankommer i god tid før arrangementet og sørger for at alt er sat op og testet, inden gæsterne ankommer.",
  },
   {
    question: "Hvad hvis du bliver syg?",
    answer: " Jeg har en sygdomsgaranti. Skulle jeg blive forhindret, sørger jeg for en professionel afløser, så arrangementet stadig kan gennemføres uden problemer.",
  },
   {
    question: "Depositum",
    answer: " Ja, et depositum er nødvendigt for at bekræfte din booking og sikre datoen.",
  },
   {
    question: "Hvad hvis vi bliver nødt til at aflyse?",
    answer: "Ved aflysning gælder særlige betingelser, afhængigt af hvor tæt på datoen aflysningen sker. Kontakt mig for detaljer om annulleringspolitik.",
  },
   {
    question: "Kan vi forlænge på selve aftenen?",
    answer: " Som udgangspunkt ja – så længe det passer med logistik og støjregler. Vi aftaler på forhånd, hvordan det håndteres, hvis festen trækker ud.",
  },
];

export default function FaqCom() {
  return (
    <section className={styles.faq}>
      {faqItems.map((item, index) => (
        <div key={index}>
          <details>
            <summary className={styles.summary}>{item.question}</summary>
            <div className={styles.detailsContent}>{item.answer}</div>
          </details>
          <div className={styles.line_faq}></div>
        </div>
      ))}
    </section>
  );
}