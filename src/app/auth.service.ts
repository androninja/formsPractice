import { Injectable } from '@angular/core';
import { User2 } from 'src/user2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(){
    localStorage.setItem('ACCESS_TOKEN','access_token');
  }
  public isLoggedIn(){
    localStorage.getItem('ACCESS_TOKEN') ;
  }
  public logout(userInfo:User2){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
