import React from "react";
import "./style.css";


function CardContainer(props) {
    return (
        <div className="cardContainer text-center container-fluid">
            {props.children}
        </div>
    )
    
}

export default CardContainer;