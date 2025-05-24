"use client";

import { useState } from "react";
import styles from "./KontaktForm.module.css";

export default function KontaktForm() {
  const [formData, setFormData] = useState({
    navn: "",
    email: "",
    telefon: "",
    kategori: "Privat",
    besked: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendKontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          navn: "",
          email: "",
          telefon: "",
          kategori: "Privat",
          besked: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} autoComplete="on">
      <label className={styles.label} htmlFor="navn">Navn<span className={styles.required}>*</span></label>
      <input
        type="text"
        id="navn"
        name="navn"
        required
        value={formData.navn}
        onChange={handleChange}
        className={styles.input}
        autoComplete="name"
      />

      <label className={styles.label} htmlFor="email">Email<span className={styles.required}>*</span></label>
      <input
        type="email"
        id="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        className={styles.input}
        autoComplete="email"
      />

      <label className={styles.label} htmlFor="telefon">Telefon<span className={styles.required}>*</span></label>
      <input
        type="tel"
        id="telefon"
        name="telefon"
        required
        value={formData.telefon}
        onChange={handleChange}
        className={styles.input}
        autoComplete="tel"
      />

      <label className={styles.label} htmlFor="kategori">Hvilken type fest holder i?<span className={styles.required}>*</span></label>
      <select
        id="kategori"
        name="kategori"
        required
        value={formData.kategori}
        onChange={handleChange}
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
        name="besked"
        required
        value={formData.besked}
        onChange={handleChange}
        className={styles.textarea}
      />

      <button type="submit" className={styles.button}>Send besked</button>

      {status === "success" && (
        <div className={styles.success}>
          Tak for din besked! Jeg vender tilbage hurtigst muligt.
        </div>
      )}
      {status === "error" && (
        <div className={styles.error}>
          Der opstod en fejl... Prøv igen!
        </div>
      )}
    </form>
  );
}
