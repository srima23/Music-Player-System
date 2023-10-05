import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CreatePlaylistDialogComponent } from '../create-playlist-dialog/create-playlist-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { PlaylistNames } from '../models/PlaylistNames';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  title = "Bajatey Raho"
  playlistNames: any[] = [];

  constructor(public authService: AuthService, private dialog: MatDialog, private musicService: MusicService) { }

  ngOnInit() {
    this.getAllPlaylistNames();
  }

  logout(): void {
    this.authService.logout();
  }

  openCreatePlaylistDialog() {
    const dialogRef = this.dialog.open(CreatePlaylistDialogComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe();
  }
  getAllPlaylistNames() {
    this.musicService.getPlaylistNames().subscribe(
      (data: any[]) => {
        this.playlistNames = data;
      }
    );
  }
}
