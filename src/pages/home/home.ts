import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailsPage } from '../details/details'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any[];

  constructor(public navCtrl: NavController) {
    this.items = [
      {
        "name": "Leonardo",
        "last": "Kuffo",
        "edad": "22",
        "nacimiento": "19/20/1196",
        "telefono": "0992356893",
        "carrera": "Ciencias Computacionales",
        "src": "../../assets/imgs/img1.jpg"
      },
      {
        "name": "Galo",
        "last": "Castillo",
        "edad": "21",
        "nacimiento": "19/20/1995",
        "telefono": "0992359090",
        "carrera": "Ciencias Computacionales",
        "src": "../../assets/imgs/img2.jpg"
      },
      {
        "name": "Jorge",
        "last": "Cedeno",
        "edad": "23",
        "nacimiento": "19/12/1994",
        "telefono": "0872356893",
        "carrera": "Ciencias Computacionales",
        "src": "../../assets/imgs/img3.jpg"
      },
      {
        "name": "Fabricio",
        "last": "Layedra",
        "edad": "15",
        "nacimiento": "10/10/2001",
        "telefono": "0992356893",
        "carrera": "Ciencias Computacionales",
        "src": "../../assets/imgs/img4.jpg"
      },
      {
        "name": "Rodrigo",
        "last": "Castro",
        "edad": "25",
        "nacimiento": "12/10/1994",
        "telefono": "09929426393",
        "carrera": "Telematica",
        "src": "../../assets/imgs/img5.jpg"
      },
      {
        "name": "Piero",
        "last": "Ulloa",
        "edad": "19",
        "nacimiento": "12/10/1997",
        "telefono": "09928392393",
        "carrera": "Turismo",
        "src": "../../assets/imgs/img6.jpg"
      },
      {
        "name": "Xavier",
        "last": "Rivero",
        "edad": "22",
        "nacimiento": "8/10/1997",
        "telefono": "09928399134",
        "carrera": "Licenciatura en Redes",
        "src": "../../assets/imgs/img7.jpg"
      },
      {
        "name": "Marlon",
        "last": "Segarra",
        "edad": "21",
        "nacimiento": "12/10/1997",
        "telefono": "09928392393",
        "carrera": "Telematica",
        "src": "../../assets/imgs/img8.jpg"
      },
      {
        "name": "Pablo",
        "last": "Estrada",
        "edad": "20",
        "nacimiento": "12/10/1995",
        "telefono": "0998392393",
        "carrera": "Economia",
        "src": "../../assets/imgs/img9.jpg"
      },
      {
        "name": "Jonathan",
        "last": "Gorotiza",
        "edad": "21",
        "nacimiento": "12/10/1997",
        "telefono": "0998122393",
        "carrera": "Automatizacion",
        "src": "../../assets/imgs/img10.jpg"
      }
    ];
  }

  itemSelected(item){
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

}
