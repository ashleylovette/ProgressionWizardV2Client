import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChordIdentifierComponent } from './home/chord-identifier/chord-identifier.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SongsHubComponent } from './home/songs-hub/songs-hub.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full'},
  { path: 'landing-page', component: LandingPageComponent},
  {path: 'home', component: HomeComponent, children: [
      { path: 'chord-identifier', component: ChordIdentifierComponent},
      { path: 'songs-hub', component: SongsHubComponent}
    ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
