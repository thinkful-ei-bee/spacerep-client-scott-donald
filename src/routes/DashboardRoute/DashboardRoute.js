import React, { Component } from 'react';
import LanguageApiService from '../../services/language-api-service';
import Progress from '../../components/Progress/Progress';
import { Link } from 'react-router-dom';


class DashboardRoute extends Component {

  state = {
    language: {},
    words: [],
  }

  componentDidMount() {
    LanguageApiService.getLanguage()
      .then(lang => 
        this.setState({
          language: lang.language,
          words: lang.words
        })
      )
      .then(() => console.log('state:', this.state))
  }
  
  render() {
    return (
      <>
        <Progress language={this.state.language} words={this.state.words}/>
        <Link to='/Learn' className='start-learning-link'>Start Learning</Link>
      </>
    );
  }
}

export default DashboardRoute
