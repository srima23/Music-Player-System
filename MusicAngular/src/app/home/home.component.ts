import { Component } from '@angular/core';
import { MusicService } from '../service/music.service';
import { Song } from '../base-layout/models/Songs';
import { Router } from '@angular/router';

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

  constructor(private musicService: MusicService,private router:Router) {}

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
      // If the selected genre is the same as the previous selection, don't apply the filter
      return;
    }

    this.selectedGenre = genreName; // Store the selected genre name
    if (genreName === 'All Genres') {
      this.filteredSongs = [...this.songs];
    } else {
      this.filteredSongs = this.songs.filter((song) => song.genre === genreName);
    }
    console.log(this.filteredSongs);
  }
}
