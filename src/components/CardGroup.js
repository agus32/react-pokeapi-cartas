import React from "react";
import Card from './Card';

function CardGroup(props){

    const{pokemons} = props;
    
    return (
        <div className="container">
            <div className="row">
                
                {pokemons.map((pokemon) => (
                <Card key={pokemon.name} pokemon={pokemon}/>
                ))}
            </div>
        </div>
    );
}
export default CardGroup;
