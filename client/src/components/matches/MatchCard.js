import React from "react";
import PropTypes from "prop-types";

const MatchCard = ({ name, sufix, goals }) => {
  return (
    <span>
      <div
        className="d-inline"
        style={{ width: "70px", height: "18px", overflow: "hidden" }}
      >
        {name}
      </div>
      <img
        className="ml-2 mr-2"
        src={`img/flags/${sufix}.jpg`}
        alt=""
        style={{ width: "20px" }}
      />
      {goals}
    </span>
  );
};

MatchCard.propTypes = {
  name: PropTypes.string.isRequired,
  sufix: PropTypes.string.isRequired,
  goals: PropTypes.string.isRequired
};

export default MatchCard;
