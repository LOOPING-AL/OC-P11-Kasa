import { Link, useLocation } from "react-router-dom";
import { logo_red } from "../../../assets";
import styles from "./Header.module.css";
import { pages } from "../../../ts";

export const Header = () => {
  let location = useLocation();
  const isHomePage = location.pathname === pages.HOME;
  const isAboutPage = location.pathname === pages.ABOUT;

  const titles = [
    { title: "Accueil", to: pages.HOME, underlined: isHomePage },
    {
      title: "A propos",
      to: pages.ABOUT,
      underlined: isAboutPage,
    },
  ];

  return (
    <header className={styles.header}>
      <Link to={pages.HOME}>
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
