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
  const [display, setDisplay] = useState<"open" | "close">("close");

  if (typeof text !== "string") {
    textToShow = text?.map((element, index) => (
      <div key={index}>{element}</div>
    ));
  } else {
    textToShow = text;
  }

  const handleClick = () => setDisplay(display === "open" ? "close" : "open");

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
      <div className={`dropdown-text main-color dropdown-text-${display}`}>
        {textToShow}
      </div>
    </div>
  );
};

export default Dropdown;
