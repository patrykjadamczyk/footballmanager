import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import { updateMatchBetting } from "../../actions/matchActions";

class MatchBettingUserForm extends Component {
  constructor(props) {
    super(props);

    const betting = props.match.bettings.filter(
      betting => betting.userId === props.auth.user.id
    );

    //  console.log(betting[0]);

    this.state = {
      matchId: props.match._id,
      bettingId: betting[0] ? betting[0]._id : "",
      firstTeamFirstHalfGoals: betting[0]
        ? betting[0].firstTeamFirstHalfGoals
        : "",
      firstTeamSecondHalfGoals: betting[0]
        ? betting[0].firstTeamSecondHalfGoals
        : "",
      secondTeamFirstHalfGoals: betting[0]
        ? betting[0].secondTeamFirstHalfGoals
        : "",
      secondTeamSecondHalfGoals: betting[0]
        ? betting[0].secondTeamSecondHalfGoals
        : "",
      errors: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newBetting = {
      id: this.state.matchId,
      firstTeamFirstHalfGoals: this.state.firstTeamFirstHalfGoals,
      firstTeamSecondHalfGoals: this.state.firstTeamSecondHalfGoals,
      secondTeamFirstHalfGoals: this.state.secondTeamFirstHalfGoals,
      secondTeamSecondHalfGoals: this.state.secondTeamSecondHalfGoals
    };
    // console.log(newBetting);
    this.props.updateMatchBetting(newBetting);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="post-form mb-3">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="firstTeam">I drużyna</label>
            <TextFieldGroup
              placeholder="I połowa"
              name="firstTeamFirstHalfGoals"
              value={this.state.firstTeamFirstHalfGoals}
              onChange={this.onChange}
              error={errors.firstTeamFirstHalfGoals}
            />
            <TextFieldGroup
              placeholder="II połowa"
              name="firstTeamSecondHalfGoals"
              value={this.state.firstTeamSecondHalfGoals}
              onChange={this.onChange}
              error={errors.firstTeamSecondHalfGoals}
            />
          </div>
          <div className="form-group">
            <label htmlFor="secondTeam">II drużyna</label>
            <TextFieldGroup
              placeholder="I połowa"
              name="secondTeamFirstHalfGoals"
              value={this.state.secondTeamFirstHalfGoals}
              onChange={this.onChange}
              error={errors.secondTeamFirstHalfGoals}
            />
            <TextFieldGroup
              placeholder="II połowa"
              name="secondTeamSecondHalfGoals"
              value={this.state.secondTeamSecondHalfGoals}
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
