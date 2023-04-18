import { useParams } from "react-router-dom";
import { Logement } from "../../type/type";
import data from "../../data/logements.json";

const HousingMainBody = () => {
  const { logementId } = useParams();
  const logements: Logement[] = data;
  const logement = logements.find((logement) => logement.id === logementId);

  return (
    <div className="housing-body">
      <div className="housing-cover">
        <img
          src={logement?.cover}
          alt={logement?.description}
          className="housing-cover-img"
        />
      </div>
      <section>
        <div>
          <h3 className="housing-body-title">{logement?.title}</h3>
          <h4 className="housing-body-hostname">{logement?.host.name}</h4>
        </div>
        <h4 className="housing-body-location">{logement?.location}</h4>

        <Tags logement={logement} />
      </section>
    </div>
  );
};
type TagsProps = { logement: Logement | undefined };

const Tags = ({ logement }: TagsProps) => {
  return (
    <>
      {logement?.tags.map((tag) => {
        return <div>{tag}</div>;
      })}
    </>
  );
};

export default HousingMainBody;
