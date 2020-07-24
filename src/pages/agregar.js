import React from "react";
import Navbar from "../components/Navbar";

class Agregar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      logo: "",
      email: "",
      desc: "",
      web: "",
      tw: "",
      ig: "",
      estaOk: "",
      showMessage: false
    };
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleClick() {
    const { name, email, logo, desc } = this.state;
    const isValid = name && email && logo && desc ? true : false;

    if (isValid) {
      //ACA AGREGO AL LOCALSTORAGE
      const oldStartups = localStorage.getItem("startups"); // este es el paso 1

      if (oldStartups) {
        const parsedOldStartups = JSON.parse(oldStartups);
        parsedOldStartups.push({
          name,
          email,
          logo,
          desc
        }); // Esto es el paso 2

        const newStartups = JSON.stringify(parsedOldStartups);
        localStorage.setItem("startups", newStartups); // Este es el paso 3
      } else {
        const startups = [];
        startups.push({
          name,
          email,
          logo,
          desc
        });

        const startupsToString = JSON.stringify(startups);
        localStorage.setItem("startups", startupsToString);
      }
    }

    this.setState({
      estaOk: isValid,
      showMessage: true
    });
  }

  render() {
    const { estaOk, showMessage } = this.state;
    return (
      <>
        <Navbar />

        <div className="wrapper-agregar">
          {showMessage && (
            <p>{estaOk ? "Todo salio bien" : "Todo salio mal"}</p>
          )}
          <p className="title-agregar">Nombre</p>
          <input
            className="input-agregar"
            name="name"
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Nombre"
          />
          <p className="title-agregar">Logo</p>
          <input
            className="input-agregar"
            name="logo"
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Link a Imagen"
          />
          <p className="title-agregar">Mail</p>
          <input
            className="input-agregar"
            name="email"
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Mail"
          />
          <p className="title-agregar">Descripcion</p>
          <textarea
            className="input-agregar"
            name="desc"
            onChange={(e) => this.handleChange(e)}
          ></textarea>
          <p className="title-agregar">Web</p>
          <input
            className="input-agregar"
            name="web"
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Web (opcional)"
          />
          <p className="title-agregar">Twitter</p>
          <input
            className="input-agregar"
            name="tw"
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Twitter (opcional)"
          />
          <p className="title-agregar">Instagram</p>
          <input
            className="input-agregar"
            name="ig"
            onChange={(e) => this.handleChange(e)}
            type="text"
            placeholder="Instagram (opcional)"
          />
          <button className="boton-agregar" onClick={() => this.handleClick()}>
            Enviar
          </button>
        </div>
      </>
    );
  }
}

export default Agregar;
