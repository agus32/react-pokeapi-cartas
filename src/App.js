
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import CardGroup from './components/CardGroup';
import {getPokemon, getPokemonData} from './components/getPokemon';
import { useEffect , useState} from 'react';
import { NavBar } from './components/NavBar';


function App() {

  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPokemon = async () => {
    try{
    const data = await getPokemon(12,12*page);
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url);
    })
    const results = await Promise.all(promises);
    setPokemon(results);
    setLoading(false);
    setTotal(Math.ceil(data.count/12));
  }catch(error){
    console.log(error);
  }}

  useEffect(() => {fetchPokemon()},[page]);


  return (
    <div className='container'>
      <NavBar page={page} setPage={setPage} totalPages={total}/>
      {loading ? 
      <div className='container'>
        <h3>Loading...</h3>
        <div className="spinner-border" role="status"/>
      </div>: 
      <CardGroup pokemons={pokemon}/>
      }
    </div>
    
  );
}

export default App;
