import React, { Component } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import images from './images';
import Footer from './components/Footer';

import hagrid from './images/hagrid.png';
import harry from './images/harry.png';
import hermione from './images/hermione.png';
import luna from './images/luna.png';
import malfoy from './images/malfoy.png';
import minerva from './images/minerva.png';
import neville from './images/neville.png';
import ron from './images/ron.png';
import snape from './images/snape.png';
import trelawney from './images/trelawney.png';
import voldy from './images/voldy.png';
import Footer from './components/Footer';

const images = [
  dumbledore, hagrid, harry, hermione, luna, malfoy, minerva, neville, ron, snape, trelawney, voldy
];

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

    const newArray = images

    // STORES IN SHUFFLED ARRAY
    const shuffleArray = [];

    // LOOP THROUGH INDEX AND SPLICE
    // PUSHES TO SHUFFLED ARRAY
    while (newArray.length > 0) {
      shuffleArray.push(
        newArray.splice(Math.floor(Math.random() * newArray.length), 1)[0]
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
