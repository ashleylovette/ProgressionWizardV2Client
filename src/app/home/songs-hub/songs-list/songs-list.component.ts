import { Component, OnInit } from '@angular/core';
import {CustomSong} from "../../../shared/models/custom-song";
import {ChordRef} from "../../../shared/models/chord-ref.model";
import {SongwriterResponse} from "../../../shared/models/songwriter-response.model";
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-songs-list',
  template: `
      <div>
          <mat-card class="songs-list">
              <div class="song-title">Song Title</div>
              <div class="song-info">
                  <div class="key">
                    <span class="label">
                      Key:
                    </span> C
                  </div>
                  <div class="chords">
                    <span class="label">
                      Chords:
                    </span> C, Am, F, G
                  </div>
                  <div class="bpm">
                      <span class="label">
                      BPM:
                    </span>  85
                  </div>
                  <div class="instrument">
                      <span class="label">
                      Instrument:
                    </span>  Guitar
                  </div>

                  <div class="lyric-sheet">
                      <span class="label">
                      Lyrics:
                    </span>
                  </div>
              </div>
          </mat-card>
      </div>`,
    styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
    songs: CustomSong[] = [{
        songName: 'Liquid Confidence',
        chords: [
            new ChordRef('Cadd9', ['C', 'E', 'G']),
            new ChordRef('GM', ['G', 'B', 'D']),
            new ChordRef('Em', ['E', 'G', 'B']),
            new ChordRef('Am', ['A', 'C', 'E'])],
        user: new SongwriterResponse(
          {
            birthday: undefined,
            countryOfResidence: '',
            email: '',
            errors: [],
            firstName: 'ashley',
            instruments: [ 'guitar', 'piano'],
            isAuthenticated: false,
            lastName: 'lovette',
            username: 'ashleylovette'
          }
        ),
        bpm: 80,
        key: 'C major',
        comments: []
    }];

    constructor() {
    }

    ngOnInit(): void {
    }

    songLiked(): boolean {
        return false;
    }

}
