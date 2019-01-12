import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteMatch } from "../../actions/matchActions";
import TextFieldGroup from "../common/TextFieldGroup";
import MatchBettingsFeed from "../bettings/MatchBettingsFeed";
import MatchBettingUserForm from "../bettings/MatchBettingUserForm";

class MatchItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMatchBettingFeed: false,
      showMatchBettingUser: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onDeleteClick(id) {
    this.props.deleteMatch(id);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  onChange(e) {
    e.preventDefault();
  }

  onSetBettingClick(id) {
    console.log(id);
  }

  onUpdateClick(id) {
    alert("tylko administrator może zmienić wynik spotkania");
  }

  render() {
    const { match } = this.props;

    const firstTeamName = match.firstTeamName.split("_")[0];
    const firstTeamSufix = match.firstTeamName.split("_")[1];
    const secondTeamName = match.secondTeamName.split("_")[0];
    const secondTeamSufix = match.secondTeamName.split("_")[1];

    // const day = date("Y-m-d", match.date);
    // const time = date("H:i:s", match.date);

    return (
      <div className="card card-body mb-3 match-item-box">
        <div className="card card-info">
          <div
            className="card-header bg-info text-white"
            style={{ fontWeight: "bold" }}
          >
            <p className="text-white float-left mb-0">
              Termin rozgrywki: {match.date} <br /> Zobacz jak obstawiali inni
              uczestnicy rozgrywki!
            </p>
            <button
              className="btn btn-dark float-right"
              style={{ cursor: "pointer", fontSize: "20px" }}
              onClick={() => {
                this.setState({
                  showMatchBettingFeed: !this.state.showMatchBettingFeed
                });
              }}
            >
              Lista zakładów
            </button>
          </div>
          {this.state.showMatchBettingFeed ? (
            <MatchBettingsFeed bettings={match.bettings} />
          ) : null}
          <button
            type="button"
            className="btn btn-success mb-auto mb-1"
            onClick={() => {
              this.setState({
                showMatchBettingUser: !this.state.showMatchBettingUser
              });
            }}
          >
            Obstaw
          </button>
          {this.state.showMatchBettingUser ? (
            <MatchBettingUserForm match={match} />
          ) : null}
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-3 text-center">
              <p
                className="mt-2"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                I drużyna
              </p>
              <br />
              <img src={`img/flags/${firstTeamSufix}.jpg`} alt="" />
              <br />
              <p className="text-center">{firstTeamName}</p>
            </div>
            <div className="col-md-2">
              <div className="lead float-left">
                Liczba bramek I połowa:
                <TextFieldGroup
                  name="firstTeamFirstHalfGoals"
                  value={match.firstTeamFirstHalfGoals}
                  onChange={this.onChange}
                />
              </div>
              <div className="lead float-right">
                Liczba bramek II połowa:
                <TextFieldGroup
                  name="firstTeamSecondHalfGoals"
                  value={match.firstTeamSecondHalfGoals}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div
              className="col-md-2"
              style={{
                fontSize: "90px",
                fonstWeight: "bold",
                textAlign: "center"
              }}
            >
              :
              <button
                onClick={this.onUpdateClick.bind(this, match._id)}
                className="btn btn-info"
              >
                <i className="fas fa-pen-square mr-1" />
                Uaktualnij wynik
              </button>
            </div>
            <div className="col-md-3 text-center">
              <p
                className="mt-2"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                II drużyna
              </p>
              <br />
              <img src={`img/flags/${secondTeamSufix}.jpg`} alt="" />
              <br />
              <p className="text-center">{secondTeamName}</p>
            </div>
            <div className="col-md-2">
              <div className="lead float-left">
                Liczba bramek I połowa:
                <TextFieldGroup
                  name="secondTeamFirstHalfGoals"
                  value={match.secondTeamFirstHalfGoals}
                  onChange={this.onChange}
                />
              </div>
              <div className="lead float-right">
                Liczba bramek II połowa:
                <TextFieldGroup
                  name="secondTeamSecondHalfGoals"
                  value={match.secondTeamSecondHalfGoals}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="col-md-2 d-flex flex-column">
              {/* <button
                onClick={this.onDeleteClick.bind(this, match._id)}
                type="button"
                className="btn btn-danger mt-1 float-right"
              >
                <i className="fas fa-times" />
              </button> */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

MatchItem.propTypes = {
  auth: PropTypes.object.isRequired,
  deleteMatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteMatch }
)(MatchItem);
