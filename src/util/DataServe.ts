/**
 * Created by zhuzihao on 2017/2/25.
 */
import { Injectable } from '@angular/core';
import {Http,Jsonp,Response} from "@angular/http";

import { Observable } from 'rxjs/Observable';
import { Subject }  from "rxjs/Subject"
import { HomeAd }  from "../pages/home/Models"
import { Ads } from "../app/adPage/Modal"
import 'rxjs/add/operator/toPromise';



declare var $;

@Injectable()
export class DataServe{
  constructor(private http:Http,private jsonp: Jsonp){}
  //得到App广告
  transAd():Ads{
    return  new Ads({
      id:1,
      type:1,
      path:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488198635612&di=63bfd7578beb0017094055eb8aa27c45&imgtype=0&src=http%3A%2F%2Fimg16.3lian.com%2Fgif2016%2Fq16%2F13%2F81.jpg",
      target:"http://www.baidu.com",
      time:5,
      title:"广告页"
    })
  };
  //得到首页广告数据
  getHomeSliderData():Promise<HomeAd[]> {
    let data=[
      new HomeAd({id:0,imgSrc:"http://pic.58pic.com/58pic/11/79/85/13t58PICsap.jpg",target:"http://www.feng.com/",title:""}),
      new HomeAd({id:1,imgSrc:"http://pic15.nipic.com/20110617/2707401_222720447000_2.jpg",target:"https://yanxiaodi.gitbooks.io/ionic2-guide/content/components/action-sheets.html",title:""}),
      new HomeAd({id:2,imgSrc:"http://e.hiphotos.baidu.com/lvpics/h=800/sign=678b8cabccfc1e17e2bf81317a91f67c/279759ee3d6d55fb96d94d9b6e224f4a20a4dd6b.jpg",target:"http://origin.angular.live/docs/ts/latest/",title:""}),
      new HomeAd({id:3,imgSrc:"http://pic.58pic.com/58pic/13/71/30/15r58PIChmX_1024.jpg",target:"http://cordova.apache.org/docs/en/4.0.0/config_ref/index.html",title:""}),
      new HomeAd({id:4,imgSrc:"http://www.bz55.com/uploads/allimg/150604/139-150604162F5.jpg",target:"http://www.cocoachina.com/ios/",title:""})
    ];
    return new Promise((reslove,reject)=>{
      reslove(data);
    })
  };
  //得到大会介绍
  getMeetIntroduce():Observable<any>{
    return Observable.create((sub:Subject<any>)=>{
      this.http.get("./json/introlduction.json").subscribe((res:Response)=>{
        if(res.ok){
          sub.next(res.json())
          sub.complete();
        }else{
          sub.error("错误");
        }
      })
    })
  }
  //得到所有演讲嘉宾
  getSpeakers(start:number=0,length:number=20):Observable<any>{
    return Observable.create((sub:Subject<any>)=>{
        this.http.get("./json/speakers.json").toPromise().then((data)=>{
          setTimeout(()=>{
            let datas = data.json();
            sub.next(datas.slice(start,start+length));
            sub.complete();
          },500)
        },()=>{
          sub.error("错误");
        })
    })
  }
  //得到合作伙伴
  getpartner():Observable<any>{
    return Observable.create((sub:Subject<any>)=>{
      ///Users/zhuzihao/Desktop/HTML/ionic2/HMBBF/www/json
      this.http.get("./json/partners.json").subscribe((res:Response)=>{
        let datas = res.json();
        sub.next(datas);
        sub.complete();
      })
    })
  }
  //得到所有问卷
  getQuestions():Observable<any>{
    return Observable.create((sub:Subject<any>)=>{
      this.http.get("./json/questions.json").subscribe((res:Response)=>{
        sub.next(res.json());
        sub.complete();
      })
    })
  }
  //得到问卷
  getOneQuestion(id:number):Promise<any>{
    return new Promise((resolve, reject)=>{
      this.http.get("./json/questions_detail.json").subscribe((res:Response)=>{
        if(res.ok){
          let datas = res.json();
          for(var index in datas){
            let one = datas[index];
            if(one.id==id){
              resolve(one);
              break;
            }
          }
        }else{
          reject("失败")
        }
      })
    })
  }
}
