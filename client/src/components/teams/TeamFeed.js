import React, { Component } from "react";
import PropTypes from "prop-types";
import TeamItem from "./TeamItem";

class TeamFeed extends Component {
  render() {
    let { teams } = this.props;
    teams = Array.from(teams);

    return teams.map(team => <TeamItem key={team._id} team={team} />);
  }
}

TeamFeed.propTypes = {
  teams: PropTypes.array.isRequired
};

export default TeamFeed;
