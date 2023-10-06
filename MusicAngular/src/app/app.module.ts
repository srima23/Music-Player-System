import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { ArtistSongsComponent } from './artist-songs/artist-songs.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatePlaylistDialogComponent } from './create-playlist-dialog/create-playlist-dialog.component';
import { FavoriteSongsComponent } from './fav-songs/fav-songs.component';
import { AddToPlaylistDialogComponent } from './add-to-playlist-dialog/add-to-playlist-dialog.component';
import { PlaylistSongsComponent } from './playlist-songs/playlist-songs.component';
import { SongsByGenreComponent } from './songs-by-genre/songs-by-genre.component';
@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    BaseLayoutComponent,
    LoginFormComponent,
    NavBarComponent,
    HomeComponent,
    ArtistSongsComponent,
    CreatePlaylistDialogComponent,
    FavoriteSongsComponent,
    AddToPlaylistDialogComponent,
    PlaylistSongsComponent,
    SongsByGenreComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
