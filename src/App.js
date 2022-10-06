import "./App.css";
import { Component } from "react";
import Pokemon from "./components/Pokemon/Pokemon";

export default class App extends Component {
  state = {
    pokemon: [
      {
        id: 0,
        name: "Eevee",
        HP: 150,
        attacks: [
          { index: 0, name: "headbutt", damage: 10 },
          { index: 1, name: "double-kick", damage: 20 },
          { index: 2, name: "tackle", damage: 30 },
          { index: 3, name: "body-slam", damage: 40 },
        ],
        image: "https://pokestop.io/img/pokemon/eevee-256x256.png",
      },
      {
        id: 1,
        name: "Gengar",
        HP: 150,
        attacks: [
          { index: 0, name: "ice-punch", damage: 10 },
          { index: 1, name: "mega-kick", damage: 20 },
          { index: 2, name: "double-edge", damage: 30 },
          { index: 3, name: "hyper-beam", damage: 40 },
        ],
        image: "https://pokestop.io/img/pokemon/gengar-256x256.png",
      },
    ],

    message: "Pokemon are ready to battle!",
    message2: "",
  };

  handleAttack = (pkmnId, attackId) => {
    let damage = this.state.pokemon[pkmnId].attacks[attackId].damage;
    let idx = this.state.pokemon.findIndex((p) => p.id !== parseInt(pkmnId));
    let newPokemonHP = this.state.pokemon[idx].HP;
    newPokemonHP =
      newPokemonHP - damage < 0 ? (newPokemonHP = 0) : newPokemonHP - damage;
    this.setState((state) => ({
      pokemon: state.pokemon.map((pkmn) =>
        pkmn.id === idx ? { ...pkmn, HP: newPokemonHP } : pkmn
      ),
      message: `${this.state.pokemon[pkmnId].name} 
      used ${this.state.pokemon[pkmnId].attacks[attackId].name}!`,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    {this.state.pokemon.forEach(pkmn => {
        if (pkmn.HP === 0 && prevState.message2 === "") {
          this.setState({
            message2: `${pkmn.name} has fainted!`
          })
        }
    })}
  }

  render() {
    return (
      <div className="App">
        <h1>Pokemon Battle</h1>
        <div className="PkmnContainer">
          {this.state.pokemon.map((pokemon) => (
            <Pokemon
              key={pokemon.id}
              {...pokemon}
              handleAttack={this.handleAttack}
            />
          ))}
        </div>
        <h1>{this.state.message}</h1>
        <h1>{this.state.message2}</h1>
      </div>
    );
  }
}
