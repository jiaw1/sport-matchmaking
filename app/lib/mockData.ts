import { IActivityEvent } from "./definitions";

export const activityEvents: readonly IActivityEvent[] = [
  {
    id: "event1",
    sport: "Tennis",
    minParticipants: 2,
    maxParticipants: 2,
    startsAt: new Date(Date.now() + 3600000),
    endsAt: new Date(Date.now() + 7200000),
    location: "Somewhere",
    description: "Tennis activity description",
    participationFee: 0,
    requiredEquipment: [],
    level: "Novice",
    chatLink: "",
    hostUserUUID: "0",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
