import star from "../../../assets/img/icons/star.png";
import styles from "./star.module.css";

const Star = (rating: number) => {
  const content = [];

  for (let index = 0; index < 5; index++) {
    if (index < rating) {
      content.push(
        <img
          key={index}
          className={`${styles.star} ${styles.star_color}`}
          src={star}
        />
      );
    } else {
      content.push(<img key={index} className={styles.star} src={star} />);
    }
  }

  return content;
};

export default Star;
