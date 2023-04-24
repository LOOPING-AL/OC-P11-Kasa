import { useState } from "react";
import ArrowLeft from "../../assets/img/icons/arrow-left.png";
import ArrowRight from "../../assets/img/icons/arrow-right.png";
import { Logement } from "../../type/type";

const Cover = ({ logement }: { logement: Logement }) => {
  const [srcFirstImg, setSrcFirstImg] = useState(logement.pictures[0]);
  const [srcSecondImg, setSrcSecondImg] = useState(logement.pictures[1]);
  const [actualImg, setActualImg] = useState(0);

  const picturesNumber = logement.pictures.length as number;

  const handleClick = (direction: "left" | "right") => {
    const DomFirstImg = document.getElementById("first");
    DomFirstImg?.classList.remove("cover-goright", "cover-goleft");
    void DomFirstImg?.offsetWidth;

    const DomSecondImg = document.getElementById("second");
    DomSecondImg?.classList.remove("cover-arrivedright", "cover-arrivedleft");
    void DomSecondImg?.offsetWidth;

    if (direction === "left") {
      if (actualImg === 0) {
        changeSrcAndActualImg(picturesNumber - 1);
      } else if (actualImg >= picturesNumber - 1) {
        changeSrcAndActualImg(actualImg - 1);
      } else {
        changeSrcAndActualImg(actualImg - 1);
      }

      DomFirstImg?.classList.add("cover-goright");
      DomSecondImg?.classList.add("cover-arrivedleft");

      return;
    }

    if (actualImg === 0) {
      changeSrcAndActualImg(actualImg + 1);
    } else if (actualImg >= picturesNumber - 1) {
      changeSrcAndActualImg(0);
    } else {
      changeSrcAndActualImg(actualImg + 1);
    }

    DomSecondImg?.classList.add("cover-arrivedright");
    DomFirstImg?.classList.add("cover-goleft");
  };

  const changeSrcAndActualImg = (number: number) => {
    setSrcSecondImg(logement.pictures[number]);
    setActualImg(number);
    setTimeout(() => {
      setSrcFirstImg(logement.pictures[number]);
    }, 400);
  };

  return (
    <div className="housing-cover">
      {picturesNumber !== 1 && (
        <>
          <img
            src={ArrowLeft}
            alt={ArrowLeft}
            className="housing-cover-arrow housing-cover-arrowleft"
            onClick={() => handleClick("left")}
          />
          <img
            src={ArrowRight}
            alt={ArrowRight}
            onClick={() => handleClick("right")}
            className="housing-cover-arrow housing-cover-arrowright"
          />
        </>
      )}

      <div className="housing-cover-images">
        <img
          src={srcFirstImg}
          alt={logement.title}
          id="first"
          className="housing-cover-img"
        />

        {picturesNumber !== 1 && (
          <img
            src={srcSecondImg}
            alt={logement.title}
            id="second"
            className="housing-cover-img"
          />
        )}
      </div>
    </div>
  );
};

export default Cover;
