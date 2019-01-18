import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { updateTeam, addTeam } from "../../actions/teamActions";

class TeamFormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTeamForm: false,
      id: props.team._id,
      country: props.team.country,
      info: props.team.info,
      years: props.team.years,
      errors: {}
    };
    //   console.log(props.team.country);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // console.log(this.state);
    // const currentTeam = getCurrentTeam(this.state._id);
    // console.log(currentTeam);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const teamData = {
      id: this.state.id,
      country: this.state.country,
      info: this.state.info,
      years: this.state.years
    };
    // console.log(teamData);
    this.props.updateTeam(teamData);
    //this.props.updateTeam(teamData);
  };

  onChange = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { showTeamForm, errors, country, info } = this.state;
    const countryName = country.split("_")[0];

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">
            Edytuj drużynę
            <i
              className="fa fa-sort-down float-right"
              style={{ cursor: "pointer", fontSize: "20px" }}
              onClick={() =>
                this.setState({
                  showTeamForm: !this.state.showTeamForm
                })
              }
            />
          </div>
          {showTeamForm ? (
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextFieldGroup
                    placeholder="Kraj pochodzenia"
                    name="country"
                    value={countryName}
                    onChange={this.onChange}
                    disabled="disabled"
                    error={errors.country}
                  />
                </div>
                <div className="form-group">
                  <TextAreaFieldGroup
                    placeholder="Ogólne informacje"
                    name="info"
                    value={info}
                    onChange={this.onChange}
                    error={errors.info}
                  />
                </div>
                <button type="submit" className="btn btn-dark float-right">
                  Zapisz
                </button>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

TeamFormEdit.propTypes = {
  updateTeam: PropTypes.func.isRequired,
  addTeam: PropTypes.func.isRequired,
  team: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  //  team: state.team,
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { updateTeam, addTeam }
)(TeamFormEdit);
