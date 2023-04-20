import { Link } from "react-router-dom";

const ErrorMain = () => (
  <>
    <p>404</p>
    <p>Oups! La page que vous demandez n'existe pas.</p>
    <Link to={"/"}>Retourner sur la page d’accueil</Link>
  </>
);

export default ErrorMain;
