import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <mat-toolbar>
    <div class="left-align">
      <button mat-button [routerLink]="'home'">
          <span>Progression Wizard</span>
      </button>
    </div>
    <div class="middle-align">
      <button mat-icon-button>
      <mat-icon [routerLink]="'home'">home</mat-icon>
      </button>
      <button mat-icon-button>
      <mat-icon [routerLink]="'chord-identifier'">music_note</mat-icon>
      </button>
      <button mat-icon-button>
        <mat-icon [routerLink]="'songs-hub'">library_music</mat-icon>
      </button>
      </div>
    <div class="right-align">
      <button mat-button class="account-button">Log in</button>
    </div>
  </mat-toolbar>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
