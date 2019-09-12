import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public path = "https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super";
  public flag:boolean = false;
  constructor() { }
  public cars:any[] = [
   
    {
      cate:"宝马",
      list:[{
        name:"宝马X3",
        price:"20w"
      },
      {
        name:"宝马X5",
        price:"30w"
      },
      {
        name:"宝马X7",
        price:"40w"
      },
      ]
    }, {
      cate:"奥迪",
      list:[{
        name:"奥迪Q3",
        price:"20w"
      },
      {
        name:"奥迪X5",
        price:"30w"
      },
      {
        name:"奥迪X7",
        price:"40w"
      },
      ]
    }
  ];
  public news:object[] = [
    {
      name:"去泰国要注意的事项",
      size:287
    },
    {
      name:"立陶宛必去的10大著名景点",
      size:893
    },
    {
      name:"日本有哪些好玩的地方",
      size:937
    }
  ];

  public now:any =new Date();
  public attr:string = 'red';
  public payStatus:number = 3;/*1.未支付，2.已支付,3.已发货 */ 
  public name:string ='kevin';
  public names= ['kevin','james','tom'];
  public title:string = '我是一个title';
  public keywords:string = '这是一个默认值';

  ngOnInit() {
  }
  run(){
    alert("执行方法！");
  }
  getData(){
    alert(this.title);
  }
  setData(){
    this.title="这是改变后的title";
  }
  getEvent(event){
    var dom:any = event.target;
    dom.style.color='red';
  }
  exchenge(){
    this.keywords="这是改变后的值";  
  }
  get(){
    console.log(this.keywords);
  }
  keyUp(e){
    console.log(e.keyCode);
    if(e.keyCode==13){
      console.log("你按了回车!");
    }else{
      console.log(e.target.value);
    }
  }
}
