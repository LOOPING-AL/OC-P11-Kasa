import { Link, useLocation } from "react-router-dom";
import { logo_red } from "../../../assets";
import styles from "./Header.module.css";

export const Header = () => {
  let location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/APropos";

  const titles = [
    { title: "Accueil", to: "/", underlined: isHomePage },
    {
      title: "A propos",
      to: "APropos",
      underlined: isAboutPage,
    },
  ];

  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <img src={logo_red} alt="logo" className={styles.img} />
      </Link>

      <ul className={styles.header_title}>
        {titles.map((title, index) => (
          <li key={index}>
            <Link to={title.to}>
              <h2
                className={`${title.underlined && styles.underline} ${
                  styles.title
                } main-color`}
              >
                {title.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
