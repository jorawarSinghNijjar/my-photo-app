import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm = true;

  constructor() { }

  ngOnInit(): void {
  }

  showSignInForm(){
    this.signInForm = true;
  }

  showSignUpForm(){
    this.signInForm = false;
  }

}
