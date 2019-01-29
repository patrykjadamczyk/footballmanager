import {
  GET_MATCH_FINALS,
  GET_MATCH_FINAL,
  ADD_MATCH_FINALS,
  UPDATE_MATCH_FINAL,
  MATCH_FINAL_LOADING
} from "../actions/types";

const initialState = {
  matchFinals: [],
  matchFinal: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MATCH_FINAL_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_MATCH_FINALS:
      return {
        ...state,
        matchFinals: action.payload,
        loading: false
      };
    case GET_MATCH_FINAL:
      return {
        ...state,
        matchFinal: action.payload,
        loading: false
      };
    case ADD_MATCH_FINALS:
      return {
        ...state,
        matchFinals: [action.payload, ...state.matchFinals]
      };
    case UPDATE_MATCH_FINAL:
      return {
        ...state,
        matchFinals: [
          action.payload,
          ...state.matchFinals.filter(
            matchFinal => matchFinal._id !== action.payload._id
          )
        ]
      };
    default:
      return state;
  }
}
