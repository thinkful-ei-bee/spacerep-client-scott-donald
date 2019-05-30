import React, {Component} from 'react';
import './QuestionForm.css';

class QuestionForm extends Component {

  state = {
    error: null,

    guess: '',
    guessValid: false
  }

  validateGuess(guess) {
    if (!guess) {
      this.setState({
        error: null,
        guessValid: false
      });
    }
    else if (guess.length && !/^[a-zA-Z ]+$/.test(guess)) {
      this.setState({
        error: 'answer should only include letters',
        guessValid: false
      });
    }
    else if (guess.length > 9) {
      this.setState({
        error: 'answer should be less than 10 characters',
        guessValid: false
      })
    }
    else {
      this.setState({
        error: null,
        guessValid: true
      });
    }
  }

  updateGuess(input) {
    const guess = input.toLowerCase();
    this.setState({guess}, () => {this.validateGuess(guess)});
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handleGuess(this.state.guess)
  }

  render() {

    const {error, guessValid} = this.state;
    return (

      <form className='question-form' onSubmit={e => this.handleSubmit(e)}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <label htmlFor='learn-guess-input'>Translation:</label>
        <input type='text' id='learn-guess-input' 
          onChange={event => this.updateGuess(event.target.value)}
        />
        <br/>
        <button type='submit' disabled={!guessValid}>Submit Answer</button>
      </form>
    )
  }
}

export default QuestionForm;