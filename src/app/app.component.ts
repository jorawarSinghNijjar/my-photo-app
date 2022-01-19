import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_photo_application';

  constructor(private userService: UserService){

  }

  signOut(){
    this.userService.signOut();
  
  }

  getAuthStatus(): boolean{
    return this.userService.isLoggedIn();
  }
}
