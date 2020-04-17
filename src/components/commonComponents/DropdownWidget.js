import React from "react";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import useStyles from "./style";
import PropTypes from "prop-types";
const DropdownWidget = (props) => {
  const classes = useStyles();
  const { options, initalValues, onValueChange, lableName, multiple } = props;
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-mutiple-chip-label">{lableName}</InputLabel>
      <Select
        labelId="demo-mutiple-chip-label"
        id="demo-mutiple-chip"
        multiple={multiple}
        value={initalValues}
        onChange={(event) => onValueChange(event.target.value)}
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {multiple
              ? selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))
              : selected}
          </div>
        )}
      >
        {options.map((e) => (
          <MenuItem key={e} value={e}>
            {e}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

DropdownWidget.propTypes = {
  options: PropTypes.array.isRequired,
  initalValues: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onValueChange: PropTypes.func.isRequired,
  lableName: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
};
export default DropdownWidget;
