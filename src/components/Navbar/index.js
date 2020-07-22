import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  handleChange(e) {
    const inputValue = e.target.value;
    const { getData } = this.props;

    getData(inputValue);
  }

  render() {
    const { showAutocomplete } = this.props;
    return (
      <nav>
        <div className="autocompleteContainer">
          <h1>Startup argentina</h1>
          {showAutocomplete && (
            <input
              onChange={(e) => this.handleChange(e)}
              type=""
              placeholder="Buscar startup"
            />
          )}
        </div>
        <Link to="/agregar">
          <button>Agregar Startup</button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
