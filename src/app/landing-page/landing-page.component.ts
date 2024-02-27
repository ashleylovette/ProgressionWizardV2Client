import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
      <main>
          <div class="landing-page">
              <div class="text-box">
                  <mat-icon class="landing-page-icon">music_video</mat-icon>
                  <div class="title-text">progression wizard</div>
                  <div class="subtitle-text">
                      <span>A multipurpose tool for songwriters. </span>
                      <span>Connect with other musicians around the world.</span>
                  </div>
              </div>
              <div class="sign-on">
                  <app-sign-on></app-sign-on>
              </div>
          </div>
      </main>`,
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
