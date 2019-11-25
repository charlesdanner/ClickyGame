import React from "react";
import "./style.css";


function Card(props) {
    return (
        <div className="imageContainer d-inline">
            <img alt={props.name}
                src={props.image}
                onClick={() => props.checkIfClicked(props.guessed, props.id)}
            />
        </div>
    )

}

export default Card;