import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChordIdentifierComponent } from './chord-identifier/chord-identifier.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ChordInputDialogComponent } from './chord-identifier/chord-input-dialog/chord-input-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import { SavedChordsDialogComponent } from './chord-identifier/saved-chords-dialog/saved-chords-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ChordIdentifierComponent,
    HeaderComponent,
    ChordInputDialogComponent,
    SavedChordsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
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
