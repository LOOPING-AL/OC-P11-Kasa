import Footer from "../../ui/footer/footer";
import Header from "../../ui/header/header";
import AboutMainBottom from "./about-main-bottom";
import AboutMainTop from "./about-main-top";

const About = () => (
  <div className="page">
    <Header />
    <AboutMainTop />
    <AboutMainBottom />
    <Footer />
  </div>
);

export default About;
