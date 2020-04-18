import initialState from "./initialState";

export default function flight(state = initialState.flightsList, action) {
  let newState = { ...state };
  switch (action.type) {
    case "SET_FLIGHT_LIST": {
      newState = action.data;
      return newState;
    }
    default:
      return state;
  }
}
