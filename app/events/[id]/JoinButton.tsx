"use client";

import { useState, Fragment } from "react";
import { Button } from "@mui/material";

export default function JoinButton() {
  const [joined, setJoined] = useState(false);
  return (
    <Fragment>
      {joined ? (
        <Button
          sx={{ textTransform: "none", borderRadius: 100 }}
          size="large"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => setJoined(false)}
        >
          Withdraw participation
        </Button>
      ) : (
        <Button
          sx={{ textTransform: "none", borderRadius: 100 }}
          size="large"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => setJoined(true)}
        >
          Join
        </Button>
      )}
    </Fragment>
  );
}
