/**
 * Created by zhuzihao on 2017/2/25.
 */

import {Component, OnInit} from '@angular/core';
import { HomeAd } from "../Models"
import {NavController, NavParams} from "ionic-angular/index";
 import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
@Component({
  templateUrl:"ad_target.html",
  styles:[`
	.iframe_content{
		width:100%;
		height:100%;
		border:none;
	}
  `]
})

export class AdPAgesDetail{
  public ad:HomeAd;
  public src:SafeResourceUrl;
  constructor(private navC:NavController,private pars:NavParams,private sanitizer:DomSanitizer){}
  ngOnInit(){
  	this.ad=this.pars.get("ad")
    console.log(this.ad);
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.ad.target);
  }
  ionViewDidLoad(){
    
  }
}
