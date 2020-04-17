const AvalableFlights = ["TY897", "NS023", "IP649"];
const SeatNo = ["A1", "B1", "A2", "B2", "C1", "C2"];
const AncillaryServices = ["wheel chair", "infant"];
const Meals = [
  "Vegetarian",
  "Continetal",
  "Indian",
  "Non-Vegetarian",
  "Indian",
  "Italian",
  "English",
];
const Shopping = [
  "Travel Kit",
  "Power Bank",
  "Eye Mask",
  "Ear Phones",
  "Water Bottle",
  "Dairy",
];
const flightsData = [
  {
    flightNo: AvalableFlights[0],
    id: AvalableFlights[0],
    time: 1579917600000,
    meals: ["Vegetarian", "Continetal", "Indian", "Non-Vegetarian"],
    ancillaryServices: AncillaryServices,
    shopping: ["Travel Kit", "Eye Mask"],
    from: "Delhi",
    to: "Hyderabad",
    seats: SeatNo,
  },
  {
    flightNo: AvalableFlights[1],
    id: AvalableFlights[1],
    time: 1579824000000,
    meals: ["Vegetarian", "Non-Vegetarian"],
    ancillaryServices: AncillaryServices,
    shopping: ["Travel Kit", "Power Bank"],
    from: "Goa",
    to: "Bangalore",
    seats: SeatNo,
  },
  {
    flightNo: AvalableFlights[2],
    id: AvalableFlights[2],
    time: 1587686400000,
    meals: ["Vegetarian", "Non-Vegetarian", "Bengali"],
    ancillaryServices: AncillaryServices,
    shopping: ["Dairy", "Power Bank"],
    from: "Kolkata",
    to: "Chandighar",
    seats: SeatNo,
  },
];

const passengers = [
  {
    name: "sailaja velampati",
    seatNo: "A1",
    passport: "k23892kl",
    DoB: "1989-12-04",
    address: "",
    ancillaryServices: ["Infant"],
    meals: [],
    shopping: [],
    checkIn: true,
  },
  {
    name: "Ram Kumar",
    seatNo: "A2",
    passport: "k2342kl",
    DoB: "1988-04-27",
    address: "",
    ancillaryServices: [],
    meals: [],
    shopping: [],
    checkIn: true,
  },
  {
    name: "Achyuth Raghava",
    seatNo: "B2",
    passport: "",
    DoB: "2019-07-03",
    address: "",
    ancillaryServices: ["Infant"],
    meals: ["Continental"],
    shopping: [],
    checkIn: false,
  },
];
const flightAndPassengerDetails = {
  ...flightsData[0],
  passengers,
};

const newPassenger = {
  seatNo: null,
  name: "",
  ancillaryService: "",
  passport: false,
  address: "",
  dob: false,
  checked_in: false,
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newPassenger,
  flightsData,
  AncillaryServices,
  SeatNo,
  Meals,
  Shopping,
  flightAndPassengerDetails,
  AvalableFlights,
};
