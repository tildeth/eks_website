import styles from "./OmMigCom.module.css";
import Image from "next/image";

export default function OmMigCom() {
  return (
    <section>
      <div className={styles.card}>
        <div>
          <h2>Hvem er jeg?</h2>
          <p>Jeg hedder Kristian, og har DJ’et i over 10 år – til alt fra små private fester til store bryllupper og firmaarrangementer. 
Det hele begyndte med en kærlighed til musik og en nysgerrighed på at få folk til at danse, og det er stadig dét, der driver 
mig i dag. 
Når jeg ikke står bag pulten, nyder jeg livet med familie, venner og min hund Kanye.
For mig handler en god fest om mere end bare lyd – det handler om stemning, nærvær og at skabe minder sammen.</p>
        </div>
        <Image
          src="/ommig1.jpg"
          alt="Facebook"
          width={400}
          height={400}
          className={styles.imagewrapper}
        />
      </div>
      <div className={styles.card}>
        <Image
          src="/ommig2.jpg"
          alt="Facebook"
          width={400}
          height={400}
          className={styles.imagewrapper}
        />
        <div>
          <h2>Passion for musikken</h2>
          <p>Jeg startede som 18-årig i det danske techno-miljø, hvor jeg hurtigt blev grebet af energien, fællesskabet og det kreative rum bag pulten. 

Det var her, jeg lærte at forstå publikum og bygge et sæt op fra bunden – beat for beat. Gennem årene har jeg udviklet mig som DJ og udvidet mit repertoire, og i dag lever jeg af at spille til klubnætter, firmaevents og private fester. 

Selvom stilen har ændret sig undervejs, er passionen for musikken og oplevelsen den samme.</p>
        </div>
      </div>
    </section>
  );
}
