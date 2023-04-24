import "../../../assets/style/App.css";
import logo from "../../../assets/img/logo/LOGO.svg";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <Link to={"/"}>
      <img src={logo} alt="logo" />
    </Link>
    <ul className={styles.header_title}>
      <li>
        <Link to={"/"}>
          <h2 className="main-color">Accueil</h2>
        </Link>
      </li>
      <li>
        <Link to={"/APropos"}>
          <h2 className="main-color">A propos</h2>
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
