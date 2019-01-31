import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class MatchFinalItem extends Component {
  render() {
    const { matchFinal, matches } = this.props;

    const match = matches.filter(match => match._id == matchFinal.matchId)[0];
    const firstTeamName = match.firstTeamName.split("_")[0];
    const firstTeamSufix = match.firstTeamName.split("_")[1];
    const secondTeamName = match.secondTeamName.split("_")[0];
    const secondTeamSufix = match.secondTeamName.split("_")[1];
    const firstTeamTotalGoals =
      match.firstTeamFirstHalfGoals + match.firstTeamSecondHalfGoals;
    const secondTeamTotalGoals =
      match.secondTeamFirstHalfGoals + match.secondTeamSecondHalfGoals;

    console.log(match);
    const betting = match.bettings.filter(
      betting => betting.userId == matchFinal.userId
    )[0];

    const firstTeamBettingTotalGoals =
      betting.firstTeamFirstHalfGoals + betting.firstTeamSecondHalfGoals;
    const secondTeamBettingTotalGoals =
      betting.secondTeamFirstHalfGoals + betting.secondTeamSecondHalfGoals;

    return (
      <tr>
        <td>{betting.userName}</td>
        <td>
          <div style={{ minWidth: "150px" }}>
            <span>
              {firstTeamName}
              <img
                className="ml-2 mr-2"
                src={`img/flags/${firstTeamSufix}.jpg`}
                alt=""
                style={{ width: "20px" }}
              />
              {match.firstTeamFirstHalfGoals}
            </span>
          </div>
          <div>
            <span>
              {secondTeamName}
              <img
                className="ml-2 mr-2"
                src={`img/flags/${secondTeamSufix}.jpg`}
                alt=""
                style={{ width: "20px" }}
              />
              {match.secondTeamFirstHalfGoals}
            </span>
          </div>
        </td>
        <td>
          <div style={{ minWidth: "150px" }}>
            <span>
              {firstTeamName}
              <img
                className="ml-2 mr-2"
                src={`img/flags/${firstTeamSufix}.jpg`}
                alt=""
                style={{ width: "20px" }}
              />
              {match.firstTeamSecondHalfGoals}
            </span>
          </div>
          <div>
            <span>
              {secondTeamName}
              <img
                className="ml-2 mr-2"
                src={`img/flags/${secondTeamSufix}.jpg`}
                alt=""
                style={{ width: "20px" }}
              />
              {match.secondTeamSecondHalfGoals}
            </span>
          </div>
        </td>
        <td>
          <div style={{ minWidth: "150px" }}>
            <span>
              {firstTeamName}
              <img
                className="ml-2 mr-2"
                src={`img/flags/${firstTeamSufix}.jpg`}
                alt=""
                style={{ width: "20px" }}
              />
              {firstTeamTotalGoals}
            </span>
          </div>
          <div>
            <span>
              {secondTeamName}
              <img
                className="ml-2 mr-2"
                src={`img/flags/${secondTeamSufix}.jpg`}
                alt=""
                style={{ width: "20px" }}
              />
              {secondTeamTotalGoals}
            </span>
          </div>
        </td>
        <td>
          <div style={{ minWidth: "150px" }}>
            <span>
              {firstTeamName}
              <img
                className="ml-2 mr-2"
                src={`img/flags/${firstTeamSufix}.jpg`}
                alt=""
                style={{ width: "20px" }}
              />
              {betting.firstTeamFirstHalfGoals}
            </span>
          </div>
          <div>
            <span>
              {secondTeamName}
              <img
                className="ml-2 mr-2"
                src={`img/flags/${secondTeamSufix}.jpg`}
                alt=""
                style={{ width: "20px" }}
              />
              {betting.secondTeamFirstHalfGoals}
            </span>
          </div>
        </td>
        <td>
          <div style={{ minWidth: "150px" }}>
            <span>
              {firstTeamName}
              <img
                className="ml-2 mr-2"
                src={`img/flags/${firstTeamSufix}.jpg`}
                alt=""
                style={{ width: "20px" }}
              />
              {betting.firstTeamSecondHalfGoals}
            </span>
          </div>
          <div>
            <span>
              {secondTeamName}
              <img
                className="ml-2 mr-2"
                src={`img/flags/${secondTeamSufix}.jpg`}
                alt=""
                style={{ width: "20px" }}
              />
              {betting.secondTeamSecondHalfGoals}
            </span>
          </div>
        </td>
        <td>
          <div style={{ minWidth: "150px" }}>
            <span>
              {firstTeamName}
              <img
                className="ml-2 mr-2"
                src={`img/flags/${firstTeamSufix}.jpg`}
                alt=""
                style={{ width: "20px" }}
              />
              {firstTeamBettingTotalGoals}
            </span>
          </div>
          <div>
            <span>
              {secondTeamName}
              <img
                className="ml-2 mr-2"
                src={`img/flags/${secondTeamSufix}.jpg`}
                alt=""
                style={{ width: "20px" }}
              />
              {secondTeamBettingTotalGoals}
            </span>
          </div>
        </td>
        <td>{matchFinal.firstHalfPoints}</td>
        <td>{matchFinal.secondHalfPoints}</td>
        <td>{matchFinal.totalPoints}</td>
      </tr>
    );
  }
}

MatchFinalItem.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(MatchFinalItem);
