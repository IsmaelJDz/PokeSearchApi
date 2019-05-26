import React from "react";

class SearchApicomponent extends React.Component {
  state = {
    items: []
  };

  __handleSubmit = e => {
    e.preventDefault();
    const pokemonValue = e.target.pokemon.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonValue}`)
      .then(res => res.json())
      .then(data => {
        //console.log(data.abilities);
        //let resultAbilities = {};
        //let resultAbilities = data.abilities;

        let res = data.abilities.map(item => {
          //console.log(item);
          return (
            <div key={item.slot}>
              <p>{item.ability.name}</p>
            </div>
          );
        });
        this.setState({
          items: res
        });
      });
  };

  render() {
    //console.log("render");
    return (
      <div>
        <form
          onSubmit={this.__handleSubmit}
          className="App centerItem col-md-6"
        >
          <input
            type="text"
            name="pokemon"
            className="form-control mt-4"
            placeholder="search your favorite pokemon"
          />
          <button type="submit" className="btn btn-primary mt-2">
            Search
          </button>
        </form>
        {this.state.items}
      </div>
    );
  }
}

export default SearchApicomponent;
