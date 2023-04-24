import { Link } from "react-router-dom";
import img from "../../../assets/img/logo/LOGO-White.png";
import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <Link to={"/"} className={styles.footer_logo}>
      <img src={img} alt="logo white" />
    </Link>
    <span className={styles.footer_text}>© 2020 Kasa. All rights reserved</span>
  </footer>
);

export default Footer;
