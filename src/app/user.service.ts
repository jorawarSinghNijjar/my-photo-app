import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Observable<firebase.User | null>;


  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(user => {
      if(user){
        console.log("storing",user)
        localStorage.setItem('user', JSON.stringify(user));
      }
      else{
        localStorage.removeItem('user');
      }
    })

  }

  signIn(email: string, password: string) {
    this.firebaseAuth.signInWithEmailAndPassword(email, password).then(userCredential => {
      console.log("Success", userCredential);
      
    })
      .catch(err => {
        console.log("Something went wrong: ", err.message);
      })

  }

  signUp(email: string, password: string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(userCredential => {
      console.log("Success", userCredential);
    })
      .catch(err => {
        console.log("Something went wrong: ", err.message);
      })
  }

  signOut() {
    this.firebaseAuth.signOut().then(res => {
      console.log("Logged out !");
    })
      .catch(err => {
        console.log("Something went wrong: ", err.message);
      })
  }

  isLoggedIn(): boolean{

    const userString = localStorage.getItem('user');
    const user = userString != null ? JSON.parse(userString) : null;
    return user !== null ? true : false;
  }

}
