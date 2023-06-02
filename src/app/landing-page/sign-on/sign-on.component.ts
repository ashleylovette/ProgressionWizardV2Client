import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthenticationModel} from "../../shared/models/authentication.model";
import {AuthenticationService} from "../../shared/services/authentication/authentication.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {readSpanComment} from "@angular/compiler-cli/src/ngtsc/typecheck/src/comments";
import {AuthenticationStateService} from "../../shared/services/authentication/authentication-state.service";

@Component({
  selector: 'app-sign-on',
  template: `<mat-card class="sign-in-card" [formGroup]="signInForm">
    <input matInput class="form-control" type="text" placeholder="Username or email" formControlName="username">
    <input matInput class="form-control" type="password" placeholder="Password" formControlName="password">

    <div class="existing-account">
      <button type="submit" class="btn primary" matButton (click)="signIn()">Sign In</button>
      <div>Forgot password?</div>
    </div>
    <hr>
    <button matButton class="btn secondary create-account" type="button">Create Account</button>
  </mat-card>`,
  styleUrls: ['./sign-on.component.scss']
})
export class SignOnComponent implements OnInit {
  signInForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  constructor(private authenticationService: AuthenticationService,
              private authenticationStateService: AuthenticationStateService,
              private router: Router,
              protected snackbar: MatSnackBar) {}

  ngOnInit(): void {
  }

  signIn() {
    const request: AuthenticationModel = {
      username: this.signInForm.value.username,
      password: this.signInForm.value.password
    }

    this.authenticationService.signIn(request).subscribe((res) => {
        if (res?.errors.length > 0) {
          console.log(res);
          res.errors.map(x => this.snackbar.open(x, null, {duration: 5000, horizontalPosition: 'center', verticalPosition:'top'}))
      } else {
          console.log(res);
          this.authenticationStateService.userState.next(res);
          this.snackbar.open('Welcome, ' + res.firstName + '!');
          this.router.navigate(['/home'])
        }
    })
  }

}
