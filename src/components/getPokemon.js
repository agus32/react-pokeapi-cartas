import React from 'react';

export const getPokemon= async (limit=10,offset=0) => {
    let URL = 'https://pokeapi.co/api/v2/pokemon?limit='+limit+'&offset='+offset;
    try{
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
    }


    
}
export const getPokemonData = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

