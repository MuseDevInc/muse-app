import React from "react";
import { Button, Typography } from "@mui/material";

export function CreateSubmitButton({ handleCreateSubmit}) {
  return (
    <Button onClick={handleCreateSubmit} variant="outlined">
      Sign Up
      {/* <Typography variant="h2" color="secondary"> */}
      {/* </Typography> */}
    </Button>
  );
}
