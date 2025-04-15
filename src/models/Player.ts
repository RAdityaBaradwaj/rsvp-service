import { RsvpStatus } from "./RsvpStatus";

export interface Player {
  id: string;
  name: string;
}

export interface RsvpEntry {
  player: Player;
  status: RsvpStatus;
}
