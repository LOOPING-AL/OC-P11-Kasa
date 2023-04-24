import { about } from "../../../assets";
import styles from "./About.module.css";

const AboutMainTop = () => (
  <div className={styles.main_top}>
    <img src={about} alt="image of cost" className={styles.main_img} />
  </div>
);

export default AboutMainTop;
