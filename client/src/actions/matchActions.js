import axios from "axios";

import {
  ADD_MATCH,
  GET_MATCH,
  GET_MATCHES,
  UPDATE_MATCH,
  UPDATE_MATCH_BETTING,
  DELETE_MATCH,
  GET_ERRORS
} from "./types";

export const addMatch = matchData => dispatch => {
  axios
    .post("/api/matches", matchData)
    .then(res =>
      dispatch({
        type: ADD_MATCH,
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

export const getMatches = () => dispatch => {
  //dispatch(setPostLoading());
  axios
    .get("/api/matches")
    .then(res =>
      dispatch({
        type: GET_MATCHES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_MATCHES,
        payload: null
      })
    );
};

// get current match

export const getCurrentMatch = id => dispatch => {
  axios
    .get(`/api/matches/current/${id}`)
    .then(res =>
      dispatch({
        type: GET_MATCH,
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

// update match

export const updateMatch = matchData => dispatch => {
  axios
    .post(`/api/matches/update/${matchData.id}`, matchData)
    .then(res =>
      dispatch({
        type: UPDATE_MATCH,
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

// update match betting

export const updateMatchBetting = matchData => dispatch => {
  //  console.log(matchData);
  axios
    .post(`api/matches/betting/${matchData.id}`, matchData)
    .then(res =>
      dispatch({
        type: UPDATE_MATCH_BETTING,
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

// Delete match

export const deleteMatch = id => dispatch => {
  axios
    .delete(`/api/matches/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_MATCH,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Set loading state

export const setPostLoading = () => {
  return {};
};
