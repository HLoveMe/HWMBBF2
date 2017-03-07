/**
 * Created by zhuzihao on 2017/2/27.
 */
import {Component, OnInit} from '@angular/core';
import { DataServe } from "../../util/DataServe"
import { InfiniteScroll } from "ionic-angular"

@Component({
  templateUrl:"./partner.html",
})

export class PartnerPage implements OnInit{
  public partners:any[]=[];
  constructor(private _serve:DataServe){}
  ngOnInit(){
    this._serve.getpartner().subscribe((data:any[])=>{
      // this.partners=data;
      let one= data.slice(0,8);
      let two = data.slice(8,17);
      let second =data.slice(17,20);
      this.partners=[{name:"A",data:one},{name:"B",data:two},{name:"C", data:second}];
      console.log(this.partners)
    })
  }
}
