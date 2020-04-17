import { takeLatest, put, call, apply, all } from "redux-saga/effects";
const baseUrl = process.env.API_URL + "/flightsData/";
const basePassengerUrl = process.env.API_URL + "/flightAndPassengerDetails/";

export function* getFlightList() {
  const response = yield call(fetch, baseUrl);
  const data = yield apply(response, response.json);
  yield put({
    type: "SET_FLIGHT_LIST",
    data,
  });
}
export function* saveFlightDetails({ data }) {
  console.log(data);
  const response = yield call(fetch, baseUrl + data.id, {
    method: "PUT", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  });
  if (response.status) yield put({ type: "GET_FLIGHTS_LIST" });
}

export function* deleteFlight({ flightId }) {
  console.log("this", flightId);
  const response = yield call(fetch, baseUrl + flightId, { method: "DELETE" });
  if (response.status) yield put({ type: "GET_FLIGHTS_LIST" });
}

export function* getFlightAndPassengerDetails() {
  const response = yield call(fetch, basePassengerUrl);
  const data = yield apply(response, response.json);
  yield put({
    type: "SET_FLIGHT_PASSENGER_DATA",
    data,
  });
}
function* actionWatchergetFlightList() {
  yield takeLatest("GET_FLIGHTS_LIST", getFlightList);
}
function* actionWatcherDeleteFlight() {
  yield takeLatest("DELETE_FLIGHT", deleteFlight);
}
function* actionWatcherUpdateFlight() {
  yield takeLatest("UPDATED_FLIGHTLIST", saveFlightDetails);
}
function* actionWatchergetFlightAndPassengerDetails() {
  yield takeLatest("GET_FLIGHT_PASSENGER_DATA", getFlightAndPassengerDetails);
}
export default function* rootSaga() {
  yield all([
    actionWatchergetFlightList(),
    actionWatcherDeleteFlight(),
    actionWatcherUpdateFlight(),
    actionWatchergetFlightAndPassengerDetails(),
  ]);
}
