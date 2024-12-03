"use client";

import {useState, useEffect, createContext, Dispatch, SetStateAction} from 'react';
import { IMatch } from '../lib/definitions';
import { matchServiceURL } from '../lib/definitions';

export const EventContext = createContext<[readonly IMatch[], Dispatch<SetStateAction<boolean>>]>([[], () => {}]);


export default function EventContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [fetched, setFetched] = useState(false);
  const [events, setEvents] = useState<readonly IMatch[]>([]);

  const fetchEvents = () => {
    //fetch
    // const matches = mockData.matches;
    fetch(`${matchServiceURL}/matches`).then(_ => _.json()).then(matches => setEvents(matches));
    // setEvents(matches)
  }

  useEffect(() => {
    if(!fetched) {
      fetchEvents();
      setFetched(true);
    }
  }, [events, fetched])

  return (
    <EventContext.Provider value={[events, setFetched]}>
        {children}
    </EventContext.Provider>
  )
}