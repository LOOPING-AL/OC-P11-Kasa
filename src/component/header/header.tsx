import "../../assets/style/App.css";
import logo from "../../assets/img/logo/LOGO.svg";
import { Link } from "react-router-dom";

export const Header = () => (
  <header className="header">
    <Link to={"/"}>
      <img src={logo} alt="logo" />
    </Link>
    <ul className="header-title">
      <li>
        <Link to={"/"}>
          <h2 className="main-color">Accueil</h2>
        </Link>
      </li>
      <li>
        <Link to={"APropos"}>
          <h2 className="main-color">A propos</h2>
        </Link>
      </li>
    </ul>
  </header>
);

export default Header;
