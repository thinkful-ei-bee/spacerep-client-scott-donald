import React, { Component } from 'react';
import LanguageApiService from '../../services/language-api-service';
import Header from '../../components/Header/Header';
import Progress from '../../components/Progress/Progress';


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
      </>
    );
  }
}

export default DashboardRoute
