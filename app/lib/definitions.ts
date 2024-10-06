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
