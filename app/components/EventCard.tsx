"use client";

import { Card, CardContent, Icon, Box, Typography, CardActions, Button } from "@mui/material";
import Grid from "@mui/material/Grid2"
import Image from 'next/image';
import EventCardHeader from "./typography/EventCardHeader";
import DetailText from "./typography/DetailText";
import { LocationOnOutlined, PersonOutline, Today } from "@mui/icons-material";
import { useState } from "react";
import { NextLinkComposed } from "./NextLinkComposed";

export default function EventCard(){
  const sport = "Table tennis"
  const [joined, setJoined] = useState(false)

  return(
    <Card sx={{ borderRadius: "12px"}} elevation={0}>
      <Box className="eventCardheader flex justify-between text-on-surface-variant-light bg-primary-container-light" sx={{px: 2, py:1}}>
        <Box className="flex gap-1 items-center">
          <Icon><Image src={`/icons/sports/${sport.toLowerCase()}.svg`} alt={`${sport.toLowerCase()} icon`} width={24} height={24}></Image></Icon>
          <EventCardHeader>{sport}</EventCardHeader>
        </Box>
        <DetailText>1d</DetailText>
      </Box>
      <CardContent className="bg-surface-light">
        <Grid container rowSpacing={2} columnSpacing={4}>
          <Grid size={12}>
            <Box className="flex gap-1 items-center">
              <Today></Today>
              <Typography variant="body1">Monday 06/10/2024 · 14.00-16.00</Typography>
            </Box>
          </Grid>
          <Grid size="auto">
          <Box className="flex gap-1 items-center">
              <LocationOnOutlined/>
              <Typography variant="body1">Unisport Otaniemi, hall B</Typography>
            </Box>
          </Grid>
          <Grid size="auto">
          <Box className="flex gap-1 items-center">
              <PersonOutline/>
              <Typography variant="body1">3/4</Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{px:2, pb:2, justifyContent: "end"}} className="bg-surface-light">
        <Button variant="outlined" size="large" sx={{textTransform: "initial", borderRadius: 100}} color="primary" component={NextLinkComposed} to={{pathname:"/events/event1"}}>Detail</Button>
        <Button variant="contained" disabled={joined} size="large" sx={{textTransform: "initial", borderRadius: 100}} color="primary" onClick={() => setJoined(true)}>{joined? "Joined" : "Join"}</Button>
      </CardActions>
    </Card>
  )
}