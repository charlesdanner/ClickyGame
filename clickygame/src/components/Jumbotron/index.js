import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">Clicky Game!</h1>
            <h4 className="lead">Click on an image to earn points, but don't click on any more than once!</h4>
            <hr />
            <div className="navbar navbar-light bg-light container-fluid">
                <div className="brandDiv">
                    <a className="navbar-brand" href="https://www.google.com">Clicky Game</a>
                </div>
                <div className="messageText text-center">
                    <h2 className="d-inline">{props.message}</h2>
                </div>
                <div className="scoreBoard text-right">
                    <h4 className="d-inline scoreBoardText"> <span> Score: {props.score} <br /> </span><span>Best: {props.best}</span></h4>
                </div>
            </div>
        </div>
    )

}

export default Jumbotron;