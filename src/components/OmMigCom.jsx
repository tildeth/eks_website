"use client"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./OmMigCom.module.css";

export default function OmMigCom() {
  const content = [
    {
      heading: "Hvem er jeg?",
      text: `Jeg hedder Kristian, og har DJ’et i over 10 år – til alt fra små private fester til store bryllupper og firmaarrangementer. 
Det hele begyndte med en kærlighed til musik og en nysgerrighed på at få folk til at danse, og det er stadig dét, der driver mig i dag. 
Når jeg ikke står bag pulten, nyder jeg livet med familie, venner og min hund Kanye. 
For mig handler en god fest om mere end bare lyd – det handler om stemning, nærvær og at skabe minder sammen.`,
      image: "/ommig1.JPG",
      reverse: false,
    },
    {
      heading: "Passion for musikken",
      text: `Jeg startede som 18-årig i det danske techno-miljø, hvor jeg hurtigt blev grebet af energien, fællesskabet og det kreative rum bag pulten. 

Det var her, jeg lærte at forstå publikum og bygge et sæt op fra bunden – beat for beat. Gennem årene har jeg udviklet mig som DJ og udvidet mit repertoire, og i dag lever jeg af at spille til klubnætter, firmaevents og private fester. 

Selvom stilen har ændret sig undervejs, er passionen for musikken og oplevelsen den samme.`,
      image: "/ommig2.JPG",
      reverse: true,
    },
  ];

  return (
   <section className={styles.section}>
      {content.map(({ heading, text, image, reverse }, index) => (
        <FadeInCard
          key={index}
          heading={heading}
          text={text}
          image={image}
          reverse={reverse}
        />
      ))}
    </section>
  );
}

function FadeInCard({ heading, text, image, reverse }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true, 
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${reverse ? styles.reverse : ""}`}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className={styles.textContent}>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <Image
        src={image}
        alt={heading}
        width={400}
        height={400}
        className={styles.imagewrapper}
      />
    </motion.div>
  );
}
