import { useState } from "react";
import arrow from "../../../assets/img/icons/arrow.png";
import styles from "./dropdown.module.css";
import { displayEnum } from "../../../ts/enum/enum";

const Dropdown = ({
  title,
  text,
}: {
  title: string;
  text: string | string[];
}) => {
  let textToShow;
  const [display, setDisplay] = useState<displayEnum>(displayEnum.CLOSE);
  const [displayText, setDisplayText] = useState(styles.dropdown_text_close);
  const [displayArrow, setDisplayArrow] = useState("");

  if (typeof text !== "string") {
    textToShow = text?.map((element, index) => (
      <div key={index}>{element}</div>
    ));
  } else {
    textToShow = text;
  }

  const handleClick = () => {
    if (display === displayEnum.OPEN) {
      setDisplay(displayEnum.CLOSE);
      setDisplayText(styles.dropdown_text_close);
      setDisplayArrow(styles.dropdown_arrow_close);
    } else {
      setDisplay(displayEnum.OPEN);
      setDisplayText(styles.dropdown_text_open);
      setDisplayArrow(styles.dropdown_arrow_open);
    }
  };

  return (
    <div className={styles.dropdown}>
      <div onClick={handleClick} className={styles.dropdown_top}>
        <h4 className={styles.dropdown_title}>{title}</h4>
        <img
          className={`${styles.dropdown_arrow} ${displayArrow}`}
          src={arrow}
          alt="arrow"
        />
      </div>
      <div className={`${styles.dropdown_text} main-color ${displayText}`}>
        {textToShow}
      </div>
    </div>
  );
};

export default Dropdown;
