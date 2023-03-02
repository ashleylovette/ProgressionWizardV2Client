import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<mat-toolbar>
                <span>Progression Wizard</span>
                <span class="example-spacer"></span>
                <mat-icon>menu</mat-icon>
              </mat-toolbar>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
