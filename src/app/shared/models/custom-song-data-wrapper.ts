import { ChordRef } from "./chord-ref.model";

export class CustomSongDataWrapper {
  chords: ChordRef[] = [];
  songName: string;

  // of type user
  user: string;
  bpm: number;
  key: string;
  comments: string[];
}
