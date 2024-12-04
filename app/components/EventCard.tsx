"use client";

import { Card, CardContent, Icon, Box, Typography, CardActions, Button, Grid2 as Grid } from "@mui/material";
import Image from 'next/image';
import EventCardHeader from "./typography/EventCardHeader";
import DetailText from "./typography/DetailText";
import { LocationOnOutlined, PersonOutline, Today } from "@mui/icons-material";
import { useCallback, useEffect, useState } from "react";
import { NextLinkComposed } from "./NextLinkComposed";
import { IMatch } from "../lib/definitions";
import dayjs from "dayjs";
import { matchServiceURL } from "../lib/definitions";
import { getSession } from "next-auth/react";

interface IEventCardProps {
  event: IMatch;
}

export default function EventCard({event} : IEventCardProps){
  const [joined, setJoined] = useState(false);
  const [participantNumber, setParticipantNumber] = useState(0);
  const [isHost, setIsHost] = useState(false);

  const handleJoinMatch = useCallback(async () => {
    const session = await getSession();
    if (joined) {
      fetch(`${matchServiceURL}/matches/${event.id}/participants`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + session?.accessToken,
        }
      })
      .then(() => setJoined(false))
    } else {
      fetch(`${matchServiceURL}/matches/${event.id}/participants`, {
        method: "POST", 
        headers: {
          Authorization: "Bearer " + session?.accessToken,
        }
      })
      .then(() => setJoined(true))
    }
  }, [event, joined])

  useEffect(() => {
    const fetchParticipantsDataAndSetStates = async () => {
      const participants = await fetch(`${matchServiceURL}/matches/${event.id}/participants`).then(_ => _.json())
      const session = await getSession();
      setJoined(participants.includes(session?.user.accountId))
      setParticipantNumber(participants.length)
      setIsHost(event.hostUserId === session?.user.accountId)
    }
    fetchParticipantsDataAndSetStates();
  }, [event])

  const eventDayJSStart = dayjs(event.startsAt)
  const eventDayJSEnd = dayjs(event.endsAt)

  const fromNowText = () => {

    const fromNowDay = eventDayJSStart.diff(dayjs(), "day")
    const fromNowHour = eventDayJSStart.diff(dayjs(), "hour")
    
    console.log(fromNowDay, fromNowHour);
    if (fromNowDay > 0) {
      return fromNowDay + 'd';
    } else {
      return fromNowHour + 'h';
    }
    
  }

  return(
    <Card sx={{ borderRadius: "12px"}} elevation={0}>
      <Box className="eventCardheader flex justify-between text-on-surface-variant-light bg-primary-container-light" sx={{px: 2, py:1}}>
        <Box className="flex gap-1 items-center">
          <Icon><Image src={`/icons/sports/${event.sport.toLowerCase()}.svg`} alt={`${event.sport.toLowerCase()} icon`} width={24} height={24}></Image></Icon>
          <EventCardHeader>{event.sport}</EventCardHeader>
        </Box>
        <DetailText>{fromNowText()}</DetailText>
      </Box>
      <CardContent className="bg-surface-light">
        <Grid container rowSpacing={2} columnSpacing={4}>
          <Grid size={12}>
            <Box className="flex gap-1 items-center">
              <Today></Today>
              <Typography variant="body1">{`${eventDayJSStart.format("dddd DD/MM/YYYY")} · ${eventDayJSStart.format("HH.mm")}-${eventDayJSEnd.format("HH.mm")}`}</Typography>
            </Box>
          </Grid>
          <Grid size="auto">
          <Box className="flex gap-1 items-center">
              <LocationOnOutlined/>
              <Typography variant="body1">{event.location}</Typography>
            </Box>
          </Grid>
          <Grid size="auto">
          <Box className="flex gap-1 items-center">
              <PersonOutline/>
              <Typography variant="body1">{`${participantNumber}${event.maxParticipants && "/" + event.maxParticipants}`}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{px:2, pb:2, justifyContent: "end"}} className="bg-surface-light">
        <Button variant="outlined" disableElevation size="large" sx={{textTransform: "initial", borderRadius: 100}} color="primary" component={NextLinkComposed} to={{pathname:"/events/"+event.id}}>Detail</Button>
        {
          isHost ?
            <Button variant="contained" disableElevation disabled={true} size="large" sx={{textTransform: "initial", borderRadius: 100}} color="primary">You are the host</Button> :
            <Button variant="contained" disableElevation disabled={joined} size="large" sx={{textTransform: "initial", borderRadius: 100}} color="primary" onClick={handleJoinMatch}>{joined? "Joined" : "Join"}</Button>
        }
      </CardActions>
    </Card>
  )
}