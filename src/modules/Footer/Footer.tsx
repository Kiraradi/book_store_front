import { FC } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../assets/images/logo-footer.png";
import Link from "next/link";
import { footerLinkList } from "./footerData";
import map from "../../assets/images/map.png";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <Link href={"/"}>
          <Image src={logo} alt="Logo" />
        </Link>
        <div className={styles.description}>
          <p className={styles.infoText}>tranthuy.nute@gmail.com</p>
          <p className={styles.infoText}>{"(480) 555-0103"}</p>
        </div>
      </div>
      <ul className={styles.list}>
        {footerLinkList.map((item) => {
          return (
            <li key={item.id} className={styles.item}>
              <Link href={item.href}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.map}>
        <p className={styles.infoText}>6391 Elgin St. Celina, Delaware 10299</p>
        <Image className={styles.mapImage} src={map} alt="map" />
      </div>
    </footer>
  );
};

export default Footer;
