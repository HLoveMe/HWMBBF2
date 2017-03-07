/**
 * Created by zhuzihao on 2017/3/1.
 */

import {Component, OnInit} from '@angular/core';
import { DataServe } from "../../util/DataServe";
import { NavParams ,NavController,ViewController,LoadingController,AlertController,NavControllerBase,Navbar} from "ionic-angular"


@Component({
  templateUrl:'./Question_detail.html',
  styles:[`
  .top_image{
    height:35%;
    background-image: url("http://pic.58pic.com/58pic/11/79/85/13t58PICsap.jpg");
  }
  .list_content ion-col,ion-row{
    padding: 0px;
    margin: 0px;
    height:100%
  }
  .list_content ion-item-divider{
    white-space:normal;
  }
  .question_title{
    padding: 5px 10px;
  }
  .left_icon{
    margin: 10px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
  }


  /**多选*/
  .list_content .list_item_ckecks_answer ion-col:nth-of-type(2){
    padding:5px;
    padding-left: 0px;
  }
  /**解答题*/
  .sketch_content{
    margin: 10px;
    border: 1px solid #aaaaaa;
    min-height: 60px;
    max-height:100px;
    padding:5px;
    border-radius:5px;
    overflow: scroll;
    -webkit-user-select: text;
  }
  /**保单 */
  .form_content{
    padding: 20px;
    margin: 10px;
    border: 1px solid #aaaaaa;
    border-radius: 8px;
  }
  .email_content , .name_content{
    height:80px;
  }
  /**输入框 */
  input{
    width: 100%;
    border: 1px solid #aaaaaa;
    border-radius: 4px;
    padding: 10px;
    font-size: 1.2em;
    padding-left: 10px;
  }
  /**输入有效 */
  .ng-valid[required], .ng-valid.required {
    border-left: 5px solid green;
  }
  /**输入无效 */
  .ng-invalid:not(form){
    border-left:5px solid #a94442;
  }
  .form_content .err_msg{
    padding: 5px;
    color: red;
    font-size: 1.2em;
  }
  .submit_content{
    text-align: center;
  }
`]
})

export  class QuestionDetailPage{
  public questionT:any;
  public question:any;
  public user:any={name: "", email: ""};
  public canBack:boolean=false;
  constructor(private _serve:DataServe,private _nav:NavController,private vc:ViewController,private _pars:NavParams,private loadC:LoadingController,private alertC:AlertController){}
  ionViewDidLoad(){
    let one = this._pars.get("par");
    this.questionT=one;
    this._serve.getOneQuestion(one.id).then((data)=>{
      console.log(data)
      this.question=data;
    },()=>{
      console.log("ERR")
    })
  }
  // 多选选择判断 是否选中
  checksSelect(one,i){
    if(!one.select){return false;}
    return one.select.indexOf(i) != -1;
  }
  //
  sketchEvent(text,question){
    question.content=text;
  }
  answerClick(one,type,index){
    if(type==1){
      one.select=index;
    }else if(type==2){
      //多选
      var select = one.select || [];
      if(select.indexOf(index)!==-1){
        //有该index
        let newSele=[];
        for(var j=0;j<select.length;j++){
          let ai = select[j];
          if(ai!==index){
            newSele.push(parseInt(ai))
          }
        }
        select=newSele;
      }else{
        select.push(parseInt(index));
      }
      one.select=select;
    }
  }
  //提交表单
  formSubmit(){
    console.log(this.user);
    
    console.log("提交")
    let result = {};
    //单选
    for(var i in this.question.radio){
        let one = this.question.radio[i];
        let res = one.select ? one.select : -1 ;
        result[one.id.toString()]=res;
    }
    //多选
    for(var i in this.question.checks){
        let one = this.question.checks[i];
        let res = one.select ? one.select : [];
        result[one.id.toString()]=res;
    }
    //解答题
    for(var i in this.question.sketch){
      let one = this.question.sketch[i];
      result[one.id.toString()]=one.content;
    }
    console.log(result)
    let load = this.loadC.create({
      duration:2000,
      content:"假装上传..."
    })
    load.present()
    load.onDidDismiss(()=>{
      this.canBack=true;
      this._nav.pop()
    })
  }
  //是否可以返回
  ionViewCanLeave():boolean{
    if(this.canBack){return true;}
    let alert = this.alertC.create({
      title:"尚未提交,是否放弃",
      buttons:[{
        text:"Sure",
        handler:()=>{
          //确认退出
          this.canBack=true;
          this._nav.pop();
        }
      },{
        text:"Cancel"
      }],
      enableBackdropDismiss:false
    })
    alert.present();
    return false;
  }
}
