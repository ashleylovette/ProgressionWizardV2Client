import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-on',
  template: `<mat-card class="sign-in-card">
    <input matInput class="form-control" type="text" placeholder="Username or email">
    <input matInput class="form-control" type="password" placeholder="Password">

    <div class="existing-account">
      <button type="submit" class="btn primary" matButton>Sign In</button>
      <div>Forgot password?</div>
    </div>
    <hr>
    <button matButton class="btn secondary create-account" type="button">Create Account</button>
  </mat-card>`,
  styleUrls: ['./sign-on.component.scss']
})
export class SignOnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
