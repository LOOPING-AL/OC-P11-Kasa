import { useParams } from "react-router-dom";
import { Cover, DropDown, Star, Tag } from "../../";
import styles from "./Housing.module.css";
import { getLogement } from "../../../api/api";

const HousingMainBody = () => {
  const { logementId } = useParams();
  const logement = logementId && getLogement(logementId);

  if (!logement) {
    throw new Response("Id is not correct", {
      status: 404,
      statusText: "Id is not correct",
    });
  }

  return (
    <div className={styles.body}>
      <Cover logement={logement} />

      <section className={styles.section_top}>
        <div className={styles.body_left}>
          <h3 className="main-color">{logement.title}</h3>
          <h4 className="main-color">{logement.location}</h4>

          <div className={styles.body_left_tags}>
            {logement.tags.map((tag) => {
              return <Tag tag={tag} key={tag} />;
            })}
          </div>
        </div>

        <div className={styles.body_right}>
          <div className={styles.body_righttop}>
            <div className={styles.body_hostname}>
              <h4 className="main-color">
                {logement.host.name.split(/ (.*)/s)[0]}
              </h4>
              <h4 className="main-color">
                {logement.host.name.split(/ (.*)/s)[1]}
              </h4>
            </div>

            <img
              className={styles.body_hostpicture}
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>

          <div className={styles.body_middle_rating}>
            {Star(Number(logement.rating))}
          </div>
        </div>
      </section>

      <section className={styles.section_dropdown}>
        <div className={styles.dropdown_left}>
          <DropDown title={"Description"} text={logement.description} />
        </div>
        <div className={styles.dropdown_right}>
          <DropDown title={"Equipement"} text={logement.equipments} />
        </div>
      </section>
    </div>
  );
};

export default HousingMainBody;
