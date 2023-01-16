import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function Intro() {
  return (
    <div className="spacing--bottom">
      <Stack spacing={2} direction="column">
        <Alert variant="filled" severity="success">
          Material UI...
        </Alert>
      </Stack>
    </div>
  );
}

export default Intro;
