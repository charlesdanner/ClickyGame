import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="shadow jumbotron text-center">
      <div className=" text-center jumbotron-content-container">
        <h1 className="display-4">It's Always Clicky!</h1>
        <h4 className="lead">
          Click on an image to earn points, but don't click on any more than
          once!
        </h4>
        <hr className="hr" />
        <div className="navbar navbar-light container-fluid text-center">
          {/* <div className="brandDiv float-left">
                    <h2 className="d-inline float-left">Clicky Game</h2>
                </div> */}
          <div className="messageText text-center">
            <h2 id="message" className="d-inline">
              {props.message}
            </h2>
          </div>
          <div className="scoreBoard float-right text-right">
            <h4 className="d-inline scoreBoardText float-right">
              {" "}
              <span>
                {" "}
                Score: {props.score} <br />{" "}
              </span>
              <span>Best: {props.best}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
