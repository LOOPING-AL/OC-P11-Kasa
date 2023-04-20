import { useState } from "react";
import arrow from "../../assets/img/icons/arrow.png";

const Dropdown = ({
  title,
  text,
}: {
  title: string;
  text: string | string[];
}) => {
  let textToShow;
  const [display, setDisplay] = useState("open");

  if (typeof text !== "string") {
    textToShow = text?.map((element, index) => (
      <div className="dropdown-text" key={index}>
        {element}
      </div>
    ));
  } else {
    textToShow = text;
  }

  const handleClick = () =>
    display === "open" ? setDisplay("close") : setDisplay("open");

  return (
    <div className="dropdown">
      <div onClick={handleClick} className="dropdown-top">
        <h4 className="dropdown-title">{title}</h4>
        <img
          className={`dropdown-arrow dropdown-arrow-${display}`}
          src={arrow}
          alt="arrow"
        />
      </div>
      <div className={`dropdown-bottom main-color dropdown-text-${display}`}>
        {textToShow}
      </div>
    </div>
  );
};

export default Dropdown;
