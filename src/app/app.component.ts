import { Component, OnInit } from '@angular/core';
import { AppareilService,Appareil } from './services/appareil.service'
import { AuthService } from './services/auth.service'


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private appareilList: Appareil[];
  private isAuth: boolean;

  constructor(private appareilService: AppareilService,private auth: AuthService ) {
     setTimeout(
        () => {
          this.isAuth = true;
          this.auth.setAuthState(true);
        }, 4000
      );
  }

  ngOnInit(){
    this.appareilList = this.appareilService.appareilList();
    this.isAuth = this.auth.AuthState();
  }

  appareilData():any{
    return this.appareilList;
  }

  getAuthState(){
    return this.isAuth;
  }

  switchAllOn(){
    this.appareilService.engine(1);
  }

  switchAllOff(){
    this.appareilService.engine(0);
  }

}


