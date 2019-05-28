import React, { Component } from 'react'
import LanguageApiService from '../../services/language-api-service';


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
      <section>
        implement and style me
      </section>
    );
  }
}

export default DashboardRoute
