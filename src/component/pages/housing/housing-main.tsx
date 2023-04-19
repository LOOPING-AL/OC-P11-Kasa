import { useParams } from "react-router-dom";
import star from "../../../assets/img/icons/star.png";
import data from "../../../data/logements.json";
import { Logement } from "../../../type/type";
import Tag from "../../ui/tag";

const HousingMainBody = () => {
  const { logementId } = useParams();
  const logements: Logement[] = data;
  const logement = logements.find((logement) => logement.id === logementId);

  return (
    <div className="housing-body">
      <img
        src={logement?.cover}
        alt={logement?.description}
        className="housing-cover-img"
      />

      <section className="housing-section">
        <div className="housing-body-left">
          <h3 className="main-color">{logement?.title}</h3>
          <h4 className="main-color">{logement?.location}</h4>

          <div className="housing-body-left-tags">
            {logement?.tags.map((tag) => {
              return <Tag tag={tag} key={tag} />;
            })}
          </div>
        </div>

        <div className="housing-body-right">
          <div className="housing-body-righttop">
            <div className="housing-body-hostname">
              <h4 className="main-color">
                {logement?.host.name.split(/ (.*)/s)[0]}
              </h4>
              <h4 className="main-color">
                {logement?.host.name.split(/ (.*)/s)[1]}
              </h4>
            </div>

            <img
              className="housing-body-hostpicture"
              src={logement?.host.picture}
              alt={logement?.host.name}
            />
          </div>
          <div className="housing-body-middle-rating">
            {Star(Number(logement?.rating))}
          </div>
        </div>
      </section>
    </div>
  );
};

const Star = (rating: number) => {
  const content = [];

  for (let index = 0; index < 5; index++) {
    if (index < rating) {
      content.push(<img className="star star-color" src={star} />);
    } else {
      content.push(<img className="star" src={star} />);
    }
  }

  return content;
};

export default HousingMainBody;
