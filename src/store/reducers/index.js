import { combineReducers } from "redux";
import flight from "./flight";
import passenger from "./passenger";
const rootReducer = combineReducers({
  flight,
  passenger,
});

export default rootReducer;
