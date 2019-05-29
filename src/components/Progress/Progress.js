import React, {Component} from 'react';
import './Progress.css';

class Progress extends Component {

  renderWords = (words) => {
    return words.map(word => 
        <div className='word-div' key={word.id}>
          <span>{word.original}</span> 
          <span>{word.correct_count}/{word.correct_count + word.incorrect_count || 0}</span>
        </div>
    )
  }

  render() {

    const {language, words} = this.props

    return (
      <section className='progress-section'> 

        <div className='lang-prog-div'>
          <h2>{language.name}</h2> 
          <span>total score:{language.total_score}</span>
        </div>

        <div className='word-prog-div'>
          {this.renderWords(words)}
        </div>

      </section>
    )
  }
}

export default Progress;