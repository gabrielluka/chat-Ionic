import { ChatPage } from "./../chat/chat";
import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  nome: String;

  constructor(public navCtrl: NavController, private alert: AlertController) {}

  insertNome() {

    if (this.nome.length > 0) {
      this.navCtrl.push(ChatPage, { nome: this.nome });
    } else {
      let alert = this.alert.create({
        title: 'Ops!',
        message: 'Você esqueceu de colocar o seu nome',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
