import {Component, ViewChild} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Platform, App, Menu,Nav} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {DataServe} from "../util/DataServe"


import {TabsPage} from "../pages/tabs/tabs"
import {WelcomePage} from "./welcome/welcome"
import {AdPage} from "./adPage/ad_page"
import {Ads}  from "./adPage/Modal"
import {IntroductionPage} from "../pages/SidebarPages/Introduction"
import {SpeakerPage} from "../pages/SidebarPages/speaker"
import {PartnerPage} from "../pages/SidebarPages/partner"
import {QuestionPage} from "../pages/SidebarPages/Questions"
import {MessagePage} from "../pages/SidebarPages/Message"
import {SettingPage} from "../pages/settings/setting"
import { AppSpecialPage } from "./AppSpecial"
import { TranslateService } from "ng2-translate/ng2-translate"

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  private sileData:any[];
  @ViewChild("ionMenu") ionMenu:Menu;
  @ViewChild("myC")myC:Nav;
  constructor(private platform:Platform,private _app:App,
              private storage:Storage, private dataS:DataServe,
              private tranServe:TranslateService
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    tranServe.setDefaultLang("zh");
    tranServe.use("zh");
  }
  showIconAndAdPage(){
    //设置应用APP Icon 图标
    this.rootPage=AppSpecialPage;
    //设置显示APP——icon时间
    setTimeout(()=>{
      //程序初始导航也
      this.storage.get("appInit").then(result=> {
        //显示首页
        if (result) {
          this.storage.get("showAd").then(show=> {
            if (show) {
              //显示广告页
              console.log("广告");
              this.rootPage = AdPage;
            } else {
              //显示首页
              console.log("主页");
              this.rootPage = TabsPage;
            }
          })
        } else {
          //显示欢迎页面
          console.log("导航");
          this.rootPage = WelcomePage;
        }
      })
    },1000);
  }
  ngOnInit() {
    this.platform.ready().then(()=> {
      //广告代码
      let ad = this.dataS.transAd();
      this.storage.set("showAd", ad);
      if (this.platform.is("mobile")) {
        //移动设备

      } else {
        //windows
      }
    })
    //侧栏数据
    this.storage.get("menu").then((result)=> {
      if (result) {
        this.sileData = result;
      } else {
        this.sileData = [
          {id: 0, icon: "paper-outline", title: "Introduction", badge: 0},
          {id: 1, icon: "people-outline", title: "Speakers", badge: 1},
          {id: 2, icon: "person-add-outline", title: "Partner", badge: 10},
          {id: 3, icon: "bookmarks-outline", title: "Questionnaire", badge: 7},
          {id: 4, icon: "text-outline", title: "Message", badge: 9},
          {id: 5, icon: "settings-outline", title: "Settings", badge: 2}
        ]
      }
    })

    let hash:string = window.location.hash;
    console.log(hash);
    if(!(hash.indexOf("#/")==0 && hash.length>2)){
      this.showIconAndAdPage();
    }
  }

  //侧栏点击
  slideClick(one) {
    one.badge = 0;
    //关闭slideMenu
    this.ionMenu.close();
    //导航到具体页面
    let page:any;
    if (one.id == 0) {
      page = IntroductionPage;
    } else if (one.id == 1) {
      page = SpeakerPage;
    } else if (one.id == 2) {
      page = PartnerPage;
    } else if (one.id == 3) {
      page = QuestionPage;
    } else if (one.id == 4) {
      page = MessagePage;
    } else if (one.id == 5) {
      page = SettingPage;
    }
    this._app.getRootNav().push(page)
  }

  //侧栏关闭
  menuClose() {
    //保存侧栏数据
    this.storage.set("menu", this.sileData);
  }

}
