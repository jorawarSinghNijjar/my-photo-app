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

  constructor(private userService: UserService, private router: Router) { 
    this.email="";
    this.password="";
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
    this.userService.signUp(this.email,this.password);
    this.clearFields();
  }

  signIn(){
    this.userService.signIn(this.email,this.password);
    this.clearFields();
    this.router.navigate(['/albums/me']);
  }

  clearFields(){
    this.email = "";
    this.password = "";
  }

}
