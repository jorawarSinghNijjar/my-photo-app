import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from './../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient, private userService: UserService) {

  }

  getAllAlbums() {
    var headers = this.userService.getHeaders();
    return this.http.get(
      `${environment.API_URL}/api/albums`, {headers}
      );
  }

  // getHeaders() {
  //   let headers = new HttpHeaders();
  //   let idToken = localStorage.getItem('userIdToken');
  //   return idToken ? headers.append('idToken', idToken) : headers;
  // }
}
