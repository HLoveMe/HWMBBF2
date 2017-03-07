export class Ads{
   id:number;
  /**
   * 展示的广告类型
   * 1:imgage   png gif
   * 2:video
   * @type {number}
   */
   type:number;
  /**
   * 该广告应该展示的时间 默认为5
   * @type {number}
   */
   time:number;
  /**
   * 资源路径  广告资源都是在下载之后才会显示
   * @type {string}
   */
   path:string;
  /**
   * 调整详情
   * */
   target:string;
  /**
   * 显示在底部的说明文字
   * @type {string}
   */
   title:string;

  constructor(ad:{id:number,type:number,path:string,target:string,time?:number,title?:string}){
    this.id=ad.id;
    this.type=ad.type;
    this.path=ad.path;
    this.target=ad.target;
    this.time=ad.time || 5;
    this.title=ad.title || "";
  }
}
