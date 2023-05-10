import { Thumb } from "../..";
import { getAllLogements } from "../../../api/api";
import { Logement } from "../../../ts";
import styles from "./Home.module.css";

const HomeMainBottom = () => {
  const logements: Logement[] = getAllLogements();

  return (
    <div className={styles.body}>
      {logements.map((logement: Logement) => {
        return <Thumb logement={logement} key={logement.id} />;
      })}
    </div>
  );
};

export default HomeMainBottom;
