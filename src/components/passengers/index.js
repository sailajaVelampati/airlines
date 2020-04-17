import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FlightDetails from "./flightDetails";
import PassengerList from "./passengersList";
import useStyles from "../commonComponents/style";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

export default function PassengerTable() {
  const classes = useStyles();
  const ReduxDispatch = useDispatch();
  const flightsPassengerReducer = useSelector((state) => {
    if (Object.keys(state.passenger).length) {
      return state.passenger;
    } else {
      return {};
    }
  }, shallowEqual);
  const [flightData, setFlightData] = useState({});

  useEffect(() => {
    if (flightsPassengerReducer) {
      setFlightData(flightsPassengerReducer);
    }
  }, [flightsPassengerReducer]);

  const handleDelete = (index) => {
    let obj = JSON.parse(JSON.stringify(flightData));
    obj.passengers.splice(index, 1);
    setFlightData(obj);
  };
  const handleSave = (seatNo, ancillaryServices, meals, shopping, index) => {
    let updateRow = JSON.parse(JSON.stringify(flightData));
    updateRow.passengers[index].AncillaryServices = ancillaryServices;
    updateRow.passengers[index].meals = meals;
    updateRow.passengers[index].shopping = shopping;
    updateRow.passengers[index].seatNo = seatNo;
    setFlightData(updateRow);
  };
  const passengerTableCol = [
    "Seat Number",
    "Passenger Name",
    "DoB",
    "Passport",
    "Address",
    "Check-in",
    "Ancillary Services",
    "Meals",
    "Shopping",
    "Action",
  ];
  const handleFlightSelectChange = () => {
    ReduxDispatch({ type: "GET_FLIGHT_PASSENGER_DATA" });
  };
  return (
    <>
      <FlightDetails
        data={flightData || {}}
        handleFlightSelectChange={handleFlightSelectChange}
      />
      {Object.keys(flightData).length ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {passengerTableCol.map((e) => (
                  <TableCell key={e} align="center">
                    {e}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {flightData.passengers.map((row, index) => {
                return (
                  <PassengerList
                    key={index}
                    data={row}
                    index={index}
                    isEditable={false}
                    handleDelete={handleDelete}
                    handleSave={handleSave}
                    Seats={flightData.seats}
                    AncillaryServices={flightData.ancillaryServices}
                    Meals={flightData.meals}
                    Shopping={flightData.shopping}
                  ></PassengerList>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </>
  );
}
