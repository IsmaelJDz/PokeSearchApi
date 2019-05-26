import React from "react";
import logo from "./img/pokelogo.png";
import "./App.css";
import FormdubComponent from "./containers/FormdubComponent";

function App() {
  return (
    <div className="App">
      <h1>React PokeApi</h1>
      <h4>Search your favorite Pokemon</h4>
      <img src={logo} width="120px" alt="pokelogo" />
      <FormdubComponent />
    </div>
  );
}

export default App;
