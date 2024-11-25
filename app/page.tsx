// import * as mockData from "@/app/lib/mockData";
import AppHeader from "./components/typography/AppHeader";
import SearchBar from "./components/SearchBar";
import CardsSectionHeader from "./components/typography/CardsSectionHeader";
import EventCardsList from "./components/EventCardsList";

export default function Home() {
  // const upcomingEvent = mockData.activityEvents.find(event => event.sport === "Tennis");
  // const recommendedEvent = mockData.activityEvents.find(event => event.sport === "Badminton");

  return (
    <div>
      <AppHeader>Hello John</AppHeader>
      <SearchBar></SearchBar>
      <CardsSectionHeader>Upcoming matches</CardsSectionHeader>
      <EventCardsList></EventCardsList>
      {/* {upcomingEvent && <MatchCard key={upcomingEvent.id} activityEvent={upcomingEvent} />} */}
      <div className="mb-16"></div>
      <h2 className="text-2xl font-semibold mb-6">Recommended for you</h2>
      {/* {recommendedEvent && <RecommendationCard key={recommendedEvent.id} activityEvent={recommendedEvent} />} */}
    </div>
  );
}
