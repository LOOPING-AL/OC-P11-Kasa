import "../../../assets/style/App.css";
import Footer from "../../ui/footer";
import Header from "../../ui/header";
import HomeMainBottom from "./home-main-bottom";
import HomeMainTop from "./home-main-top";

const App = () => (
  <div className="page">
    <Header />
    <HomeMainTop />
    <HomeMainBottom />
    <Footer />
  </div>
);

export default App;
