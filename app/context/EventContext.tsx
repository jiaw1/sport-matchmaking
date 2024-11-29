"use client";

import {useState, useEffect, createContext} from 'react';
import { IMatch } from '../lib/definitions';
import * as mockData from "@/app/lib/mockData";


export const EventContext = createContext<readonly IMatch[]>([]);


export default function EventContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [events, setEvents] = useState<readonly IMatch[]>([]);

  const fetchEvents = () => {
    //fetch
    const matches = mockData.matches;
    setEvents(matches)
  }

  useEffect(() => {
    fetchEvents();
  })

  return (
    <EventContext.Provider value={events}>
        {children}
    </EventContext.Provider>
  )
}