import data from "../../../data/logements.json";
import { Logement } from "../../../type/type";
import Thumb from "../../ui/thumb";

const logements: Logement[] = data;

const HomeMainBody = () => (
  <div className="home-body">
    {logements.map((logement: Logement) => {
      return <Thumb logement={logement} key={logement.id} />;
    })}
  </div>
);

export default HomeMainBody;
