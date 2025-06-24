"use client";

import { useState } from "react";
import styles from "./KontaktForm.module.css";

export default function KontaktForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sender...");

    const formData = new FormData(e.target);
    formData.append("access_key", "88a38057-f022-4f5c-b5cb-f7171e3219e0"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus("Tak for din besked! Jeg vender tilbage hurtigst muligt.");
      e.target.reset();
    } else {
      console.error("Fejl:", data);
      setStatus("Der opstod en fejl. Prøv igen senere.");
    }
  };


  return (
       <form className={styles.form} onSubmit={handleSubmit}>
      <input type="hidden" name="subject" value="Ny kontaktformular-besked" />
      <input type="hidden" name="from_name" value="Min Hjemmeside" />

      <label className={styles.label} htmlFor="navn">Navn<span className={styles.required}>*</span></label>
      <input
        type="text"
        id="navn"
        name="name"
        required
        className={styles.input}
        autoComplete="name"
      />

      <label className={styles.label} htmlFor="email">Email<span className={styles.required}>*</span></label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className={styles.input}
        autoComplete="email"
      />

      <label className={styles.label} htmlFor="telefon">Telefon<span className={styles.required}>*</span></label>
      <input
        type="tel"
        id="telefon"
        name="phone"
        required
        className={styles.input}
        autoComplete="tel"
      />

      <label className={styles.label} htmlFor="kategori">Hvilken type fest holder i?<span className={styles.required}>*</span></label>
      <select
        id="kategori"
        name="kategori"
        required
        className={styles.select}
      >
        <option value="Privat">Privat</option>
        <option value="Erhverv">Erhverv</option>
        <option value="Klub/Festival">Klub/Festival</option>
        <option value="Andet">Andet</option>
      </select>

      <label className={styles.label} htmlFor="besked">Besked<span className={styles.required}>*</span></label>
      <textarea
        id="besked"
        name="message"
        required
        className={styles.textarea}
      />

      <button type="submit" className={styles.button}>Send besked</button>

      {status && (
        <div className={styles.success}>
          {status}
        </div>
      )}
    </form>
  );
}