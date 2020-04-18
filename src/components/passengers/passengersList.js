import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
// import ChildCareIcon from "@material-ui/icons/ChildCare";
// import AccessibleIcon from "@material-ui/icons/Accessible";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import PropTypes from "prop-types";
import DropdownWidget from "../commonComponents/DropdownWidget";

const PassengerList = (props) => {
  const {
    data,
    index,
    handleDelete,
    handleSave,
    AncillaryServices,
    Meals,
    Shopping,
    Seats,
  } = props;
  let row = data;
  const [selectedAncillaryServices, setSelectedAncillaryServices] = useState([
    ...row.ancillaryServices,
  ]);
  const [selectedMeals, setSelectedMeals] = useState([...row.meals]);
  const [selectedShopping, setSelectedShopping] = useState([...row.shopping]);
  const [isEditable, setIsEditable] = useState(false);
  const [selectedSeatNo, setSelectedSeatNo] = useState(row.seatNo);
  const handleEdit = () => {
    setIsEditable(true);
  };
  const handleChangeSeatNo = (value) => {
    setSelectedSeatNo(value);
  };
  const handleChangeAServices = (value) => {
    setSelectedAncillaryServices(value);
  };

  const handleChangeMeal = (value) => {
    setSelectedMeals(value);
  };

  const handleChangeShopping = (value) => {
    setSelectedShopping(value);
  };
  const handleCancel = () => {
    setIsEditable(false);
  };
  const rowText = [
    !isEditable ? (
      row.seatNo
    ) : (
      <DropdownWidget
        options={Seats}
        initalValues={selectedSeatNo}
        onValueChange={handleChangeSeatNo}
        lableName="Seat NO"
        multiple={false}
      />
    ),
    row.name,
    row.DoB,
    row.passport ? row.passport : <CancelIcon />,
    row.address ? row.address : <CancelIcon />,
    row.checkIn ? <CheckCircleOutlineIcon /> : <CancelIcon />,
    !isEditable ? (
      selectedAncillaryServices.join(",")
    ) : (
      <DropdownWidget
        options={AncillaryServices}
        initalValues={selectedAncillaryServices}
        onValueChange={handleChangeAServices}
        lableName="Ancillary Services"
        multiple={true}
      />
    ),
    !isEditable ? (
      selectedMeals.join(",")
    ) : (
      <DropdownWidget
        options={Meals}
        initalValues={selectedMeals}
        onValueChange={handleChangeMeal}
        lableName="Meals"
        multiple={true}
      />
    ),
    !isEditable ? (
      selectedShopping.join(",")
    ) : (
      <DropdownWidget
        options={Shopping}
        initalValues={selectedShopping}
        onValueChange={handleChangeShopping}
        lableName="Shopping"
        multiple={true}
      />
    ),
    !isEditable ? (
      <>
        <EditIcon onClick={handleEdit} />
        <DeleteOutlineIcon onClick={() => handleDelete(index)} />
      </>
    ) : (
      <>
        <SaveIcon
          onClick={() => {
            setIsEditable(false);
            handleSave(
              selectedSeatNo,
              selectedAncillaryServices,
              selectedMeals,
              selectedShopping,
              index
            );
          }}
        />
        <CancelIcon onClick={() => handleCancel()} />
      </>
    ),
  ];

  return (
    <TableRow key={row.seatNo} style={row.checkIn ? { color: "red" } : null}>
      {rowText.map((e, index) => (
        <TableCell key={`${row.seatNo}${index}`} align="center">
          {e}
        </TableCell>
      ))}
    </TableRow>
  );
};

PassengerList.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number,
  handleDelete: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  AncillaryServices: PropTypes.array,
  Meals: PropTypes.array,
  Shopping: PropTypes.array,
  Seats: PropTypes.array.isRequired,
};
export default PassengerList;
