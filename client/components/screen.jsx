import React from 'react'; //import react module
import ScreenRow from './screenRow';

//Create our screen component as a functional component.
//It would display tow screen rows, 1 for questions and the other for answer
//The value would be passed down from it's parent component as a prop
const Screen = (props) =>{
  return(
    <dvi className="sreen">
      <ScreenRow value={props.question}/>
      <ScreenRow value={props.answer}/>
    </dvi>
  );
}

//Define our props expected from the parent component
Screen.propTypes = {
  question: React.PropTypes.string.isRequired,
  answer: React.PropTypes.string.isRequired
}

//export our component
export default Screen;
