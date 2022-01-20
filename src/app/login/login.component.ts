import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm = true;
  email: string;
  password: string;
  name: string;

  constructor(private userService: UserService, private router: Router) { 
    this.email="";
    this.password="";
    this.name="";
  }

  ngOnInit(): void {
   
  }

  showSignInForm(){
    this.signInForm = true;
  }

  showSignUpForm(){
    this.signInForm = false;
  }

  signUp(){
    this.userService.signUp(this.email,this.password,this.name);
    this.clearFields();
  }

  signIn(){
    this.userService.signIn(this.email,this.password)
    this.clearFields();
  }

  clearFields(){
    this.email = "";
    this.password = "";
  }

}
