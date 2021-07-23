import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import { makeStyles } from "@material-ui/core/styles";
import react, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center", 
    justifyContent: "center",
  },
  fab: {
    margin: "0px",
  },
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

function Inputs({ title, value }) {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    setInputValue(value);
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const increment = () => {
    setInputValue(() => parseFloat(inputValue) + 1);
  };

  const decrement = () => {
    if (inputValue > 0) {
      setInputValue(() => parseFloat(inputValue) - 1);
    }
  };

  return (
    <div className={classes.container}>
      <Fab
        size="small"
        // color="primary"
        className={classes.fab}
        onClick={decrement}
      >
        <RemoveIcon color="secondary"/>
      </Fab>
      <TextField
        type="number"
        onChange={handleChange}
        value={inputValue}
        defaultValue={0}
        label={title}
        className={classes.textField}
      />
      <Fab size="small" onClick={increment}>
        <AddIcon color="primary"/>
      </Fab>
    </div>
  );
}

export default Inputs;
