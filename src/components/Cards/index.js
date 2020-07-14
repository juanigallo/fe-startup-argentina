import React from "react";
import Card from "../Card";
import "./style.css";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          name: "CourseIt",
          img:
            "https://pbs.twimg.com/profile_images/1259719811296309249/um6CLRiM_400x400.jpg",
          desc: "Desc courseit"
        },
        {
          name: "Endava",
          img:
            "https://pbs.twimg.com/profile_images/1052208764726730753/s5bagDr__400x400.jpg",
          desc: "Desc endava"
        }
      ]
    };
  }

  render() {
    const { cards } = this.state;
    const { filter } = this.props;
    return (
      <div className="cardsContainer">
        {cards.map((card, key) => {
          return (
            <React.Fragment>
              {card.name.toLowerCase().includes(filter.toLowerCase()) && (
                <Card
                  key={key}
                  name={card.name}
                  img={card.img}
                  desc={card.desc}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Cards;
