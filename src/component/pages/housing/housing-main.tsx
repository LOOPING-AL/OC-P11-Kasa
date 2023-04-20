import { useParams } from "react-router-dom";
import data from "../../../data/logements.json";
import { Logement } from "../../../type/type";
import Cover from "../../ui/cover";
import Dropdown from "../../ui/dropdown";
import Star from "../../ui/star";
import Tag from "../../ui/tag";

const HousingMainBody = () => {
  const { logementId } = useParams();
  const logements: Logement[] = data;
  const logement = logements.find((logement) => logement.id === logementId);

  if (!logement) {
    throw new Error("Id is not correct");
  } else
    return (
      <div className="housing-body">
        <Cover logement={logement} />

        <section className="housing-section-top">
          <div className="housing-body-left">
            <h3 className="main-color">{logement.title}</h3>
            <h4 className="main-color">{logement.location}</h4>

            <div className="housing-body-left-tags">
              {logement.tags.map((tag) => {
                return <Tag tag={tag} key={tag} />;
              })}
            </div>
          </div>

          <div className="housing-body-right">
            <div className="housing-body-righttop">
              <div className="housing-body-hostname">
                <h4 className="main-color">
                  {logement.host.name.split(/ (.*)/s)[0]}
                </h4>
                <h4 className="main-color">
                  {logement.host.name.split(/ (.*)/s)[1]}
                </h4>
              </div>

              <img
                className="housing-body-hostpicture"
                src={logement.host.picture}
                alt={logement.host.name}
              />
            </div>

            <div className="housing-body-middle-rating">
              {Star(Number(logement.rating))}
            </div>
          </div>
        </section>

        <section className="section-dropdown">
          <div className="dropdown-left">
            <Dropdown title={"Description"} text={logement.description} />
          </div>
          <div className="dropdown-right">
            <Dropdown title={"Equipement"} text={logement.equipments} />
          </div>
        </section>
      </div>
    );
};

export default HousingMainBody;
