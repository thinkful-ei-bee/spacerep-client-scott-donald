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
    // resNextWord: '',
    // resWordCorrectCount: null,
    // resWordIncorrectCount: null,
    // resTotalScore: null,
    // resAnswer: '',
    // resIsCorrect: false


  }

  componentDidMount() {
    LanguageApiService.getHead()
      .then(res => 
        this.setState({
          nextWord: res.nextWord,
          totalScore: res.totalScore,
          wordCorrectCount: res.wordCorrectCount,
          wordIncorrectCount: res.wordIncorrectCount 
        })
      )
      .then(() => console.log('state:', this.state))
  }

  handleGuess(guess) {
    console.log(guess);
    LanguageApiService.postGuess(guess)
      .then(res => {
        console.log('res', res)
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
          // resNextWord: res.nextWord,
          // resWordCorrectCount: res.wordCorrectCount,
          // resWordIncorrectCount: res.wordIncorrectCount,
          // resTotalScore: res.totalScore,
          // resAnswer: res.answer,
          // resIsCorrect: res.isCorrect
        })
      })
      .then(() => console.log('response:', this.state))
  }

  renderQorA() {
    if (this.state.asking) {
      return <QuestionForm handleGuess = {this.handleGuess.bind(this)}/>
    } else {
      return <Answer response={this.state.response}/>
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
