import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  FlightDetailsListStyle: {
    width: "100%",
    maxWidth: 700,
    display: "inline-flex",
    flexDirection: "row",
    padding: 0,
  },
  table: {
    minWidth: "100%",
  },
}));
export default useStyles;
