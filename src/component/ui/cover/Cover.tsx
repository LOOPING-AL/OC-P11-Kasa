import { useState } from "react";
import { ArrowLeft, ArrowRight } from "../../../assets";
import { Logement, directionEnum } from "../../../ts";
import styles from "./Cover.module.css";

const Cover = ({ logement }: { logement: Logement }) => {
  const [srcFirstImg, setSrcFirstImg] = useState(logement.pictures[0]);
  const [srcSecondImg, setSrcSecondImg] = useState(logement.pictures[1]);
  const [actualImg, setActualImg] = useState(0);

  const picturesNumber = logement.pictures.length as number;

  const handleClick = (direction: directionEnum) => {
    const DomFirstImg = document.getElementById("first");
    DomFirstImg?.classList.remove(styles.cover_goright, styles.cover_goleft);
    void DomFirstImg?.offsetWidth;

    const DomSecondImg = document.getElementById("second");
    DomSecondImg?.classList.remove(
      styles.cover_arrivedright,
      styles.cover_arrivedleft
    );
    void DomSecondImg?.offsetWidth;

    if (direction === directionEnum.LEFT) {
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
            onClick={() => handleClick(directionEnum.LEFT)}
          />
          <img
            src={ArrowRight}
            alt={ArrowRight}
            onClick={() => handleClick(directionEnum.RIGHT)}
            className={`${styles.cover_arrow} ${styles.cover_arrowright}`}
          />
        </>
      )}

      <h4 className={styles.number}>
        {actualImg + 1}/{picturesNumber}
      </h4>

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
