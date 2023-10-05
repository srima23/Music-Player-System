import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-create-playlist-dialog',
  templateUrl: './create-playlist-dialog.component.html',
  styleUrls: ['./create-playlist-dialog.component.css']
})
export class CreatePlaylistDialogComponent {
  playlistName: string = '';

  constructor(
    public dialogRef: MatDialogRef<CreatePlaylistDialogComponent>,
    private musicService: MusicService
  ) {}

  createPlaylist(playlistName:string) {
    if (this.playlistName.trim() !== '') {
      this.musicService.createPlaylist(playlistName).subscribe();
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
