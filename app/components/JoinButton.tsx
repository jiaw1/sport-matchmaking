"use client";

import { useState, Fragment, useCallback } from "react";
import { Button } from "@mui/material";
import { matchServiceURL } from "@/app/lib/definitions";
import { getSession } from "next-auth/react";

interface IJoinButtonProps {
  joined: boolean;
  eventID: string;
}

export default function JoinButton({joined, eventID} : IJoinButtonProps) {
  const [joinedState, setJoinedState] = useState(joined);
  const handleJoinMatch = useCallback(async () => {
    const session = await getSession();
    if (joined) {
      fetch(`${matchServiceURL}/matches/${eventID}/participants`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + session?.accessToken,
        }
      })
      .then(() => setJoinedState(false))
    } else {
      fetch(`${matchServiceURL}/matches/${eventID}/participants`, {
        method: "POST", 
        headers: {
          Authorization: "Bearer " + session?.accessToken,
        }
      })
      .then(() => setJoinedState(false))
    }
  }, [eventID, joinedState])
  return (
    <Fragment>
      { joined ?
        <Button sx={{textTransform:"none", borderRadius:100}} size="large" disableElevation fullWidth variant="contained" color="tertiary" onClick={handleJoinMatch}>Withdraw participation</Button> :
        <Button sx={{textTransform:"none", borderRadius:100}} size="large" disableElevation fullWidth variant="contained" color="primary" onClick={handleJoinMatch}>Join</Button> 
      }
    </Fragment>
  );
}
