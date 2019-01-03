import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TeamForm from "./TeamForm";
import TeamFeed from "./TeamFeed";
import Spinner from "../common/spinner";
import { getTeams } from "../../actions/teamActions";

class Teams extends Component {
  componentDidMount() {
    this.props.getTeams();
  }
  render() {
    const { teams, loading } = this.props.team;
    let teamContent;

    if (teams === null || loading || teams.length === 0) {
      teamContent = <Spinner />;
    } else {
      teamContent = <TeamFeed teams={teams} />;
    }
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <TeamForm />
              {teamContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Teams.propTypes = {
  team: PropTypes.object.isRequired,
  getTeams: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  team: state.team
});

export default connect(
  mapStateToProps,
  { getTeams }
)(Teams);
