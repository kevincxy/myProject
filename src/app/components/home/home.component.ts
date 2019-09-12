import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title="我是一个首页fff";
  msg = "zhang";
  
  public message = "我是一个消息";
  //推荐方式
  public name:string = "凌风";
  private age:number = 12; 
  protected tip:string = "我是一个提示信息";
  public user:object={
    username:"林库",
    age:24
  }

  public content="<h2>我是一个字符</h2>";

  public arr= ['kavin','james','tom']
  //推荐写法
  public persons:Array<any> = ["慕容田雨","令人愉悦的忧伤","林夕"];
  public users:any[] = ["慕容雷","飞翔的企鹅"];
  constructor() { 
    console.log(this.message);
    this.message="我是一个被修改的消息";
  }
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
  ]
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
  ]
  
  ngOnInit() {
  }

}
