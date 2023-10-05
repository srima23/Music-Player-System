import { Component, OnInit } from '@angular/core';
import { Song } from '../base-layout/models/Songs';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-fav-songs',
  templateUrl: './fav-songs.component.html',
  styleUrls: ['./fav-songs.component.css']
})
export class FavoriteSongsComponent implements OnInit {
  favoriteSongs: Song[] = [];

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.fetchFavoriteSongs();
  }

  fetchFavoriteSongs() {
    this.musicService.getFavoriteSongs().subscribe(
      (data: any[]) => {
        this.favoriteSongs = data;
      }
    );
  }
}
