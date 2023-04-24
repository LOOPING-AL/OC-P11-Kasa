import { Link } from "react-router-dom";

const ErrorMain = () => (
  <div className="error-main">
    <p className="error-number main-color">404</p>
    <p className="error-text main-color">
      Oups! La page que vous demandez n'existe pas.
    </p>
    <Link className="error-link main-color" to={"/"}>
      Retourner sur la page d’accueil
    </Link>
  </div>
);

export default ErrorMain;
