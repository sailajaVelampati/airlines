import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import AirlineSeatReclineExtraIcon from "@material-ui/icons/AirlineSeatReclineExtra";
import AccessibleIcon from "@material-ui/icons/Accessible";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import { useParams, useHistory } from "react-router-dom";
import List from "@material-ui/core/List";

export const MainListItems = () => {
  const history = useHistory();
  const handleNavigation = path => {
    console.log(path);
    history.push(path);
  };
  return (
    <List>
      <ListItem button onClick={() => handleNavigation("/home/flights")}>
        <ListItemIcon>
          <FlightTakeoffIcon />
        </ListItemIcon>
        <ListItemText primary="Flight"></ListItemText>
      </ListItem>
      <ListItem button onClick={() => handleNavigation("/home/passengers")}>
        <ListItemIcon>
          <AirlineSeatReclineExtraIcon />
        </ListItemIcon>
        <ListItemText primary="Passengers"></ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AccessibleIcon />
        </ListItemIcon>
        <ListItemText primary="Ancillary Serivices" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <RoomServiceIcon />
        </ListItemIcon>
        <ListItemText primary="Special Meals" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Shopping" />
      </ListItem>
    </List>
  );
};

export const secondaryListItems = (
  <List>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </List>
);
