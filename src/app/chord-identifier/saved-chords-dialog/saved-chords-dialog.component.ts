import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChordRef } from 'src/app/shared/models/chord-ref.model';
import { CustomSong } from 'src/app/shared/models/custom-song';

@Component({
  selector: 'app-saved-chords-dialog',
  template: `<mat-card class="saved-chords-dialog">
  <mat-card-header>
    <div class="dialog-header-container">
      <div class="dialog-header-text">Your Chords:</div>
      <mat-icon>settings</mat-icon>
    </div>
  </mat-card-header>
  <mat-divider></mat-divider>
  <form>
    <div>
      <div class="song-title-input">
        <label class="song-title-text">Song Title: SONG TITLE</label>
        <input class="form-control" placeholder="Enter Your Song Title Here!" />
      </div>
      <mat-card>
        <div class="chord-list" *ngIf="customSongDialogValid()">
          <mat-card class="chord" *ngFor="let chord of customSongData.chords">
            <mat-card-title>
              <div class="chord-name">{{chord.name}}</div>
            </mat-card-title>
          </mat-card>
        </div>
        <div *ngIf="!customSongDialogValid()" class="no-display-view">
          <h3>Your saved chords will display here!</h3>
        </div>
      </mat-card>
    </div>

    <div class="dialog-buttons">
      <button type="submit" class="btn primary">Save Song</button>
      <button type="button" class="btn secondary">Clear Song</button>
    </div>
  </form>
</mat-card>
`,
  styleUrls: ['./saved-chords-dialog.component.scss']
})
export class SavedChordsDialogComponent implements OnInit {
  @Input() savedChord = new BehaviorSubject<ChordRef>(null);
  customSongData = new CustomSong;

  constructor() {}

  ngOnInit(): void {
    this.savedChord.subscribe((ref: ChordRef) => {
      if(ref) {
        this.customSongData.chords.push(ref);
      }
    });
  }

  customSongDialogValid(): boolean {
   return this.customSongData.chords.length > 0;
  }
}
