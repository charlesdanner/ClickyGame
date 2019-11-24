import React from "react";
import "./style.css";

function Header(props) {
    return (
        <nav className="navbar navbar-light bg-light container-fluid">
            <a className="navbar-brand" href="https://www.google.com">Clicky Game</a>
            <h2 className="d-inline">Click an image to begin!</h2>
            <h2 className="d-inline"> Score: {props.score} | Top Score: {props.best}</h2>
        </nav>
    )

}

export default Header;