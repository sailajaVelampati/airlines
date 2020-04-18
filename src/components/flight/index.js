import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FlightTableRow from "./flightTableRow";
import useStyles from "../commonComponents/style";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { flightTableCol } from "../constant";
export default function FlightsTable() {
  const classes = useStyles();
  const ReduxDispatch = useDispatch();
  const flights = useSelector((state) => state.flight, shallowEqual);
  useEffect(() => {
    ReduxDispatch({ type: "GET_FLIGHTS_LIST" });
  }, []);

  const handleDelete = (index) => {
    ReduxDispatch({ type: "DELETE_FLIGHT", flightId: index });
  };
  const handleSave = (ancillaryServices, meals, shopping, index) => {
    let updateRow = JSON.parse(JSON.stringify(flights[index]));
    updateRow.AncillaryServices = ancillaryServices;
    updateRow.meals = meals;
    updateRow.shopping = shopping;
    ReduxDispatch({ type: "UPDATED_FLIGHTLIST", data: updateRow });
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {flightTableCol.map((e, index) => (
              <TableCell key={index} align="center">
                {e}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {flights.map((row, index) => {
            return (
              <FlightTableRow
                key={index}
                row={row}
                index={index}
                isEditable={false}
                handleDelete={handleDelete}
                handleSave={handleSave}
              ></FlightTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
