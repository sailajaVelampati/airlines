export const flightsData = [
  {
    flightNo: "TY897",
    time: 1579917600000,
    meals: ["Vegetarian", "Continetal", "Indian", "Non-Vegetarian"],
    AncillaryServices: ["Wheel-Chair", "Infant"],
    shopping: ["Travel Kit", "Eye Mask"],
    from: "Delhi",
    to: "Hyderabad",
  },
  {
    flightNo: "IP649",
    time: 1579824000000,
    meals: ["Vegetarian", "Non-Vegetarian"],
    AncillaryServices: ["Wheel-Chair", "Infant"],
    shopping: ["Travel Kit", "Power Bank"],
    from: "Goa",
    to: "Bangalore",
  },
  {
    flightNo: "NS023",
    time: 1587686400000,
    meals: ["Vegetarian", "Non-Vegetarian", "Bengali"],
    AncillaryServices: ["Wheel-Chair", "Infant"],
    shopping: ["Dairy", "Power Bank"],
    from: "Kolkata",
    to: "Chandighar",
  },
];

export const flightAndPassengerDetails = {
  flightNo: "TY897",
  time: 1579917600000,
  meals: ["Vegetarian", "Continetal", "Indian", "Non-Vegetarian"],
  ancillaryServices: ["Wheel-Chair", "Infant"],
  shopping: ["Travel Kit", "Eye Mask"],
  from: "Delhi",
  to: "Hyderabad",
  seats: ["A1", "B1", "A2", "B2", "C1", "C2"],
  passengers: [
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
  ],
};

export const AvalableFlights = ["TY897", "NS023", "IP649"];
export const SeatNo = ["A1", "B1", "A2", "B2", "C1", "C2"];
export const AncillaryServices = ["wheel chair", "infant"];
export const Meals = [
  "Vegetarian",
  "Continetal",
  "Indian",
  "Non-Vegetarian",
  "Indian",
  "Italian",
  "English",
];
export const Shopping = [
  "Travel Kit",
  "Power Bank",
  "Eye Mask",
  "Ear Phones",
  "Water Bottle",
  "Dairy",
];
export const flightTableCol = [
  "Flight Number",
  "Time",
  "From / To",
  "Ancillary Services",
  "Meal",
  "Shopping",
  "Action",
];
