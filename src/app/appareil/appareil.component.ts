import { Component, OnInit,Input } from '@angular/core';
import { AppareilService,Appareil } from '../services/appareil.service'

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input()  appareilName: string ;
  @Input()  appareilStatus: boolean ;
  @Input()  index: number ;
  @Input()  isAuth;

   constructor(private appareilService: AppareilService ) {

    }

  ngOnInit() {

  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === true) {
      return 'green';
    } else if(this.appareilStatus === false) {
      return 'red';
    }
}
    switchOne(){
      if( this.appareilStatus  == true) {
        this.appareilService.switchOffOne(this.index);
      } else if(this.appareilStatus === false) {
        this.appareilService.switchOnOne(this.index);
      }
    }


}
