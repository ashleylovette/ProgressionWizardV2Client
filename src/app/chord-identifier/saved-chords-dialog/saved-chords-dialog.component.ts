import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChordRef } from 'src/app/shared/models/chord-ref.model';
import { CustomSongDataWrapper } from 'src/app/shared/models/custom-song-data-wrapper';

@Component({
  selector: 'app-saved-chords-dialog',
  templateUrl: './saved-chords-dialog.component.html',
  styleUrls: ['./saved-chords-dialog.component.scss']
})
export class SavedChordsDialogComponent implements OnInit {
  @Input() savedChord = new BehaviorSubject<ChordRef>(null);
  customSongData = new CustomSongDataWrapper;

  constructor() { }

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
