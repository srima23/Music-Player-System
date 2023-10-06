import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../base-layout/models/Songs';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-songs-by-genre',
  templateUrl: './songs-by-genre.component.html',
  styleUrls: ['./songs-by-genre.component.css']
})
export class SongsByGenreComponent implements OnInit {
  songs: Song[] = [];
  filteredSongs: Song[] = [];
  selectedGenre: string = '';

  constructor(
    private musicService: MusicService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.musicService.getAllSongs().subscribe((data) => {
      this.songs = data;
      this.route.paramMap.subscribe((params) => {
        this.selectedGenre = params.get('name') ?? '';
        this.filterSongsByGenre(this.selectedGenre);
      });
    });
  }

  filterSongsByGenre(genreName: string) {
    this.selectedGenre = genreName;
    if (genreName === 'All Genres') {
      this.filteredSongs = [...this.songs];
    } else {
      this.filteredSongs = this.songs.filter((song) => song.genre === genreName);
    }
  }
}
