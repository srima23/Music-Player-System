import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { ArtistSongsComponent } from './artist-songs/artist-songs.component';
import { FavoriteSongsComponent } from './fav-songs/fav-songs.component'; 
import { PlaylistSongsComponent } from './playlist-songs/playlist-songs.component';
import { SongsByGenreComponent } from './songs-by-genre/songs-by-genre.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      { path: 'login', component: LoginFormComponent },
    ],
  },
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent }
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'favorite-songs', component: FavoriteSongsComponent },
  { path: 'playlist/:id', component: PlaylistSongsComponent },
  { path: 'artist-songs/:name', component: ArtistSongsComponent },
  { path: 'genre-songs/:name', component: SongsByGenreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
