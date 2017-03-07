/**
 * Created by zhuzihao on 2017/2/25.
 */
export class HomeAd{
  public id:number;
  public imgSrc:string;
  public target:string;
  public title:string;
  constructor(ops:{
    id?:number,
    imgSrc?:string,
    target?:string,
    title?:string
  }={}){
    this.id=ops.id||0;
    this.imgSrc=ops.imgSrc||"";
    this.target=ops.target||"";
    this.title=ops.title||"";
  }
}
