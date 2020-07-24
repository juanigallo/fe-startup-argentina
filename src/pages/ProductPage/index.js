import React from "react";
import startups from "../../data/startups.json";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "",
      name: "",
      desc: ""
    };
  }

  componentDidMount() {
    const filtered = startups.filter((startup) => {
      return (
        startup.id.toLowerCase() ==
        this.props.match.params.productId.toLowerCase()
      );
    });

    console.log(filtered);

    this.setState({
      name: filtered[0].name,
      img: filtered[0].logo,
      desc: filtered[0].desc
    });
  }

  render() {
    const { img, name, desc } = this.state;

    return (
      <div>
        <img src={img} />
        <p>Mi nombre es {name}</p>
        <p>Mi descripcion es {desc}</p>
      </div>
    );
  }
}

export default ProductPage;
