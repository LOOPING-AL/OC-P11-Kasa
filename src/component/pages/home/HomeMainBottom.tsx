import { Thumb } from "../..";
import data from "../../../data/logements.json";
import { Logement } from "../../../ts";
import styles from "./Home.module.css";

const HomeMainBottom = () => {
  const logements: Logement[] = data;

  return (
    <div className={styles.body}>
      {logements.map((logement: Logement) => {
        return <Thumb logement={logement} key={logement.id} />;
      })}
    </div>
  );
};

export default HomeMainBottom;
