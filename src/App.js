import React from "react";
import Nav from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./App.css";

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

  render() {
    const { inputValue } = this.state;
    return (
      <>
        <Nav getData={(inputValue) => this.handleData(inputValue)} />
        <Cards filter={inputValue} />
        <Footer />
      </>
    );
  }
}

export default App;
