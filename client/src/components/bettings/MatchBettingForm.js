import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import { updateMatchBetting } from "../../actions/matchActions";

class MatchBettingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      firstTeamName: "",
      secondTeamName: "",
      firstTeamFirstHalfGoals: "",
      firstTeamSecondHalfGoals: "",
      secondTeamFirstHalfGoals: "",
      secondTeamSecondHalfGoals: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
    console.log(newProps.errors);
  }

  onSubmit(e) {
    e.preventDefault();

    const newMatch = {
      date: this.state.date,
      firstTeamName: this.state.firstTeamName,
      secondTeamName: this.state.secondTeamName,
      firstTeamFirstHalfGoals: this.state.firstTeamFirstHalfGoals,
      firstTeamSecondHalfGoals: this.state.firstTeamSecondHalfGoals,
      secondTeamFirstHalfGoals: this.state.secondTeamFirstHalfGoals,
      secondTeamSecondHalfGoals: this.state.secondTeamSecondHalfGoals
    };
    this.props.addMatch(newMatch);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    const options = [
      { label: "Wybierz drużynę", value: 0 },
      { label: "Polska", value: "Polska_Pl" },
      { label: "Niemcy", value: "Niemcy_De" },
      { label: "Francja", value: "Francja_Fr" },
      { label: "Włochy", value: "Włochy_It" },
      { label: "Anglia", value: "Anglia_En" },
      { label: "Hiszpania", value: "Hiszpania_Es" },
      { label: "Rosja", value: "Rosja_Ru" },
      { label: "Szwecja", value: "Szwecja_Se" }
    ];
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Dodaj mecz</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="">Podaj datę meczu</label>
                  <TextFieldGroup
                    placeholder="Podaj datę meczu"
                    name="date"
                    type="date"
                    value={this.state.date}
                    onChange={this.onChange}
                    error={errors.date}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <SelectListGroup
                    placeholder="Kraj pochodzenia I drużyna"
                    name="firstTeamName"
                    value={this.state.firstTeamName}
                    onChange={this.onChange}
                    options={options}
                    error={errors.firstTeamName}
                  />
                  <SelectListGroup
                    placeholder="Kraj pochodzenia II drużyna"
                    name="secondTeamName"
                    value={this.state.secondTeamName}
                    onChange={this.onChange}
                    options={options}
                    error={errors.secondTeamName}
                  />
                </div>
                <div className="col-md-4">
                  <TextFieldGroup
                    placeholder="Liczba bramek I drużyna I połowa"
                    name="firstTeamFirstHalfGoals"
                    value={this.state.firstTeamFirstHalfGoals}
                    onChange={this.onChange}
                    error={errors.firstTeamFirstHalfGoals}
                  />
                  <TextFieldGroup
                    placeholder="Liczba bramek II drużyna I połowa"
                    name="secondTeamFirstHalfGoals"
                    value={this.state.secondTeamFirstHalfGoals}
                    onChange={this.onChange}
                    error={errors.secondTeamFirstHalfGoals}
                  />
                </div>
                <div className="col-md-4">
                  <TextFieldGroup
                    placeholder="Liczba bramek I drużyna II połowa"
                    name="firstTeamSecondHalfGoals"
                    value={this.state.firstTeamSecondHalfGoals}
                    onChange={this.onChange}
                    error={errors.firstTeamSecondHalfGoals}
                  />
                  <TextFieldGroup
                    placeholder="Liczba bramek II drużyna II połowa"
                    name="secondTeamSecondHalfGoals"
                    value={this.state.secondTeamSecondHalfGoals}
                    onChange={this.onChange}
                    error={errors.secondTeamSecondHalfGoals}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-dark float-right">
                Dodaj
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

MatchForm.propTypes = {
  addMatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  firstTeamName: state.firstTeamName,
  secondTeamName: state.secondTeamName,
  firstTeamFirstHalfGoals: state.firstTeamFirstHalfGoals,
  firstTeamSecondHalfGoals: state.firstTeamSecondHalfGoals,
  secondTeamFirstHalfGoals: state.secondTeamFirstHalfGoals,
  secondTeamSecondHalfGoals: state.secondTeamSecondHalfGoals,
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { updateMatchBetting }
)(MatchBettingForm);
