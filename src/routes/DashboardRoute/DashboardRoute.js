import React, { Component } from "react";
import LanguageApiService from "../../services/language-api-service";
import Progress from "../../components/Progress/Progress";
import { Link } from "react-router-dom";
import Gauge from "./gauge";
import "./DashboardRoute.css";

class DashboardRoute extends Component {
  state = {
    language: {},
    words: [],
    correct: 0,
    incorrect: 0
  };

  componentDidMount() {
    LanguageApiService.getLanguage()
      .then(lang =>
        this.setState({
          language: lang.language,
          words: lang.words
        })
      )
      .then(() => console.log("")); // removed console log; inner text was ("state:", this.state)
  }

  handleUpdateScore(corScore, incorScore) {
    this.setState({
      correct: corScore,
      incorrect: incorScore
    });
  }

  render() {
    return (
      <div>
        <div className="first-row">
          <img
            src="https://i.imgur.com/OV2l6KA.png"
            alt=""
            height="208px"
            width="167px"
            className="langImg"
          />
          <Gauge
            updateScore={this.handleUpdateScore}
            correct={this.state.correct}
            incorrect={this.state.incorrect}
          />
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
          <h3>Alphabet-specific Scores</h3>
          <div className="bubbleChart">
            <Progress language={this.state.language} words={this.state.words} />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardRoute;
