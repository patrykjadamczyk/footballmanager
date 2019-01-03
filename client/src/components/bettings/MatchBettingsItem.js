import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUserById } from "../../actions/userActions";

class MatchBettingsItem extends Component {
  render() {
    const { betting } = this.props;
    //  Todo
    // const user = getUserById(betting.userId);

    return (
      <tr>
        <th scope="row">{betting.userId}</th>
        <td>{betting.firstTeamFirstHalfGoals}</td>
        <td>{betting.firstTeamSecondHalfGoals}</td>
        <td>{betting.secondTeamFirstHalfGoals}</td>
        <td>{betting.secondTeamSecondHalfGoals}</td>
      </tr>
    );
  }
}

MatchBettingsItem.propTypes = {
  betting: PropTypes.object.isReqired,
  auth: PropTypes.object.isRequired,
  getUserById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUserById }
)(MatchBettingsItem);
