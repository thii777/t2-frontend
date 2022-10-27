import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "30ch" },
        "& .MuiInput-underline:after": {
          borderBottomColor: "grey",
        },
        '& label.Mui-focused': {
          color: 'grey',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'grey',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'grey',
          },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={props.id}
        label={props.label}
        variant={props.variant}
      />
    </Box>
  );
}
