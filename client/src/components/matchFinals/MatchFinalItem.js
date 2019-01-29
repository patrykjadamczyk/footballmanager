import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentMatch } from "../../actions/matchActions";

class MatchFinalItem extends Component {
  componentDidMount() {
    console.log(this.props.getCurrentMatch(this.props.matchFinal.matchId));
  }
  render() {
    const { matchFinal } = this.props;
    // console.log(this.props);
    // const firstTeamName = this.state.firstTeamName.split("_")[0];
    // const firstTeamSufix = this.state.firstTeamName.split("_")[1];
    // const secondTeamName = this.state.secondTeamName.split("_")[0];
    // const secondTeamSufix = this.state.secondTeamName.split("_")[1];
    //  console.log(matchFinal);
    return (
      <tr>
        <td>{matchFinal.userId}</td>
        <td>{matchFinal.matchId}</td>
        <td>{matchFinal.matchId}</td>
        <td>{matchFinal.firstHalfPoints}</td>
        <td>{matchFinal.secondHalfPoints}</td>
        <td>{matchFinal.totalPoints}</td>
      </tr>
    );
  }
}

MatchFinalItem.propTypes = {
  auth: PropTypes.object.isRequired,
  getCurrentMatch: PropTypes.func.isRequired,
  getMatches: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentMatch }
)(MatchFinalItem);
