import data from "../../data/logements.json";
import { Logement } from "../../type/type";
import { Link } from "react-router-dom";

const logements: Logement[] = data;

const HomeMainBody = () => <div className="home-body">{Thumbs}</div>;

const Thumbs = logements.map((logement) => (
  <Link key={logement.id} to={`logement/${logement.id}`} className="thumb">
    <img src={logement.cover} alt={logement.title} className="thumb-img" />
    <div className="thumb-title">{logement.title}</div>
  </Link>
));

export default HomeMainBody;
