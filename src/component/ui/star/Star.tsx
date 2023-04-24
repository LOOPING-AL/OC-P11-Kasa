import { Star as StarImg } from "../../../assets";
import styles from "./Star.module.css";

const Star = (rating: number) => {
  const content = [];

  for (let index = 0; index < 5; index++) {
    if (index < rating) {
      content.push(
        <img
          key={index}
          className={`${styles.star} ${styles.star_color}`}
          src={StarImg}
        />
      );
    } else {
      content.push(<img key={index} className={styles.star} src={StarImg} />);
    }
  }

  return content;
};

export default Star;
