import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import teamReducer from "./teamReducer";
import matchReducer from "./matchReducer";
import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  team: teamReducer,
  match: matchReducer,
  user: userReducer
});
