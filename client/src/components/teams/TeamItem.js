import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import classnames from "classnames";
//import { Link } from "react-router-dom";
import { deleteTeam } from "../../actions/teamActions";
import TeamFormEdit from "./TeamFormEdit";
import ModalDialog from "../common/ModalDialog";

class TeamItem extends Component {
  onDeleteClick(id) {
    this.props.deleteTeam(id);
  }

  onEditClick(id) {
    console.log(id);
  }

  render() {
    const { team } = this.props;
    const modalContent = "";
    const countryName = team.country.split("_")[0];
    const countrySufix = team.country.split("_")[1];

    return (
      <div className="card card-body mb-3">
        <TeamFormEdit team={team} />
        <ModalDialog id={team._id} content={modalContent} />
        <div className="row">
          <div className="col-md-2">
            <img
              className="rounded-circle d-none d-md-block"
              src={`img/flags/${countrySufix}.jpg`}
              alt=""
            />
            <br />
            <p className="text-center">{countryName}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{team.info}</p>
            <button
              onClick={this.onEditClick.bind(this, team._id)}
              className="btn btn-info mr-1 float-right"
            >
              <i className="fas fa-pen-square" />
            </button>
            <button
              onClick={this.onDeleteClick.bind(this, team._id)}
              type="button"
              className="btn btn-danger mr-1 float-right"
            >
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

TeamItem.propTypes = {
  team: PropTypes.object.isReqired,
  auth: PropTypes.object.isRequired,
  deleteTeam: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteTeam }
)(TeamItem);
