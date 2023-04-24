import { Link } from "react-router-dom";
import { Logement } from "../../../ts/type/type";
import styles from "./thumb.module.css";

const Thumb = ({ logement }: { logement: Logement }) => (
  <Link to={`logement/${logement.id}`} className={styles.thumb}>
    <img
      src={logement.cover}
      alt={logement.title}
      className={styles.thumb_img}
    />
    <div className={styles.thumb_title}>{logement.title}</div>
  </Link>
);

export default Thumb;
