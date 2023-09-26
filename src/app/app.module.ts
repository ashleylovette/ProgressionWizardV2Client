import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChordIdentifierComponent } from './home/chord-identifier/chord-identifier.component';
import { HeaderComponent } from './home/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ChordInputDialogComponent } from './home/chord-identifier/chord-input-dialog/chord-input-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import { SavedChordsDialogComponent } from './home/chord-identifier/saved-chords-dialog/saved-chords-dialog.component';
import {MatButtonModule } from '@angular/material/button';
import { SongsHubComponent } from './home/songs-hub/songs-hub.component';
import { SongsListComponent } from './home/songs-hub/songs-list/songs-list.component';
import { ProfileCardComponent } from './home/songs-hub/profile-card/profile-card.component';
import { SignOnComponent } from './landing-page/sign-on/sign-on.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './home/feed/feed.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ChordIdentifierComponent,
    HeaderComponent,
    ChordInputDialogComponent,
    SavedChordsDialogComponent,
    SongsHubComponent,
    SongsListComponent,
    ProfileCardComponent,
    SignOnComponent,
    HomeComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatDividerModule
  ],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
