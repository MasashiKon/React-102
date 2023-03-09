import React, { Component } from 'react';
//import images
import leftImg from '../assets/look-left.jpeg'; 
import rightImg from '../assets/look-right.jpeg'; 

class ChallengeOne extends Component {
  //declare the state here
  state = {
    images: {
      left: leftImg,
      right: rightImg
    },
    eyeDirection: "left"
  };

  //click left/right button handler goes here
  handleClick = (e, direction) => {
    e.stopPropagation();
    this.setState(() => ({eyeDirection: direction}))
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.images[this.state.eyeDirection]}
            alt="image"
          />
        </div>
        <button className="btn" onClick={(e) => this.handleClick(e, "left")}>⭠</button>
        <button className="btn" onClick={(e) => this.handleClick(e, "right")}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;