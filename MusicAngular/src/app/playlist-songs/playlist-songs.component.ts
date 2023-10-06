import { Component, OnInit } from '@angular/core';
import { MusicService } from '../service/music.service';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../base-layout/models/Songs';

@Component({
  selector: 'app-playlist-songs',
  templateUrl: './playlist-songs.component.html',
  styleUrls: ['./playlist-songs.component.css']
})

export class PlaylistSongsComponent implements OnInit {
  songs: Song[] = [];
  libraryId: number = 1;

  constructor(
    private musicService: MusicService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.libraryId = +params['id'];
      this.getSongsByLibraryId(this.libraryId);
    });
  }

  getSongsByLibraryId(libraryId: number) {
    this.musicService.getSongsByLibraryId(libraryId).subscribe(
      (data: Song[]) => {
        this.songs = data;
      }
    );
  }
}