import React, { Component } from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import Header from "./Header";
import images from '../images';
import Footer from './Footer';

class ClickyGame extends Component {
  state = {
    score: 0,
    highScore: 0,

    // BLANK CLASS VALUE
    navMsgColor: "",

    //MESSAGE
    navMessage: "Click an image to begin!",

    //IMAGE ARRAY URL SHUFFLED
    allCharacters: this.shuffleArray(),

    wasClicked: [],

    //CSS SHAKES
    shake: false
  };

  clickEvent = this.checkClicked.bind(this);

  // SHUFFLE IMAGES AROUND
  shuffleArray() {
    // COPIES CURRENT CHARACTERS

    const newArray = images.slice();

    // STORES IN SHUFFLED ARRAY
    const shuffleArray = [];

    // LOOP THROUGH INDEX AND SPLICE
    // PUSHES TO SHUFFLED ARRAY
    while (newArr.length > 0) {
      shuffleArray.push(
        newArr.splice(Math.floor(Math.random() * newArray.length), 1)[0]
      );
    }

    return shuffleArray;
  }

  // CHECK TO SEE IF IMG WAS CLICKED
  checkClicked(clickedElem) {
    // COPIES ARRAY
    //WAS CLICKED STORES CLICKED IMG
    const prevState = this.state.wasClicked.slice();

    // SHUFFLES IMAGES
    const shuffled = this.shuffleArray();

    // VAR SCORES
    // GOTTA USE LET
    // SETS STATE OF SCORE AND HIGH SCORE
    let score = this.state.score;
    let highScore = this.state.highScore;

    // SCORE INCREASE IF ITEM IS CLICKED
    if (!this.state.wasClicked.includes(clickedElem)) {
      // ADDS TO HIGH SCORE
      if (score === highScore) {
        score++;
        highScore++;
      } else {
        score++;
      }

      // PUSHES CLICKED IMG TO WASCLICKED
      prevState.push(clickedElem);
    }

    // RESET SCORE STATE
    if (this.state.wasClicked.includes(clickedElem)) {
      let score = 0;
      return this.setState({
        score: score,
        highScore: highScore,
        navMsgColor: "incorrect",
        navMessage: "INCORRECT!",
        allCharacters: shuffled,
        wasClicked: [],
        shake: true
      });
    }
    // KEEP RUNNING WHILE DIFFERENT ELEMENTS HAVE NOT BEEN CLICKED
    this.setState({
      score: score,
      highScore: highScore,
      navMsgColor: "correct",
      navMessage: "CORRECT!",
      allCharacters: shuffled,
      wasClicked: prevState,
      shake: false
    });
    return setTimeout(() => this.setState({ navMsgColor: "" }), 500);
  }
  //RENDERS SCORE AND PASSES ALLCHARACTERS TO CONTAINER
  //PASSES CLICKED TO CONTAINER FOR CLICK EVENT
  render() {
    const state = this.state;
    return (
      <div>
        <Navbar
          score={state.score}
          highScore={state.highScore}
          navMessage={state.navMessage}
          navMsgColor={state.navMsgColor}
        />
        <Header />
        <Container
          shake={state.shake}
          characters={state.allCharacters}
          clickEvent={this.clickEvent}
        />
        <Footer />
      </div>
    );
  }
}

export default ClickyGame;
