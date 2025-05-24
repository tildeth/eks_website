import styles from "./layout.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

// Importer fonte via next/font/google
import { Poppins } from 'next/font/google';
import { Lexend_Exa } from 'next/font/google';

// Konfigurer fonte og tilføj CSS-variabler
const poppins = Poppins({
  subsets: ['latin'],
  weight: [
    '100', '200', '300', '400', '500', '600', '700', '800', '900',
  ],
  variable: '--font-poppins',
  display: 'swap',
});

const lexendExa = Lexend_Exa({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-lexend-exa',
  display: 'swap',
});

export const metadata = {
  title: "DJ Kristian Bak",
  description: "Musik til alle dine events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${poppins.variable} ${lexendExa.variable}`}>
      <body className={styles.container}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
