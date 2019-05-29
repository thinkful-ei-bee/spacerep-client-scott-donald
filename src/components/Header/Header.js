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

    if (now > 0 && now < 6) {
      greeting = `Hey there ${username}, you полуночник (nightowl)`;
    } else if (now > 6 && now < 12) {
      greeting = `доброе утро, ${username} (good morning)`;
    } else if (now > 12 && now < 18) {
      greeting = `доброе утро ${username}(good afternoon)`;
    } else if (now > 18 && now < 24) {
      greeting = `доброе утро ${username} (good evening)`;
    } else {
      greeting = `Привет ${username} (hello)`;
    }

    return (
      <div>
        <nav>
          {greeting}
          <button>
            <Link
              onClick={this.handleLogoutClick}
              to="/login"
              style={{ textDecoration: "none", color: "#FFFFFF" }}
            >
              Logout
            </Link>
          </button>
        </nav>
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
            {/* Learn to Read русский! */}
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
