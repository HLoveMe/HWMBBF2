/**
 * Created by zhuzihao on 2017/2/27.
 */

import { Component } from '@angular/core';
import { NavParams} from 'ionic-angular';
import { DataServe } from "../../util/DataServe"

@Component({
  templateUrl:'./Introduction.html'
})

export class IntroductionPage{
  public content:any;
  constructor(private nav:NavParams,private _serve:DataServe){}
  ngOnInit(){
    console.log("introduction");
    this._serve.getMeetIntroduce().subscribe(data=>{
      this.content=data;
    })
  }
}
