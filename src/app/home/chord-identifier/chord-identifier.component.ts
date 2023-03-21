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
      <div class="chord-text" [ngClass]="chordRef ? 'chord-name' : 'chord-placeholder'">
        {{ this.chordRef ? this.chordRef.name : "Your Chord Goes Here" }}
      </div>
    </mat-card>
    <div class="dialog-buttons">
      <button type="submit" class="btn primary" (click)="onSend(true)">
        Save Chord
      </button>
      <button type="button" class="btn secondary" (click)="onSend(false)">Clear Chord</button>
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
  }

  onSend(saved: boolean) {
    if(saved) {this.saveChord.next(this.chordRef);}
    this.chordRef = null;
  }
}
