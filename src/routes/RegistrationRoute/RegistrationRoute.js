import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    return (
      <section>
        <p>
          Practice reading Кириллица (Cyrillic) with the spaced repetition technique.
        </p>
        <h2 className="widget">Sign up</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationRoute;
