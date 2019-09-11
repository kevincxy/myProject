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
  public name:string = "凌风";
  private age:number = 12; 
  public tip:string = "我是一个提示信息";
  public user:object={
    username:"林库",
    age:24
  }
  constructor() { 
    console.log(this.message);
    this.message="我是一个被修改的消息";
  }
  
  ngOnInit() {
  }

}
