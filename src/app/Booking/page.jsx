"use client";
import { useState } from "react";
import styles from "./booking.module.css";
import Anmeld from "@/components/Anmeld";
import Image from "next/image";

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState("privat");

  const allReviews = {
    privat: [
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
    ],
    erhverv: [
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
    ],
    klub: [
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
    <section className={styles.booking}>
      <h2 className={styles.heading}>Booking</h2>

      <div className={styles.tabNav}>
        {["privat", "erhverv", "klub"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${styles.tabButton} ${
              activeTab === tab ? styles.active : ""
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {activeTab === "privat" && (
          <>
            <section className={styles.infoBlock}>
              <div>
                <h3>Privat</h3>
                <p>
                  Uanset om det er bryllup, fødselsdag, jubilæum eller en anden
                  særlig anledning, sørger jeg for, at musikken matcher både
                  stemningen og dine ønsker. Med mange års erfaring i at læse
                  publikum og skabe det rette flow, sikrer jeg, at dansegulvet
                  ikke står tomt. Jeg spiller bredt – lige fra festklassikere
                  til nyeste hits – og tilpasser altid stilen til gæsterne og
                  stemningen. Derudover tilbyder jeg professionelt lyd- og
                  lysudstyr og rådgiver gerne om effekter, lyssætning og andre
                  detaljer, der gør din fest helt uforglemmelig.
                </p>
              </div>
              <Image
                src="/privat1.jpg"
                alt="Facebook"
                width={400}
                height={400}
                className={styles.imagewrapper}
              />
            </section>

            <Anmeld
              imageSrc="/privatand.jpg"
              reviews={allReviews.privat}
              title="Anmeldelser"
            />
          </>
        )}

        {activeTab === "erhverv" && (
          <>
            <section className={styles.infoBlock}>
              <div>
                <h3>Erhverv</h3>
                <p>
                  Skal din virksomhed afholde en firmafest, julefrokost,
                  sommerfest eller et andet erhvervsarrangement? Som DJ til
                  erhverv leverer jeg en professionel og fleksibel
                  musikoplevelse, der matcher jeres målgruppe og stemningen. Med
                  stor erfaring i at spille for alle aldersgrupper og brancher,
                  sørger jeg for et dansegulv med god energi og højt humør.
                  Musikken skræddersys til jeres ønsker – fra afslappet
                  loungestemning under middagen til fuld fest senere på aftenen.
                </p>
              </div>
              <Image
                src="/firma1.jpg"
                alt="Facebook"
                width={400}
                height={400}
                className={styles.imagewrapper}
              />
            </section>

            <Anmeld
              imageSrc="/firmaand.jpg"
              reviews={allReviews.erhverv}
              title="Anmeldelser"
            />
          </>
        )}

        {activeTab === "klub" && (
          <>
            <section className={styles.infoBlock}>
              <div>
              <h3>Klub booking</h3>
              <p>
                Skal du bruge en DJ til klub, diskotek eller festival? Jeg
                leverer høj energi, stærk musikalsk timing og et solidt mix, der
                holder publikum i gang hele natten. Med erfaring fra både intime
                klubmiljøer og udendørsscener tilpasser jeg mit set og vibe til
                stemningen og publikum – uanset størrelse og format. Musikken
                spænder bredt, men altid med fokus på flow, energi og en fest,
                man husker. Jeg stiller med professionelt gear, hvis det ønskes,
                og er vant til at samarbejde med lydfolk, teknikere og scenecrew
                for at sikre en gnidningsfri afvikling.
              </p>
              </div>
                   <Image
                src="/klub1.jpg"
                alt="Facebook"
                width={400}
                height={400}
                className={styles.imagewrapper}
              />
            </section>

            <Anmeld
              imageSrc="/kluband.jpg"
              reviews={allReviews.klub}
              title="Anmeldelser"
            />
          </>
        )}
      </div>
    </section>
  );
}
