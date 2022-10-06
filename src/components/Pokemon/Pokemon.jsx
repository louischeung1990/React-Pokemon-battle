import "./Pokemon.css";

export default function Pokemon(props) {
  return (
    <div className="Pokemon">
      <h1>{props.name}</h1>
      <h1 style={{color : props.HP ? "black" : "red"}}>{props.HP}</h1> 
      <img src={props.image} alt="pokemon" />
      <div className="attackCtn">
      {props.attacks.map(attack => (
        <button
        key={attack.index}
        name={props.id} // name represents ID of pokemon (0 for Eevee, 1 for Gengar)
        value={attack.index} //value represents ID of attack (0 to 3) for that pokemon
        onClick={(e) => props.handleAttack(e.target.name, e.target.value)}
        disabled={props.HP ? false : true}
      >
        {attack.name}
      </button>
      ))}
        </div>
    </div>
  );
}
