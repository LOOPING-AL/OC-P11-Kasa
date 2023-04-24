import { useState } from "react";
import ArrowLeft from "../../../assets/img/icons/arrow-left.png";
import ArrowRight from "../../../assets/img/icons/arrow-right.png";
import { Logement } from "../../../ts/type/type";
import styles from "./cover.module.css";

const Cover = ({ logement }: { logement: Logement }) => {
  const [srcFirstImg, setSrcFirstImg] = useState(logement.pictures[0]);
  const [srcSecondImg, setSrcSecondImg] = useState(logement.pictures[1]);
  const [actualImg, setActualImg] = useState(0);

  const picturesNumber = logement.pictures.length as number;

  const handleClick = (direction: "left" | "right") => {
    const DomFirstImg = document.getElementById("first");
    DomFirstImg?.classList.remove(styles.cover_goright, styles.cover_goleft);
    void DomFirstImg?.offsetWidth;

    const DomSecondImg = document.getElementById("second");
    DomSecondImg?.classList.remove(
      styles.cover_arrivedright,
      styles.cover_arrivedleft
    );
    void DomSecondImg?.offsetWidth;

    if (direction === "left") {
      if (actualImg === 0) {
        changeSrcAndActualImg(picturesNumber - 1);
      } else if (actualImg >= picturesNumber - 1) {
        changeSrcAndActualImg(actualImg - 1);
      } else {
        changeSrcAndActualImg(actualImg - 1);
      }

      DomFirstImg?.classList.add(styles.cover_goright);
      DomSecondImg?.classList.add(styles.cover_arrivedleft);

      return;
    }

    if (actualImg === 0) {
      changeSrcAndActualImg(actualImg + 1);
    } else if (actualImg >= picturesNumber - 1) {
      changeSrcAndActualImg(0);
    } else {
      changeSrcAndActualImg(actualImg + 1);
    }

    DomSecondImg?.classList.add(styles.cover_arrivedright);
    DomFirstImg?.classList.add(styles.cover_goleft);
  };

  const changeSrcAndActualImg = (number: number) => {
    setSrcSecondImg(logement.pictures[number]);
    setActualImg(number);
    setTimeout(() => {
      setSrcFirstImg(logement.pictures[number]);
    }, 400);
  };

  return (
    <div className={styles.cover}>
      {picturesNumber !== 1 && (
        <>
          <img
            src={ArrowLeft}
            alt={ArrowLeft}
            className={`${styles.cover_arrow} ${styles.cover_arrowleft}`}
            onClick={() => handleClick("left")}
          />
          <img
            src={ArrowRight}
            alt={ArrowRight}
            onClick={() => handleClick("right")}
            className={`${styles.cover_arrow} ${styles.cover_arrowright}`}
          />
        </>
      )}

      <div className={styles.cover_images}>
        <img
          src={srcFirstImg}
          alt={logement.title}
          id="first"
          className={styles.cover_img}
        />

        {picturesNumber !== 1 && (
          <img
            src={srcSecondImg}
            id="second"
            alt={logement.title}
            className={`${styles.cover_img} ${styles.cover_second}`}
          />
        )}
      </div>
    </div>
  );
};

export default Cover;
