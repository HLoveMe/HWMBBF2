import {Component, OnInit,ViewChild} from '@angular/core';

import { NavController ,App,Platform,Slides} from 'ionic-angular';
import { HomeAd } from "./Models"
import { Storage } from '@ionic/storage';
import {DataServe} from "../../util/DataServe";

import { AdPAgesDetail } from "./AdPages/AdPageDetail"
import "../../Observable_Subject"
import { TranslateService } from "ng2-translate/ng2-translate"

@Component({
  templateUrl: 'home.html'
})

export class HomePage implements OnInit{
  public ads:HomeAd[]=[];
  @ViewChild("sliders")sliders:Slides;
  public indexs:number[]=[];
  constructor(public navCtrl: NavController,
              private _app:App,private plat:Platform,
              private server:DataServe,private _stor:Storage,
              private tranServe:TranslateService
  ) {}
  upAdSlides(datas){
     this.ads=datas;
      console.log(this.ads);

      this.indexs.push(this.ads.length-1)
      for(var i=0;i<this.ads.length;i++){
        this.indexs.push(i);
      }
      this.indexs.push(0);

      this.sliders.update()
      setTimeout(()=>{
        this.sliders.autoplay=2000;
        this.sliders.startAutoplay()
      },2000)
  }
  ngOnInit(){
    //初始化首页 得到并保存广告数据
    this.server.getHomeSliderData().then((data)=>{
      this.upAdSlides(data);
    })
    //
    this.tranServe.onLangChange.subscribe((a)=>{
      console.log(a)
      console.log("语言改变")
    })
  }
  switchLan(){
    var lang = this.tranServe.currentLang;
    if(lang=="en"){lang="zh";}else{lang="en";}
    this.tranServe.use(lang)
  }
  //广告停止自动播放
  adsStop(){
    console.log("停止")
    setTimeout(()=>{
        this.sliders.startAutoplay();
    },2000)
  }
  //广告点击
  slideTap(){
    if(this.ads.length>=1){
      let index = this.sliders.getActiveIndex();
      let one = this.indexs[index];
      this.navCtrl.push(AdPAgesDetail,{ad:this.ads[one]})
    }
  }
  selectModule(index){

  }
 }
