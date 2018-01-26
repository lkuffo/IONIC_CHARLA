import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/* Importamos el provider */

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  /* Esto es lo que necesitamos para poder utilizar el provider */
  location: {
    city: string,
    state: string
  }

  /* Inyectamos el provider */
  constructor(public navCtrl: NavController) {

  }

  /* Existen metodos predeterminados en IONIC para ejecutar metodos
  antes, durante o despues de entrar a una vista
   */
  ionViewWillEnter(){
    // Llenamos location antes de que se cargue la vista
    this.location = {
      city: 'Miami',
      state: 'FL'
    }
    //

  }

}
