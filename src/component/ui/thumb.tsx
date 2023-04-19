import { Link } from "react-router-dom";
import { Logement } from "../../type/type";

const Thumb = ({ logement }: { logement: Logement }) => (
  <Link to={`logement/${logement.id}`} className="thumb">
    <img src={logement.cover} alt={logement.title} className="thumb-img" />
    <div className="thumb-title">{logement.title}</div>
  </Link>
);

export default Thumb;
