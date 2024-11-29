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
    participationFee: 1045, // €10.00
    requiredEquipment: [],
    level: "Any",
    chatLink: "https://example.com/",
    hostUserID: "2001e936-b8a6-4ae7-b96f-f49358d268c0",
    createdAt: new Date("2024-11-25T10:00:00Z"),
    updatedAt: new Date("2024-11-25T10:00:00Z"),
  },
  {
    id: "e234b987-5a21-4f02-b21d-12a37890f123",
    sport: "Football",
    minParticipants: 10,
    maxParticipants: 22,
    startsAt: new Date(Date.now() + 7200000),
    endsAt: new Date(Date.now() + 10800000),
    location: "Local Football Field",
    description: "Let's have a friendly football match!",
    participationFee: 0,
    requiredEquipment: ["football boots", "shin guards"],
    level: "All",
    chatLink: "https://example.com/football-match",
    hostUserID: "1f0b234d-789a-4123-a2b1-c5678d9ef012",
    createdAt: new Date("2024-11-28T15:00:00Z"),
    updatedAt: new Date("2024-11-28T15:00:00Z")
  },
  {
    id: "f567a823-9b1c-4d0e-a456-7890ac123def",
    sport: "Badminton",
    minParticipants: 2,
    maxParticipants: 4,
    startsAt: new Date(Date.now() + 21600000),
    endsAt: new Date(Date.now() + 25200000),
    location: "Sports Hall, University Campus",
    description: "Let's have a friendly badminton match!",
    participationFee: 1000,
    requiredEquipment: ["racket", "shuttlecock"],
    level: "Professional",
    chatLink: "https://example.com/badminton-match",
    hostUserID: "3a4b5c6d-e7f8-490a-b1c2-d3e4f5g6h7i8",
    createdAt: new Date("2024-11-28T15:00:00Z"),
    updatedAt: new Date("2024-11-28T15:00:00Z")
  },
  {
    id: "a01b2c3d-4e5f-6g7h-8i9j-0k1l2m3n4o5p",
    sport: "Basketball",
    minParticipants: 5,
    maxParticipants: 10,
    startsAt: new Date(Date.now() + 86400000),
    endsAt: new Date(Date.now() + 108000000),
    location: "Outdoor Court, City Park",
    description: "Casual basketball pick-up game. All skill levels welcome!",
    participationFee: 0,
    requiredEquipment: ["basketball shoes"],
    level: "Casual",
    chatLink: "https://example.com/basketball-pickup",
    hostUserID: "5678a90b-cdef-0123-4567-89abcdef012",
    createdAt: new Date("2024-11-28T15:00:00Z"),
    updatedAt: new Date("2024-11-28T15:00:00Z")
  }

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
