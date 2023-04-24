import { Link } from "react-router-dom";
import { logo_white } from "../../../assets";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <Link to={"/"} className={styles.footer_logo}>
      <img src={logo_white} alt="logo white" />
    </Link>
    <span className={styles.footer_text}>© 2020 Kasa. All rights reserved</span>
  </footer>
);

export default Footer;
