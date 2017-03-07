
import { Component ,OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StatusBar } from "ionic-native"
import { App } from "ionic-angular"
import { TabsPage} from "../../pages/tabs/tabs"
import { NavAdDetail } from "./ad_detail"

import { Ads } from "./Modal"

@Component({
	templateUrl:"./ad_page.html"
})

export class AdPage implements OnInit{
	public time:number=5;
	public inter:any;
	public ad:Ads;
	constructor(private _app:App,private _storage:Storage){}
	ngOnInit(){
	  StatusBar.hide()
  }
	ionViewDidLoad(){
	  this._storage.get("showAd").then((ad)=>{
      console.log(ad);
	    this.ad=ad;
      // this.time=ad.time;
      this.time=1;
      this.inter = setInterval(()=>{
        this.time -=1;
        if(this.time==0){
          this.getTas();
        }
      },1000);
    });
	}
  ionViewDidLeave(){
    StatusBar.show();
    StatusBar.styleDefault();
  }
	//显示tabs
	getTas(event?:MouseEvent):Promise<any>{
    if(event){event.stopPropagation();}
		if(this.inter){
			clearInterval(this.inter);
			this.inter=null;
		}
		return this._app.getRootNav().setRoot(TabsPage);
	}
  //调整广告详细
  goDetail(){
    this.getTas().then(()=>{
      this._app.getActiveNav().push(NavAdDetail,{par:this.ad});
    })
  }
}
