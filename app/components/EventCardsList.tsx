import {Grid2 as Grid } from "@mui/material"
import EventCard from "./EventCard"
import { IMatch } from "../lib/definitions"

interface IEventCardsListProps {
  events: readonly IMatch[];
}

export default function EventCardsList({events} : IEventCardsListProps) {
  return (
      <Grid container spacing={2} columns={{sm: 4, md: 8}}>
        {events.map((event, index) => (
          <Grid size={4} key={index}>
            <EventCard event={event}></EventCard>
          </Grid>
        ))}
      </Grid>
    )
}