import { Link } from "react-router-dom";
import styles from "./error.module.css";

const ErrorMain = () => (
  <div className={styles.main}>
    <p className={`${styles.number} main-color`}>404</p>
    <p className={`${styles.text} main-color`}>
      Oups! La page que vous demandez n'existe pas.
    </p>
    <Link className={`${styles.link} main-color`} to={"/"}>
      Retourner sur la page d’accueil
    </Link>
  </div>
);

export default ErrorMain;
