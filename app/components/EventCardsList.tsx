import {Grid2 as Grid } from "@mui/material"
import EventCard from "./EventCard"

export default function EventCardsList() {
  return (
      <Grid container spacing={2} columns={{sm: 4, md: 8}}>
        {Array.from(Array(5)).map((_, index) => (
          <Grid size={4} key={index}>
            <EventCard></EventCard>
          </Grid>
        ))}
      </Grid>
    )
}