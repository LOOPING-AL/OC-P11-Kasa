import Footer from "../../ui/footer";
import Header from "../../ui/header";
import HousingMainBody from "./housing-main";

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
