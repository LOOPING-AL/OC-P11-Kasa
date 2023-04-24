import data from "../../../data/about.json";
import { aboutData } from "../../../ts/type/type";
import Dropdown from "../../ui/dropdown/dropdown";
import styles from "./about.module.css";

const AboutMainBottom = () => {
  const aboutData: aboutData[] = data;

  return (
    <div className={styles.main_bottom}>
      {aboutData.map((aboutD) => (
        <Dropdown title={aboutD.title} text={aboutD.text} />
      ))}
    </div>
  );
};

export default AboutMainBottom;
