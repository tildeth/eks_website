"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./booking.module.css";
import Anmeld from "@/components/Anmeld";
import Image from "next/image";
import KontaktForm from "@/components/KontaktForm";

const reviewsData = {
  privat: [
    { text: "Super professionel og venlig oplevelse – anbefales varmt!", name: "Maria H.", stars: 5 },
  ],
  erhverv: [
    { text: "Effektiv og professionel – vores firmafester er blevet meget bedre.", name: "Jonas", stars: 5 },
    { text: "Tydelig erfaring med erhvervskunder.", name: "Martin, Frederiksberg Kommune", stars: 4 },
  ],
  klub: [
    { text: "Skabte god energi i hele klubben – gæsterne elskede ham!", name: "Thor, Old Irish Pub", stars: 5 },
  ],
};

const contentData = {
  privat: {
    title: "Privat",
    text: `Uanset om det er bryllup, fødselsdag, jubilæum eller en anden særlig anledning, sørger jeg for, at musikken matcher både stemningen og dine ønsker. Med mange års erfaring i at læse publikum og skabe det rette flow, sikrer jeg, at dansegulvet ikke står tomt. Jeg spiller bredt – lige fra festklassikere til nyeste hits – og tilpasser altid stilen til gæsterne og stemningen. Derudover tilbyder jeg professionelt lyd- og lysudstyr og rådgiver gerne om effekter, lyssætning og andre detaljer, der gør din fest helt uforglemmelig.`,
    image: "/privat1.avif",
    imageAlt: "Privat fest billede",
    anmeldImg: "/privatand.avif",
  },
  erhverv: {
    title: "Erhverv",
    text: `Skal din virksomhed afholde en firmafest, julefrokost, sommerfest eller et 
andet erhvervsarrangement? 
Som DJ til erhverv leverer jeg en professionel og fleksibel musikoplevelse, der matcher jeres målgruppe og stemningen. Med stor erfaring i at spille for alle aldersgrupper og brancher, 
sørger jeg for et dansegulv med god energi 
og højt humør. 
Musikken skræddersys til jeres ønsker – fra afslappet loungestemning under middagen til fuld fest senere på aftenen.`,
    image: "/firma1.avif",
    imageAlt: "Firma fest billede",
    anmeldImg: "/firmaand.avif",
  },
  klub: {
    title: "Klub booking",
    text: `Skal du bruge en DJ til klub, diskotek eller festival? Jeg leverer høj energi, stærk musikalsk timing og et solidt mix, der holder publikum i gang hele natten. Med erfaring fra både intime klubmiljøer og udendørsscener tilpasser jeg mit set og vibe til stemningen og publikum – uanset størrelse og format. 
Musikken spænder bredt, men altid med fokus på flow, energi og en fest, man husker. Jeg stiller med professionelt gear, hvis det ønskes, og er vant til at samarbejde med lydfolk, teknikere og scenecrew for at sikre en gnidningsfri afvikling.`,
    image: "/klub1.avif",
    imageAlt: "Klub fest billede",
    anmeldImg: "/kluband.avif",
  },
};

function TabContent({ tab }) {
  const { title, text, image, imageAlt, anmeldImg } = contentData[tab];

  return (
    <motion.div
      key={tab}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <section className={styles.infoBlock}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3>{title}</h3>
          <p>{text}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Image
            src={image}
            alt={imageAlt}
            width={400}
            height={400}
            className={styles.imagewrapper}
            priority
          />
        </motion.div>
      </section>

      <KontaktForm />

      <Anmeld reviews={reviewsData[tab]} imageSrc={anmeldImg} title="Anmeldelser" />
    </motion.div>
  );
}

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState("privat");
  const tabs = ["privat", "erhverv", "klub"];

  return (
    <section className={styles.booking}>
      <h2 className={styles.heading}>Booking</h2>

      <nav className={styles.tabNav} aria-label="Booking kategori">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.tabButton} ${activeTab === tab ? styles.active : ""}`}
            aria-pressed={activeTab === tab}
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </motion.button>
        ))}
      </nav>

      <div className={styles.tabContent}>
        <AnimatePresence mode="wait">
          <TabContent key={activeTab} tab={activeTab} />
        </AnimatePresence>
      </div>
    </section>
  );
}
