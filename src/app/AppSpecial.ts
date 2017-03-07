/**
 * Created by zhuzihao on 2017/3/2.
 */
import {Component, ViewChild} from '@angular/core';
import { NavParams } from "ionic-angular"

@Component({
  template:`
<ion-content>
  <ion-row style="height: 100%;width: 100%;background-color: #FFFFFF;display: table">
      <div style="display: table-cell;vertical-align: middle;text-align: center">
        <img src="./assets/images/icon.jpeg" style="width:80px;height: 80px">
      </div>
</ion-row>
</ion-content>
`
})
export  class  AppSpecialPage{
  constructor(private nav:NavParams){
    console.log(nav)
  }
}
