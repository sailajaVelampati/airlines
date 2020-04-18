import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DropdownWidget from "../commonComponents/DropdownWidget";
import CancelIcon from "@material-ui/icons/Cancel";
import PropTypes from "prop-types";
import { AncillaryServices, Meals, Shopping } from "../constant";

const FlightTableRow = (props) => {
  const { row, index, handleDelete, handleSave } = props;
  const [isEditable, setIsEditable] = useState(false);
  const [ancillaryServices, setAncillaryServices] = useState(
    row.ancillaryServices
  );
  const [meals, setMeals] = useState(row.meals);
  const [shopping, setShopping] = useState(row.shopping);

  const handleEdit = () => {
    setIsEditable(true);
  };
  const handleSaveChild = () => {
    setIsEditable(false);
    handleSave(ancillaryServices, meals, shopping, index);
  };

  const handleChangeAServices = (value) => {
    setAncillaryServices(value);
  };

  const handleChangeMeal = (value) => {
    setMeals(value);
  };

  const handleChangeShopping = (value) => {
    setShopping(value);
  };
  const handleCancel = () => {
    setIsEditable(false);
  };
  const rowText = [
    row.flightNo,
    new Date(row.time).toLocaleString(),
    `${row.from} / ${row.to}`,
    !isEditable ? (
      ancillaryServices.join(",")
    ) : (
      <DropdownWidget
        options={AncillaryServices}
        initalValues={ancillaryServices}
        onValueChange={handleChangeAServices}
        lableName="Ancillary Services"
        multiple={true}
      />
    ),
    !isEditable ? (
      row.meals.join(",")
    ) : (
      <DropdownWidget
        options={Meals}
        initalValues={meals}
        onValueChange={handleChangeMeal}
        lableName="Meals"
        multiple={true}
      />
    ),
    !isEditable ? (
      row.shopping.join(",")
    ) : (
      <DropdownWidget
        options={Shopping}
        initalValues={shopping}
        onValueChange={handleChangeShopping}
        lableName="Shopping"
        multiple={true}
      />
    ),
    !isEditable ? (
      <>
        <EditIcon onClick={handleEdit} />
        <DeleteOutlineIcon onClick={() => handleDelete(row.id)} />
      </>
    ) : (
      <>
        <SaveIcon onClick={() => handleSaveChild(row, index)} />
        <CancelIcon onClick={() => handleCancel()} />
      </>
    ),
  ];
  return (
    <TableRow key={row.flightNo}>
      {rowText.map((e, index) => (
        <TableCell key={index} align="center">
          {e}
        </TableCell>
      ))}
    </TableRow>
  );
};

FlightTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
};
export default FlightTableRow;
