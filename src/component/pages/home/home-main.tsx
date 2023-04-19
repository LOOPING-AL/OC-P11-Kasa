import img from "../../../assets/img/images/IMG.png";

const HomeMainTop = () => {
  return (
    <div className="home-main">
      <div className="home-main-top">
        <img src={img} alt="image of cost" className="home-main-img" />
        <h1 className="home-main-title">Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
};
export default HomeMainTop;
