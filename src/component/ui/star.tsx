import star from "../../assets/img/icons/star.png";

const Star = (rating: number) => {
  const content = [];

  for (let index = 0; index < 5; index++) {
    if (index < rating) {
      content.push(<img key={index} className="star star-color" src={star} />);
    } else {
      content.push(<img key={index} className="star" src={star} />);
    }
  }

  return content;
};

export default Star;
