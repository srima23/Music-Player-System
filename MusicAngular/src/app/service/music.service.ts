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

  getSongsByGenre(genre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/genre/${genre}`);
  }

  createLibrary(userId: number, libraryName: string): Observable<any> {
    const libraryRequest = { libraryName };
    return this.http.post<any>(`${this.baseURL}/createlib/${userId}`, libraryRequest);
  }

  addSongToLibrary(libraryId: number, songId: number): Observable<string> {
    return this.http.post<string>(`${this.baseURL}/${libraryId}/add-song/${songId}`, {});
  }

  getAllSongsOfUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/user/${userId}/songs`);
  }
}
