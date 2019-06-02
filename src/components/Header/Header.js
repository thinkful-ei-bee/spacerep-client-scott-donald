import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../contexts/UserContext";
import "./Header.css";

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    let now = new Date();
    let username = this.context.user.name;
    now = now.getHours();
    let greeting = "";
    let translation = "";

    if (now >= 0 && now < 6) {
      greeting = `Hey there ${username}, you кукумявка`;
      translation = "(nightowl)";
    } else if (now >= 6 && now < 12) {
      greeting = `добро утро, ${username}`;
      translation = "(good morning)";
    } else if (now >= 12 && now < 18) {
      greeting = `добър ден, ${username}`;
      translation = "(good afternoon)";
    } else if (now >= 18 && now < 24) {
      greeting = `добър вечер, ${username}`;
      translation = "(good evening)";
    } else {
      greeting = `Здравейте, ${username}`;
      translation = "(hello)";
    }

    return (
      <div>
        <nav>
          <Link
            onClick={this.handleLogoutClick}
            to="/login"
            style={{ color: "#ffc006", fontSize: 10 }}
          >
            <h5> Logout </h5>
          </Link>
        </nav>
        <h3 className="greeting"> {greeting} </h3>
        <p className="translation"> {translation}</p>
      </div>
    );
  }

  renderLoginLink() {
    return <nav />;

    // I removed the nav bar before login because it is redundant
    // with other elements on the page but commented out here
    // for posterity

    // return (
    //   <nav>
    //     <Link to="/login">Login</Link> <Link to="/register">Sign up</Link>
    //   </nav>
    // );
  }

  render() {
    return (
      <header>
        <h1>
          <Link to="/" style={{ textDecoration: "none", color: "#1cb0f6" }}>
            Learn to Read Кириллица!
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header;
