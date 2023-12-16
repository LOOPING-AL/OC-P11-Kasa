import { Link } from "react-router-dom";
import { Logement, pages } from "../../../ts";
import styles from "./Thumb.module.css";

const Thumb = ({ logement }: { logement: Logement }) => (
  <Link to={pages.HOUSING + `${logement.id}`} className={styles.thumb}>
    <div className={styles.thumb_title}>{logement.title}</div>
    <img
      src={logement.cover}
      alt={logement.title}
      className={styles.thumb_img}
    />
  </Link>
);

export default Thumb;
