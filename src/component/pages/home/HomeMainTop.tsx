import { home } from "../../../assets";
import styles from "./Home.module.css";

const HomeMainTop = () => (
  <>
    <div className={styles.main_top}>
      <img src={home} alt="image of cost" className={styles.main_img} />
      <h1 className={styles.main_title}>Chez vous, partout et ailleurs</h1>
    </div>
  </>
);

export default HomeMainTop;
