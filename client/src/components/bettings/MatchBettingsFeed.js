import React, { Component } from "react";
import PropTypes from "prop-types";
import MatchBettingItem from "./MatchBettingsItem";

class MatchBettingsFeed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { bettings } = this.props;
    const bettingItems = bettings.map(betting => (
      <MatchBettingItem key={betting._id} betting={betting} />
    ));

    return (
      <div className="bettingsBox">
        <table className="table table-striped table-dark table-responsive">
          <thead>
            <tr>
              <th scope="col">Użytkownik</th>
              <th scope="col">I drużyna I połowa</th>
              <th scope="col">I drużyna II połowa</th>
              <th scope="col">II drużyna I połowa </th>
              <th scope="col">II drużyna II połowa </th>
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
