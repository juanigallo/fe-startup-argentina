import React from "react";
import "./style.css";

class Card extends React.Component {
  render() {
    const { name, desc, img } = this.props;
    return (
      <div className="cardContainer">
        <div className="imgContainer">
          <img src={img} />
        </div>
        <div className="dataContainer">
          <h3>{name}</h3>
          <h4>{desc}</h4>
        </div>
      </div>
    );
  }
}

export default Card;
