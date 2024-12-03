import { PickerValidDate } from "@mui/x-date-pickers";

export const Sports = [
  "Badminton",
  "Table tennis",
  "Football",
  "Basketball",
  "Tennis",
];
export const DaysOfWeek: dayOfWeek[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export type dayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface IEventFilters {
  sports: Set<string>;
  days: Set<dayOfWeek>;
  time: {
    startTime: PickerValidDate | null;
    endTime: PickerValidDate | null;
  };
}

// Match Service

/**
 * Represents a Match returned by the Match Service.
 */
export interface IMatch {
  id: string;
  sport: string;
  minParticipants: number | null;
  maxParticipants: number | null;
  startsAt: Date;
  endsAt: Date;
  location: string;
  description: string;
  /** Participation fee in cents */
  participationFee: number;
  requiredEquipment: string[];
  level: string;
  chatLink: string;
  hostUserID: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Data used to create a new match.
 */
export interface IMatchCreate {
  sport: string;
  minParticipants: number | null | undefined;
  maxParticipants: number | null | undefined;
  startsAt: Date;
  endsAt: Date;
  location: string;
  description: string;
  /** Participation fee in cents */
  participationFee: number;
  requiredEquipment: readonly string[];
  level: string;
  chatLink: string;
}

/**
 * Data used to edit an existing match.
 */
export type IMatchEdit = IMatchCreate;

/**
 * Representation of a Match Service Participation
 */
export interface IParticipation {
  userId: string;
  matchId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IKeycloakUser {
  id: string;
  firstName: string;
  username: string;
}

export type IUserData = IKeycloakUser;
