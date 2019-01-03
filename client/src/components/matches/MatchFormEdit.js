import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { updateMatch } from "../../actions/matchActions";

class MatchFormEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMatchForm: false,
      id: props.match._id,
      country: props.match.country,
      info: props.match.info,
      years: props.match.years
      //  errors: {}
    };
    //   console.log(props.match.country);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // console.log(this.state);
    // const currentTeam = getCurrentTeam(this.state._id);
    // console.log(currentTeam);
  }

  onSubmit = e => {
    e.preventDefault();

    const matchData = {
      id: this.state.id,
      country: this.state.country,
      info: this.state.info,
      years: this.state.years
    };
    //   console.log(matchData.id);
    this.props.updateMatch(matchData);
  };

  onChange = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { showMatchForm, errors, country, info } = this.state;

    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">
            Ustaw wynik spodkania
            <i
              className="fa fa-sort-down float-right"
              style={{ cursor: "pointer", fontSize: "20px" }}
              onClick={() =>
                this.setState({
                  showMatchForm: !this.state.showMatchForm
                })
              }
            />
          </div>
          {showMatchForm ? (
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextFieldGroup
                    placeholder="Kraj pochodzenia"
                    name="country"
                    value={country}
                    onChange={this.onChange}
                    //    error={errors}
                  />
                </div>
                <div className="form-group">
                  <TextAreaFieldGroup
                    placeholder="Ogólne informacje"
                    name="info"
                    value={info}
                    onChange={this.onChange}
                    //  error={errors}
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

MatchFormEdit.propTypes = {
  match: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  updateMatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  //  team: state.team,
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { updateMatch }
)(MatchFormEdit);
