import React, {Component} from 'react';
import './Question.css';

class Question extends Component {


  render() {

    const {nextWord, totalScore, wordCorrectCount, wordIncorrectCount} = this.props.wordAndScore;
    return (
      <section className='question-section'> 
        <h2>{nextWord}</h2>
        <p>Letter Score: {wordCorrectCount}/{wordCorrectCount+wordIncorrectCount}</p>
        <p>Total Score: {totalScore}</p>
      </section>
    )
  }
}

export default Question;