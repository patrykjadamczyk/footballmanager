import axios from "axios";

import { ADD_MATCH_FINALS, GET_MATCH_FINALS, GET_ERRORS } from "./types";

export const addMatchFinals = matchId => dispatch => {
  axios
    .post("/api/match_finals", matchId)
    .then(res =>
      dispatch({
        type: ADD_MATCH_FINALS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getMatchFinals = () => dispatch => {
  axios
    .get("/api/match_finals")
    .then(res =>
      dispatch({
        type: GET_MATCH_FINALS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: null
      })
    );
};
