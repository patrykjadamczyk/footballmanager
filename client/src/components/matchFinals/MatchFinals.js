import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MatchFinalFeed from "./MatchFinalFeed";
import Spinner from "../common/spinner";
import { getMatchFinals } from "../../actions/matchFinalActions";

class MatchFinals extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.push("/");
    }
    this.props.getMatchFinals();
  }

  render() {
    const { matchFinals, loading } = this.props.matchFinal;

    let matchFinalContent;

    if (matchFinals === null || loading || matchFinals.length === 0) {
      matchFinalContent = <Spinner />;
    } else {
      matchFinalContent = <MatchFinalFeed matchFinals={matchFinals} />;
    }
    return (
      <div className="feed match-finals-box">
        <div className="container">
          <div className="col-md-12">{matchFinalContent}</div>
        </div>
      </div>
    );
  }
}

MatchFinals.propTypes = {
  matchFinal: PropTypes.object.isRequired,
  getMatchFinals: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  matchFinal: state.matchFinal,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getMatchFinals }
)(MatchFinals);
