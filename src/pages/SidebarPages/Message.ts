/**
 * Created by zhuzihao on 2017/2/27.
 */

import {Component, OnInit} from '@angular/core';
import { NavParams} from 'ionic-angular';
import { DataServe } from "../../util/DataServe"

@Component({
  templateUrl:'./Message.html'
})

export class MessagePage implements OnInit{
  constructor(private nav:NavParams,private _server:DataServe){}
  ngOnInit(){

  }

}
