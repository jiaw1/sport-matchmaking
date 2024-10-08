"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IActivityEvent } from "@/app/lib/definitions";
import * as mockData from "@/app/lib/mockData";
import { Icon } from "@iconify/react";

export default function EventDetailsPage() {
  const { id } = useParams();
  const [eventDetails, setEventDetails] = useState<IActivityEvent | null>(null);

  useEffect(() => {
    const foundEvent = mockData.activityEvents.find(event => event.id === id);
    
    if (foundEvent) {
      setEventDetails(foundEvent);
    }
  }, [id]);

  if (!eventDetails) {
    return <div>Event not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <button className="text-left mb-4">
        <Icon icon="mdi:arrow-left" className="text-2xl" />
      </button>
      <h1 className="text-5xl font-bold text-center">{eventDetails.sport}</h1>
      <div className="flex justify-center my-4">
        <Icon icon="mdi:tennis" className="text-6xl" />
      </div>
      <p className="text-center text-lg text-gray-500 mb-4">In 2 hours</p>
      <div className="bg-gray-100 p-4 rounded-md mb-6">
        <div className="flex items-center mb-4">
          <Icon icon="mdi:clock" className="text-xl mr-2" />
          <p>{eventDetails.startsAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
             {eventDetails.endsAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
        <div className="flex items-center mb-4">
          <Icon icon="mdi:account-group" className="text-xl mr-2" />
          <p>{eventDetails.minParticipants}/{eventDetails.maxParticipants}</p>
        </div>
        <div className="flex items-center mb-4">
          <Icon icon="mdi:map-marker" className="text-xl mr-2" />
          <p>{eventDetails.location}</p>
        </div>
        <p className="text-gray-600 text-justify mt-6">
        Welcome to play tennis with me!
        </p>
      </div>
      <div className="flex justify-between">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md flex-1 mr-2">Chat</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md flex-1 ml-2">Unparticipate</button>
      </div>
    </div>
  );
}
