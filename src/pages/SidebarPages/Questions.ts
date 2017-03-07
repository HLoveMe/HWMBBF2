/**
 * Created by zhuzihao on 2017/2/27.
 */
import {Component, OnInit} from '@angular/core';
import { DataServe } from "../../util/DataServe"
import { NavController } from "ionic-angular"

import { QuestionDetailPage } from "./Question_detail"
@Component({
  templateUrl:"./Question.html",
})

export class QuestionPage implements OnInit{
  public questions:any[]=[];
  constructor(private _serve:DataServe,private _nav:NavController){}
  ngOnInit(){
    this._serve.getQuestions().subscribe(data=>{
      this.questions=data;
      console.log(data)
    })
  }
  questionClick(one){
    this._nav.push(QuestionDetailPage,{par:one})
  }
}
