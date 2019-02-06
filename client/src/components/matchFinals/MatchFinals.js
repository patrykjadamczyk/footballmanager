import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MatchFinalFeed from "./MatchFinalFeed";
import Spinner from "../common/spinner";
import { getMatchFinals } from "../../actions/matchFinalActions";
import { getMatches } from "../../actions/matchActions";

class MatchFinals extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.push("/");
    }
    this.props.getMatchFinals();
    this.props.getMatches();
  }

  render() {
    const { matchFinals, loading } = this.props.matchFinal;
    const { matches } = this.props.match;

    let matchFinalContent;

    if (
      matchFinals === null ||
      loading ||
      matchFinals.length === 0 ||
      matches === null ||
      matches.length === 0
    ) {
      matchFinalContent = <Spinner />;
    } else {
      // console.log(matchFinals);
      //console.log(matches);
      // matchFinals.map(matchFinal => {
      //   console.log(matchFinal.matchId);
      //   this.props.getCurrentMatch(matchFinal.matchId);
      //   console.log(this.props.match);
      // });
      // let reverse = matchFinals.reverse();

      matchFinalContent = (
        <MatchFinalFeed matches={matches} matchFinals={matchFinals} />
      );
    }
    return <div className="feed match-finals-box">{matchFinalContent}</div>;
  }
}

MatchFinals.propTypes = {
  matchFinal: PropTypes.object.isRequired,
  getMatchFinals: PropTypes.func.isRequired,
  getMatches: PropTypes.func.isRequired,
  // matches: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  matchFinal: state.matchFinal,
  match: state.match,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getMatchFinals, getMatches }
)(MatchFinals);
