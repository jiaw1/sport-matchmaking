import { PickerValidDate } from "@mui/x-date-pickers";

export const Sports = ["Badminton", "Table tennis", "Football", "Basketball"]
export const DaysOfWeek : dayOfWeek[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export interface IActivityEvent {  
  id: string;
  sport: string;
  minParticipants: number | null;
  maxParticipants: number | null;
  startsAt: Date;
  endsAt: Date;
  location: string;
  description: string;
  participationFee: number;
  requiredEquipment: string[];
  level: string;
  chatLink: string;
  hostUserUUID: string;
  createdAt: Date;
  updatedAt: Date;
}

export type dayOfWeek =
  "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"


export interface IEventFilters {
  sports: Set<string>;
  days: Set<dayOfWeek>;
  time: {
    startTime: PickerValidDate | null 
    endTime: PickerValidDate | null
  }
}
