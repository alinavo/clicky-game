import React from 'react';
import './Container.css';
import Character from '../Character';

// main container for character

const Container = props => (
  // loops through each index in props.characters
  <div
    className={
      props.shake
        ? 'container d-flex flex-wrap justify-content-center shake'
        : 'container d-flex flex-wrap justify-content-center'
    }
  > 
    {props.characters.map((a, i) => <Character name={a} key={i} clickEvent={props.clickEvent} />)}
  </div>
);
//click event for character

export default Container; 