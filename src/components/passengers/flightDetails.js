import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FlightIcon from "@material-ui/icons/Flight";
import ScheduleIcon from "@material-ui/icons/Schedule";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import useStyles from "../commonComponents/style";
import PropTypes from "prop-types";
import DropdownWidget from "../commonComponents/DropdownWidget";

const FlightDetails = (props) => {
  const AvalableFlights = ["TY897", "NS023", "IP649"];
  const { data, handleFlightSelectChange } = props;
  const classes = useStyles();
  const flightDetails = [
    { image: <FlightIcon />, text: data.flightNo },
    { image: <ScheduleIcon />, text: new Date(data.time).toLocaleString() },
    { image: <FlightTakeoffIcon />, text: data.from },
    { image: <FlightLandIcon />, text: data.to },
  ];
  const [selectedFlight, setSelectedFlight] = useState("");

  const handleChange = (value) => {
    setSelectedFlight(value);
  };
  return (
    <>
      {Object.keys(data).length ? (
        <List
          component="nav"
          className={classes.FlightDetailsListStyle}
          aria-label="contacts"
        >
          {flightDetails.map((e) => (
            <ListItem key={e.text} button>
              <ListItemIcon>{e.image}</ListItemIcon>
              <ListItemText primary={e.text} />
            </ListItem>
          ))}
        </List>
      ) : null}
      <DropdownWidget
        options={AvalableFlights}
        initalValues={selectedFlight}
        onValueChange={handleFlightSelectChange}
        lableName="Select Flight"
        multiple={false}
      />
    </>
  );
};

FlightDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FlightDetails;
