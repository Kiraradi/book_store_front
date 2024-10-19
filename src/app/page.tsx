import Header from "@/modules/Header/Header";
import styles from "./page.module.css";
import Footer from "@/modules/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.content}></div>
      </main>
      <Footer />
    </>
  );
}
