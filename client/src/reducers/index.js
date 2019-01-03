import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import postReducer from "./postReducer";
import teamReducer from "./teamReducer";
import matchReducer from "./matchReducer";
import userReducer from "./userReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  post: postReducer,
  team: teamReducer,
  match: matchReducer,
  user: userReducer
});
