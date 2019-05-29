import React, { Component } from 'react';
import LanguageApiService from '../../services/language-api-service';
import Question from '../../components/Question/Question';

class LearningRoute extends Component {

  state = {
    nextWord: '',
    totalScore: null,
    wordCorrectCount: null,
    wordIncorrectCount: null,
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
  
  render() {
    return (
      <>
        <Question wordAndScore={this.state} />
      </>
    );
  }
}

export default LearningRoute
