import { Link } from "react-router-dom";
import { logo_red } from "../../../assets";
import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <Link to={"/"}>
      <img src={logo_red} alt="logo" className={styles.img} />
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
