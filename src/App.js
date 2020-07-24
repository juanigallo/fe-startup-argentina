import React from "react";
import Nav from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./App.scss";
import { Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  handleData(inputValue) {
    this.setState({
      inputValue: inputValue
    });
  }

  componentDidMount() {
    const personToString = localStorage.getItem("personToString");
    const person = JSON.parse(personToString);
  }

  render() {
    const { inputValue } = this.state;
    return (
      <>
        <Nav
          showAutocomplete={true}
          getData={(inputValue) => this.handleData(inputValue)}
        />
        <Cards filter={inputValue} />
        <Footer />
        <Link to="/prueba">Ir a prueba</Link>
      </>
    );
  }
}

export default App;
