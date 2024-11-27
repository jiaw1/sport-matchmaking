// import * as mockData from "@/app/lib/mockData";
import AppHeader from "./components/typography/AppHeader";
import SearchBar from "./components/SearchBar";
import SectionHeader from "./components/typography/SectionHeader";
import EventCardsList from "./components/EventCardsList";
import { Box } from "@mui/material";

export default function Home() {
  // const upcomingEvent = mockData.activityEvents.find(event => event.sport === "Tennis");
  // const recommendedEvent = mockData.activityEvents.find(event => event.sport === "Badminton");

  return (
    <div>
      <Box sx={{mb:3}}>
        <AppHeader>Hello John</AppHeader>
      </Box>
      <SearchBar></SearchBar>
      <SectionHeader>Upcoming matches</SectionHeader>
      <EventCardsList></EventCardsList>
      {/* {upcomingEvent && <MatchCard key={upcomingEvent.id} activityEvent={upcomingEvent} />} */}
      <div className="mb-16"></div>
      <h2 className="text-2xl font-semibold mb-6">Recommended for you</h2>
      {/* {recommendedEvent && <RecommendationCard key={recommendedEvent.id} activityEvent={recommendedEvent} />} */}
    </div>
  );
}
