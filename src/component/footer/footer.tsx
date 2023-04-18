import { Link } from "react-router-dom";
import img from "../../assets/img/logo/LOGO-White.png";

const Footer = () => (
  <div className="footer">
    <Link to={"/"} className="footer-logo">
      <img src={img} alt="logo white" />
    </Link>
    <span className="footer-text">© 2020 Kasa. All rights reserved</span>
  </div>
);

export default Footer;
