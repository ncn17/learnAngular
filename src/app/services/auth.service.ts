import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth: boolean;
  constructor() { }

  get AuthState() : any{
    return this.isAuth;
  }

  setAuthState(s:boolean) : void{
    this.isAuth =s;
  }

}
