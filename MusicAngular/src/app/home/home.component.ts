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
  playlistNames: any[] = [];
  showDropdown: boolean[] = [];
  searchTerm: string = '';
  showDropdownForSearch: boolean = false;
  filteredArtists: string[] = [];
  filteredGenres: string[] = [];



  constructor(private musicService: MusicService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllPlaylistNames();
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

  toggleDropdown(index: number) {
    this.showDropdown[index] = !this.showDropdown[index];
  }

  goToArtistSongs(artistName: string) {
    this.router.navigate(['/artist-songs', artistName]);
  }

  goToGenreSongs(genreName: string) {
    this.router.navigate(['/genre-songs', genreName]);
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

  getAllPlaylistNames() {
    this.musicService.getPlaylistNames().subscribe(
      (data: any[]) => {
        this.playlistNames = data;
      }
    );
  }

  addToPlaylist(songId: number, playlistId: number) {
    this.musicService.addSongToPlaylist(songId, playlistId).subscribe();
  }

  // searchSongs() {
  //   if (this.searchTerm.trim() === '') {
  //     this.filteredSongs = [];
  //     this.showDropdownForSearch = false;
  //   } else {
  //     this.filteredSongs = this.songs.filter((song) =>
  //       song.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //       song.artist.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //       song.genre.toLowerCase().includes(this.searchTerm.toLowerCase())
  //     );
  //     this.showDropdownForSearch = true;
  //   }
  // }
  searchSongs() {
    if (this.searchTerm.trim() === '') {
      this.showDropdownForSearch = false;
    } else {
      if (this.searchTerm.startsWith('@')) {
        const artistSearchTerm = this.searchTerm.substring(1).toLowerCase();
        this.filteredSongs = this.songs.filter((song) =>
          song.artist.toLowerCase().includes(artistSearchTerm)
        );
      } else if (this.searchTerm.startsWith('/')) {
        const genreSearchTerm = this.searchTerm.substring(1).toLowerCase();
        this.filteredSongs = this.songs.filter((song) =>
          song.genre.toLowerCase().includes(genreSearchTerm)
        );
      } else {
        this.filteredSongs = this.songs.filter((song) =>
          song.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
    }
  }

}