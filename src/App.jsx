import { useState, useEffect } from "react";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/Navbar";


function App()  {
  const[greeting, setGreeting] = useState (1);
  const[pokemon, setPokemon] = useState (null);
  const[pokemonName, setPokemonName] = useState ("ditto");


  useEffect (() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((data) => data.json())
    .then((poke) => setPokemon(poke));
  }, [pokemonName]);


  const handleChange = () => {
    setPokemonName("charizard");
  }

  return (
    <div>
      <NavBar changeValue={handleChange}/>
      {greeting <= 3 && (
      <ItemListContainer greeting={greeting} pokemon={pokemon}/>)}
    </div>
  )
}

export default App;
