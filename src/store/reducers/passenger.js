import initialState from "./initialState";

export default function passenger(
  state = initialState.flightPassenger,
  action
) {
  let newState = { ...state };
  switch (action.type) {
    case "SET_FLIGHT_PASSENGER_DATA": {
      newState = action.data;
      return newState;
    }
    default:
      return state;
  }
}
