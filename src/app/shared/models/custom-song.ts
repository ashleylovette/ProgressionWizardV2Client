import { ChordRef } from "./chord-ref.model";

export class CustomSong {
  chords: ChordRef[] = [];
  songName: string;

  // of type user
  songwriterId?: number;
  user: string;
  bpm: number;
  key: string;
  comments: string[];
}
