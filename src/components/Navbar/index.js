import React from "react";
import "./style.css";

class Navbar extends React.Component {
  handleChange(e) {
    const inputValue = e.target.value;
    const { getData } = this.props;

    getData(inputValue);
  }

  render() {
    return (
      <nav>
        <div className="autocompleteContainer">
          <h1>Startup argentina</h1>
          <input
            onChange={(e) => this.handleChange(e)}
            type=""
            placeholder="Buscar startup"
          />
        </div>
        <button>Agregar Startup</button>
      </nav>
    );
  }
}

export default Navbar;
