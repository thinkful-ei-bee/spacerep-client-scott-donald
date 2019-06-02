import React, { Component } from 'react';
import LanguageApiService from '../../services/language-api-service';
import Question from '../../components/Question/Question';
import QuestionForm from '../../components/QuestionForm/QuestionForm';
import Answer from '../../components/Answer/Answer';

class LearningRoute extends Component {

  state = {
    nextWord: '',
    totalScore: null,
    wordCorrectCount: null,
    wordIncorrectCount: null,

    asking: true,

    response: {
      resNextWord: '',
      resWordCorrectCount: null,
      resWordIncorrectCount: null,
      resTotalScore: null,
      resAnswer: '',
      resIsCorrect: false
    }


  }

  getHead() {
    LanguageApiService.getHead()
      .then(res => 
        this.setState({
          asking: true,
          nextWord: res.nextWord,
          totalScore: res.totalScore,
          wordCorrectCount: res.wordCorrectCount,
          wordIncorrectCount: res.wordIncorrectCount 
        })
      )
  }

  componentDidMount() {
    this.getHead();
  }

  handleGuess(guess) {
    LanguageApiService.postGuess(guess)
      .then(res => {
        this.setState({
          asking: false,
          response: {
            nextWord: res.nextWord,
            wordCorrectCount: res.wordCorrectCount,
            wordIncorrectCount: res.wordIncorrectCount,
            totalScore: res.totalScore,
            answer: res.answer,
            isCorrect: res.isCorrect
          }
        })
      })
  }

  handleNext(e) {
    e.preventDefault();
    this.getHead();
  }

  renderQorA() {
    if (this.state.asking) {
      return <QuestionForm handleGuess = {this.handleGuess.bind(this)}/>
    } else {
      return <Answer response={this.state.response} handleNext={this.handleNext.bind(this)}/>
    }
  }
  
  render() {
    return (
      <>
        <Question wordAndScore={this.state} />
        {this.renderQorA()}
      </>
    );
  }
}

export default LearningRoute
