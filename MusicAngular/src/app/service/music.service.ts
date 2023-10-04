import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  baseURL = 'http://localhost:8080/player/';
  constructor(private http: HttpClient) { }

  getAllSongs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/getsongs`);
  }

  // Get songs by genre
  getSongsByGenre(genre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/genre/${genre}`);
  }

  createLibrary(userId: number, libraryName: string): Observable<any> {
    const libraryRequest = { libraryName };
    return this.http.post<any>(`${this.baseURL}/createlib/${userId}`, libraryRequest);
  }

  // Add a song to a user's library
  addSongToLibrary(libraryId: number, songId: number): Observable<string> {
    return this.http.post<string>(`${this.baseURL}/${libraryId}/add-song/${songId}`, {});
  }

  // Get all songs of a user's library
  getAllSongsOfUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/user/${userId}/songs`);
  }
}
