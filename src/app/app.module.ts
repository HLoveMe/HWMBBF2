import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {JsonpModule,HttpModule , Http} from "@angular/http";
import { FormsModule }   from '@angular/forms';

import { Storage } from '@ionic/storage';

import { WelcomePage } from "./welcome/welcome"
import { HomePage} from "../pages/home/home"
import { MeetPage} from "../pages/meet/meet"
import { NewsPage} from "../pages/news/news"
import { SettingPage} from "../pages/settings/setting"
import { TabsPage } from "../pages/tabs/tabs"
import { DataServe } from "../util/DataServe";
import { AdPAgesDetail } from "../pages/home/AdPages/AdPageDetail"
import { AdPage } from "./adPage/ad_page"
import { NavAdDetail } from "./adPage/ad_detail"
import { IntroductionPage } from "../pages/SidebarPages/Introduction"
import { SpeakerPage } from "../pages/SidebarPages/speaker"
import { PartnerPage } from "../pages/SidebarPages/partner"
import { QuestionPage } from "../pages/SidebarPages/Questions"
import { MessagePage } from "../pages/SidebarPages/Message"
import { QuestionDetailPage } from "../pages/SidebarPages/Question_detail"
import { AppSpecialPage } from "./AppSpecial"
import { MeetGroup } from "../pages/meet/group"

import { TranslateModule,TranslateLoader ,TranslateStaticLoader} from "ng2-translate/ng2-translate"

let pages=[
  MyApp,AppSpecialPage,WelcomePage,NavAdDetail,AdPage,
  TabsPage,HomePage,MeetPage,NewsPage,SettingPage,
  AdPAgesDetail,IntroductionPage,PartnerPage,QuestionPage,MessagePage,SpeakerPage,
  QuestionDetailPage
];


@NgModule({
  declarations: pages.concat(MeetGroup),
  imports: [
    TranslateModule.forRoot({
      provide:TranslateLoader,
      useFactory:(http:Http)=>{return new TranslateStaticLoader(http,"assets/i18n",".json")},
      deps:[Http]
    })
    ,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true
    },{
      links:[
        { component:TabsPage,name:"tabs" ,segment:"tabs/:id"},
        { component: IntroductionPage, name: 'Home', segment: 'home',defaultHistory:[TabsPage] }
      ]
    }),JsonpModule,HttpModule,FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents:pages,
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},DataServe,Storage]
})
export class AppModule {}
