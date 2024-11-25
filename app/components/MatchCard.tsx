"use client";

import { IMatch } from "../lib/definitions";
import { Icon } from "@iconify/react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export interface IMatchCardProps {
  activityEvent: IMatch;
}

const MatchCard = ({ activityEvent }: IMatchCardProps) => {
  const router = useRouter();

  const handleViewDetails = () => {
    router.push(`/events/${activityEvent.id}`);
  };

  return (
    <div className="p-4 bg-gray-200 rounded-md w-64 h-64 flex items-center">
      <div className="space-y-3 flex-grow">
        <p className="text-center font-bold">{activityEvent.sport}</p>
        <p className="text-4xl flex justify-center w-full">
          <Icon icon="mdi:tennis" />
        </p>
        <div className="space-y-0.5">
          <div className="flex flex-row items-center space-x-1">
            <div className="flex">
              <Icon icon="mdi:person" />
            </div>
            <div className="flex-none">0/{activityEvent.maxParticipants}</div>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <div className="flex">
              <Icon icon="mdi:location" />
            </div>
            <div className="flex-none">{activityEvent.location}</div>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <div className="flex">
              <Icon icon="mdi:clock" />
            </div>
            <div className="flex-none">
              in{" "}
              {Math.round(
                (activityEvent.startsAt.getTime() - Date.now()) / 60000
              )}
              m
            </div>
          </div>
        </div>
        <Button text="View Details" onClick={handleViewDetails} />
      </div>
    </div>
  );
};

export default MatchCard;
