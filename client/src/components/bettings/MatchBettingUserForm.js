import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import { updateMatchBetting } from "../../actions/matchActions";

class MatchBettingUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    /*
    const newMatch = {
      date: this.state.date,
      firstTeamName: this.state.firstTeamName,
      secondTeamName: this.state.secondTeamName,
      firstTeamFirstHalfGoals: this.state.firstTeamFirstHalfGoals,
      firstTeamSecondHalfGoals: this.state.firstTeamSecondHalfGoals,
      secondTeamFirstHalfGoals: this.state.secondTeamFirstHalfGoals,
      secondTeamSecondHalfGoals: this.state.secondTeamSecondHalfGoals
    };
    this.props.addMatch(newMatch);*/
  }

  render() {
    const { errors } = this.state;
    const { auth, match } = this.props;

    const betting = match.bettings.filter(
      betting => betting.userId === auth.user.id
    );

    if (betting) {
    }
    //   console.log(betting[0].userName);
    return (
      <div className="post-form mb-3">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstTeam">I drużyna</label>
            <TextFieldGroup
              placeholder="I połowa"
              name="firstTeamFirstHalfGoals"
              value={betting[0].firstTeamFirstHalfGoals}
              onChange={this.onChange}
              error={errors.firstTeamFirstHalfGoals}
            />
            <TextFieldGroup
              placeholder="II połowa"
              name="firstTeamSecondHalfGoals"
              value={betting[0].firstTeamSecondHalfGoals}
              onChange={this.onChange}
              error={errors.firstTeamSecondHalfGoals}
            />
          </div>
          <div className="form-group">
            <label htmlFor="secondTeam">II drużyna</label>
            <TextFieldGroup
              placeholder="I połowa"
              name="secondTeamFirstHalfGoals"
              value={betting[0].secondTeamFirstHalfGoals}
              onChange={this.onChange}
              error={errors.secondTeamFirstHalfGoals}
            />
            <TextFieldGroup
              placeholder="II połowa"
              name="secondTeamSecondHalfGoals"
              value={betting[0].secondTeamSecondHalfGoals}
              onChange={this.onChange}
              error={errors.secondTeamSecondHalfGoals}
            />
          </div>
          <button type="submit" className="btn btn-dark float-right">
            Zapisz
          </button>
        </form>
      </div>
    );
  }
}

MatchBettingUserForm.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { updateMatchBetting }
)(MatchBettingUserForm);
