import * as mockData from "@/app/lib/mockData";  
import ActivityEventCard from "./components/ActivityEventCard";
import RecommendationCard from "./components/RecommendationCard";

export default function Home() {
  const upcomingEvent = mockData.activityEvents.find(event => event.sport === "Tennis");
  const recommendedEvent = mockData.activityEvents.find(event => event.sport === "Badminton");

  return (
    <div className="container p-10">
      <h1 className="text-6xl font-bold mb-10">Good Evening,<br/>John</h1>
      <h2 className="text-2xl font-semibold mb-6">Upcoming</h2>
      {upcomingEvent && <ActivityEventCard key={upcomingEvent.id} activityEvent={upcomingEvent} />}
      <div className="mb-16"></div>
      <h2 className="text-2xl font-semibold mb-6">Recommended for you</h2>
      {recommendedEvent && <RecommendationCard key={recommendedEvent.id} activityEvent={recommendedEvent} />}
    </div>
  );
}
