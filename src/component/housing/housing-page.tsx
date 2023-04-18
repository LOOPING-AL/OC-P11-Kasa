import { useParams } from "react-router-dom";
import data from "../../data/logements.json";
import Footer from "../footer/footer";
import Header from "../header/header";
import HousingMainBody from "./housing-main";
import { Logement } from "../../type/type";

const HousingPage = () => {
  // const { logementId } = useParams();
  // const logements: Logement[] = data;
  // const logement = logements.find((logement) => logement.id === logementId);

  return (
    <div className="app">
      <Header />
      <HousingMainBody />
      <Footer />
    </div>
  );
};

export default HousingPage;
