import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SelectListGroup from "../common/SelectListGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addTeam } from "../../actions/teamActions";

class TeamForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      info: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    //  const { team } = this.props;
    const newTeam = {
      country: this.state.country,
      info: this.state.info
      //    avatar: user.avatar
    };
    this.props.addTeam(newTeam);
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
          <div className="card-header bg-info text-white">Dodaj drużynę</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <SelectListGroup
                  placeholder="Kraj pochodzenia"
                  name="country"
                  value={this.state.country}
                  onChange={this.onChange}
                  error={errors.country}
                  options={options}
                />
              </div>
              <div className="form-group">
                <TextAreaFieldGroup
                  placeholder="Ogólne informacje"
                  name="info"
                  value={this.state.info}
                  onChange={this.onChange}
                  error={errors.info}
                />
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

TeamForm.propTypes = {
  addTeam: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  country: state.country,
  info: state.info,
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addTeam }
)(TeamForm);
