import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs-hub',
  template: `
      <div class="container">
        <mat-card class="sort-container">
          <div class="top-hot-new">
            <button mat-icon-button>
              <mat-icon>fiber_new</mat-icon>
              <div>New</div>
            </button>
            <button mat-icon-button>
              <mat-icon color="black">whatshot</mat-icon>
              <div>Hot</div>
            </button>
            <button mat-icon-button>
              <mat-icon>insert_chart</mat-icon>
              <div>Top</div>
            </button>
          </div>
          <div class="alphabetical-date">
            <button mat-icon-button>
              <mat-icon>arrow_upward</mat-icon>
              <div>A-Z</div>
            </button>
            <button mat-icon-button>
              <mat-icon>arrow_upward</mat-icon>
              <div>Date</div>
            </button>
          </div>
        </mat-card>
        <div class="user-songs-display">
          <app-songs-list></app-songs-list>
          <app-profile-card></app-profile-card>
        </div>
      </div>
  `,
  styleUrls: ['./songs-hub.component.scss']
})
export class SongsHubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
