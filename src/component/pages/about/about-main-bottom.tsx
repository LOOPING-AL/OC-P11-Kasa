import Dropdown from "../../ui/dropdown";
import data from "../../../data/about.json";
import { aboutData } from "../../../type/type";

const AboutMainBottom = () => {
  const aboutData: aboutData[] = data;

  return (
    <div className="about-main-bottom">
      {aboutData.map((aboutD) => {
        return <Dropdown title={aboutD.title} text={aboutD.text} />;
      })}
    </div>
  );
};

export default AboutMainBottom;
