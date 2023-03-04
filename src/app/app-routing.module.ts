import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChordIdentifierComponent } from './chord-identifier/chord-identifier.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SongsHubComponent } from './songs-hub/songs-hub.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent},
  { path: 'chord-identifier', component: ChordIdentifierComponent},
  { path: 'songs-hub', component: SongsHubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
