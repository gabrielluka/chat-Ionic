import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, Content } from "ionic-angular";
import firebase from "Firebase";
import { getArraysDB } from "../services/getDadosFirebase";

@Component({
  selector: "page-chat",
  templateUrl: "chat.html"
})
export class ChatPage {
  @ViewChild(Content) content: Content;

  data = {
    tipo: "",
    nome: "",
    message: ""
  };

  chats = [];
  idChat: string;
  nome: string;
  nomeDP: string;
  offStatus:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setValores();
  }

  setValores() {
    this.nome = this.navParams.get('nome');
    this.data.tipo = 'message';
    this.data.nome = this.nome;

    this.nomeDP = this.navParams.get('nomeDP');

    firebase.database().ref(`mba-chat`)
    .on('value', result => {
      this.chats = getArraysDB(result);
      setTimeout(() => {
        if(this.offStatus === false) {
          this.content.scrollToBottom(300);
        }
      }, 1000);
    })

    this.data.message = '';
  }


  enviarMensagem() {
    let novaMsg = firebase.database().ref(`mba-chat/`).push();
    novaMsg.set({
      tipo: this.data.tipo,
      usuario:this.data.nome,
      message: this.data.message,
      data: Date()
    });
    this.data.message = '';
  }

}
