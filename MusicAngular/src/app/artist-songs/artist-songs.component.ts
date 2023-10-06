import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../base-layout/models/Songs';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-artist-songs',
  templateUrl: './artist-songs.component.html',
  styleUrls: ['./artist-songs.component.css']
})
export class ArtistSongsComponent implements OnInit {
  selectedArtist: string = '';
  songs: Song[] = [];
  filteredSongs: Song[] = [];
  artistName : string = '';

  constructor(private route: ActivatedRoute,private musicService:MusicService) {}

  ngOnInit() {
    this.musicService.getAllSongs().subscribe((data) => {
      this.songs = data;

      this.route.paramMap.subscribe((params) => {
        this.artistName = params.get('name') ?? '';
        this.getArtistSongs(this.artistName);
      });
    });
  }

  getArtistSongs(artistName: string) {
    if (this.selectedArtist === artistName) {
      return;
    }
    
    this.selectedArtist = artistName;
    if (artistName === 'All Artists') {
      this.filteredSongs = [...this.songs];
    } else {
      this.filteredSongs = this.songs.filter((song) => song.artist === artistName);      
    }
    console.log(this.filteredSongs);
  }
}
