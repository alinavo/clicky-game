import React, { Component } from 'react';
import Navbar from './Navbar';
import Container from './Container';
import Header from './Header';


class ClickyGame extends Component {
    state = {
      score: 0,
      highScore: 0,

      // blank class value assigned to navMessage
      navMsgColor: '',
  
      // contains intro, success, and failure message
      navMessage: 'Click an image to begin!',
  
      // contains an array of image urls
      allCharacters: this.shuffleArray(),
  
      // will track  each clicked element.
      wasClicked: [],
  
      // shakes the container on an incorrect guess if set to true
      shake: false
    };
    
    clickEvent = this.checkClicked.bind(this);
  
    // shuffles the images around 
    shuffleArray() {

      // creates a copy of the current characters array to modify it by value, and not by reference

      const newArray = images.slice();
  
      // will store the shuffled array
      const shuffleArray = [];
  
      // each loop through an index gets spliced from newArr
      // splices the value from newArr based on random index
      // and pushes it to shuffleArr
      while (newArr.length > 0) {
        shuffleArray.push(newArr.splice(Math.floor(Math.random() * newArray.length), 1)[0]);
      }
  
      return shuffleArr;
    }
