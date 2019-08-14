import { Injectable } from '@angular/core';

interface AppareilType {
  name: string;
  status: boolean;
}

export class Appareil{
    private name: string;
    private status: boolean;

    constructor(appareil: AppareilType){
      this.name = appareil.name;
      this.status = appareil.status;
    }

    get appareilName(){
      return this.name;
    }

    set appareilName(n:string){
      this.name = n;
    }

    get appareilStatus(){
      return this.status;
    }

    setAppareilStatus(s){
      this.status = s;
    }
}

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  private appareils: Appareil[];
  
  constructor() {
      this.appareils = [
        new Appareil({
          name: 'Télévision',
          status: false
        }),
        new Appareil({
          name: 'Radio',
          status: false
        }),
        new Appareil({
          name: 'Ordinateur',
          status: false
        })
      ];
   }

   appareilList() :any {
     return this.appareils;
   }

   engine(state:number){
     if(state === 1){
        for (let i = 0; i < this.appareils.length; i++) {
          this.appareils[i].setAppareilStatus(true);
        }
     }else{
        for (let i = 0; i < this.appareils.length; i++) {
          this.appareils[i].setAppareilStatus(false);
        }
     }
   }

   switchOnOne(i: number) {
    this.appareils[i].setAppareilStatus(true);
    }

    switchOffOne(i: number) {
        this.appareils[i].setAppareilStatus(false)
    }
}
