import React from "react";


function Card(props){
    const{pokemon} = props;
    const imgSrc = pokemon.sprites.other['official-artwork'].front_default ?? pokemon.sprites.front_default;
    return (
        <div className="col-md-4 mt-2 mb-2">
        <div className="card">
            <img src={imgSrc} className="card-img-top" alt={pokemon.name}/>
            <div className="card-body">
                <h5 className="card-title">{pokemon.name}</h5>
                <p className="card-text text-secondary"> #{pokemon.id} </p>
            </div>
        </div>
        </div>
    );
}
export default Card;
