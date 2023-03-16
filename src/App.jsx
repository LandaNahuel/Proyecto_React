import { useState, useEffect } from "react";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/Navbar";
import ItemDetailContainer from "./componentes/ItemDetailContainer";


function App()  {
  const[greetings, setGreetings] = useState (1);
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
      <ItemDetailContainer/>
      {/*<ItemListContainer greetings={greetings} pokemon={pokemon}/>*/}
    </div>
  )
}

export default App;
