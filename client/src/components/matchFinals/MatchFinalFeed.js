import React, { Component } from "react";
import PropTypes from "prop-types";
import MatchFinalItem from "./MatchFinalItem";

class MatchFinalFeed extends Component {
  render() {
    const { matchFinals } = this.props;
    const matchFinalContent = matchFinals.map(matchFinal => (
      <MatchFinalItem key={matchFinal._id} matchFinal={matchFinal} />
    ));
    return (
      <div>
        <h2>Ranking zakładów</h2>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Użytkownik</th>
              <th scope="col">Wynik meczu</th>
              <th scope="col">Wynik zakładu</th>
              <th scope="col">Liczba pkt I połowa</th>
              <th scope="col">Liczba pkt II połowa</th>
              <th scope="col">Łączna liczba punktów</th>
            </tr>
          </thead>
          <tbody>{matchFinalContent}</tbody>
        </table>
      </div>
    );
  }
}

MatchFinalFeed.propTypes = {
  matchFinals: PropTypes.array.isRequired
};

export default MatchFinalFeed;
