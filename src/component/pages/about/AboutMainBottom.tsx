import { DropDown } from "../..";
import data from "../../../data/about.json";
import { AboutData } from "../../../ts";
import styles from "./About.module.css";

const AboutMainBottom = () => {
  const aboutData: AboutData[] = data;

  return (
    <div className={styles.main_bottom}>
      {aboutData.map((aboutD, index) => (
        <DropDown key={index} title={aboutD.title} text={aboutD.text} />
      ))}
    </div>
  );
};

export default AboutMainBottom;
