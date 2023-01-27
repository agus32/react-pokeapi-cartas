import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React from "react";
import './styles/NavBar.css';

export const Pagination = (props) => {
    const {onLeftClick,onRightClick,page,totalPages} = props;
    return (
        <div className="pagination">
            <ButtonGroup className="me-2" >
                <Button variant="primary" onClick={onLeftClick} > ⬅️ </Button>
                <Button variant="primary" disabled> {page} de {totalPages} </Button>
                <Button variant="primary" onClick={onRightClick} > ➡️ </Button>
            </ButtonGroup>            
        </div>
    );
}