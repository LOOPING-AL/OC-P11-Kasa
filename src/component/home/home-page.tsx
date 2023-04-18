import Header from "../header/header";
import "../../assets/style/App.css";
import HomeMainTop from "./home-main";
import HomeMainBody from "./home-body";
import Footer from "../footer/footer";

function App() {
  return (
    <div className="app">
      <Header />
      <HomeMainTop />
      <HomeMainBody />
      <Footer />
    </div>
  );
}

export default App;
