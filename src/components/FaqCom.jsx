import styles from './FaqCom.module.css';

const faqItems = [
  {
    question: "What will happen when I’ve sent my application?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt.",
  },
  {
    question: "Can I get a free trial before I purchase?",
    answer: "Ippsum is the result of synergy between our teams and our customers...",
  },
  {
    question: "What should I include in my personal statement?",
    answer: "Our company culture is focused on excellent productivity, customer satisfaction...",
  },
  {
    question: "Will membership plans be charged automatically?",
    answer: "Our company culture is focused on excellent productivity...",
  },
];

export default function FaqCom() {
  return (
    <section className={styles.faq}>
      <h1 className={styles.faqHeading}>Customer Questions</h1>

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