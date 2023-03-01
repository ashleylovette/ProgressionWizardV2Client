import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChordRef } from 'src/app/shared/models/chord-ref.model';

@Component({
  selector: 'app-chord-identifier',
  template: `<div class="chord-identifier">
  <div>
    <h2 class="title-text">Chord Identifier</h2>
  </div>

  <mat-divider></mat-divider>

  <div class="chord-detection">
    <mat-card class="chord">
      <h2>
        {{ this.chordRef ? this.chordRef.name : "Your Chord Goes Here" }}
      </h2>
    </mat-card>
    <div class="dialog-buttons">
      <button type="submit" class="btn primary" (click)="onSaveChord()">
        Save Chord
      </button>
      <button type="button" class="btn secondary">Clear Chord</button>
    </div>
  </div>

  <app-chord-input-dialog
    (chordFound)="setChordRef($event)"
  ></app-chord-input-dialog>

  <app-saved-chords-dialog
    class="saved-chords-dialog"
    [savedChord]="saveChord"
  ></app-saved-chords-dialog>
</div>
`,
  styleUrls: ['./chord-identifier.component.scss']
})
export class ChordIdentifierComponent implements OnInit {
  chordRef: ChordRef = null;
  saveChord = new BehaviorSubject<ChordRef>(null);

  constructor() { }

  ngOnInit(): void {
  }

  setChordRef(ref: ChordRef) {
    this.chordRef = ref;
   console.log(this.chordRef);
  }

  onSaveChord() {
    console.log(this.chordRef);
    this.saveChord.next(this.chordRef)
  }

}
