import React from "react";

const MatchLegend = () => {
  return (
    <span className="legend-box clearfix">
      <h3>Legenda</h3>
      <ul>
        <li>
          <div className="value bg-hit-result d-inline-block mr-2" />
          <label>Trafiony wynik</label>
        </li>
        <li>
          <div className="value bg-hit-winner d-inline-block mr-2" />
          <label>Trafiona wygrana</label>
        </li>
        <li />
      </ul>
    </span>
  );
};

export default MatchLegend;
