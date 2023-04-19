import "../../../assets/style/App.css";
import Footer from "../../ui/footer";
import Header from "../../ui/header";
import HomeMainBody from "./home-body";
import HomeMainTop from "./home-main";

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
