import { ChordRef } from "./chord-ref.model";
import {SongwriterResponse} from "./songwriter-response.model";

export interface CustomSong {
  chords: ChordRef[];
  songName: string;

  // of type user
  user: SongwriterResponse;
  bpm: number;
  key: string;
  comments: string[];
}
