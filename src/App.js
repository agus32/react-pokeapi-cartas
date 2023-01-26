
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import CardGroup from './components/CardGroup';
import {getPokemon, getPokemonData} from './components/getPokemon';
import { useEffect , useState} from 'react';
import { NavBar } from './components/NavBar';


function App() {

  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    try{
    const data = await getPokemon();
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url);
    })
    const results = await Promise.all(promises);
    setPokemon(results);
  }catch(error){
    console.log(error);
  }}

  useEffect(() => {fetchPokemon()},[]);


  return (
    <div className='container'>
      <NavBar/>
      <CardGroup pokemons={pokemon}/>
    </div>
    
  );
}

export default App;
