/**
 * Created by zhuzihao on 2017/2/27.
 */


import { Component } from '@angular/core';
import { NavParams } from "ionic-angular"
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Ads } from "./Modal"
@Component({
  template:`
<ion-header>
  <ion-navbar>
  </ion-navbar>
</ion-header>
<ion-content>
  <iframe class="frame_content" no-border [src]="targetUrl">
  
  </iframe>
</ion-content>
`,
  styles:[
    `
  .frame_content{
    width: 100%;
    height: 100%;
  }
`
  ]
})

export class  NavAdDetail{
  targetUrl:SafeResourceUrl;
  constructor(private nav:NavParams,private sanitizer:DomSanitizer){}
  ionViewDidLoad(){
    let ad:Ads = this.nav.get("par");
    console.log(ad)

    this.targetUrl=this.sanitizer.bypassSecurityTrustResourceUrl(ad.target);
  }
}
