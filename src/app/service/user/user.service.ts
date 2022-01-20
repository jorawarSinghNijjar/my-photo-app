import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/model/User';


@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {

  user: Observable<firebase.User | null>;
  


  constructor(private firebaseAuth: AngularFireAuth, private router: Router, private http: HttpClient) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      userInfo => {
        if (userInfo) {
          this.setIdToken(userInfo.getIdToken());
        }
      }
    )

  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    console.log('AuthWithRedirectGuard.canActivate');
    const authenticated = await this.isAuthenticated();
    console.log('canActivate await value: ' + authenticated);
    
    if (!authenticated) {
      this.router.navigate(['login']);
    }
    return authenticated;

  }
  
  
  async isAuthenticated(): Promise<boolean>{
    if(this.user){
      console.log("isAuthenticated")
      return true;
    }
    else{
      console.log("unAuthorized")
      return false;
    }
  }

  setIdToken(idToken: Promise<string>) {
    idToken.then(token => {
      localStorage.setItem('userIdToken', token);
    })
      .catch(err => {
        console.log(err);
      })

  }

  register(email: string, name: string){
    const user = new User(email,name);
    user.profilePhotoUrl = "https://cdn-icons-png.flaticon.com/512/147/147140.png";
    this.http.post(`${environment.API_URL}/users`, user)
    .subscribe(res => {
      this.router.navigate(['albums/recent']);
      console.log("Success registration");
    });
  }

  signIn(email: string, password: string) {
     this.firebaseAuth.signInWithEmailAndPassword(email, password).then(userCredential => {
       if(userCredential !== null){
        console.log("Success SignIn");
        this.router.navigate(['albums/recent']);
       }
    })
      .catch(err => {
        console.log("Something went wrong: ", err.message);
      })
  }

  signUp(email: string, password: string, name: string) {
    this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(userCredential => {
      this.register(email, name);
      console.log("Success Sign Up");
    })
      .catch(err => {
        console.log("Something went wrong: ", err.message);
      })
  }

  signOut() {
    this.firebaseAuth.signOut().then(res => {
      localStorage.clear();
      console.log("Logged out !");
      this.router.navigate(['login']);
    })
      .catch(err => {
        console.log("Something went wrong: ", err.message);
      })
  }

  getHeaders() {
    let headers = new HttpHeaders();
    let idToken = localStorage.getItem('userIdToken');
    return idToken ? headers.append('Authorization', `Bearer ${idToken}`) : headers;
  }

}
