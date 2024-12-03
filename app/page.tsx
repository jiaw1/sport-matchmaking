/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

// import * as mockData from "@/app/lib/mockData";
import { useContext } from "react";
import AppHeader from "./components/typography/AppHeader";
import SearchBar from "./components/SearchBar";
import SectionHeader from "./components/typography/SectionHeader";
import EventCardsList from "./components/EventCardsList";
import { Box } from "@mui/material";
import { getSession, signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { useEffect, useState } from "react";
import { EventContext } from "./context/EventContext";

export default function Home() {
  // const { data: session, status } = useSession();

  // Hacky way to avoid issues with hydration:
  // https://github.com/nextauthjs/next-auth/discussions/5719#discussioncomment-9914137
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
      setLoading(false);
    };
    fetchSession();
  }, []);
  if (!loading && !session) {
    signIn();
  }

  // const upcomingEvent = mockData.activityEvents.find(event => event.sport === "Tennis");
  // const recommendedEvent = mockData.activityEvents.find(event => event.sport === "Badminton");
  const [events, setFetched] = useContext(EventContext);
  const upcomingEvents = events;
  // const recommendedEvents = [];

  return (
    <div>
      <Box sx={{ mb: 3 }}>
        <AppHeader>Hello {session?.user?.name ?? ""}</AppHeader>
      </Box>
      {/* TODO: REMOVE THIS TEST SIGN IN BUTTON */}
      {/* {!session ? (
        <button onClick={() => signIn()}>Sign in</button>
      ) : (
        <button onClick={() => signOut()}>Sign out</button>
      )}
      <button onClick={async () => await checkSession()}>Check session</button> */}
      <SearchBar></SearchBar>
      <SectionHeader>Upcoming matches</SectionHeader>
      <EventCardsList events={upcomingEvents}></EventCardsList>
      {/* {upcomingEvent && <MatchCard key={upcomingEvent.id} activityEvent={upcomingEvent} />} */}
      <div className="mb-16"></div>
      <h2 className="text-2xl font-semibold mb-6">Recommended for you</h2>
      {/* {recommendedEvent && <RecommendationCard key={recommendedEvent.id} activityEvent={recommendedEvent} />} */}
    </div>
  );
}
