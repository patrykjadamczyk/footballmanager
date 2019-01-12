import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MatchForm from "./MatchForm";
import MatchFeed from "./MatchFeed";
import Spinner from "../common/spinner";
import { getMatches } from "../../actions/matchActions";

class Matches extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.push("/");
    }
    this.props.getMatches();
  }

  render() {
    const { matches, loading } = this.props.match;

    let matchContent;

    if (matches === null || loading || matches.length === 0) {
      matchContent = <Spinner />;
    } else {
      matchContent = <MatchFeed matches={matches} />;
    }
    return (
      <div className="feed matches-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <MatchForm />
              {matchContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Matches.propTypes = {
  match: PropTypes.object.isRequired,
  getMatches: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  match: state.match,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getMatches }
)(Matches);
