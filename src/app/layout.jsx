import styles from "./layout.module.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/globals.css"

export const metadata = {
  title: "DJ Kristian Bak",
  description: "Musik til alle dine events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
    <body className={styles.container}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
  );
}
