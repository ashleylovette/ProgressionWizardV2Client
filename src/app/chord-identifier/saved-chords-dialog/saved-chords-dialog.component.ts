import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';
import {ChordRef} from 'src/app/shared/models/chord-ref.model';
import {CustomSong} from 'src/app/shared/models/custom-song';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-saved-chords-dialog',
  template: `
    <form [formGroup]="customSongForm" (ngSubmit)="onSubmit()">
      <mat-card class="saved-chords-dialog">
        <mat-card-header>
          <div class="dialog-header-container">
            <div class="dialog-header-text">Your Chords:</div>
            <mat-icon>settings</mat-icon>
          </div>
        </mat-card-header>
        <mat-divider></mat-divider>

        <div>
          <div class="song-title-input">
            <label class="song-title-text" for="songName">Song Name: </label>
            <input class="form-control" formControlName="songName" placeholder="Enter Your Song Title Here!"/>
          </div>
          <mat-card>
            <div class="chord-list" *ngIf="customSongDialogValid()">

              <mat-card class="chord" *ngFor="let chord of customSongData.chords; let i = index">
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
      </mat-card>
      <div class="dialog-buttons">
        <button type="submit" class="btn primary">Save Song</button>
        <button type="button" class="btn secondary" (click)="onClearSong()">Clear Song</button>
      </div>
    </form>

  `,
  styleUrls: ['./saved-chords-dialog.component.scss']
})
export class SavedChordsDialogComponent implements OnInit, OnDestroy {
  @Input() savedChord = new BehaviorSubject<ChordRef>(null);
  savedChordSub = new Subscription();
  customSongData = new CustomSong;
  customSongForm = new FormGroup({
    songName: new FormControl(),
    key: new FormControl(),
    bpm: new FormControl()
  });

  constructor() {
  }

  ngOnInit(): void {
    this.savedChordSub = this.savedChord.subscribe((ref: ChordRef) => {
      if (ref) {
        this.customSongData.chords.push(ref);
      }
    });
  }

  ngOnDestroy(): void {
    this.savedChordSub.unsubscribe()
  }

  customSongDialogValid(): boolean {
    return this.customSongData.chords.length > 0;
  }

  onSubmit() {
    this.customSongData.songName = this.customSongForm.get("songName").value;
    this.customSongData.key = this.customSongForm.get("key").value;
    this.customSongData.bpm = this.customSongForm.get("bpm").value;

    console.log(this.customSongData);
  }

  onClearSong() {
    this.customSongData = new CustomSong();
    this.customSongForm.reset();
  }

}
