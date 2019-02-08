import React, { Component } from "react";
import PropTypes from "prop-types";
import MatchBettingItem from "./MatchBettingsItem";

class MatchBettingsFeed extends Component {
  render() {
    const { bettings, match } = this.props;
    const bettingItems = bettings.map(betting => (
      <MatchBettingItem key={betting._id} betting={betting} match={match} />
    ));

    return (
      <div className="bettings-box">
        <table className="table table-striped table-dark table-responsive mb-0">
          <thead>
            <tr>
              <th scope="col">Użytkownik</th>
              <th scope="col">I połowa I drużyna : II drużyna</th>
              <th scope="col">II połowa: I drużyna : II drużyna</th>
            </tr>
          </thead>
          <tbody>{bettingItems}</tbody>
        </table>
      </div>
    );
  }
}

MatchBettingsFeed.propTypes = {
  bettings: PropTypes.array.isRequired
};

export default MatchBettingsFeed;
