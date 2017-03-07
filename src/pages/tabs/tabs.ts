/**
 * Created by zhuzihao on 2017/2/25.
 */

import { Component } from '@angular/core';

import { HomePage } from "../home/home";
import { MeetPage } from "../meet/meet";
import { NewsPage } from "../news/news";
import { SettingPage } from "../settings/setting"

import { NavParams } from "ionic-angular"
import { TranslateService } from "ng2-translate/ng2-translate"

@Component({
  template:`
<ion-tabs selectedIndex="{{index}}">
  <ion-tab [root]="tab0" tabIcon="home" tabTitle="{{'TABS.HOME' | translate}}"></ion-tab>
  <ion-tab [root]="tab1" tabIcon="clipboard" tabTitle="{{'TABS.MEET' | translate}}"></ion-tab>
  <ion-tab [root]="tab2" tabIcon="ios-globe-outline" tabTitle="{{'TABS.NEWS' | translate}}"></ion-tab>
  <ion-tab [root]="tab3" tabIcon="ios-cog-outline" tabTitle="{{'TABS.SETTING' | translate}}"></ion-tab>
</ion-tabs>
`
})

export class TabsPage{
  tab0:any=HomePage;
  tab1:any=MeetPage;
  tab2:any=NewsPage;
  tab3:any=SettingPage;
  public index:number=1;
  constructor(private nav:NavParams,private transerve:TranslateService){}
  ngOnInit(){
    this.index= this.nav.get("id") || 0;
  }
}
