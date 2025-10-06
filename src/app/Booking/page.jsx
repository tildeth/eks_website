"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./booking.module.css";
import Anmeld from "@/components/Anmeld";
import Image from "next/image";
import KontaktForm from "@/components/KontaktForm";

const reviewsData = {
  privat: [
    { text: "Vi bookede Kristian til en fælles 30 års fødselsdag, og nøj hvor var det fedt! Kristian snakkede med os nogle måneder op til festen, og bad os om at lave en playliste til inspiration, for at sikre den fest vi ønskede.Han kom og satte DJ pult, lys og røgmaskine op i god tid før festen og testede at alt virkede.Til selve festen mærkede han stemningen, om han skulle spille noget chill og lækkert eller få folk ud på dansegulvet til noget mere hårdt musik.Musikken var en musikalsk overraskelse, og Kristian spillede nogle kendte numre, men gav dem nyt liv ved at mixe andre beats indover. Vi synes det var så godt, at vi betalte for en time mere.", name: "Jonas Plambæk", stars: 5 },
    { text: "Vi bookede Kristian til vores bryllup, og havde en god dialog et godt stykke tid inden festen.Selvom vi havde specielle ønsker, der lå lidt mere skævt at Kristians vanlige genrer, satte han sig tilpas grundigt ind i ønskerne, så man skulle tro han havde disse ønsker som kernekompetencer. Ordentlig forberedelse betaler sig.Vi vil tænke på Kristian næste gang vi skal holde fest!", name: "Mikkel", stars: 5 },
  ],
  erhverv: [
    
    { text: "Han er god til at tilpasse hvert set til den specifikke fest, til de mennesker der er med, og til den stemning der er, som ganske naturligt forandrer sig i løbet af aftenen. Vi har flere gange benyttet Kristian som DJ til vores firmaevents, herunder julefrokoster og sommerfester. Altid glad for at hjælpe til med at skabe en fantastisk aften, en fest bag pulten, og god til at fange og forlænge den gode stemning og sørge for at folk får danset en masse.", name: "Martin, Frederiksberg Kommune", stars: 5 }
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
