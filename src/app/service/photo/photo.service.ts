import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient, private userService: UserService) { }

  getAll(){
    var headers = this.userService.getHeaders();
    return this.http.get(
      `${environment.API_URL}/photos`,
      {headers}
    );
  }

}
