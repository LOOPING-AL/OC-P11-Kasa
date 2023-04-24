import img from "../../../assets/img/images/IMG.png";
import styles from "./home.module.css";

const HomeMainTop = () => (
  <>
    <div className={styles.main_top}>
      <img src={img} alt="image of cost" className={styles.main_img} />
      <h1 className={styles.main_title}>Chez vous, partout et ailleurs</h1>
    </div>
  </>
);

export default HomeMainTop;
