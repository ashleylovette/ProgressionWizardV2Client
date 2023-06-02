import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  template: `
      <mat-card class="profile-card">
          <div class="image-container">
              <img mat-card-image src="/assets/profilepic.jpeg">
          </div>
          <div class="profile-card-body">
              <div class="username">Ashley Lovette</div>
              <div class="user-handle">@ashleylovette</div>

              <div class="songs-likes">
                  <div class="songs">
                      <h3>Songs:</h3>
                      <span>50</span>
                  </div>
                  <div class="likes">
                      <h3>Likes:</h3>
                      <span>50</span>
                  </div>
              </div>

              <div class="user-info">
                  <div class="user-info-body">Birthday: <span>01/30/1996</span></div>
                  <div class="user-info-body">Instruments: <span>Guitar, Piano</span></div>
                  <div class="user-info-body">Spotify: <span
                          href="https://open.spotify.com/user/nsw5sj8d3w82p4ft1xf7lxo3w?si=dad6bad47b894606">View Spotify Profile</span>
                  </div>
              </div>
          </div>
          <button mat-button class="follow">Follow</button>
      </mat-card>
  `,
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
