"use client";

import { useState, Fragment, useCallback, useContext } from "react";
import { Button } from "@mui/material";
import { matchServiceURL } from "@/app/lib/definitions";
import { getSession } from "next-auth/react";
import { EventContext } from "../context/EventContext";

interface IJoinButtonProps {
  joined: boolean;
  eventID: string;
}

export default function JoinButton({
  joined,
  eventID,
}: Readonly<IJoinButtonProps>) {
  const refetchEvents = useContext(EventContext)[1];
  const [joinedState, setJoinedState] = useState(joined);
  const handleJoinMatch = useCallback(async () => {
    const session = await getSession();
    if (joinedState) {
      fetch(`${matchServiceURL}/matches/${eventID}/participants`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + session?.accessToken,
        },
      })
        .then(() => setJoinedState(false))
        .then(() => refetchEvents());
    } else {
      fetch(`${matchServiceURL}/matches/${eventID}/participants`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + session?.accessToken,
        },
      })
        .then(() => setJoinedState(true))
        .then(() => refetchEvents());
    }
  }, [joinedState, eventID, refetchEvents]);

  return (
    <Fragment>
      {joinedState ? (
        <Button
          sx={{ textTransform: "none", borderRadius: 100 }}
          size="large"
          disableElevation
          fullWidth
          variant="contained"
          color="tertiary"
          onClick={handleJoinMatch}
        >
          Withdraw participation
        </Button>
      ) : (
        <Button
          sx={{ textTransform: "none", borderRadius: 100 }}
          size="large"
          disableElevation
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleJoinMatch}
        >
          Join
        </Button>
      )}
    </Fragment>
  );
}
