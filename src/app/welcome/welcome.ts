/**
 * Created by zhuzihao on 2017/2/27.
 */

import { Component } from '@angular/core';

import { App } from "ionic-angular"
import { TabsPage } from "../../pages/tabs/tabs"

import { Storage } from '@ionic/storage';

@Component({
  templateUrl:"./welcome.html",
})
export class WelcomePage{
  constructor(private _app:App,private storage:Storage){}
    public sliders:any[]=[
      {
        title: "Welcome to the Docs!",
        description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
        image: "http://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-1.png",
      },
      {
        title: "What is Ionic?",
        description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
        image: "http://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-2.png",
      },
      {
        title: "What is Ionic Cloud?",
        description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
        image: "http://ionicframework.com/dist/preview-app/www/assets/img/ica-slidebox-img-3.png",
      }
    ];
    goApp(){
      let nav = this._app.getRootNav();
      nav.setRoot(TabsPage);
      this.storage.set("appInit",true);
    }
}
