import { Component } from '@angular/core';


@Component({
    template:`
    <ion-list class="form_content">
        <form #thisF="ngForm" (ngSubmit)="formSubmit()">
            <ion-item class="one_item">
              <ion-label floating>名字:</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item class="one_item">
              <ion-label class="age_input" fixed>年龄:</ion-label>
              <ion-input></ion-input>
            </ion-item>
            <ion-item class="one_item" no-lines>
               <ion-label>性别:</ion-label>
               <ion-select [(ngModel)]="user.sex" name="sex" >
                 <ion-option value="男">男</ion-option>
                 <ion-option value="女">女</ion-option>
               </ion-select>
            </ion-item>
        </form>
    </ion-list>
    `,
    styles:[`
        
    `],
    selector:"meet-group"
})
export class MeetGroup{
    public user:any={name:"ZZH",age:18,sex:"女"}
    public aa:string=""
    constructor(){
        console.log("创建")

    }
}
