import React, { Component } from "react";
import PropTypes from "prop-types";
import MatchFinalItem from "./MatchFinalItem";

class MatchFinalFeed extends Component {
  render() {
    const { matchFinals } = this.props;
    const { matches } = this.props;
    // const matchFinalContent = matchFinals.map(matchFinal => (
    //   <MatchFinalItem key={matchFinal._id} matchFinal={matchFinal} />
    // ));
    return (
      <div>
        <h2>Ranking zakładów</h2>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Użytkownik</th>
              <th scope="col" style={{ width: "350px" }}>
                Mecz: I połowa II połowa{" "}
                <span className="d-block border border-primary">Wynik</span>
              </th>
              <th scope="col" style={{ width: "350px" }}>
                Zakład: I połowa II połowa
                <span className="d-block border border-primary">Wynik</span>
              </th>
              <th scope="col">
                <span className="d-block">Punkty I połowa II połowa</span>
                <span className="d-block">suma</span>
              </th>
              {/* <th scope="col">
                Punkty <span className="d-block">II połowa</span>
              </th>
              <th scope="col">
                Suma <span className="d-block">punktów</span>
              </th> */}
            </tr>
          </thead>
          <tbody>
            {matchFinals.map(matchFinal => (
              <MatchFinalItem
                key={matchFinal._id}
                matches={matches}
                matchFinal={matchFinal}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

MatchFinalFeed.propTypes = {
  matchFinals: PropTypes.array.isRequired,
  matches: PropTypes.array.isRequired
};

export default MatchFinalFeed;
