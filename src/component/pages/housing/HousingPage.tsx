import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Footer, Header } from "../..";
import { getLogement } from "../../../api/api";
import { Logement } from "../../../ts";

import HousingMainBody from "./HousingMain";

const HousingPage = () => {
  const { logementId } = useParams();
  const [logement, setLogement] = useState<Logement>();
  const navigate = useNavigate();

  useEffect(() => {
    if (logementId) {
      const log = getLogement(logementId);
      log ? setLogement(log) : navigate("/logement");
    }
  }, []);

  return (
    <div className="app">
      {logement && (
        <>
          <Header />
          <HousingMainBody logement={logement} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default HousingPage;
