import React, {Component} from 'react';
import './Answer.css';

class Answer extends Component {

  renderFeedback() {
    if(this.props.response.isCorrect) {
      return <div className='feedback-div'> <h2>Да!!</h2> <p>'Yes!!'(russian)</p> </div>
    } else {
      return <div className='feedback-div'> <h2>нет...</h2> <p>'no...'(russian)</p> </div>
    }
  }


  render() {

    const { response } = this.props;

    return (
      <section className='answer-section'> 
        {this.renderFeedback()}
        <p>Correct Translation: {response.answer.correct}</p>
        <p>Letter Pronunciation: {response.answer.example}</p>
        <p>Letter Name: {response.answer.name}</p>

        <button onClick={e => this.props.handleNext(e)}>Next</button>
      </section>
    )
  }
}

export default Answer;