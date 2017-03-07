/**
 * Created by zhuzihao on 2017/2/27.
 */

import {Component, OnInit} from '@angular/core';
import { InfiniteScroll } from "ionic-angular"
import { DataServe } from "../../util/DataServe"

@Component({
  templateUrl:"./speaker.html",
})

export class SpeakerPage implements OnInit{
  public datas:any[]=[];
  constructor(private _serve:DataServe){}
  ngOnInit(){
    this._serve.getSpeakers().subscribe((data)=>{
      this.datas=data;
    })
  }
  loadMoreSpeakers(event:InfiniteScroll){
    this._serve.getSpeakers(this.datas.length,20).subscribe((data:any[])=>{
      this.datas =this.datas.concat(data);
      event.complete();
      if(data.length==0){
        event.enable(false);
      }
    })
  }
  onlyId(one){
    console.log(one)
    return one.id;
  }
}
