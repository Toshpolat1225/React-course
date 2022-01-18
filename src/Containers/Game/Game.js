import React, { Component } from "react";
import classes from "./Game.module.css";
import camera from "./camera.jpg"
class Game extends Component {
  render() {
    return (
      <div className={classes.GamePage}>
       <div className={classes.phone}>
         <div className={classes.cameraPhone}>
            <img src={camera} alt="" />
         </div>
       <div className={classes.Game}>
        <div className={classes.headerGame}>
                <div className="record">
                    <h2>Record</h2>
                    <button>1 000 000</button>
                </div>
                <div className="total">
                    <h2>Total</h2>
                    <button>3 500 000</button>
                </div>
            </div>
            <div className={classes.listGame}>
            <button onClick={this.props.onGameClickHandler}>New game</button>
            <button onClick={this.props.onTopClickHandler}>Top list</button>
            <button onClick={this.props.onFriendClickHandler}>Friends</button>
            <button onClick={this.props.onLocationClickHandler}>Location</button>
            </div>
        </div>
       </div>
      </div>
    );
  }
}

export default Game;
