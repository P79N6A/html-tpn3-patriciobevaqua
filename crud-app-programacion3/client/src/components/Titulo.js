import React, { Component } from "react";

class Titulo extends Component {
  render() {
    //método que tiene return y devueve html
    return (
      <div>
        <h1>Título en clase título</h1>
        <h1>{this.props.cadenaT} </h1>   
      </div>
    ); //siempre devuelve un elemento (no mas de uno)
  }
}

export default Titulo;
