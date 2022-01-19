import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Observable<firebase.User | null>;


  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      userInfo => {
        if(userInfo){
          this.setIdToken(userInfo.getIdToken());
        }
      }
    )

  }

  setIdToken(idToken: Promise<string>){
    idToken.then(token => {
      localStorage.setItem('userIdToken',token);
    })
    .catch(err => {
      console.log(err);
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
      localStorage.clear();
      console.log("Logged out !");
    })
      .catch(err => {
        console.log("Something went wrong: ", err.message);
      })
  }

  getHeaders() {
    let headers = new HttpHeaders();
    let idToken = localStorage.getItem('userIdToken');
    // return idToken ? headers.append('idToken', idToken) : headers;
    return idToken ? headers.append('Authorization', `Bearer ${idToken}`) : headers;
  }

}
