import React from "react";
import { Pagination } from "./Pagination";
import './styles/NavBar.css';


export const NavBar = (props) => {
    const {page,setPage,totalPages} = props;
    const onLeftClick = () => {
        if(page>0){
            setPage(page-1);
        }
    }
    const onRightClick = () => {
        if(page<totalPages){
            setPage(page+1);
        }
    }

    return (
            <nav> 
            <div>
                <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="pokeapi_logo" className="navbar_img"/>
            </div>
            <Pagination onLeftClick={onLeftClick} onRightClick={onRightClick} page={page+1} totalPages={totalPages}/>
            </nav>
    );


}
