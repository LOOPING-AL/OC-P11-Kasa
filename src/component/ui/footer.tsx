import { Link } from "react-router-dom";
import img from "../../assets/img/logo/LOGO-White.png";

const Footer = () => (
  <footer className="footer">
    <Link to={"/"} className="footer-logo">
      <img src={img} alt="logo white" />
    </Link>
    <span className="footer-text">© 2020 Kasa. All rights reserved</span>
  </footer>
);

export default Footer;
