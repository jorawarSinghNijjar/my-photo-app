import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {

  title = "Profile Page";
  imageUrl = "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg";

  viewCount = 0;

  name = "Jorawar Singh"

  constructor() { }

  ngOnInit(): void {
  }

  increementCount(){
    this.viewCount++;
  }

}
