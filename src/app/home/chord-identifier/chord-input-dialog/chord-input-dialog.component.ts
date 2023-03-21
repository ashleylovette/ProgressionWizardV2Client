import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Chord} from 'tonal';
import {ChordRef} from 'src/app/shared/models/chord-ref.model';

@Component({
  selector: 'app-chord-input-dialog',
  template: `
    <div class="input-card">
      <mat-card>
        <mat-card-header>
          <mat-card-subtitle> Enter at least three notes below:</mat-card-subtitle>
        </mat-card-header>
        <form [formGroup]="noteForm" (ngSubmit)="onSubmit(noteForm)">
          <div class="input-group">
            <mat-form-field
              *ngFor="let note of getControls(); let i = index"
              class="note-form-field"
              formArrayName="notes"
            >
              <input matInput type="text" [formControlName]="i" id="notes"/>
            </mat-form-field>
          </div>
          <div class="row">
            <div class="column btn-group">
              <button class="btn primary" type="button" (click)="onAddNote()">
                Add Note
              </button>
              <button class="btn secondary" type="button" (click)="onRemoveNote()"
                      [disabled]="minimumControls()">
                Remove Note
              </button>
              <button
                class="btn primary"
                type="submit"
                [disabled]="!noteForm.valid"
              >
                Submit Notes
              </button>
              <button class="btn secondary" type="button" [disabled]="noteForm.pristine" (click)="onResetForm()">
                Reset
              </button>
            </div>
          </div>
        </form>
      </mat-card>
    </div>
  `,
  styleUrls: ['./chord-input-dialog.component.scss']
})

export class ChordInputDialogComponent implements OnInit {
  noteForm = new FormGroup({
    notes: new FormArray([])
  });

  @Output() chordFound = new EventEmitter<ChordRef>(null);

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.initializeNoteForm();
  }

  onAddNote() {
    (<FormArray>this.noteForm.get("notes")).push(
      new FormControl(null, Validators.required)
    );
  }

  onRemoveNote() {
    const chordsArray = this.noteForm.get("notes") as FormArray;
    chordsArray.removeAt(-1);
  }

  private initializeNoteForm() {
    (<FormArray>this.noteForm.get('notes')).push(
      new FormControl(null, Validators.required)
    );
    (<FormArray>this.noteForm.get('notes')).push(
      new FormControl(null, Validators.required)
    );
    (<FormArray>this.noteForm.get('notes')).push(
      new FormControl(null, Validators.required)
    );
  }

  onSubmit(noteForm: FormGroup) {
    let chord = Chord.detect(noteForm.value.notes);

    if (chord.length === 0) {

      let falseyChord = noteForm.value.notes.join(" ");
      this._snackBar.open("Chord not found for the following notes: " + falseyChord.toUpperCase(), 'Close');

      return;
    } else {
      let truthyChord = new ChordRef(chord[0], noteForm.value.notes);
      this._snackBar.open("Chord Found!");
      this.chordFound.emit(truthyChord);
    }
  }

  onResetForm() {
    this.noteForm.reset();
  }

  getControls() {
    return (this.noteForm.get("notes") as FormArray).controls;
  }

  minimumControls(): boolean {
    return (this.noteForm.get("notes") as FormArray).controls.length <= 3;
  }
}
