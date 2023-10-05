import { Component } from '@angular/core';
import { MusicService } from '../service/music.service';
import { Song } from '../base-layout/models/Songs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddToPlaylistDialogComponent } from '../add-to-playlist-dialog/add-to-playlist-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  songs: Song[] = [];
  filteredSongs: Song[] = [];
  uniqueArtists: string[] = [];
  uniqueGenres: string[] = [];
  selectedGenre: string = '';

  constructor(private musicService: MusicService,private router:Router,private dialog: MatDialog) {}

  ngOnInit() {
    this.musicService.getAllSongs().subscribe((data) => {
      this.songs = data;
      console.log(this.songs);
        const uniqueArtistsSet = new Set<string>();
        this.songs.forEach((song) => {
        const artists = song.artist.split(' & ');
        artists.forEach((artist) => {
          uniqueArtistsSet.add(artist);
        });
      });
        this.uniqueArtists = Array.from(uniqueArtistsSet);
  
      this.uniqueGenres = Array.from(new Set(this.songs.map(song => song.genre)));
    });
  }
  

  goToArtistSongs(artistName: string) {
    this.router.navigate(['/artist-songs', artistName]);
  }
  

  filterSongsByGenre(genreName: string) {
    if (this.selectedGenre === genreName) {
      return;
    }

    this.selectedGenre = genreName;
    if (genreName === 'All Genres') {
      this.filteredSongs = [...this.songs];
    } else {
      this.filteredSongs = this.songs.filter((song) => song.genre === genreName);
    }
  }

  addToFavSongs(id: number) {
    this.musicService.addtoFavSongs(id).subscribe(
      () => {
        this.openAddToPlaylistDialog();
        setTimeout(() => {
          this.dialog.closeAll();
        }, 2000);
      }
    );
  }

  openAddToPlaylistDialog() {
    this.dialog.open(AddToPlaylistDialogComponent, {
      width: '200px',
      disableClose: true,
    });
  }

}
