import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input("title") title:string;
@Input("check") check:any;
@Input("page") page:any;

public msg:string="我是子组件的msg";
//声明一个事件属性
@Output("outer") public outer:any = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }
  getTitle(){
    console.log(this.title);
  }
  run(){
   alert("我是header的run方法");
  }
  //执行父组件的方法
  executeParentMethod(){
    //执行父组件的check方法
    // this.check();
    this.page.check();
  
  }
  //给父组件发广播
  sendParent(){
    this.outer.emit("你是个大傻逼，哈哈哈~~~");
  }
}
