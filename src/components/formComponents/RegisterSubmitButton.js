import React from "react";
import { Button, Typography } from "@mui/material";

export function RegisterSubmitButton({ handleRegisterSubmit }) {
  return (
    <Button onClick={handleRegisterSubmit} variant="outlined">
      Sign Up
      {/* <Typography variant="h2" color="secondary"> */}
      {/* </Typography> */}
    </Button>
  );
}
