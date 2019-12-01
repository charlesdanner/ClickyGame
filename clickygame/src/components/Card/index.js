import React from "react";
import "./style.css";


function Card(props) {
    return (
        <div className="btn imageContainer rounded d-inline shadow-sm">
            <img className="rounded shadow" alt={props.name}
                src={props.image}
                onClick={() => props.checkIfClicked(props.guessed, props.id)}
            />
        </div>
    )

}

export default Card;