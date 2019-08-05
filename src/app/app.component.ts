import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareils = [
    {
      name: 'Machine à laver',
      status: 'allumé'
    },
    {
      name: 'Frigo',
      status: 'éteint'
    },
    {
      name: 'Ordinateur',
      status: 'allumé'
    }
  ];

  constructor() {
      setTimeout(() => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('Tout les appareils sont allumées.');
  }

}


