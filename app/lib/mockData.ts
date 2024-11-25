import { IMatch, IParticipation } from "./definitions";

export const matches: readonly IMatch[] = [
  {
    id: "10d23f2d-e1a3-4545-a359-5d42cb27692e",
    sport: "Tennis",
    minParticipants: 2,
    maxParticipants: 4,
    startsAt: new Date(Date.now() + 3600000),
    endsAt: new Date(Date.now() + 7200000),
    location: "Local Tennis Court",
    description: "Welcome to this awesome tennis match!",
    participationFee: 0,
    requiredEquipment: ["Racket", "Shoes"],
    level: "Novice",
    chatLink: "https://example.com/",
    hostUserID: "e5ab24d3-0549-4989-af00-4501f5da9896",
    createdAt: new Date("2024-11-20T20:00:00Z"),
    updatedAt: new Date("2024-11-20T20:00:00Z"),
  },
  {
    id: "d1ed451b-1343-4685-8fc3-2689ece56670",
    sport: "Badminton",
    minParticipants: 2,
    maxParticipants: 4,
    startsAt: new Date(Date.now() + 4800000),
    endsAt: new Date(Date.now() + 9600000),
    location: "Sports Hall, Downtown",
    description: "Looking for people to play badminton with :)",
    participationFee: 1000, // €10.00
    requiredEquipment: [],
    level: "Any",
    chatLink: "https://example.com/",
    hostUserID: "2001e936-b8a6-4ae7-b96f-f49358d268c0",
    createdAt: new Date("2024-11-25T10:00:00Z"),
    updatedAt: new Date("2024-11-25T10:00:00Z"),
  },
];

export const match1participations: readonly IParticipation[] = [
  {
    matchId: "10d23f2d-e1a3-4545-a359-5d42cb27692e",
    userId: "e5ab24d3-0549-4989-af00-4501f5da9896",
    createdAt: new Date("2024-11-20T20:00:00Z"),
    updatedAt: new Date("2024-11-20T20:00:00Z"),
  },
];

export const match2participations: readonly IParticipation[] = [
  {
    matchId: "d1ed451b-1343-4685-8fc3-2689ece56670",
    userId: "2001e936-b8a6-4ae7-b96f-f49358d268c0",
    createdAt: new Date("2024-11-25T10:00:00Z"),
    updatedAt: new Date("2024-11-25T10:00:00Z"),
  },
  {
    matchId: "d1ed451b-1343-4685-8fc3-2689ece56670",
    userId: "e5ab24d3-0549-4989-af00-4501f5da9896",
    createdAt: new Date("2024-11-25T12:00:00Z"),
    updatedAt: new Date("2024-11-25T12:00:00Z"),
  },
];
