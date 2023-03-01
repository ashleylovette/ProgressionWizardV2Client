import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChordRef } from 'src/app/shared/models/chord-ref.model';

@Component({
  selector: 'app-chord-identifier',
  templateUrl: './chord-identifier.component.html',
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
