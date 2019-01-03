import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Posts from "./components/posts/Posts";
import Teams from "./components/teams/Teams";
import Matches from "./components/matches/Matches";

import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  //  Set auth token auth
  setAuthToken(localStorage.jwtToken);
  // Decode token get user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and Authenticate
  store.dispatch(setCurrentUser(decoded));

  // check for expire token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/feed" component={Posts} />
              <Route exact path="/teams_feed" component={Teams} />
              <Route exact path="/matches_feed" component={Matches} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
