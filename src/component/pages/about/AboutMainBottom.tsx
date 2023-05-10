import { DropDown } from "../..";
import { getAbout } from "../../../api/api";
import styles from "./About.module.css";

const AboutMainBottom = () => {
  const aboutData = getAbout();

  return (
    <div className={styles.main_bottom}>
      {aboutData.map((aboutD, index) => (
        <DropDown key={index} title={aboutD.title} text={aboutD.text} />
      ))}
    </div>
  );
};

export default AboutMainBottom;
