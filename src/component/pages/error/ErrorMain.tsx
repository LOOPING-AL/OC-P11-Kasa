import { Link } from "react-router-dom";
import styles from "./Error.module.css";
import { pages } from "../../../ts";

const ErrorMain = () => (
  <div className={styles.main}>
    <p className={`${styles.number} main-color`}>404</p>
    <p className={`${styles.text} main-color`}>
      Oups! La page que vous demandez n'existe pas.
    </p>
    <Link className={`${styles.link} main-color`} to={pages.HOME}>
      Retourner sur la page d’accueil
    </Link>
  </div>
);

export default ErrorMain;
