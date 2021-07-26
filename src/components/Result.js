import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: ".8rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    maxWidth: "5rem",
    textAlign: "center",
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
}));

function Result({ result }) {
  const classes = useStyles();

  return (
    <div>
      <TextField
        type="number"
        pattern="^\d*(\.\d{0,2})?$"
        value={result.value || ""}
        label={result.name}
        className={classes.textField}
      />
    </div>
  );
}

export default Result;
