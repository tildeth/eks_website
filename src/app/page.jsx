"use client";

import styles from "./page.module.css";
import Image from "next/image";
import StatsCounter from "@/components/StatsCounter";
import Anmeld from "@/components/Anmeld";
import CTACom from '@/components/CTACom';
import Link from "next/link";

export default function HomePage() {
  const allReviews = {
    alle: [
      {
        text: "Super professionel og venlig oplevelse – anbefales varmt!",
        name: "Maria H.",
        stars: 5,
      },
      {
        text: "Tryg og god stemning hele vejen igennem.",
        name: "Jesper L.",
        stars: 5,
      },
      {
        text: "Fik præcis det, jeg håbede på – super oplevelse.",
        name: "Sofie M.",
        stars: 4,
      },
      {
        text: "Effektiv og professionel – vores firmafester er blevet meget bedre.",
        name: "Jonas – GetWhy",
        stars: 5,
      },
      {
        text: "Tydelig erfaring med erhvervskunder.",
        name: "Martin, Frederiksberg Kommune",
        stars: 4,
      },
      {
        text: "Levede op til forventningerne til julefrokosten.",
        name: "Jacob T.",
        stars: 5,
      },
      {
        text: "Skabte god energi i hele klubben – gæsterne elskede ham!",
        name: "Thor, Old Irish Pub",
        stars: 5,
      },
      {
        text: "Virkelig nem at sammenarbejde med!",
        name: "Melissa, Eventbooker",
        stars: 5,
      },
      { text: "NOT Nice", name: "Jara, Old Irish Pub", stars: 1 },
    ],
  };

  return (
    <section>
      <section className={styles.hero}>
        <Image
          src="/hero.jpg"
          alt="Hero"
          width={1920}
          height={1080}
          className={styles.heroimg}
          priority
        />
        <div className={styles.overlayContent}>
          <Link href="/Booking" className={`${styles.herobtn} button`}>
            BOOK HER
          </Link>
        </div>
      </section>

      <StatsCounter />

      <Anmeld
        imageSrc="/landing2.jpg"
        reviews={allReviews.alle}
        title="Anmeldelser"
      />

      <CTACom
        title="Mangler du en dj?"
        description="Mangler du en DJ til din fest – hvad enten det er bryllup, fødselsdag eller firmaets sommerfest? Tryk på knappen og kontakt mig i dag for en uforpligtende snak og et skræddersyet tilbud!"
      />
    </section>
  );
}
