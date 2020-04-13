import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles({
  table: {
    minWidth: "100%"
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export default function FlightsTable() {
  const classes = useStyles();
  const [flights, setFlights] = useState([
    {
      flightNo: "TY897",
      time: 1579917600000,
      meals: ["Vegetarian", "Continetal", "Indian", "Non-Vegetarian"],
      AncillaryServices: ["Wheel-Chair", "Infant"],
      shopping: [
        { product: "Travel Kit", price: 345 },
        { product: "Eye Mask", price: 745 }
      ],
      from: "Delhi",
      to: "Hyderabad"
    },
    {
      flightNo: "IP649",
      time: 1579824000000,
      meals: ["Vegetarian", "Non-Vegetarian"],
      AncillaryServices: ["Wheel-Chair", "Infant"],
      shopping: [
        { product: "Travel Kit", price: 345 },
        { product: "Power Bank", price: 7125 }
      ],
      from: "Goa",
      to: "Bangalore"
    },
    {
      flightNo: "NS023",
      time: 1587686400000,
      meals: ["Vegetarian", "Non-Vegetarian", "Bengali"],
      AncillaryServices: ["Wheel-Chair", "Infant"],
      shopping: [
        { product: "Dairy", price: 345 },
        { product: "Power Bank", price: 7125 }
      ],
      from: "Kolkata",
      to: "Chandighar"
    }
  ]);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Flight Number</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">From / To</TableCell>
            <TableCell align="right">Ancillary Services</TableCell>
            <TableCell align="right">Meal</TableCell>
            <TableCell align="right">Shopping</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flights.map(row =>
            false ? (
              <TableRow key={row.flightNo}>
                <TableCell component="th" scope="row">
                  {row.flightNo}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{`${row.from} / ${row.to}`}</TableCell>
                <TableCell align="right">{row.AncillaryServices}</TableCell>
                <TableCell align="right">{row.meals}</TableCell>
                <TableCell align="right">{row.shopping}</TableCell>
                <TableCell align="right">
                  <EditIcon />
                </TableCell>
              </TableRow>
            ) : (
              <TableRow key={row.flightNo}>
                <TableCell component="th" scope="row">
                  {row.flightNo}
                </TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{`${row.from} / ${row.to}`}</TableCell>
                <TableCell align="right">
                  <NativeSelect
                    value={}
                    onChange={handleChange}
                    name="AncillaryServices"
                    className={classes.selectEmpty}
                    inputProps={{ "aria-label": "Ancillary Services" }}
                  >
                    <option value="wheel-chair">Wheel-Chair</option>
                    <option value="infant">Infant</option>
                  </NativeSelect>
                </TableCell>
                <TableCell align="right">                 
                 <NativeSelect
                    value={}
                    onChange={handleChange}
                    name="Special-Meals"
                    className={classes.selectEmpty}
                    inputProps={{ "aria-label": "Special Meals" }}
                  >
                    <option value="Veg">Veg</option>
                    <option value="Non-Veg">Non-Veg</option>
                  </NativeSelect>
                  </TableCell>
                <TableCell align="right">
                <NativeSelect
                    value={}
                    onChange={handleChange}
                    name="Shopping"
                    className={classes.selectEmpty}
                    inputProps={{ "aria-label": "Shopping" }}
                  >
                    <option value="EMask">Eye Mask</option>
                    <option value="EPhone">Ear-Phone</option>
                    
                  </NativeSelect></TableCell>
                <TableCell align="right">
                  <EditIcon />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
