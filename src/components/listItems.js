import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import AirlineSeatReclineExtraIcon from "@material-ui/icons/AirlineSeatReclineExtra";
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import { AuthContext } from "../App";
export const MainListItems = () => {
  const history = useHistory();
  const { state } = React.useContext(AuthContext);
  const handleNavigation = (path) => {
    history.push(path);
  };
  return (
    <List>
      {state.role === "admin" ? (
        <ListItem button onClick={() => handleNavigation("/home/flights")}>
          <ListItemIcon>
            <FlightTakeoffIcon />
          </ListItemIcon>
          <ListItemText primary="Flight"></ListItemText>
        </ListItem>
      ) : null}
      <ListItem button onClick={() => handleNavigation("/home/passengers")}>
        <ListItemIcon>
          <AirlineSeatReclineExtraIcon />
        </ListItemIcon>
        <ListItemText primary="Passengers"></ListItemText>
      </ListItem>
    </List>
  );
};
