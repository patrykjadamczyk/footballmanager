import React, { Component } from "react";
import PropTypes from "prop-types";
import TeamItem from "./TeamItem";

class TeamFeed extends Component {
  render() {
    const { teams } = this.props;
    return(
      <div className="h1">
      
      gggg</div>
    )
  }
}

TeamFeed.propTypes = {
  teams: PropTypes.array.isRequired
};

export default TeamFeed;
