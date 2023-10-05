import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  baseURL = 'http://localhost:8080/player';
  constructor(private http: HttpClient) { }

  getAllSongs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/getsongs`,{headers:this.getHeaders()});
  }

  getSongsByGenre(genre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/genre/${genre}` ,{headers:this.getHeaders()});
  }

  createLibrary(userId: number, libraryName: string): Observable<any> {
    const libraryRequest = { libraryName };
    return this.http.post<any>(`${this.baseURL}/createlib/${userId}`, libraryRequest,{headers:this.getHeaders()});
  }

  addSongToLibrary(libraryId: number, songId: number): Observable<string> {
    return this.http.post<string>(`${this.baseURL}/${libraryId}/add-song/${songId}`, {},{headers:this.getHeaders()});
  }

  getAllSongsOfUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseURL}/user/${userId}/songs`,{headers:this.getHeaders()});
  }

  getHeaders(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer '+ localStorage.getItem('token')
    });
    return headers;
  }
}
