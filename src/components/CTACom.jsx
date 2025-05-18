import Button from "./Button";
import styles from "./CTACom.module.css";

export default function InfoCard({ title, description, buttonText, onButtonClick, buttonColor, buttonTextColor }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <Button
        text={buttonText}
        onClick={onButtonClick}
        backgroundColor={buttonColor}
        textColor={buttonTextColor}
      />
    </div>
  );
}
