import React, { Component } from "react";
import LanguageApiService from "../../services/language-api-service";
import Progress from "../../components/Progress/Progress";
import { Link } from "react-router-dom";
import Gauge from "./gauge";
import "./DashboardRoute.css";
const uuidv4 = require("uuid/v4");

class DashboardRoute extends Component {
  state = {
    language: {},
    words: []
  };

  componentDidMount() {
    LanguageApiService.getLanguage().then(lang =>
      this.setState({
        language: lang.language,
        words: lang.words
      })
    );
  }

  calcScore() {
    let totalCorrect = 0;
    let totalIncorrect = 0;
    this.renderWords(this.state.words).map(word => {
      totalCorrect = totalCorrect + word.correct;
      totalIncorrect = totalIncorrect + word.incorrect;
      return "";
    });
    return [totalCorrect, totalIncorrect];
  }

  renderWords(words) {
    let kAlphabet = [];
    words.map(word =>
      kAlphabet.push({
        hour: word.original,
        key: uuidv4(),
        index: 1,
        value: word.correct_count - word.incorrect_count,
        correct: word.correct_count,
        incorrect: word.incorrect_count
      })
    );
    return kAlphabet;
  }

  render() {
    return (
      <div>
        <div className="first-row">
          {/* <img
            src="https://i.imgur.com/OV2l6KA.png"
            alt=""
            height="208px"
            width="167px"
            className="langImg"
          /> */}
          <Gauge score={this.calcScore()} />
        </div>
        <button className="start-button">
          <Link
            to="/Learn"
            style={{ textDecoration: "none", color: "#FFFFFF" }}
          >
            <h2> Start Learning! </h2>
          </Link>
        </button>
        <div className="second-row">
          <h3 className="second-row-title">Alphabet-specific Scores</h3>
          <div className="bubbleChart">
            <Progress
              language={this.state.language}
              kAlphabet={this.renderWords(this.state.words)}
              handleUpdateScore={this.handleUpdateScore}
              correct={this.state.correct}
              incorrect={this.state.incorrect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardRoute;
