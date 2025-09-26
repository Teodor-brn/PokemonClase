import { useState, useEffect } from 'react';
import PokemonCard from '../Components/PokemonCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon-species?limit=1025')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPokemons(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="row">
      {pokemons.map((pokemon) => (
         
        <div key={pokemon.name} className="col-md-6 col-lg-3 mb-2"> 
        <div className="p-1 mt-3 border bg-light">       
            <PokemonCard name={pokemon.name} url={pokemon.url} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
