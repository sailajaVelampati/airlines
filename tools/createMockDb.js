/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const {
  newPassenger,
  flightsData,
  AncillaryServices,
  SeatNo,
  Meals,
  Shopping,
  flightAndPassengerDetails,
  AvalableFlights,
} = mockData;
const data = JSON.stringify({
  newPassenger,
  flightsData,
  AncillaryServices,
  SeatNo,
  Meals,
  Shopping,
  flightAndPassengerDetails,
  AvalableFlights,
});
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
