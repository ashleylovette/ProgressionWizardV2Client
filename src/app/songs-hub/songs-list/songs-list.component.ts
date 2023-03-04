import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs-list',
  template: `
  <div>
    <mat-card class="songs-list">
      <h1>check</h1>
    </mat-card>
  </div>`,
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
