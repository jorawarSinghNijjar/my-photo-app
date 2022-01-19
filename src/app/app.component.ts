import { Component } from '@angular/core';
import { UserService } from './service/user/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_photo_application';

  constructor(public userService: UserService){

  }

  signOut(){
    this.userService.signOut();
  }

}
